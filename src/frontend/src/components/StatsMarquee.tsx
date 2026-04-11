const STATS = [
  "10,000+ Scripts Evaluated",
  "15+ Partner Universities",
  "99.7% Accuracy Rate",
  "48-Hour Result Declaration",
  "0 Leakage Incidents",
  "100% RTI Compliant",
  "500+ Scripts/Hour Processing",
  "Bihar's First AI Evaluation Platform",
  "Zero Bias. Zero Delay. Zero Compromise.",
  "M.Tech NIT Rourkela — COSE Framework",
];

export default function StatsMarquee() {
  const doubled = [...STATS, ...STATS];

  return (
    <div
      className="relative overflow-hidden py-3"
      style={{
        background: "oklch(0.08 0.01 240)",
        borderTop: "1px solid oklch(0.85 0.25 200 / 0.25)",
        borderBottom: "1px solid oklch(0.85 0.25 200 / 0.25)",
      }}
      data-ocid="stats-marquee"
    >
      {/* Left fade */}
      <div
        className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, oklch(0.08 0.01 240), transparent)",
        }}
      />
      {/* Right fade */}
      <div
        className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to left, oklch(0.08 0.01 240), transparent)",
        }}
      />

      <div className="flex marquee-track">
        {doubled.map((stat, i) => (
          <div
            key={`${stat}-${i % STATS.length}`}
            className="flex items-center gap-4 shrink-0 px-6"
          >
            <span
              className="w-1.5 h-1.5 rounded-full shrink-0"
              style={{ background: "oklch(0.85 0.25 200)" }}
            />
            <span className="font-mono text-xs tracking-widest text-muted-foreground whitespace-nowrap uppercase">
              {stat}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        .marquee-track {
          animation: marquee-scroll 40s linear infinite;
        }
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
      `}</style>
    </div>
  );
}
