import { Serial } from '@dogu-private/types';
import { delay, errorify, loop, PrefixLogger, Printable } from '@dogu-tech/common';
import { ChildProcess, DirectoryRotation, findEndswith, HostPaths, killChildProcess, redirectFileToStream } from '@dogu-tech/node';
import child_process, { exec, execFile } from 'child_process';
import { randomUUID } from 'crypto';
import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import { logger } from '../../../logger/logger.instance';

const execAsync = promisify(exec);
const execFileAsync = promisify(execFile);

const directoryRotation = new DirectoryRotation('xctest', 1440);
const XcodeBuild = 'xcodebuild';
const ExecTimeout = 5 * 1000;
let _xcodeBuildSymlinkPath: string | null = null;

export async function getXcodeBuildPath(): Promise<string> {
  const isXcodeBuildValid = async (symlinkPath: string): Promise<boolean> => {
    try {
      const { stdout } = await execFileAsync(symlinkPath, ['-version'], { timeout: ExecTimeout });
      if (stdout.includes('Xcode')) {
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  };

  if (_xcodeBuildSymlinkPath) {
    return _xcodeBuildSymlinkPath;
  }
  const symlinkPath = HostPaths.external.xcodebuildSymlinkPath();
  const stat = await fs.promises.stat(symlinkPath).catch(() => null);
  if (stat && stat.isSymbolicLink() && (await isXcodeBuildValid(symlinkPath))) {
    _xcodeBuildSymlinkPath = symlinkPath;
    return _xcodeBuildSymlinkPath;
  }
  try {
    await fs.promises.mkdir(path.dirname(symlinkPath), { recursive: true });
    await fs.promises.rm(symlinkPath, { recursive: true, force: true });
    const { stdout } = await execAsync('xcode-select -p', { timeout: ExecTimeout });
    const xcodePath = stdout.trim();
    const xcodebuildPath = path.resolve(xcodePath, 'usr/bin/xcodebuild');
    if (await isXcodeBuildValid(xcodebuildPath)) {
      await fs.promises.symlink(xcodebuildPath, symlinkPath);
      _xcodeBuildSymlinkPath = symlinkPath;
      return _xcodeBuildSymlinkPath;
    } else {
      throw new Error('xcodebuild is not valid');
    }
  } catch (error) {
    _xcodeBuildSymlinkPath = XcodeBuild;
    logger.error('failed to create xcodebuild symlink. return default xcodebuild path', { error: errorify(error) });
    return _xcodeBuildSymlinkPath;
  }
}

function getXcodeBuildPathSync(): string {
  if (!_xcodeBuildSymlinkPath) {
    throw new Error('xcodebuild symlink path is not initialized');
  }
  return _xcodeBuildSymlinkPath;
}

export async function validateXcodeBuild(): Promise<void> {
  try {
    const xcodebuildPath = await getXcodeBuildPath();
    await ChildProcess.exec(`${xcodebuildPath} -version`, {}, logger);
  } catch (error) {
    const message = `
1. install xcode
2. execute change xcode path command: sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
3. show xcode path command: sudo xcode-select -p
4. validate xcode command: xcodebuild -version`;
    throw new Error(`xcode not found. ${message}`);
  }
}

export class XCTestRunContext {
  public isAlive = true;
  private logs = '';
  constructor(private readonly tempDirPath: string, public readonly proc: child_process.ChildProcess, private readonly logger: Printable) {
    const redirectContext = { stop: false };
    proc.on('close', (code, signal) => {
      this.isAlive = false;
      redirectContext.stop = true;
    });
    this.redirectOutput(tempDirPath, proc, redirectContext).catch((err) => {
      this.logger.error(err);
    });
  }
  public kill(): void {
    killChildProcess(this.proc).catch((error) => {
      this.logger.error('XCTestRunContext killChildProcess', { error });
    });
  }

  private async redirectOutput(tempDirPath: string, proc: child_process.ChildProcess, redirectContext: { stop: boolean }): Promise<void> {
    let fileName = '';
    for await (const _ of loop(1000, 10)) {
      const files = await findEndswith(tempDirPath, 'StandardOutputAndStandardError.txt').catch(() => []);
      if (0 < files.length) {
        fileName = files[0];
        break;
      }
      await delay(1000);
    }
    if (fileName === '') {
      this.logger.error(`StandardOutputAndStandardError.txt not found in ${tempDirPath}, redirect failed. file will not printed to console`);
      return;
    }
    const outputPath = path.resolve(tempDirPath, fileName);
    this.logger.info(`StandardOutputAndStandardError.txt path: ${outputPath}`);
    redirectFileToStream(outputPath, redirectContext, {
      write: (str: string): boolean => {
        this.logger.verbose?.(str);
        this.logs += str;
        this.checkLog();
        if (!this.isAlive) {
          killChildProcess(proc).catch((error) => {
            this.logger.error('XCTestRunContext killChildProcess on write', { error });
          });
        }
        return true;
      },
    }).catch((err) => {
      killChildProcess(proc).catch((error) => {
        this.logger.error('XCTestRunContext killChildProcess on redirectFileToStream', { error });
      });
      this.logger.error(`redirectFileToStream failed outputPath: ${outputPath}, err: ${err}`);
      this.isAlive = false;
      redirectContext.stop = true;
    });
  }

  private checkLog(): void {
    if (this.logs.includes('TEST EXECUTE FAILED') || this.logs.includes('BUILD INTERRUPTED')) {
      this.isAlive = false;
    }
    if (this.logs.length > 10000) {
      this.logs = this.logs.slice(1000);
    }
  }
}

export async function removeOldWaves(): Promise<void> {
  await directoryRotation.removeOldWaves();
}

export function testWithoutBuilding(xctestrunPath: string, serial: Serial, printable: Printable): XCTestRunContext {
  const tempDirPath = `${directoryRotation.getCurrentWavePath()}/${randomUUID()}`;
  const xcodebuildPath = getXcodeBuildPathSync();
  const proc = ChildProcess.spawnSync(
    xcodebuildPath,
    ['test-without-building', '-xctestrun', `${xctestrunPath}`, '-destination', `id=${serial}`, '-resultBundlePath', tempDirPath],
    {},
    new PrefixLogger(printable, '[xctest]'),
  );

  return new XCTestRunContext(tempDirPath, proc, printable);
}

export async function killPreviousXcodebuild(serial: Serial, printable: Printable): Promise<void> {
  const xcodebuildPath = getXcodeBuildPathSync();
  const lsofResult = await ChildProcess.execIgnoreError(`pgrep -if "${xcodebuildPath}.*${serial}"`, { timeout: 10000 }, printable);
  if (0 === lsofResult.stdout.length) {
    return;
  }
  const lines = lsofResult.stdout.split('\n');
  if (0 === lines.length) {
    return;
  }
  const pid = lines[0];
  if (!pid) {
    return;
  }
  child_process.execSync(`kill -9 ${pid}`);
}
