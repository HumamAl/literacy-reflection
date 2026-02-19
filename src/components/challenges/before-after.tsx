interface BeforeAfterProps {
  before: {
    label: string;
    items: string[];
  };
  after: {
    label: string;
    items: string[];
  };
}

export function BeforeAfter({ before, after }: BeforeAfterProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-4">
        <p className="text-sm font-medium text-destructive mb-2">
          {before.label}
        </p>
        <ul className="space-y-1.5">
          {before.items.map((item) => (
            <li
              key={item}
              className="text-sm text-destructive/80 flex gap-2"
            >
              <span className="shrink-0">&#x2717;</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-lg border border-success/20 bg-success/5 p-4">
        <p className="text-sm font-medium text-success mb-2">{after.label}</p>
        <ul className="space-y-1.5">
          {after.items.map((item) => (
            <li key={item} className="text-sm text-success/80 flex gap-2">
              <span className="shrink-0">&#x2713;</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
