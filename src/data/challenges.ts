import type { Challenge } from "@/lib/types";

export const challenges: Challenge[] = [
  {
    id: "voice-pipeline",
    title: "Voice-to-Text Feedback Pipeline",
    description:
      "Teachers need fast feedback entry during reading sessions. Voice recording with auto-transcription lets them observe and record without looking at a screen.",
    visualizationType: "flow",
  },
  {
    id: "ai-classification",
    title: "AI-Powered Literacy Classification",
    description:
      "Every feedback entry needs to be tagged with a literacy skill area and Bloom's taxonomy level. AI handles this instantly and consistently.",
    visualizationType: "before-after",
  },
  {
    id: "ferpa-architecture",
    title: "FERPA-Compliant Data Architecture",
    description:
      "Student data requires FERPA compliance. Row-level security in Supabase ensures teachers only access their own students, with encryption at rest.",
    visualizationType: "architecture",
  },
  {
    id: "realtime-dashboard",
    title: "Real-Time Dashboard Analytics",
    description:
      "The dashboard needs to feel instant. Pre-aggregated queries and client-side charting keep everything responsive even with thousands of entries.",
    visualizationType: "metrics",
  },
  {
    id: "integration-ready",
    title: "Integration-Ready Architecture",
    description:
      "The codebase uses a service layer pattern so integrations plug in without touching core logic. Each integration is a standalone module.",
    visualizationType: "timeline",
  },
];
