
# Readme-Helper

**Problemstellung**: Interne Prozesse werden immer komplexer, gleichzeitig steigen die Anforderungen hinsichtlich Dokumentation.

Dieses Tool soll dabei helfen, alle Informationen in einem übersichtlichen Dokument versionsverwaltet zur Verfügung zu stellen. Es kann eine readme.md erzeugt werden, die auf der Startseite des Repositories angezeigt wird. Dabei ist sichergestellt, dass alle notwendigen Informationen enthalten sind, außer wird die Änderungshistorie automatisch gepflegt.

Das Projekt befindet sich im Status: **Grundauftrag abeschlossen**

## Änderungshistorie

Diese Änderungshistorie bezieht sich ausschließlich auf die readme-Datei. Alle Details zum Changelog entnehmen Sie bitte dem Absatz 'Update- und Freigabeprozess'.


| Version | Datum | Autor | Bemerkung |
| ------- | ----- | ----- | --------- |
| 1.0.0 | 7.5.2022 | BF | Ersterstellung |

Änderungen in dieser Datei sind ebenfalls der git-Historie zu entnehmen.

Es ist Aufgabe der ändernden Person, Projektbeteiligte über etwaige Änderungen zu informieren. Dies betrifft insbesondere Änderungen hinsichtlich Lasten- und Pflichtenheft.

## Risikoeinteilung TISAX

Einstufung: **Normal**

- [x] Dieses Projekt ist ausschließlich für Mitarbeiter der IBS GnbH bestimmt
- [ ] Dieses Projekt verarbeitet *und* speichert Kundendaten
- [ ] Dieses Projekt verarbeitet *und* speichert Zahlungsdsaten
- [ ] Es gibt über das Internet erreichbare Schnittstellen

Die Einstufung wird folgendermaßen begründet:

- Dieses Tool läuft ausschließlich im Browser des Nutzers. Es gibt keinen Server, der kompromittiert werden kann.
- Es werden keine Daten auf Servern gespeichert.
- Die Dateien, die von diesem Tool erzeugt werden, sind sowieso für die Öffentlichkeit bestimmt.

## Ziel und Verwendung

**Problemstellung**: Interne Prozesse werden immer komplexer, gleichzeitig steigen die Anforderungen hinsichtlich Dokumentation.

Dieses Tool soll dabei helfen, alle Informationen in einem übersichtlichen Dokument versionsverwaltet zur Verfügung zu stellen. Es kann eine readme.md erzeugt werden, die auf der Startseite des Repositories angezeigt wird. Dabei ist sichergestellt, dass alle notwendigen Informationen enthalten sind, außer wird die Änderungshistorie automatisch gepflegt.

### Auftraggeber

Das Projekt wurde in Auftrag gegeben von:

**IBS Dr. Klaus Schnürer GmbH**

### Beteiligte Personen

| Rolle                                   | Person                   |
| --------------------------------------- | ------------------------ |
| Projektverantwortlicher | Frank Bielecke |
| Verantwortlicher Informationssicherheit | Benjamin Allmendinger |
| Ansprechpartner Auftraggeber | Frank Bielecke |
| Verantwortlicher Git | Frank Bielecke |


### Stundenbudget

Für den Abschluss des Projektes sind 24 Stunden veranschlagt. Dies beinhaltet:
- [x] Projektleitung und -management
- [x] Softwareentwicklung
- [x] Testing
- [x] Dokumentation
- [x] Software-Wartung
- [x] Support

## Voraussetzungen



### Voraussetzungen für den Betrieb

#### Betrieb der Software

Chrome, Firefox oder andere auf Chromium basierende Browser.

#### Betriebssysteme

Lauffähig auf allen Betriebssystemen.

#### Testing

Keine Voraussetzungen.

## Installation und Deployment

Keine Installation notwendig. Tool wird aufgerufen über [readme-helper.ibs.engineering](readme-helper.ibs.engineering).



### Installation Testumgebung

Für die Bearbeitung wird lediglich ein Texteditor wie Visual Studio Code benötigt.

``` shell
git clone https://github.com/IbsKa/tisax-sample
npm i
```

### Installation Entwicklungsumgebung

Für die Bearbeitung wird lediglich ein Texteditor wie Visual Studio Code benötigt.

``` shell
git clone https://github.com/IbsKa/tisax-sample
npm i
```

### Update- und Freigabeprozess

- [ ] Die hier beschriebenen Prozesse triggern einen automatisierten Release.

Für das Deployment wird AWS Amplify benötigt. Amplify lädt den build automatisch hoch und ist in der Lage, die Seite statisch zu serven.

``` bash
amplify pull
amplify publish
```

Freigabe nach eigenem Ermessen

### Hinweise zur Bedienung
Die Bedienungsanleitung ist Bestandteil der Website

### Nutzung von Fremdsoftware
Alle verwendete Software ist open source.

Details über die verwendeten Pakete können im Projekt-Root unter package.json eingesehen werden.

## Checkliste

- [x] Machbarkeit geprüft
- [ ] Lastenheft erstellt
- [ ] Kostenplan erstellt
- [ ] Kundenseitige Kosten wurden kalkuliert und weitergegeben
- [ ] Verbesserungsvorschläge eingeholt
- [ ] Verbesserungsvorschläge eingearbeitet
- [ ] Dokumentation erstellt
- [x] Lauffähige Version erstellt, die alle gewünschten Features enthält
- [ ] Auf Zielsystemen installiert
- [ ] Bedienungsanleitung erstellt
- [ ] Alle Secrets separiert von Projektstruktur



  