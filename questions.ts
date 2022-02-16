import inquirer from 'inquirer'

export const generator = {
  menu: function (): inquirer.DistinctQuestion {
    return {
      type: 'list',
      name: 'menu',
      message: 'Was möchtest du tun?',
      choices: [
        { value: 'showInfo', name: 'Informationen über das Projekt anzeigen' },
        { value: 'risk', name: 'Eine Risikoanalyse durchführen' },
        { value: 'quit', name: 'Dieses Programm beenden' }
      ]
    }
  }
}