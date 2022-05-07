import { Title, Text } from "@mantine/core";
import React from "react";

export default function Tools() {
  return (
    <div>
      <Title order={1}>Freigabeprozess Software-Tools</Title>
      <Title order={3}>Versionsverwaltung</Title>
      <Text>
        Die Versionsverwaltung des Quellcodes erfolgt bei jedem Softwareprojekt mit git, als Remote-server ist GitHub zu verwenden. Der Zugriff auf die Versionsverwaltung insgesamt und für ein-zelne Projekte wird über das Usermanagement in GitHub verwaltet. Alle Änderungen der Soft-ware müssen mit Hilfe der Versionsverwaltung nachvollzogen und bei Bedarf rückgängig ge-macht werden können. Zur Sicherstellung der Datensicherung ist die Versionsverwaltung im Backup-Konzept berücksichtigt.
        Änderungen im Hauptzweig der Versionsverwaltung sind ausschließlich durch die Projektleitung bzw. von ihr benannten Stellvertreten durchzuführen. Es liegt in der Verantwortung der Projekt-leitung, dass Rechtemanagement von GitHub so zu verwalten, dass dies technisch sichergestellt ist.
        Insbesondere ist in der Designphase eines Projektes schriftlich festzuhalten, wer Änderungen in den Produktzweig der Versionsverwaltung einpflegen darf.
        Nach Abschluss der täglichen Arbeit sollte nach Möglichkeit der Remoteserver synchronisiert werden. Vor Beginn der täglichen Arbeit ist ein sogenannter „Fetch“ durchzuführen.
      </Text>
      <Text>

      </Text>
    </div>)
}