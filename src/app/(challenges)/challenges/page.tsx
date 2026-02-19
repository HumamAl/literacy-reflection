import { challenges } from "@/data/challenges";
import { ChallengeCard } from "@/components/challenges/challenge-card";
import { FlowDiagram } from "@/components/challenges/flow-diagram";
import { BeforeAfter } from "@/components/challenges/before-after";
import { MetricBar } from "@/components/challenges/metric-bar";
import { ArchitectureDiagram } from "@/components/challenges/architecture-diagram";
import { TimelineDiagram } from "@/components/challenges/timeline-diagram";
import {
  Mic,
  Monitor,
  Cpu,
  FileText,
  Save,
} from "lucide-react";

const voicePipelineSteps = [
  { label: "Teacher Speaks", icon: Mic },
  { label: "Browser Records", icon: Monitor },
  { label: "Speech-to-Text", icon: Cpu, highlight: true },
  { label: "Review Text", icon: FileText },
  { label: "Save Entry", icon: Save },
];

const beforeAfterData = {
  before: {
    label: "Manual Tagging",
    items: [
      "Manual tagging is slow and inconsistent",
      "Teachers tag hours or days after observation",
      "Bloom's taxonomy levels often misidentified",
      "Different teachers categorize differently",
    ],
  },
  after: {
    label: "AI Classification",
    items: [
      "OpenAI classifies in under 2 seconds",
      "Tags generated instantly on save",
      "Bloom's levels mapped from observation language",
      "Consistent taxonomy across all teachers",
    ],
  },
};

const dashboardMetrics = [
  { label: "Query Response", value: 45, max: 200, unit: "ms" },
  { label: "Chart Render", value: 120, max: 500, unit: "ms" },
  { label: "Data Freshness", value: 100, max: 100, unit: "%" },
  { label: "Report Generation", value: 2100, max: 5000, unit: "ms" },
];

const integrationPhases = [
  {
    title: "MVP Launch",
    description:
      "Core platform with authentication, student management, feedback entry, AI tagging, analytics dashboard, and Stripe billing.",
    duration: "Month 1-2",
    status: "active" as const,
    deliverables: [
      "Auth",
      "Student CRUD",
      "Feedback Entry",
      "AI Tagging",
      "Dashboard",
      "Stripe",
    ],
  },
  {
    title: "Google Classroom",
    description:
      "Import rosters and sync classes directly from Google Classroom with SSO support.",
    duration: "Month 3",
    status: "upcoming" as const,
    deliverables: ["Roster Import", "Class Sync", "Single Sign-On"],
  },
  {
    title: "Schoology",
    description:
      "Pull class structures and student lists from Schoology LMS with bidirectional grade sync.",
    duration: "Month 4",
    status: "upcoming" as const,
    deliverables: ["Class Import", "Student Lists", "Grade Sync"],
  },
  {
    title: "Advanced Analytics",
    description:
      "Longitudinal trend analysis, cohort tracking across semesters, and exportable parent-facing reports.",
    duration: "Month 5+",
    status: "upcoming" as const,
    deliverables: ["Trend Analysis", "Cohort Tracking", "Parent Reports"],
  },
];

export default function ChallengesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <div>
          <h1 className="text-2xl font-bold">Technical Challenges</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Key engineering challenges and how I would solve them
          </p>
        </div>

        <div className="space-y-6">
          {/* Challenge 1: Voice Pipeline */}
          <ChallengeCard
            title={challenges[0].title}
            description={challenges[0].description}
            number={1}
          >
            <FlowDiagram steps={voicePipelineSteps} />
          </ChallengeCard>

          {/* Challenge 2: AI Classification */}
          <ChallengeCard
            title={challenges[1].title}
            description={challenges[1].description}
            number={2}
          >
            <BeforeAfter
              before={beforeAfterData.before}
              after={beforeAfterData.after}
            />
          </ChallengeCard>

          {/* Challenge 3: FERPA Architecture */}
          <ChallengeCard
            title={challenges[2].title}
            description={challenges[2].description}
            number={3}
          >
            <ArchitectureDiagram />
          </ChallengeCard>

          {/* Challenge 4: Real-Time Dashboard */}
          <ChallengeCard
            title={challenges[3].title}
            description={challenges[3].description}
            number={4}
          >
            <div className="space-y-3">
              {dashboardMetrics.map((metric) => (
                <MetricBar
                  key={metric.label}
                  label={metric.label}
                  value={metric.value}
                  max={metric.max}
                  unit={metric.unit}
                />
              ))}
            </div>
          </ChallengeCard>

          {/* Challenge 5: Integration-Ready */}
          <ChallengeCard
            title={challenges[4].title}
            description={challenges[4].description}
            number={5}
          >
            <TimelineDiagram phases={integrationPhases} />
          </ChallengeCard>
        </div>
      </div>
    </div>
  );
}
