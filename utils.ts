import { Readable } from 'stream';
import chalk from 'chalk'
import figlet from 'figlet'
import readline from 'readline'
import { clear } from 'node:console';

// Apparently the stream parameter should be of type Readable|ReadableStream|Blob
// The latter 2 don't seem to exist anywhere.
export const streamToString = async function (stream: Readable): Promise<string> {
  return await new Promise((resolve, reject) => {
    const chunks: Uint8Array[] = [];
    stream.on('data', (chunk) => chunks.push(chunk));
    stream.on('error', reject);
    stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf-8')));
  });
}


export const anyKey = (isDisplayingMessage = false) => {

  readline.emitKeypressEvents(process.stdin);
  process.stdin.resume()
  process.stdin.setRawMode(true);

  if (isDisplayingMessage)
    console.log('\n' + chalk.yellowBright('continuing after any key'))

  return new Promise((resolve, reject) => {
    try {
      process.stdin.once('keypress', (_, key) => {
        if (key.ctrl === true && key.name === 'c') reject();
        process.stdin.setRawMode(false);
        resolve(true);
      })
    } catch (error) {
      process.stdin.setRawMode(false);
      reject(error)
    }


  })
}
export const waitForKey = (isDisplayingMessage = false, keys: Array<string> = []) => {

  readline.emitKeypressEvents(process.stdin);
  process.stdin.resume()
  process.stdin.setRawMode(true);

  if (isDisplayingMessage)
    console.log('\n' + chalk.yellowBright('continuing after keys ' + keys.join(', ')))

  return new Promise((resolve, reject) => {
    try {
      process.stdin.on('keypress', (_, key) => {
        if (key.ctrl === true && key.name === 'c') reject();
        if (keys.length === 0 || keys.includes(key.name)) {
          process.stdin.setRawMode(false);
          resolve(true);
        }
      })
    } catch (error) {
      process.stdin.setRawMode(false);
      reject(error)
    }
  })
}

// ### HELPER FOR TIMEOUTS
export const sleep = (ms: number) => new Promise(res => setTimeout(res, ms))

export const showFancyShit = () => {
  clear()
  console.log(
    chalk.bold.red(
      figlet.textSync('IBS GmbH', { horizontalLayout: 'full' })
    )
  );
  console.log(
    chalk.redBright(
      figlet.textSync('tisax-sample', { horizontalLayout: 'full' })
    )
  );
}