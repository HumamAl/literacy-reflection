import type { LucideIcon } from "lucide-react";

// Sidebar navigation
export interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
}

// Challenge visualization types
export type VisualizationType =
  | "flow"
  | "before-after"
  | "metrics"
  | "architecture"
  | "risk-matrix"
  | "timeline";

export interface Challenge {
  id: string;
  title: string;
  description: string;
  visualizationType: VisualizationType;
}

// Proposal types
export interface Profile {
  name: string;
  tagline: string;
  bio: string;
  approach: { title: string; description: string }[];
  skillCategories: { name: string; skills: string[] }[];
}

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  tech: string[];
  relevance?: string;
}

// --- Literacy Reflection Tool Types ---

// Literacy skill categories
export type LiteracySkill =
  | "decoding"
  | "phonics"
  | "fluency"
  | "vocabulary"
  | "comprehension"
  | "strategy";

// Bloom's Taxonomy levels
export type BloomsLevel =
  | "remember"
  | "understand"
  | "apply"
  | "analyze"
  | "evaluate"
  | "create";

export type InputMethod = "voice" | "typed";

export interface Student {
  id: string;
  name: string;
  grade: string;
  readingLevel: string;
  classroomId: string;
  enrolledDate: string;
  initials: string;
}

export interface Classroom {
  id: string;
  name: string;
  teacherName: string;
  grade: string;
  studentCount: number;
}

export interface FeedbackEntry {
  id: string;
  studentId: string;
  studentName: string;
  date: string;
  content: string;
  inputMethod: InputMethod;
  literacySkill: LiteracySkill;
  bloomsLevel: BloomsLevel;
  tags: string[];
  createdAt: string;
}

export interface DashboardStats {
  totalEntries: number;
  totalStudents: number;
  avgEntriesPerStudent: number;
  topSkill: string;
  topBloomsLevel: string;
  thisWeekEntries: number;
}

export interface SkillDistribution {
  skill: string;
  count: number;
  color: string;
}

export interface BloomsDistribution {
  level: string;
  count: number;
  color: string;
}

export interface StudentReport {
  studentId: string;
  studentName: string;
  grade: string;
  readingLevel: string;
  entryCount: number;
  topSkill: string;
  topBloomsLevel: string;
}
