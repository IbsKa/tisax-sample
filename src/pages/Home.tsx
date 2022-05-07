import { Title, Text, Anchor, TextInput, Textarea, Divider, Checkbox, CheckboxGroup, NumberInput, Select, Group, Button, Stack, Collapse, SegmentedControl, MantineTheme } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { Dropzone, DropzoneStatus } from "@mantine/dropzone";
import { useForm, zodResolver } from "@mantine/form";
import { useListState } from "@mantine/hooks";
import { Prism } from "@mantine/prism";
import React, { useRef, useState } from "react";
import { Upload } from "tabler-icons-react";
import { InputSchema, readmeSchema, schema } from "../schema/zodSchema";
import CreateReadme from "../utils/CreateReadme";


export default function Home() {
  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      projectTitle: "",
      projectStart: new Date(),
      projectEnd: new Date(),
      client: "",
      description: "",
      internal: false,
      clientData: false,
      paymentData: false,
      openInterfaces: false,
      tisaxRisk: "Sehr hoch",
      tisaxRiskReason: "",
      projectLead: "",
      projectRepo: "",
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
      budgetContainsMaintenance: false,
      budgetContainsSupport: false,
      prereqSoftware: "",
      prereqOs: "",
      prereqTest: "",
      installation: "",
      shellInstall: "",
      devEnv: "",
      devSeparated: false,
      shellDevEnv: "",
      testEnv: "",
      shellTestEnv: "",
      autodeploy: false,
      updateProcess: "",
      releaseProcess: "",
      manual: "",
      thirdPartyDocu: "",
      projectStatus: "Neu",
      checklistDoable: false,
      checklistSpecs: false,
      checklistcostplan: false,
      checklistImprovements: false,
      checklistImprovementsDone: false,
      checklistClientCosts: false,
      checklistDocumentation: false,
      checklistRelease: false,
      checklistInstalled: false,
      checklistCourse: false,
      checklistSecrets: false,
      addition: "",
      versioning: "Minor",
      author: "",
      remark: ""
    },
    validate: {}
  })

  const RenderSchema = (entry: InputSchema) => {

    switch (entry.inputType) {
      case "singleLine":
        return (
          // @ts-ignore
          <TextInput {...form.getInputProps(entry.key)}
            placeholder={entry.placeholder} label={entry.label}
            required={entry.required} />
        )
      case "select":
        if ((entry.selectValues?.length ?? 0) < 5) {
          return (
            <div>
              <Text mb="md" size="sm">{entry.label}</Text>
              <SegmentedControl data={entry.selectValues!}
                // @ts-ignore
                {...form.getInputProps(entry.key)} />
            </div>
          )
        }
        return (
          // @ts-ignore
          <Select data={entry.selectValues!}  {...form.getInputProps(entry.key)}
            placeholder={entry.placeholder} label={entry.label}
            required={entry.required} />
        )
      case "multiLine":
        return (
          // @ts-ignore
          <Textarea rows={6} minRows={4} {...form.getInputProps(entry.key)}
            placeholder={entry.placeholder} label={entry.label}
            required={entry.required} />
        )
      case "checkbox":
        return (
          <Checkbox label={entry.label} placeholder={entry.placeholder}
            // @ts-ignore
            {...form.getInputProps(entry.key, { type: 'checkbox' })} />
        )
      case "shell":
        // @ts-ignore
        const val = () => form.getInputProps(entry.key).value
        return (
          <div>

            <Textarea rows={6} minRows={4} placeholder={entry.placeholder} label={entry.label}
              // @ts-ignore
              {...form.getInputProps(entry.key)}
              required={entry.required} />
            <Prism noCopy={val() === ''} withLineNumbers mt="sm" language={"bash"}>
              {val()}
            </Prism>
          </div>
        )
      case "number":
        return (
          <NumberInput step={entry.step} placeholder={entry.placeholder} stepHoldDelay={500}
            stepHoldInterval={100} // @ts-ignore
            label={entry.label} min={0} {...form.getInputProps(entry.key)} />
        )
      case "headline":
        return <div><Divider my="xl" /><Title my="md" order={2}>{entry.label}</Title>
          <Text>{entry.placeholder}</Text></div>
      case "subheadline":
        return <div><Divider my="xl" /><Title my="md" order={4}>{entry.label}</Title>
          <Text color="dimmed">{entry.placeholder}</Text></div>
      case "date":
        // @ts-ignore
        return <DatePicker locale="de" {...form.getInputProps(entry.key)} required={entry.required} label={entry.label} />
      default:
        return <div></div>
    }
  }

  interface ChangelogEntry {
    author: string,
    remark: string,
    version: string,
    date: Date
  }
  const loadReadme = (readme: any) => {
    console.log('readme dropped', readme)
    const keys = Object.keys(readme)
    keys.forEach((k) => {
      if (k === 'changelog') changelogListHandle.setState(readme[k])
      if (readmeSchema.findIndex((s) => s.key === k && s.inputType === "date") !== -1) {
        // @ts-ignore
        form.setFieldValue(k, new Date(readme[k]))
      } else {
        // @ts-ignore
        form.setFieldValue(k, readme[k])
      }
    });
  }
  const saveReadme = (values: any) => {
    console.log(values)
    if (!values.changelog || values.changelog.length === 0) {
      values.changelog = [] as Array<ChangelogEntry>
      values.changelog.push({
        author: values.author,
        remark: values.remark,
        version: "1.0.0",
        date: new Date()
      })
    } else {
      const lastChangelogEntry = values.changelog[values.changelog.length - 1]
      const nextVersion = incrementVersion(lastChangelogEntry.version, values.versioning)
      const newChangelogEntry = {
        author: values.author,
        remark: values.remark,
        date: new Date(),
        version: nextVersion
      }
      values.changelog.push(newChangelogEntry)
    }


    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(values)));
    element.setAttribute('download', 'readme-meta.json');

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }
  const incrementVersion = (currentVersion: string, versioningMode: string) => {
    const [major, minor, patch] = currentVersion.split(".")
    switch (versioningMode.toLowerCase()) {
      case "major":
        const nextMajor = parseInt(major) + 1
        return `${nextMajor}.0.0`
      case "minor":
        const nextMinor = parseInt(minor) + 1
        return `${major}.${nextMinor}.0`
      case "patch":
        const nextPatch = parseInt(patch) + 1
        return `${major}.${minor}.${nextPatch}`
      default:
        throw new Error("unknwon version mode");

    }
  }

  const createReadme = (values: any) => {

    const readme = CreateReadme(values);
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(readme));
    element.setAttribute('download', 'readme.md');

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

  const dropzoneChildren = () => (
    <Group position="center" spacing="xl" style={{ minHeight: 220, pointerEvents: 'none' }}>
      <Upload size={80} />

      <div>
        <Text size="lg" inline my="md">
          Vorhandene Readme-Meta laden.
        </Text>
        <Text size="sm" color="dimmed" inline mt={7}>
          Alle Felder werden dann vorausgefüllt.
        </Text>
      </div>
    </Group>
  );

  const [howToUseOpened, setHowToUseOpened] = useState(false)
  const [changelogList, changelogListHandle] = useListState([] as Array<ChangelogEntry>)
  return <div style={{ maxWidth: 768 }}><Stack>
    <Title order={1} mb="xl">Readme-Generator</Title>
    <Button variant="subtle" color="gray" fullWidth onClick={() => setHowToUseOpened((c) => !c)}>Funktionsweise</Button>
    <Collapse in={howToUseOpened}>
      <Stack p="md">
        <Text weight={700}>Alle Elemente, die mit einem roten Stern markiert sind, müssen zwingend ausgefüllt werden.</Text>
        <Text>Nach dem Ausfüllen kann eine Meta-Datei erzeugt werden ("Speichern"). Diese Meta-Datei ist unter dem Namen "readme-meta.json"
          im Projekt-Root abzulegen. Sie dient dazu, Änderungen in der readme-Datei zu tracken und kann später importiert werden, damit man
          während des Projektfortschritts nicht alle Felder neu befüllen muss.
        </Text>
        <Text>Über den Befehl "Readme erzeugen" kann eine readme.md-Datei erzeugt werden, die ebenfalls im Projekt-Root abzulegen ist. Diese
          Seite wird dann beim Öffnen des Projektes in GitHub angezeigt.
        </Text>
      </Stack>
    </Collapse>
    <Text>Dieses Tool hilft bei der richtlinienkonformen Erstellung von readmes.</Text>
    <Text>Die resultierende Datei ist eine Markdown-Datei, das heißt
      es kann auch inline <Anchor href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet">Markdown</Anchor> in den Textfeldern verwendet werden. </Text>
    <Dropzone accept={['application/json']} onDrop={function (files: File[]): void {
      files[0].text().then(f => loadReadme(JSON.parse(f)))
    }}>
      {dropzoneChildren}
    </Dropzone>
  </Stack>
    {!changelogList || changelogList.length === 0 ? <div /> :
      (<Stack p="md">
        <Title order={2} my="xl">Changelog</Title>
        {changelogList.map(entry => {
          return (

            <div key={entry.version}>
              <Text size="sm" color="dimmed">{entry.version} • {new Date(entry.date).toLocaleDateString("de")} • {entry.author}</Text>
              <Text size="md">{entry.remark}</Text>
            </div>
          )
        })}
      </Stack>)
    }
    <form>
      <Stack p="md">
        {readmeSchema.map((entry) => <div key={entry.key}>{RenderSchema(entry)}</div>)}
        <Divider my="xl" />
        <Group position="apart" my="xl">
          <Button color="red" variant="outline" type="submit" onClick={() => { form.reset(); changelogListHandle.setState([]) }}>Formular zurücksetzen</Button>
          <Group position="right">
            <Button color="light" variant="outline" type="submit" onClick={form.onSubmit((values) => createReadme(values))}>Readme erzeugen</Button>
            <Button type="submit" onClick={form.onSubmit((values) => saveReadme(values))}>Speichern</Button>
          </Group>
        </Group>
      </Stack>
    </form>
  </div >
}