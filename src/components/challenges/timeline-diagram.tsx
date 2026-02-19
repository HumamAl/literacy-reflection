"use client";

import { Badge } from "@/components/ui/badge";

interface TimelinePhase {
  title: string;
  description: string;
  duration: string;
  status: "completed" | "active" | "upcoming";
  deliverables: string[];
}

interface TimelineDiagramProps {
  phases: TimelinePhase[];
}

export function TimelineDiagram({ phases }: TimelineDiagramProps) {
  return (
    <div className="relative pl-6">
      {/* Vertical line */}
      <div className="absolute left-[9px] top-2 bottom-2 w-px bg-border" />

      <div className="space-y-4">
        {phases.map((phase) => (
          <div key={phase.title} className="relative flex gap-4">
            {/* Dot */}
            <div
              className={`absolute -left-6 top-1.5 h-[18px] w-[18px] rounded-full border-2 shrink-0 ${
                phase.status === "completed"
                  ? "bg-success border-success"
                  : phase.status === "active"
                    ? "bg-primary border-primary"
                    : "bg-background border-muted-foreground/30"
              }`}
            />

            {/* Content */}
            <div
              className={`flex-1 rounded-lg border px-4 py-3 ${
                phase.status === "active"
                  ? "border-primary/20 bg-primary/5"
                  : "border-border bg-card"
              }`}
            >
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h4 className="text-sm font-semibold">{phase.title}</h4>
                <Badge
                  variant={phase.status === "active" ? "default" : "secondary"}
                  className="text-[10px] px-1.5 py-0"
                >
                  {phase.duration}
                </Badge>
                {phase.status === "active" && (
                  <Badge
                    variant="outline"
                    className="text-[10px] px-1.5 py-0 text-primary border-primary/30"
                  >
                    Current
                  </Badge>
                )}
              </div>
              <p className="text-xs text-muted-foreground mb-2">
                {phase.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {phase.deliverables.map((d) => (
                  <span
                    key={d}
                    className="inline-flex items-center rounded-md bg-secondary px-2 py-0.5 text-[10px] font-medium text-secondary-foreground"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
