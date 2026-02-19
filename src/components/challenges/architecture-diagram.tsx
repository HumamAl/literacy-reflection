"use client";

import { Globe, KeyRound, ShieldCheck, Database } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ArchLayer {
  label: string;
  sublabel: string;
  icon: LucideIcon;
  highlight?: boolean;
}

const layers: ArchLayer[] = [
  { label: "Browser", sublabel: "Next.js App", icon: Globe },
  { label: "Supabase Auth", sublabel: "JWT Tokens", icon: KeyRound },
  {
    label: "Row-Level Security",
    sublabel: "Per-Teacher Isolation",
    icon: ShieldCheck,
    highlight: true,
  },
  {
    label: "PostgreSQL",
    sublabel: "Encrypted at Rest",
    icon: Database,
  },
];

export function ArchitectureDiagram() {
  return (
    <div className="space-y-3">
      <div className="flex flex-col md:flex-row items-stretch md:items-center gap-2">
        {layers.map((layer, i) => (
          <div key={layer.label} className="flex items-center gap-2 flex-1">
            <div
              className={`flex items-center gap-3 rounded-lg border px-4 py-3 w-full ${
                layer.highlight
                  ? "border-primary bg-primary/5 ring-1 ring-primary/20"
                  : "border-border bg-card"
              }`}
            >
              <layer.icon
                className={`w-5 h-5 shrink-0 ${
                  layer.highlight ? "text-primary" : "text-muted-foreground"
                }`}
              />
              <div>
                <p
                  className={`text-sm font-medium ${
                    layer.highlight ? "text-primary" : ""
                  }`}
                >
                  {layer.label}
                </p>
                <p className="text-[11px] text-muted-foreground">
                  {layer.sublabel}
                </p>
              </div>
            </div>
            {i < layers.length - 1 && (
              <span className="text-muted-foreground text-lg shrink-0 hidden md:block">
                &rarr;
              </span>
            )}
            {i < layers.length - 1 && (
              <span className="text-muted-foreground text-lg shrink-0 md:hidden self-center">
                &darr;
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 rounded-md border border-dashed border-primary/30 bg-primary/5 px-3 py-2">
        <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
        <p className="text-xs text-primary">
          Each teacher can only see their own students — enforced at the database
          level, not the application layer.
        </p>
      </div>
    </div>
  );
}
