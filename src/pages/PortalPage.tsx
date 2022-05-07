import { Group, Text } from "@mantine/core";
import React from "react";

export default function PortalPage() {
  return (
    <Group position="apart" p={50} style={{ maxWidth: 1050 }}>
      <Text color="dimmed">© IBS Dr. Klaus Schnürer GmbH, 2022</Text>
      <Text color="dimmed" size="xs">Impressum</Text>
    </Group>
  )
}