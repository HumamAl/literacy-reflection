import type { Profile, PortfolioProject } from "@/lib/types";

export const profile: Profile = {
  name: "Humam",
  tagline: "Full-stack developer building practical SaaS tools with Next.js, Supabase, and AI",
  bio: "I build MVPs and production SaaS apps that solve real operational problems — from AI-powered classification pipelines to subscription platforms. The demo you're looking at was built specifically for your literacy reflection tool to show how the teacher workflow, AI tagging, and dashboard analytics come together.",
  approach: [
    {
      title: "Supabase Foundation",
      description: "Set up auth, database schema with RLS policies, and FERPA-compliant data handling from day one",
    },
    {
      title: "Core CRUD + Feedback",
      description: "Student roster management and the feedback entry system with voice/typed input modes",
    },
    {
      title: "AI Classification Pipeline",
      description: "Wire OpenAI API for auto-tagging literacy skills and Bloom's taxonomy levels on every entry",
    },
    {
      title: "Dashboard + Stripe",
      description: "Teacher dashboard with analytics charts, then Stripe subscription for the $29/month plan",
    },
    {
      title: "Integration Prep",
      description: "Service layer architecture so Google Classroom and Schoology plug in without touching core logic",
    },
  ],
  skillCategories: [
    {
      name: "Frontend",
      skills: ["TypeScript", "React", "Next.js", "Tailwind CSS", "shadcn/ui", "Recharts"],
    },
    {
      name: "Backend & Data",
      skills: ["Supabase", "PostgreSQL", "Row-Level Security", "REST APIs", "Stripe"],
    },
    {
      name: "AI & APIs",
      skills: ["OpenAI API", "Speech-to-Text", "Prompt Engineering", "Classification Pipelines"],
    },
  ],
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "wmf-agent",
    title: "WMF Agent Dashboard",
    description: "AI-powered email classification and data extraction for manufacturing — same OpenAI classification pipeline pattern this project needs",
    tech: ["Next.js", "OpenAI API", "n8n", "TypeScript"],
    relevance: "AI classification pipeline",
  },
  {
    id: "lead-crm",
    title: "Lead Intake CRM",
    description: "Full CRUD system with real-time dashboard, lead scoring, and pipeline tracking — same student roster + feedback entry pattern",
    tech: ["Next.js", "TypeScript", "Tailwind", "shadcn/ui"],
    relevance: "CRUD + dashboard pattern",
  },
  {
    id: "creator-economy",
    title: "Creator Economy Platform",
    description: "Subscription payments with Stripe Connect — built the exact recurring payment flow needed for teacher subscriptions",
    tech: ["Next.js", "Stripe", "TypeScript"],
    relevance: "Stripe subscription integration",
  },
  {
    id: "fleet-saas",
    title: "Fleet Maintenance SaaS",
    description: "Multi-module SaaS with complex data relationships, work orders, and analytics dashboard — similar multi-page data-heavy architecture",
    tech: ["Next.js", "Recharts", "TypeScript", "shadcn/ui"],
    relevance: "Complex SaaS architecture",
  },
];
