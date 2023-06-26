import { newCleanNodeEnv } from '@dogu-tech/node';
import chalk from 'chalk';
import child_process from 'child_process';
import fs from 'fs';
import os from 'os';
import path from 'path';
import { Page, _electron as electron } from 'playwright';
import stc from 'string-to-color';
import waiton from 'wait-on';
import { pathMap } from './path-map';
import { getClockTime } from './time';

const dostReactName = 'dost-react';
const dostReactHexColor = stc(dostReactName);
const dostReactColor = chalk.hex(dostReactHexColor)(`[${dostReactName}]`);

const dostElectronName = 'dost-electron';
const dostElectronHexColor = stc(dostElectronName);
const dostElectronColor = chalk.hex(dostElectronHexColor)(`[${dostElectronName}]`);

const dostPlaywrightName = 'dost-playwright';
const dostPlaywrightHexColor = stc(dostPlaywrightName);
export const dostPlaywrightColor = chalk.hex(dostPlaywrightHexColor)(`[${dostPlaywrightName}]`);

export async function launchDost(): Promise<Page> {
  let electronExePath = '';

  if (process.platform === 'win32') {
    electronExePath = path.resolve(pathMap.root, 'nm-space/node_modules/electron/dist/electron.exe');
  } else if (process.platform === 'darwin') {
    electronExePath = path.resolve(pathMap.root, 'nm-space/node_modules/electron/dist/Electron.app/Contents/MacOS/Electron');
  } else {
    throw new Error('Unsupported platform');
  }

  const electronMainjsPath = path.resolve(pathMap.root, 'nm-space/projects/dost/build/electron/main.js');
  const dostRootPath = path.resolve(pathMap.root, 'nm-space/projects/dost');
  const dostGeneratedpath = path.resolve(pathMap.root, 'nm-space/projects/dost/generated');
  const doguWorkdirPath = path.resolve(os.homedir(), '.dogu');
  if (fs.existsSync(dostGeneratedpath)) {
    fs.rmSync(dostGeneratedpath, { recursive: true });
  }
  if (fs.existsSync(doguWorkdirPath)) {
    fs.rmSync(doguWorkdirPath, { recursive: true });
  }
  const reactProc = child_process.spawn('yarn', ['workspace', 'dost', 'run', 'start:react'], {
    shell: process.platform === 'win32' ? 'cmd.exe' : undefined,
    windowsVerbatimArguments: true,
    env: { ...newCleanNodeEnv(), BROWSER: 'none' },
    cwd: path.resolve(pathMap.root, 'nm-space'),
  });

  reactProc.stdout.on('data', (stdout: string | Buffer) => {
    console.log(`${dostReactColor} ${getClockTime()} ${stdout.toString()}`);
  });

  reactProc.stderr.on('data', (stderr: string | Buffer) => {
    console.log(`${dostReactColor} ${getClockTime()} ${stderr.toString()}`);
  });

  reactProc.stdout.on('error', (stdout: string | Buffer) => {
    console.log(`${dostReactColor} ${getClockTime()} ${stdout.toString()}`);
  });

  reactProc.stderr.on('error', (stderr: string | Buffer) => {
    console.log(`${dostReactColor} ${getClockTime()} ${stderr.toString()}`);
  });

  reactProc.on('close', (code, signal) => {
    console.log(`${dostReactColor} ${getClockTime()} closed. ${code ?? 0} ${signal ?? ''}}`);
  });

  await waiton({ resources: ['http://127.0.0.1:3333'], timeout: 60000 });

  const electronApp = await electron.launch({
    args: [electronMainjsPath],
    executablePath: electronExePath,
    cwd: dostRootPath,
  });
  const electronProc = electronApp.process();
  electronProc.stdout?.on('data', (stdout: string | Buffer) => {
    console.log(`${dostElectronColor} ${getClockTime()} ${stdout.toString()}`);
  });

  electronProc.stderr?.on('data', (stderr: string | Buffer) => {
    console.log(`${dostElectronColor} ${getClockTime()} ${stderr.toString()}`);
  });

  electronProc.stdout?.on('error', (stdout: string | Buffer) => {
    console.log(`${dostElectronColor} ${getClockTime()} ${stdout.toString()}`);
  });

  electronProc.stderr?.on('error', (stderr: string | Buffer) => {
    console.log(`${dostElectronColor} ${getClockTime()} ${stderr.toString()}`);
  });

  return new Promise((resolve) => {
    electronApp.on('window', (page) => {
      const filename = page.url()?.split('/').pop();
      console.log(`electronApp Window opened: ${filename ?? 'unknown'}`);
      if (page.url().includes('localhost:3333')) {
        resolve(page);
      } else {
        return;
      }

      page.on('pageerror', (error) => {
        console.error(`${dostPlaywrightColor} ${getClockTime()} ${error.message}`);
      });
      page.on('console', (msg) => {
        console.log(`${dostPlaywrightColor} ${getClockTime()} ${msg.text()}`);
      });
    });
  });
}
