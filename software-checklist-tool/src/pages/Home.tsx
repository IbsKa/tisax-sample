import { Title, Text, Anchor, TextInput, Textarea, Divider, Checkbox, CheckboxGroup, NumberInput, Select, Group, Button } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import React from "react";
import { InputSchema, readmeSchema, schema } from "../schema/zodSchema";


export default function Home() {
  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      projectTitle: "",
      tisaxRiskReason: "",
      client: "",
      projectLead: "",
      projectIsb: "",
      clientContact: "",
      tester: "",
      gitMaster: "",
      supporter: "",
      documentators: "",
      hourBudget: 0,
      budgetContainsManagement: false,
      budgetContainsDev: false,
      budgetContainsDocumentation: false,
      budgetContainsTesting: false,
      budgetContainsSupport: false,
      prereqSoftware: "",
      prereqOs: "",
      prereqTest: "",
      installation: "",
      shellInstall: "",
      devEnv: "",
      shellDevEnv: "",
      testEnv: "",
      shellTestEnv: "",
      updateProcess: "",
      releaseProcess: "",
      manual: "",
      thirdPartyDocu: "",
      checklistDoable: false,
      checklistSpecs: false,
      checklistcostplan: false,
      checklistImprovements: false,
      checklistImprovementsDone: false,
      checklistDocumentation: false,
      checklistRelease: false,
      checklistInstalled: false,
      checklistCourse: false,
    },
    validate: {}
  })

  const renderSchema = (entry: InputSchema) => {

    switch (entry.inputType) {
      case "singleLine":
        return (
          // @ts-ignore
          <TextInput my="md" {...form.getInputProps(entry.key)}
            placeholder={entry.placeholder} label={entry.label}
            required={entry.required} />
        )
      case "select":
        return (
          // @ts-ignore
          <Select data={entry.selectValues!}  {...form.getInputProps(entry.key)}
            placeholder={entry.placeholder} label={entry.label}
            required={entry.required} />
        )
      case "multiLine":
        return (
          // @ts-ignore
          <Textarea rows={6} minRows={4} my="md" {...form.getInputProps(entry.key)}
            placeholder={entry.placeholder} label={entry.label}
            required={entry.required} />
        )
      case "checkbox":
        return (
          <Checkbox my="md" label={entry.label} placeholder={entry.placeholder}
            // @ts-ignore
            {...form.getInputProps(entry.key)} />
        )
      case "shell":
        return (
          // @ts-ignore
          <Textarea rows={6} minRows={4} my="md" {...form.getInputProps(entry.key)}
            placeholder={entry.placeholder} label={entry.label}
            required={entry.required} />
        )
      case "number":
        return (
          // @ts-ignore
          <NumberInput placeholder={entry.placeholder} label={entry.label} min={0} my="md" {...form.getInputProps(entry.key)} />
        )
      case "headline":
        return <div><Divider mt="xl" /><Title my="xl" order={2}>{entry.label}</Title>
          <Text>{entry.placeholder}</Text></div>
      default:
        break;
    }
  }

  return <div style={{ maxWidth: 768 }}>
    <Title order={1}>Readme-Generator</Title>
    <Text>Dieses Tool hilft bei der richtlinienkonformen Erstellung von readmes.</Text>
    <Text>Die resultierende Datei ist eine Markdown-Datei, das heißt
      es kann auch inline <Anchor href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet">Markdown</Anchor> in den Textfeldern verwendet werden. </Text>
    {readmeSchema.map((entry) => <div key={entry.key}>{renderSchema(entry)}</div>)}
    <Divider my="xl" />
    <Group position="right" my="xl">
      <Button color="light" variant="outline">Readme erzeugen</Button>
      <Button>Speichern</Button>
    </Group>
  </div>
}