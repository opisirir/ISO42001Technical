export interface Translatable<T = string> {
  tr: T;
  en: T;
}

export interface SourceReference {
  sourceId: string;
  fileName: string;
  clause?: string;
  annex?: string;
  page?: number;
  note?: string;
}

export interface IsoReference {
  standard: string;
  clause: string;
  annex?: string;
  relationship: "direct" | "supporting" | "indirect";
  rationale: Translatable;
  sources: SourceReference[];
  confidence: "high" | "medium" | "low";
}

export interface ChecklistItem {
  id: string;
  title: Translatable;
  description: Translatable;
  requirementType: "standard-related" | "recommended-practice";
  isoReferences: IsoReference[];
  evidence: Translatable<string[]>;
  responsibleRoles: Translatable<string[]>;
  verificationMethod: Translatable;
  status: "not-started" | "in-progress" | "completed" | "not-applicable";
  notes?: string;
}

export interface EvidenceItem {
  id: string;
  title: Translatable;
  description: Translatable;
  formatExamples: string[];
  required: boolean;
  verificationMethod: Translatable;
}

export interface TechnicalActivity {
  id: string;
  slug: string;
  title: Translatable;
  objective: Translatable;
  description: Translatable;
  actions: Translatable<string[]>;
  isoReferences: IsoReference[];
  checklist: ChecklistItem[];
  evidence: EvidenceItem[];
  completionCriteria: Translatable<string[]>;
  commonMistakes: Translatable<string[]>;
  relatedActivities: string[];
}

export interface ModelStage {
  id: string;
  order: number;
  slug: string;
  title: Translatable;
  summary: Translatable;
  activities: TechnicalActivity[];
}

export interface GlossaryTerm {
  term: Translatable;
  englishEquivalent?: string;
  definition: Translatable;
  isoReference?: string;
}
