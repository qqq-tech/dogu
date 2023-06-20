// const fu = require('find-up');
// const Dotenv = require('dotenv');
// const fs = require('fs');
// const yargs = require('yargs');
// const yh = reuiqre('yargs/helpers');
import fs from 'fs';
import { findUp } from 'find-up';
import * as Dotenv from 'dotenv';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const requiredEnvKeys = [
  'NEXT_PUBLIC_DOGU_API_BASE_URL',
  'NEXT_PUBLIC_DOGU_WS_BASE_URL',
  'NEXT_PUBLIC_ENV',
  'NEXT_PUBLIC_DOGU_RECAPTCHA_SITE',
  'NEXT_PUBLIC_DOGU_GA_ID',
  'NEXT_PUBLIC_DOGU_GITLAB_HOST',
  'NEXT_PUBLIC_DOGU_GITLAB_PORT',
  'NEXT_PUBLIC_DOGU_GITLAB_PROTOCOL',
  'NEXT_PUBLIC_TURN_SERVER_HOST',
  'NEXT_PUBLIC_TURN_SERVER_PORT',
  'NEXT_PUBLIC_TURN_SERVER_USERNAME',
  'NEXT_PUBLIC_TURN_SERVER_PASSWORD',
  'NEXT_PUBLIC_TURN_SERVER_CREDENTIAL_TYPE',
];

async function parseDotenv() {
  const envFilePath = await findUp(`.env`);
  if (envFilePath === undefined) {
    const message = `.env file not found`;
    console.error(`[prerun] ${message}`);
    throw new Error(message);
  }

  const parsedEnv = Dotenv.config({ path: envFilePath }).parsed || {};

  // compare env keys
  const existKeys = Object.keys(parsedEnv);
  const difference = requiredEnvKeys.filter((x) => !existKeys.includes(x));

  if (difference.length > 0) {
    throw new Error(`[prerun] Env validation failed. ${difference.join()} should exist.`);
  }

  return parsedEnv;
}

yargs(hideBin(process.argv))
  .command(
    'start',
    'Create Next.js runtime environment js and write robots.txt',
    function builder(y) {
      return y.option('env', {
        alias: 'e',
        type: 'string',
        description: 'Environment name(ex: production, development)',
      });
    },
    async function handler(args) {
      await parseDotenv();
    },
  )
  .parse();