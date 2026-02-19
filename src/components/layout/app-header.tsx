"use client";

import { usePathname } from "next/navigation";

const pageNames: Record<string, string> = {
  "/": "Dashboard",
  "/students": "Students",
  "/feedback": "Feedback",
  "/reports": "Reports",
  "/settings": "Settings",
};

export function AppHeader() {
  const pathname = usePathname();
  const pageName = pageNames[pathname] || "Dashboard";

  return (
    <header className="h-14 border-b border-border bg-background flex items-center px-6">
      <div className="flex items-center justify-between w-full">
        <h2 className="text-sm font-medium">{pageName}</h2>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">Sarah Johnson</span>
          <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-medium">
            SJ
          </div>
        </div>
      </div>
    </header>
  );
}
