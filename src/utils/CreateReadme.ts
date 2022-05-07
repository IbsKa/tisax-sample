
export default function write(v: any) {
  return `
# ${v.projectTitle}

${v.description}

Das Projekt befindet sich im Status: **${v.projectStatus}**

## Änderungshistorie

Diese Änderungshistorie bezieht sich ausschließlich auf die readme-Datei. Alle Details zum Changelog entnehmen Sie bitte dem Absatz 'Update- und Freigabeprozess'.


| Version | Datum | Autor | Bemerkung |
| ------- | ----- | ----- | --------- |
${v.changelog.map((e: any) => { return `| ${e.version} | ${new Date(e.date).toLocaleDateString("de")} | ${e.author} | ${e.remark} |` }).join('\n')}

Änderungen in dieser Datei sind ebenfalls der git-Historie zu entnehmen.

Es ist Aufgabe der ändernden Person, Projektbeteiligte über etwaige Änderungen zu informieren. Dies betrifft insbesondere Änderungen hinsichtlich Lasten- und Pflichtenheft.

## Risikoeinteilung TISAX

Einstufung: **${v.tisaxRisk}**

- [${v.internal ? 'x' : ' '}] Dieses Projekt ist ausschließlich für Mitarbeiter der IBS GnbH bestimmt
- [${v.clientData ? 'x' : ' '}] Dieses Projekt verarbeitet *und* speichert Kundendaten
- [${v.paymentData ? 'x' : ' '}] Dieses Projekt verarbeitet *und* speichert Zahlungsdsaten
- [${v.openInterfaces ? 'x' : ' '}] Es gibt über das Internet erreichbare Schnittstellen

Die Einstufung wird folgendermaßen begründet:

${v.tisaxRiskReason}

## Ziel und Verwendung

${v.description}

### Auftraggeber

Das Projekt wurde in Auftrag gegeben von:

**${v.client}**

### Beteiligte Personen

| Rolle                                   | Person                   |
| --------------------------------------- | ------------------------ |
${(v.projectLead && v.projectLead !== '' ? `| Projektverantwortlicher | ${v.projectLead} |\n` : '') +
    (v.projectIsb && v.projectIsb !== '' ? `| Verantwortlicher Informationssicherheit | ${v.projectIsb} |\n` : '') +
    (v.clientContact && v.clientContact !== '' ? `| Ansprechpartner Auftraggeber | ${v.clientContact} |\n` : '') +
    (v.tester && v.tester !== '' ? `| Tester | ${v.tester} |\n` : '') +
    (v.gitMaster && v.gitMaster !== '' ? `| Verantwortlicher Git | ${v.gitMaster} |\n` : '') +
    (v.supporter && v.supporter !== '' ? `| Support | ${v.supporter} |\n` : '') +
    (v.documentators && v.documentators !== '' ? `| Verantwortlicher Dokumentation | ${v.documentators} |\n` : '')
    }

### Stundenbudget

Für den Abschluss des Projektes sind ${v.hourBudget} Stunden veranschlagt. Dies beinhaltet:
- [${v.budgetContainsManagement ? 'x' : ' '}] Projektleitung und -management
- [${v.budgetContainsDev ? 'x' : ' '}] Softwareentwicklung
- [${v.budgetContainsTesting ? 'x' : ' '}] Testing
- [${v.budgetContainsDocumentation ? 'x' : ' '}] Dokumentation
- [${v.budgetContainsMaintenance ? 'x' : ' '}] Software-Wartung
- [${v.budgetContainsSupport ? 'x' : ' '}] Support

## Voraussetzungen

${v.devSeparated ? 'Für diese Software gibt es separate Umgebungen und Daten für Tests/Entwicklung und Produktion.' : ''}

### Voraussetzungen für den Betrieb

#### Betrieb der Software

${v.prereqSoftware}

#### Betriebssysteme

${v.prereqOs}

#### Testing

${v.prereqTest}

## Installation und Deployment

${v.installation}

${v.shellInstall ? ("``` shell\n" + v.shellInstall + "\n```") : ''}

### Installation Testumgebung

${v.testEnv}

${v.shellTestEnv ? ("``` shell\n" + v.shellTestEnv + "\n```") : ''}

### Installation Entwicklungsumgebung

${v.devEnv}

${v.shellDevEnv ? ("``` shell\n" + v.shellDevEnv + "\n```") : ''}

### Update- und Freigabeprozess

${v.autodeploy ? '- [x]' : '- [ ]'} Die hier beschriebenen Prozesse triggern einen automatisierten Release.

${v.updateProcess}

${v.releaseProcess}

${v.manual ? ('### Hinweise zur Bedienung\n' + v.manual) : ''}

${v.thirdPartyDocu ? ('### Nutzung von Fremdsoftware\n' + v.thirdPartyDocu) : ''}

## Checkliste

- [${v.checklistDoable ? 'x' : ' '}] Machbarkeit geprüft
- [${v.checklistSpecs ? 'x' : ' '}] Lastenheft erstellt
- [${v.checklistcostplan ? 'x' : ' '}] Kostenplan erstellt
- [${v.checklistClientCosts ? 'x' : ' '}] Kundenseitige Kosten wurden kalkuliert und weitergegeben
- [${v.checklistImprovements ? 'x' : ' '}] Verbesserungsvorschläge eingeholt
- [${v.checklistImprovementsDone ? 'x' : ' '}] Verbesserungsvorschläge eingearbeitet
- [${v.checklistDocumentation ? 'x' : ' '}] Dokumentation erstellt
- [${v.checklistRelease ? 'x' : ' '}] Lauffähige Version erstellt, die alle gewünschten Features enthält
- [${v.checklistInstalled ? 'x' : ' '}] Auf Zielsystemen installiert
- [${v.checklistCourse ? 'x' : ' '}] Bedienungsanleitung erstellt
- [${v.checklistSecrets ? 'x' : ' '}] Alle Secrets separiert von Projektstruktur

${v.addition}

  `
}