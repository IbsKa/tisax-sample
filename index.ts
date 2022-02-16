#!/usr/bin/env node

// ########################################################
// ### IMPORTS
// ########################################################

import inquirer from 'inquirer'
import ora from 'ora';
import { clear } from 'node:console';
import { generator } from './questions.js';
import { anyKey, sleep, showFancyShit } from './utils.js';

clear()

showFancyShit();

const spinner = ora({ spinner: 'bouncingBall' }).start('Lade Daten...')
await sleep(5 * 1000);
spinner.stop()
spinner.succeed('Daten erfolgreich geladen')

let main: inquirer.Answers | undefined = undefined

while (!main || main.menu !== 'quit') {
  main = await inquirer.prompt([generator.menu()])
  clear()

  const currentAction: string = main.menu;

  try {
    switch (currentAction) {
      case 'quit':
        break;
      case 'showInfo':
        console.log('© IBS, 2022\n\nDies ist ein Beispielprojekt für die **Einhaltung einer TISAX-konformen Entwicklung**. Es handelt sich sowohl um ein kompilierbares Projekt, als auch um ein Dokument, dass die zu verwendenden Techniken und Richtlinien demonstriert.\nDas resultierende Projekt ist ein Kommandozeilen - Tool, das eine Hilfestellung zur Risikoanalyse bieten soll.\nEs handelt sich um ein Typescript - Projekt im node.js - Umfeld, mit npm als Paketmanager.')
        break;
      case 'risk':
        console.log('Diese Funktionalität steht noch nicht zur Verfügung.')
      default:
        break;
    }
  } catch (error) {
    console.error('Ein Fehler ist aufgetreten während ' + currentAction)
  }
  if (currentAction !== 'quit') {
    console.log()
    spinner.info(currentAction + ' beendet, kehre zum Hauptmenü zurück')
    await anyKey();
    clear()
  }
}