interface EasyWordCalloutProps {
  text: string;
}

export default function EasyWordCallout({ text }: EasyWordCalloutProps) {
  return (
    <div
      className="mt-4 flex items-start gap-2 rounded-sm p-3"
      style={{
        background: "oklch(0.85 0.25 200 / 0.06)",
        borderLeft: "2px solid oklch(0.85 0.25 200 / 0.5)",
      }}
    >
      <span
        className="font-mono text-[10px] uppercase tracking-widest shrink-0 mt-0.5"
        style={{ color: "oklch(0.85 0.25 200)" }}
      >
        Easy Word
      </span>
      <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
    </div>
  );
}
