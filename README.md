# tisax-sample
Beispielprojekt zur Einhaltung der Softwareentwicklungsrichtlinie

## Ziel und Verwendung
Dies ist ein Beispielprojekt für die **Einhaltung einer TISAX-konformen Entwicklung**. Es handelt sich sowohl um ein kompilierbares Projekt, als auch um ein Dokument, dass die zu verwendenden Techniken und Richtlinien demonstriert.
Das resultierende Projekt ist ein Kommandozeilen-Tool, das eine Hilfestellung zur Risikoanalyse bieten soll.

Es handelt sich um ein Typescript-Projekt im node.js-Umfeld, mit npm als Paketmanager.

## Die README.md-Datei
Jedes Projekt sollte im Root-Ordner eine README.md enthalten, die folgende Informationen enthält:
- Installationsanleitung
- Anleitung zum Ausführen von Tests, inklusive Erstellen der Testumgebung
- Informationen über den Update- und Deploymentprozess
- Information über die Nutzung von Fremdsoftware

**Die hier angezeigte Seite wird automatisch aus der README.md erstellt.** [Markdown](https://www.markdownguide.org/getting-started/) ist eine vereinfachte Auszeichnungssprache, die auch im Klartext lesbar sein soll. 
#### Installationsanleitung

Installationsbeschreibungen sollten Bestandteil jedes Projekts sein. Eine Stichpunktliste über die notwendigen Voraussetzungen ist ebenfalls hilfreich.

## Voraussetzungen
- [node.js, Version 14+](https://nodejs.org/en/), inklusive npm
- git und GitHub-Zugang
- Windows oder macOS

## Installation
Wenn möglich können Installationsanleitungen durch shell-Befehle dargestellt werden. Im vorliegenden Fall ist die Installation für Clients und Entwickler gleich.

1. Shell öffnen und zum Ordner navigieren, in dem man Quellcodes speichert
```shell
git clone https://github.com/IbsKa/tisax-sample # source code herunterladen
cd tisax-sample # zum quellcode
npm i # installieren von paketen
npm run build # "kompilieren"
npm install -g
```
2. Ausführen
  - Ausführen aus dem Projektordner
```shell
node dist/index.js # funktioniert nur im projekt-ordner
```
   - *oder* Ausführen von überall
```shell
tisax-sample # funktioniert von überall
```

## Bedienung
- Terminal öffnen und `tisax-sample` eingeben. Es handelt sich um ein geführtes Programm.
- Das Programm kann vorzeitig mit <kbd>Ctrl</kbd> + <kbd>C</kbd> beendet werden.