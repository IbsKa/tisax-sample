import { z } from "zod"

export type inputType = "headline" | "singleLine" | "multiLine" | "shell" | "select" | "multiselect" | "checkbox" | "date" | "number" | "manualInsert"
export interface InputSchema {
  key: string
  inputType: inputType
  label: string
  placeholder?: string
  description?: string
  required: boolean
  initialValue?: string
  selectValues?: Array<string>
}

export const schema = z.object({
  projectTitle: z.string().min(5).max(40),
  tisaxRiskReason: z.string().min(30),
  client: z.string().min(5),
  projectLead: z.string(),
  projectIsb: z.string(),
  clientContact: z.string(),
  tester: z.string().optional(),
  gitMaster: z.string(),
  supporter: z.string().optional(),
  documentators: z.string().optional(),
  hourBudget: z.number(),
  budgetContainsManagement: z.boolean(),
  budgetContainsDev: z.boolean(),
  budgetContainsDocumentation: z.boolean(),
  budgetContainsTesting: z.boolean(),
  budgetContainsSupport: z.boolean(),
  prereqSoftware: z.string().optional(),
  prereqOs: z.string().optional(),
  prereqTest: z.string().optional(),
  installation: z.string(),
  shellInstall: z.string(),
  devEnv: z.string().optional(),
  shellDevEnv: z.string().optional(),
  testEnv: z.string().optional(),
  shellTestEnv: z.string().optional(),
  updateProcess: z.string().min(30).optional(),
  releaseProcess: z.string().min(10).optional(),
  manual: z.string().min(30).optional(),
  thirdPartyDocu: z.string().optional(),
  checklistDoable: z.boolean(),
  checklistSpecs: z.boolean(),
  checklistcostplan: z.boolean(),
  checklistImprovements: z.boolean(),
  checklistImprovementsDone: z.boolean(),
  checklistDocumentation: z.boolean(),
  checklistRelease: z.boolean(),
  checklistInstalled: z.boolean(),
  checklistCourse: z.boolean(),
})



export const readmeSchema: Array<InputSchema> = [
  { key: "generalHeadline", inputType: "headline", label: "Generelle Informationen", required: false },
  { key: "projectTitle", inputType: "singleLine", label: "Projektname", required: true },
  { key: "tisaxRiskReason", inputType: "multiLine", label: "Begründung TISAX-Einstufung", required: true },
  { key: "tisaxRisk", inputType: "select", label: "Einstufung Risikobeurteilung", initialValue: "Superschlimm", selectValues: ["Superschlimm", "Ganz schlimm", "mittelschlimm"], required: true },
  { key: "client", inputType: "singleLine", label: "Auftraggeber", placeholder: "Auftraggebende Firma", required: true },
  { key: "personsHeadline", inputType: "headline", label: "Beteiligte Personen", required: false },
  { key: "projectLead", inputType: "singleLine", label: "Projektverantwortlicher", placeholder: "Verantwortlicher für das Gesamptprojekt", required: true },
  { key: "projectIsb", inputType: "singleLine", label: "ISB", placeholder: "Verantwortlicher für die Informationssicherheit", required: true },
  { key: "clientContact", inputType: "singleLine", label: "Ansprechpartner Auftraggeber", required: true },
  { key: "tester", inputType: "singleLine", label: "Verantwortliche Testing", placeholder: "Gibt es Personen, die für den Test vorgesehen sind?", required: false },
  { key: "gitMaster", inputType: "singleLine", label: "Verantwortlicher Masterbranch", placeholder: "Wer darf in den Master-Branch mergen?", required: true },
  { key: "supporter", inputType: "singleLine", label: "Support", placeholder: "Wer ist für den Support vorgesehen?", required: false },
  { key: "documentators", inputType: "singleLine", label: "Dokumentation", required: false },
  { key: "budgetHeadline", inputType: "headline", label: "Budget", required: false },
  { key: "hourBudget", inputType: "number", label: "Stundenbudget", required: false },
  { key: "budget", inputType: "manualInsert", label: "Im Budget sind berücksichtigt:", required: false },
  { key: "budgetContainsManagement", inputType: "checkbox", label: "Projektmanagement", required: true },
  { key: "budgetContainsDev", inputType: "checkbox", label: "Softwareentwicklung", required: true },
  { key: "budgetContainsDocumentation", inputType: "checkbox", label: "Dokumentation", required: true },
  { key: "budgetContainsTesting", inputType: "checkbox", label: "Testing", required: true },
  { key: "budgetContainsSupport", inputType: "checkbox", label: "Support", required: true },
  { key: "budget", inputType: "manualInsert", label: "", required: false },
  { key: "prereqHeadline", inputType: "headline", label: "Anleitung", placeholder: "Hier bitte genaue Installations- und Wiederherstellungsanleitungen angeben", required: false },
  { key: "prereqSoftware", inputType: "multiLine", label: "Voraussetzungen Softwareentwicklung", required: true },
  { key: "prereqOs", inputType: "multiLine", label: "Voraussetzungen Betriebssystem", required: false },
  { key: "prereqTest", inputType: "multiLine", label: "Voraussetzungen Test", required: false },
  { key: "installation", inputType: "multiLine", label: "Installationsanleitung", required: false },
  { key: "shellInstall", inputType: "shell", label: "Code für Installation", required: false },
  { key: "devEnv", inputType: "multiLine", label: "Installationsanleitung Entwicklungsumgebung", required: false },
  { key: "shellDevEnv", inputType: "shell", label: "Code für Installation Entwicklungsumgebung", required: false },
  { key: "testEnv", inputType: "multiLine", label: "Installationsanleitung Testumgebung", required: false },
  { key: "shellTestEnv", inputType: "shell", label: "Code für Installation Testumgebung", required: false },
  { key: "updateProcess", inputType: "multiLine", label: "Updateprozess", placeholder: "Bitte hier möglichst genau den Testprozess definieren", required: true },
  { key: "releaseProcess", inputType: "multiLine", label: "Freigabeprozess", placeholder: "Wer gibt Releases frei und worauf sind die Entscheidungen begründet", required: true },
  { key: "manual", inputType: "multiLine", label: "Bedienung/Anleitung", required: false },
  { key: "thirdPartyDocu", inputType: "multiLine", label: "Dokumentation Nutzung Fremdsoftware", required: false },
  { key: "checklistHeadline", inputType: "headline", label: "Checkliste", required: false },
  { key: "tisaxRisk", inputType: "select", label: "Projektstatus", initialValue: "Superschlimm", selectValues: ["Neu", "Konzept", "In Arbeit", "Grundauftrag abeschlossen", "Schleife", "Abgeschlossen", "Abgelehnt"], required: true },
  { key: "checklist", inputType: "manualInsert", label: "Fortschritt des Projektes", required: false },
  { key: "checklistDoable", inputType: "checkbox", label: "Machbarkeit geprüft", required: true },
  { key: "checklistSpecs", inputType: "checkbox", label: "Lastenheft erstellt", required: true },
  { key: "checklistcostplan", inputType: "checkbox", label: "Support", required: true },
  { key: "checklistImprovements", inputType: "checkbox", label: "Projektmanagement", required: true },
  { key: "checklistImprovementsDone", inputType: "checkbox", label: "Softwareentwicklung", required: true },
  { key: "checklistDocumentation", inputType: "checkbox", label: "Dokumentation", required: true },
  { key: "checklistRelease", inputType: "checkbox", label: "Testing", required: true },
  { key: "checklistInstalled", inputType: "checkbox", label: "Support", required: true },
  { key: "checklistCourse", inputType: "checkbox", label: "Support", required: true },
  { key: "checklistClientCosts", inputType: "checkbox", label: "Kalkulation kundenseitige Kosten", required: true },
  { key: "endchecklist", inputType: "manualInsert", label: "Fortschritt des Projektes", required: false },
]