import { ErrorResult } from '@dogu-private/console-host-agent';
import { Code } from '@dogu-private/types';
import { errorify, PromiseOrValue } from '@dogu-tech/common';
import { EnvironmentVariableReplacementProvider } from '@dogu-tech/node';
import { Injectable } from '@nestjs/common';
import { ChildProcess, spawn, SpawnOptions } from 'child_process';
import { DoguLogger } from '../logger/logger';
import { MessageCanceler, MessageContext } from '../message/message.types';

export interface CommandHandler {
  onStdout: (data: string) => PromiseOrValue<void>;
  onStderr: (data: string) => PromiseOrValue<void>;
  onCancelerCreated: (canceler: MessageCanceler) => PromiseOrValue<void>;
}

@Injectable()
export class CommandProcessRegistry {
  private readonly processes = new Set<ChildProcess>();

  constructor(private readonly logger: DoguLogger) {}

  async command(command: string, args: string[], options: SpawnOptions, context: MessageContext): Promise<ErrorResult> {
    return new Promise((resolve, reject) => {
      (async (): Promise<void> => {
        const { processes } = this;
        const { env: childEnv, ...rest } = options;
        const { environmentVariableReplacer, eventHandler } = context;
        if (childEnv) {
          const childEnvReplaced = await environmentVariableReplacer.replaceEnv(childEnv);
          environmentVariableReplacer.stackProvider.push(new EnvironmentVariableReplacementProvider(childEnvReplaced));
        }
        const commandReplaced = await environmentVariableReplacer.replace(command);
        const argsReplaced = await Promise.all(args.map((arg) => environmentVariableReplacer.replace(arg)));
        const env = environmentVariableReplacer.stackProvider.export();
        const child = spawn(commandReplaced, argsReplaced, {
          ...rest,
          env,
        });
        processes.add(child);
        let cancelRequested = false;
        const canceler: MessageCanceler = {
          cancel: () => {
            cancelRequested = true;
            child.kill();
          },
        };
        child.on('spawn', () => {
          this.logger.info('child process spawned', { command: commandReplaced, args: argsReplaced });
        });
        let errorOccurred: unknown | null = null;
        child.on('error', (error) => {
          errorOccurred = error;
          this.logger.error('child process error', { error: errorify(error), command: commandReplaced, args: argsReplaced });
        });
        child.on('close', (code, signal) => {
          processes.delete(child);
          const errorResult: ErrorResult = {
            kind: 'ErrorResult',
            value: {
              code: errorOccurred
                ? Code.CODE_HOST_AGENT_UNEXPECTED_ERROR
                : cancelRequested
                ? Code.CODE_HOST_AGENT_SIGTERM
                : code === 0
                ? Code.CODE_SUCCESS_COMMON_BEGIN_UNSPECIFIED
                : Code.CODE_HOST_AGENT_UNEXPECTED_ERROR,
              message: errorOccurred ? errorify(errorOccurred).message : cancelRequested ? 'SIGTERM' : code === 0 ? 'OK' : 'child process exited with non-zero code',
              details: {
                command: commandReplaced,
                args: argsReplaced,
              },
            },
          };
          resolve(errorResult);
        });
        child.on('message', (message, sendHandle) => {
          this.logger.info('Received message from child process', { message });
        });
        child.stdout?.on('data', (data) => {
          const dataString = String(data);
          Promise.resolve(
            eventHandler.onLog({
              level: 'info',
              message: dataString,
              localTimeStamp: new Date().toISOString(),
            }),
          ).catch((error) => {
            this.logger.error('Failed to log stdout message', { error: errorify(error), data: dataString });
          });
        });
        child.stderr?.on('data', (data) => {
          const dataString = String(data);
          Promise.resolve(
            eventHandler.onLog({
              level: 'error',
              message: dataString,
              localTimeStamp: new Date().toISOString(),
            }),
          ).catch((error) => {
            this.logger.error('Failed to log stderr message', { error: errorify(error), data: dataString });
          });
        });
        await eventHandler.onCancelerCreated(canceler);
      })().catch((error) => {
        reject(error);
      });
    });
  }

  commandLine(commandLine: string, options: SpawnOptions, context: MessageContext): Promise<ErrorResult> {
    const command = process.platform === 'win32' ? 'cmd.exe' : process.env.SHELL ?? '/bin/sh';
    const args = [process.platform === 'win32' ? '/c' : '-c', commandLine];
    return this.command(command, args, options, context);
  }
}