import { cn } from "@/lib/utils";

interface ChallengeCardProps {
  title: string;
  description: string;
  number: number;
  children: React.ReactNode;
  className?: string;
}

export function ChallengeCard({
  title,
  description,
  number,
  children,
  className,
}: ChallengeCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-primary/10 bg-gradient-to-br from-accent/5 to-background shadow-lg p-6 space-y-5 hover:-translate-y-1 hover:shadow-xl transition-all duration-200",
        className
      )}
    >
      <div className="flex items-start gap-4">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-semibold">
          {number}
        </div>
        <div>
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        </div>
      </div>
      {children}
    </div>
  );
}
