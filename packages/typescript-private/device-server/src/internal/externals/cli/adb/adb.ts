import { PrivateProtocol, Serial } from '@dogu-private/types';
import { errorify, Printable, stringify } from '@dogu-tech/common';
import { ChildProcess } from '@dogu-tech/node';
import child_process, { execFile, ExecFileOptionsWithStringEncoding, spawn } from 'child_process';
import fs from 'fs';
import util from 'util';
import { registerBootstrapHandler } from '../../../../bootstrap/bootstrap.service';
import { adbLogger } from '../../../../logger/logger.instance';
import { pathMap } from '../../../../path-map';
import { LogHandler } from '../../../public/device-channel';
import { DeviceScanResult, DeviceScanStatus } from '../../../public/device-driver';
import { parseRecord } from '../../../util/parse';
import { AndroidDfInfo, AndroidProcCpuInfo, AndroidProcDiskstats, AndroidProcMemInfo, AndroidPropInfo, AndroidShellTopInfo } from './info';
import { parseAndroidProcCpuInfo, parseAndroidProcDiskstats, parseAndroidProcMemInfo, parseAndroidShellDf, parseAndroidShellProp, parseAndroidShellTop } from './parse';

const execFileAsync = util.promisify(execFile);

type DeviceControlKeycode = PrivateProtocol.DeviceControlKeycode;
const DeviceControlKeycode = PrivateProtocol.DeviceControlKeycode;

function exec(command: string, options: child_process.ExecOptions = {}, printable: Printable = adbLogger): ReturnType<typeof ChildProcess.exec> {
  return ChildProcess.exec(command, options, printable);
}

function execIgnoreError(command: string, options: child_process.ExecOptions = {}, printable: Printable = adbLogger): ReturnType<typeof ChildProcess.execIgnoreError> {
  return ChildProcess.execIgnoreError(command, options, printable);
}

function commandIgnoreError(
  serial: Serial,
  command: string,
  options: child_process.ExecOptions = {},
  printable: Printable = adbLogger,
): ReturnType<typeof ChildProcess.execIgnoreError> {
  return execIgnoreError(`${pathMap().android.adb} -s ${serial} ${command}`, options, printable);
}

export function shell(
  serial: Serial,
  command: string,
  options: ExecFileOptionsWithStringEncoding = {
    windowsVerbatimArguments: true,
    encoding: 'utf8',
  },
  printable: Printable = adbLogger,
): ReturnType<typeof ChildProcess.exec> {
  return new Promise((resolve, reject) => {
    execFile(pathMap().android.adb, ['-s', serial, 'shell', command], options, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      } else {
        resolve({ stdout, stderr });
      }
    });
  });
}

function shellIgnoreError(
  serial: Serial,
  command: string,
  options: child_process.ExecOptions = {},
  printable: Printable = adbLogger,
): ReturnType<typeof ChildProcess.execIgnoreError> {
  return execIgnoreError(`${pathMap().android.adb} -s ${serial} shell "${command}"`, options, printable);
}

interface PackageInfo {
  pid: number;
  uid: number;
  name: string;
}

function DefaultPackageInfo(): PackageInfo {
  return {
    pid: -1,
    uid: -1,
    name: '',
  };
}

// network
export async function startServer(): Promise<void> {
  await exec(`${pathMap().android.adb} start-server`);
}

export async function killServer(): Promise<void> {
  await exec(`${pathMap().android.adb} kill-server`);
}

export async function forward(serial: Serial, hostPort: number, devicePort: number, printable: Printable = adbLogger): Promise<void> {
  const random = Math.random();
  adbLogger.verbose('adb.forward begin', {
    serial,
    hostPort,
    devicePort,
    random,
  });
  await exec(`${pathMap().android.adb} -s ${serial} forward tcp:${hostPort} tcp:${devicePort}`);
  printable.verbose?.(`${serial} is forwarding from ${hostPort} to ${devicePort}`);
  adbLogger.verbose(`adb.forward end`, {
    serial,
    hostPort,
    devicePort,
    random,
  });
}

export async function unforward(serial: Serial, hostPort: number, option?: { ignore: boolean }, printable: Printable = adbLogger): Promise<void> {
  const random = Math.random();
  adbLogger.verbose('adb.unforward begin', { serial, hostPort, random });
  let func = exec;
  if (option?.ignore) {
    func = execIgnoreError;
  }
  await func(`${pathMap().android.adb} -s ${serial} forward --remove tcp:${hostPort}`);
  printable.verbose?.(`${serial} is unforwarding from ${hostPort} to ${hostPort}`);
  adbLogger.verbose('adb.unforward end', { random });
}

export async function unforwardall(serial: Serial, printable: Printable = adbLogger): Promise<void> {
  const random = Math.random();
  adbLogger.verbose('adb.unforwardall begin', { serial, random });
  await exec(`${pathMap().android.adb} -s ${serial} forward --remove-all`);
  adbLogger.verbose('adb.unforwardall end', { serial, random });
}

export async function logcatClear(serial: Serial, printable?: Printable): ReturnType<typeof ChildProcess.exec> {
  const random = Math.random();
  adbLogger.verbose('adb.logcatClear begin', { serial, random });
  const result = await exec(`${pathMap().android.adb} -s ${serial} logcat -c`);
  adbLogger.verbose('adb.logcatClear end', { serial, random });
  return result;
}

export function logcat(serial: Serial, args: string[], handler: LogHandler, printable?: Printable): child_process.ChildProcess {
  const random = Math.random();
  adbLogger.verbose('adb.logcat begin', { serial, args, random });
  const child = spawn(pathMap().android.adb, ['-s', serial, 'logcat', ...args]);
  child.stdout.setEncoding('utf8');
  child.stdout.on('data', (data) => {
    handler.info(stringify(data));
  });
  child.stderr.setEncoding('utf8');
  child.stderr.on('data', (data) => {
    handler.error(stringify(data));
  });
  adbLogger.verbose('adb.logcat end', { serial, args, random });
  return child;
}

export async function isPortOpen(serial: Serial, port: number, printable: Printable = adbLogger): Promise<boolean> {
  const random = Math.random();
  adbLogger.verbose('adb.isPortOpen begin', { serial, port, random });
  const result = await shell(serial, `netstat -eanut | grep LISTEN | grep tcp | grep :${port}`).catch((e) => {
    const stringified = stringify(e);
    printable.verbose?.(`isPortOpen error`, { error: stringified });
    return { stdout: '', stderr: stringified };
  });
  const rv = result.stdout.length > 0;
  adbLogger.verbose('adb.isPortOpen end', { serial, port, random });
  return rv;
}

export async function getPackageOnPort(serial: Serial, port: number): Promise<PackageInfo> {
  const random = Math.random();
  adbLogger.verbose('adb.getPackageOnPort begin', { serial, port, random });
  const result = await shellIgnoreError(serial, `netstat -eanut | grep LISTEN | grep tcp | grep :${port}`);
  const splited = parseRecord(result.stdout);
  if (splited.length < 7) {
    return DefaultPackageInfo();
  }
  const uid = parseInt(splited[6]);
  const rv = await getPackageInfoFromUid(serial, uid);
  adbLogger.verbose('adb.getPackageOnPort end', { serial, port, random });
  return rv;
}

// app control
export async function uninstallApp(serial: Serial, appName: string, keep = false, printable: Printable = adbLogger): Promise<void> {
  const random = Math.random();
  adbLogger.verbose('adb.uninstallApp begin', { serial, appName, keep, random });
  const command = ['-s', serial, 'uninstall'];
  if (keep) {
    command.push('-k');
  }
  command.push(appName);
  await ChildProcess.spawnAndWait(pathMap().android.adb, command, { timeout: 60000 * 5 }, printable).catch((err) => {
    printable.error?.(`ChildProcess.uninstallApp failed`, { error: stringify(err) });
    return;
  });
  adbLogger.verbose('adb.uninstallApp end', { serial, appName, keep, random });
}

function installAppArgsInternal(serial: Serial, apkPath: string): { command: string; args: string[] } {
  return { command: pathMap().android.adb, args: ['-s', serial, 'install', '-r', '-d', '-t', '-g', apkPath] };
}

export async function installApp(serial: Serial, apkPath: string, printable: Printable = adbLogger): Promise<child_process.ChildProcess> {
  const random = Math.random();
  adbLogger.verbose('adb.installApp begin', { serial, apkPath, random });
  const { command, args } = installAppArgsInternal(serial, apkPath);
  const rv = await ChildProcess.spawnAndWait(command, args, { timeout: 60000 * 5 }, printable);
  adbLogger.verbose('adb.installApp end', { serial, apkPath, random });
  return rv;
}

export async function installAppWithReturningStdoutStderr(serial: Serial, apkPath: string, timeout: number, printable: Printable): Promise<ChildProcess.ExecResult> {
  const random = Math.random();
  adbLogger.verbose('adb.installAppWithReturningStdoutStderr begin', { serial, apkPath, timeout, random });
  const { command, args } = installAppArgsInternal(serial, apkPath);
  printable.verbose?.('installAppWithReturningStdoutStderr start', { command: `${command} ${args.join(' ')}` });
  const rv = await new Promise<ChildProcess.ExecResult>((resolve, reject) => {
    execFile(
      command,
      args,
      {
        windowsVerbatimArguments: true,
        timeout,
      },
      (error, stdout, stderr) => {
        if (error) {
          reject(error);
        } else {
          resolve({ stdout, stderr });
        }
      },
    );
  });
  adbLogger.verbose('adb.installAppWithReturningStdoutStderr end', { serial, apkPath, timeout, random });
  return rv;
}

export async function runApp(serial: Serial, packageName: string, launchableActivityName: string, printable: Printable = adbLogger): Promise<child_process.ChildProcess> {
  const random = Math.random();
  adbLogger.verbose('adb.runApp begin', { serial, packageName, launchableActivityName, random });
  const rv = await ChildProcess.spawnAndWait(
    pathMap().android.adb,
    ['-s', serial, 'shell', 'am', 'start', '-e', 'testkey', 'testvalue', '-n', `${packageName}/${launchableActivityName}`],
    {},
    printable,
  );
  adbLogger.verbose('adb.runApp end', { serial, packageName, launchableActivityName, random });
  return rv;
}

export async function getPidOf(serial: Serial, appName: string, printable?: Printable): Promise<string> {
  const random = Math.random();
  adbLogger.verbose('adb.getPidOf begin', { serial, appName, random });
  const cmdret = await shellIgnoreError(serial, `pidof ${appName}`, {}, printable);
  const rv = cmdret.stdout.trim();
  adbLogger.verbose('adb.getPidOf end', { serial, appName, random });
  return rv;
}

export async function getPackageInfoFromUid(serial: Serial, uid: number): Promise<PackageInfo> {
  const random = Math.random();
  adbLogger.verbose('adb.getPackageInfoFromUid begin', { serial, uid, random });
  const cmdret = await shellIgnoreError(serial, `ps -n | grep ${uid}`);
  const splited = parseRecord(cmdret.stdout);
  const rv = splited.length < 9 ? DefaultPackageInfo() : { pid: parseInt(splited[1]), uid: uid, name: splited[splited.length - 1] };
  adbLogger.verbose('adb.getPackageInfoFromUid end', { serial, uid, random });
  return rv;
}

export async function kill(serial: Serial, pid: string): Promise<string> {
  const random = Math.random();
  adbLogger.verbose('adb.kill begin', { serial, pid, random });
  const cmdret = await shellIgnoreError(serial, `kill ${pid}`);
  const rv = cmdret.stdout.trim();
  adbLogger.verbose('adb.kill end', { serial, pid, random });
  return rv;
}

export async function killPackage(serial: Serial, packageName: string): Promise<string> {
  const random = Math.random();
  adbLogger.verbose('adb.killPackage begin', { serial, packageName, random });
  const cmdret = await shellIgnoreError(serial, `am force-stop ${packageName}`);
  const rv = cmdret.stdout.trim();
  adbLogger.verbose('adb.killPackage end', { serial, packageName, random });
  return rv;
}

export async function killOnPort(serial: Serial, port: number): Promise<boolean> {
  const random = Math.random();
  adbLogger.verbose('adb.killOnPort begin', { serial, port, random });
  const packageInfo = await getPackageOnPort(serial, port);
  if (packageInfo.pid < 0) {
    adbLogger.verbose('adb.killOnPort end', { serial, port, rv: false, random });
    return false;
  }
  await killPackage(serial, packageInfo.name);
  adbLogger.verbose('adb.killOnPort end', { serial, port, rv: true, random });
  return true;
}

export async function runAppProcess(serial: Serial, localPath: string, destPath: string, main: string, printable: Printable): Promise<child_process.ChildProcess> {
  const random = Math.random();
  adbLogger.verbose('adb.runAppProcess begin', { serial, localPath, destPath, main, random });
  const pushret = await exec(`${pathMap().android.adb} -s ${serial} push ${localPath} ${destPath}`);
  const chmodRet = await exec(`${pathMap().android.adb} -s ${serial} shell chmod 777 ${destPath}`);
  const rv = await ChildProcess.spawn(pathMap().android.adb, ['-s', serial, 'shell', `CLASSPATH=${destPath}`, 'app_process', '/', main], {}, printable);
  adbLogger.verbose('adb.runAppProcess end', { serial, localPath, destPath, main, random });
  return rv;
}

// device info
export async function serials(): Promise<DeviceScanResult[]> {
  const random = Math.random();
  adbLogger.verbose('adb.serials begin', { random });
  const output = (await execIgnoreError(`${pathMap().android.adb} devices`)).stdout;
  adbLogger.verbose('adb.serials', { output });
  const regex = /(\S+)/g;

  const stateToDeviceStatus = (state: string): DeviceScanStatus => {
    switch (state) {
      case 'device':
        return 'online';
      case 'offline':
        return 'offline';
      case 'unauthorized':
        return 'unauthorized';
      default:
        return 'unknown';
    }
  };

  const stateToDesciprtion = (state: string): string | undefined => {
    switch (state) {
      case 'device':
        return undefined;
      case 'offline':
        return `This device is offline as a result of the adb command. Please check the device status. Rebooting the device may fix it.`;
      case 'unauthorized':
        return 'Device is unauthorized. Please allow usb debugging.';
      default:
        return `Device status is unknown. ${state}`;
    }
  };

  const scanInfos = output
    .split('\n')
    .slice(1, -2)
    .map((serialAndStateLine) => {
      const matched = serialAndStateLine.match(regex);
      if (!matched || matched.length < 2) {
        return undefined;
      }
      const serial = matched[0];
      const state = matched[1];
      return { serial: serial, name: state, status: stateToDeviceStatus(state), description: stateToDesciprtion(state) } as DeviceScanResult;
    })
    .filter((deviceScanInfo) => deviceScanInfo !== undefined)
    .map((deviceScanInfo) => deviceScanInfo!);
  adbLogger.verbose('adb.serials end', { serials: scanInfos, random });
  return scanInfos;
}

export async function getNickname(serial: Serial): Promise<string> {
  const random = Math.random();
  adbLogger.verbose('adb.getNickname begin', { serial, random });
  const { stdout } = await shellIgnoreError(serial, 'getprop ro.product.model');
  const nicknameRaw = stdout.trim().split('\n')[0];
  if (nicknameRaw === undefined) {
    throw new Error(`Fail to get nickname of ${serial}`);
  }
  const nickname = nicknameRaw.substring(0, 50);
  adbLogger.verbose('adb.getNickname end', { serial, nickname, random });
  return nickname;
}

export async function getProps(serial: Serial): Promise<AndroidPropInfo> {
  const random = Math.random();
  adbLogger.verbose('adb.getProps begin', { serial, random });
  const cmdret = await shellIgnoreError(serial, 'getprop');
  const rv = parseAndroidShellProp(cmdret.stdout);
  adbLogger.verbose('adb.getProps end', { serial, random });
  return rv;
}

// Profile GPU Rendering (https://stackoverflow.com/questions/42492191/how-to-show-hide-profile-gpu-rendering-as-bars-using-adb-command)
export async function setProfileGPURendering(serial: Serial, value: string): Promise<void> {
  const random = Math.random();
  adbLogger.verbose('adb.setProfileGPURendering begin', { serial, value, random });
  await setProp(serial, 'debug.hwui.profile', value);
  adbLogger.verbose('adb.setProfileGPURendering end', { serial, value, random });
}

async function setProp(serial: Serial, propName: string, propValue: string): Promise<void> {
  const random = Math.random();
  adbLogger.verbose('adb.setProp begin', { serial, propName, propValue, random });
  await shell(serial, `setprop ${propName} ${propValue}`);
  adbLogger.verbose('adb.setProp end', { serial, propName, propValue, random });
}

export async function getProcCpuInfo(serial: Serial): Promise<AndroidProcCpuInfo[]> {
  const random = Math.random();
  adbLogger.verbose('adb.getProcCpuInfo begin', { serial, random });
  const cmdret = await shellIgnoreError(serial, 'cat /proc/cpuinfo');
  const rv = parseAndroidProcCpuInfo(cmdret.stdout);
  adbLogger.verbose('adb.getProcCpuInfo end', { serial, random });
  return rv;
}

export async function getProcMemInfo(serial: Serial): Promise<AndroidProcMemInfo> {
  const random = Math.random();
  adbLogger.verbose('adb.getProcMemInfo begin', { serial, random });
  const cmdret = await shellIgnoreError(serial, 'cat /proc/meminfo');
  const rv = parseAndroidProcMemInfo(cmdret.stdout);
  adbLogger.verbose('adb.getProcMemInfo end', { serial, random });
  return rv;
}

export async function getProcDiskstats(serial: Serial): Promise<AndroidProcDiskstats[]> {
  const random = Math.random();
  adbLogger.verbose('adb.getProcDiskstats begin', { serial, random });
  const cmdret = await shellIgnoreError(serial, 'cat /proc/diskstats');
  const rv = parseAndroidProcDiskstats(cmdret.stdout);
  adbLogger.verbose('adb.getProcDiskstats end', { serial, random });
  return rv;
}

export async function getDfInfo(serial: Serial): Promise<AndroidDfInfo[]> {
  const random = Math.random();
  adbLogger.verbose('adb.getDfInfo begin', { serial, random });
  const cmdret = await shellIgnoreError(serial, 'df');
  const rv = parseAndroidShellDf(cmdret.stdout);
  adbLogger.verbose('adb.getDfInfo end', { serial, random });
  return rv;
}

export async function getShellTopInfo(serial: Serial): Promise<AndroidShellTopInfo> {
  const random = Math.random();
  adbLogger.verbose('adb.getShellTopInfo begin', { serial, random });
  const cmdret = await shellIgnoreError(serial, 'top -bn1');
  const rv = parseAndroidShellTop(cmdret.stdout);
  adbLogger.verbose('adb.getShellTopInfo end', { serial, random });
  return rv;
}

interface FocusedAppInfo {
  displayId: number;
  packageName: string;
  activity: string;
}

export async function getForegroundPackage(serial: Serial): Promise<FocusedAppInfo[]> {
  const random = Math.random();
  adbLogger.verbose('adb.getForegroundPackage begin', { serial, random });
  const cmdret = await shellIgnoreError(serial, 'dumpsys input | grep -A10 FocusedApplication');
  const lines = cmdret.stdout.split('\n');
  const appLines: string[] = [];
  for (const l of lines) {
    const curL = l.replace('FocusedApplication:', '').trim();
    if (0 < curL.length) {
      appLines.push(curL);
    }
    if (l.includes('FocusedWindow')) {
      break;
    }
  }

  function parseActivityRecord(record: string): { packageName: string; activity: string } {
    const packageSlashActivity = record.split(' ')[2];
    const packageName = packageSlashActivity.split('/')[0];
    const activity = packageSlashActivity.split('/')[1];
    return {
      packageName: packageName,
      activity: activity,
    };
  }
  const ret: FocusedAppInfo[] = [];
  for (const appL of appLines) {
    const regex = /displayId=(?<id>[0-9]),.+ActivityRecord{(?<record>[^}]+)}/g;
    const match = regex.exec(appL);
    if (match && match.groups) {
      if ('id' in match.groups && 'record' in match.groups) {
        const id = match.groups.id;
        const { packageName, activity } = parseActivityRecord(match.groups.record);
        ret.push({
          displayId: Number(id),
          packageName: packageName,
          activity: activity,
        });
      }
    }
  }
  if (0 == ret.length) {
    for (const appL of appLines) {
      const regex = /ActivityRecord{(?<record>[^}]+)}/g;
      const match = regex.exec(appL);
      if (match && match.groups) {
        if ('record' in match.groups) {
          const { packageName, activity } = parseActivityRecord(match.groups.record);
          ret.push({
            displayId: 0,
            packageName: packageName,
            activity: activity,
          });
        }
      }
    }
  }
  adbLogger.verbose('adb.getForegroundPackage end', { serial, random });
  return ret;
}

// display

export async function isScreenOn(serial: Serial): Promise<boolean> {
  const random = Math.random();
  adbLogger.verbose('adb.isScreenOn begin', { serial, random });
  const result = await shellIgnoreError(serial, 'dumpsys input_method');
  const rv = result.stdout.includes('mInteractive=true');
  adbLogger.verbose('adb.isScreenOn end', { serial, random, rv });
  return rv;
}

export async function isDreamingLockScreen(serial: Serial): Promise<boolean> {
  const random = Math.random();
  adbLogger.verbose('adb.isDreamingLockScreen begin', { serial, random });
  const result = await shellIgnoreError(serial, 'dumpsys window | grep mDreamingLockscreen=true');
  const rv = result.stdout.includes('mDreamingLockscreen=true');
  adbLogger.verbose('adb.isDreamingLockScreen end', { serial, random, rv });
  return rv;
}

export async function turnOnScreen(serial: Serial): Promise<void> {
  const random = Math.random();
  adbLogger.verbose('adb.turnOnScreen begin', { serial, random });
  const isTurnOff = !(await isScreenOn(serial));
  if (isTurnOff) {
    await keyevent(serial, DeviceControlKeycode.DEVICE_CONTROL_KEYCODE_WAKEUP);
    if (await isDreamingLockScreen(serial)) {
      await keyevent(serial, DeviceControlKeycode.DEVICE_CONTROL_KEYCODE_MENU);
    }
  }
  adbLogger.verbose('adb.turnOnScreen end', { serial, random });
}

export async function turnOffScreen(serial: Serial): Promise<void> {
  const random = Math.random();
  adbLogger.verbose('adb.turnOffScreen begin', { serial, random });
  const isTurnOn = await isScreenOn(serial);
  if (isTurnOn) {
    await keyevent(serial, DeviceControlKeycode.DEVICE_CONTROL_KEYCODE_SLEEP);
  }
  adbLogger.verbose('adb.turnOffScreen end', { serial, random });
}

export async function keepScreenOn(serial: Serial): Promise<void> {
  const random = Math.random();
  adbLogger.verbose('adb.keepScreenOn begin', { serial, random });
  await shellIgnoreError(serial, 'svc power stayon true');
  adbLogger.verbose('adb.keepScreenOn end', { serial, random });
}

export async function keepScreenOff(serial: Serial): Promise<void> {
  const random = Math.random();
  adbLogger.verbose('adb.keepScreenOff begin', { serial, random });
  await shellIgnoreError(serial, 'svc power stayon false');
  adbLogger.verbose('adb.keepScreenOff end', { serial, random });
}

export async function keyevent(serial: Serial, keyEvent: DeviceControlKeycode): Promise<void> {
  const random = Math.random();
  adbLogger.verbose('adb.keyevent begin', { serial, random });
  await shellIgnoreError(serial, `input keyevent ${keyEvent}`);
  adbLogger.verbose('adb.keyevent end', { serial, random });
}

export async function getDisplaySize(serial: Serial): Promise<{ width: number; height: number }> {
  const random = Math.random();
  adbLogger.verbose('adb.getDisplaySize begin', { serial, random });
  const result = await shellIgnoreError(serial, 'wm size');
  // get adb shell wm output
  // Physical size: 1080x1920
  // Override size: 1080x1920
  const regex = /(\d+)x(\d+)/g;
  const matched = result.stdout.match(regex);
  if (matched === null) {
    return { width: 0, height: 0 };
  }
  const matchInfo = matched[0];
  if (matchInfo === undefined) {
    return { width: 0, height: 0 };
  }
  const [width, height] = matchInfo.split('x').map((v) => parseInt(v, 10));
  if (width === undefined) {
    return { width: 0, height: 0 };
  }
  if (height === undefined) {
    return { width: 0, height: 0 };
  }
  const rv = { width, height };
  adbLogger.verbose('adb.getDisplaySize end', { serial, random, rv });
  return rv;
}

// security
export async function unlock(serial: Serial): Promise<void> {
  const random = Math.random();
  adbLogger.verbose('adb.unlock begin', { serial, random });
  await keyevent(serial, DeviceControlKeycode.DEVICE_CONTROL_KEYCODE_MENU);
  await keyevent(serial, DeviceControlKeycode.DEVICE_CONTROL_KEYCODE_ENTER);
  adbLogger.verbose('adb.unlock end', { serial, random });
}

export async function reboot(serial: Serial): Promise<void> {
  const random = Math.random();
  adbLogger.verbose('adb.reboot begin', { serial, random });
  await commandIgnoreError(serial, 'reboot');
  adbLogger.verbose('adb.reboot end', { serial, random });
}

export async function reconnect(serial: Serial): Promise<void> {
  const random = Math.random();
  adbLogger.verbose('adb.reconnect begin', { serial, random });
  await commandIgnoreError(serial, 'reconnect');
  await commandIgnoreError(serial, 'usb');
  adbLogger.verbose('adb.reconnect end', { serial, random });
}

/**
 * @requires Android 10+
 * @note It takes about three minutes.
 * @link https://developer.android.com/tools/adb#test_harness
 */
export async function reset(serial: Serial): Promise<void> {
  const random = Math.random();
  adbLogger.verbose('adb.reset begin', { serial, random });
  return new Promise((resolve, reject) => {
    execFile(
      pathMap().android.adb,
      ['-s', serial, 'shell', 'cmd', 'testharness', 'enable'],
      {
        encoding: 'utf8',
        timeout: 60 * 1000,
      },
      (error, stdout, stderr) => {
        if (error) {
          adbLogger.error('adb.reset error', { serial, random, error: errorify(error) });
          reject(error);
        } else {
          adbLogger.verbose('adb.reset stdout', { serial, random, stdout });
          adbLogger.verbose('adb.reset stderr', { serial, random, stderr });
          adbLogger.verbose('adb.reset end', { serial, random });
          resolve();
        }
      },
    );
  });
}

export interface AndroidSystemBarVisibility {
  /**
   * @default false
   */
  statusBar: boolean;

  /**
   * @default false
   */
  navigationBar: boolean;
}

export async function getSystemBarVisibility(serial: Serial): Promise<AndroidSystemBarVisibility> {
  /**
   * @example `  Window #5 Window{8926e0c u0 StatusBar}:`
   */
  const WindowPattern = /^\s+Window\s#\d+\sWindow\{\w+\s\w+\s(.+)\}:$/;

  /**
   * @example `    mHasSurface=true isReadyForDisplay()=true mWindowRemovalAllowed=false`
   */
  const VisibilityPattern = /^.*isReadyForDisplay\(\)=(true|false).*$/;

  /**
   * @example `StatusBar`
   */
  const StatusBarWindowNamePattern = /^StatusBar$/;

  /**
   * @example `NavigationBar` or `NavigationBar0`
   */
  const NavigationBarWindowNamePattern = /^NavigationBar\d*$/;

  const MaxWindowLineCount = 40;
  const StatusBarWindowName = 'StatusBar';
  const NavigationBarWindowName = 'NavigationBar';

  const findVisibility = (index: number, lines: string[]): boolean => {
    for (let i = index; i < index + MaxWindowLineCount; i++) {
      const visibilityMatch = lines[i].match(VisibilityPattern);
      if (visibilityMatch) {
        const visibility = visibilityMatch[1];
        return visibility === 'true';
      }
    }
    return false;
  };

  const temp = [
    {
      name: StatusBarWindowName,
      pattern: StatusBarWindowNamePattern,
      visibility: false,
    },
    {
      name: NavigationBarWindowName,
      pattern: NavigationBarWindowNamePattern,
      visibility: false,
    },
  ];

  const { stdout, stderr } = await execFileAsync(pathMap().android.adb, ['-s', serial, 'shell', 'dumpsys', 'window', 'windows'], {
    timeout: 10 * 1000,
  });
  adbLogger.warn('adb.getSystemBarVisibilities', { serial, stderr });
  stdout.split('\n').forEach((line, index, lines) => {
    const windowMatch = line.match(WindowPattern);
    if (windowMatch) {
      const windowName = windowMatch[1];
      const target = temp.find((v) => windowName.match(v.pattern));
      if (target) {
        target.visibility = findVisibility(index, lines);
      }
    }
  });
  return {
    statusBar: temp.find((v) => v.name === StatusBarWindowName)?.visibility ?? false,
    navigationBar: temp.find((v) => v.name === NavigationBarWindowName)?.visibility ?? false,
  };
}

registerBootstrapHandler(__filename, async (): Promise<void> => {
  try {
    await fs.promises.chmod(pathMap().android.adb, 0o777);
  } catch (error) {
    const cause = error instanceof Error ? error : new Error(stringify(error));
    throw new Error(`Failed to chmod adb`, { cause });
  }
});
