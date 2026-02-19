"use client";

interface MetricBarProps {
  label: string;
  value: number;
  max: number;
  unit?: string;
}

export function MetricBar({ label, value, max, unit = "" }: MetricBarProps) {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div className="space-y-1.5">
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">{label}</span>
        <span className="font-medium">
          {value}
          {unit} <span className="text-muted-foreground font-normal">/ {max}{unit}</span>
        </span>
      </div>
      <div className="h-2 rounded-full bg-secondary">
        <div
          className="h-full rounded-full bg-success transition-all"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
