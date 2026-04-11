import { Rocket, Sprout, Trophy } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "motion/react";

interface Milestone {
  year: string;
  Icon: LucideIcon;
  title: string;
  description: string;
  status: string;
  accentHue: number;
}

const MILESTONES: Milestone[] = [
  {
    year: "2025–26",
    Icon: Sprout,
    title: "Bihar Pilot",
    description:
      "5 Bihar universities, 50,000 scripts processed. COSE Framework validated in real examination cycles.",
    status: "active",
    accentHue: 200,
  },
  {
    year: "2027–28",
    Icon: Rocket,
    title: "Eastern India Scale",
    description:
      "50 universities across 5 states. 500,000 scripts/year. Expanding to Jharkhand, Odisha, Bengal, and UP.",
    status: "upcoming",
    accentHue: 210,
  },
  {
    year: "2030",
    Icon: Trophy,
    title: "National Scale",
    description:
      "Every state board and central university in India — AI-powered, bias-free, RTI-compliant evaluation for 100 million+ students.",
    status: "vision",
    accentHue: 220,
  },
];

export default function Vision2030() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="vision"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "oklch(0.08 0.01 240)" }}
      data-ocid="vision-section"
    >
      {/* Starfield dots — CSS-only */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden vision-starfield" />

      {/* Large background text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-display font-bold select-none"
          style={{
            fontSize: "clamp(80px, 20vw, 280px)",
            background: "oklch(0.85 0.25 200 / 0.03)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            letterSpacing: "-0.05em",
          }}
        >
          2030
        </span>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 glass-card rounded-sm mb-6">
            <span
              className="w-1.5 h-1.5 rounded-full pulse-glow"
              style={{ background: "oklch(0.85 0.25 200)" }}
            />
            <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase font-light">
              VISION 2030
            </span>
          </div>

          <h2
            className="font-display font-bold text-3xl lg:text-5xl xl:text-6xl mb-4"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.85 0.25 200), oklch(0.95 0.1 200), oklch(0.7 0.2 250))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Evaluating India's Future
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From Bihar to Bharat — scaling AI-powered evaluation to every
            university in India. Because every student deserves results they can
            trust.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {/* Connecting line on desktop */}
          <div
            className="hidden md:block absolute top-10 left-[16%] right-[16%] h-0.5"
            style={{
              background:
                "linear-gradient(to right, oklch(0.85 0.25 200 / 0.4), oklch(0.85 0.25 220 / 0.4))",
            }}
          />

          {MILESTONES.map((m, i) => {
            const { Icon } = m;
            return (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Year badge */}
                <div
                  className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center mb-5"
                  style={{
                    background: `oklch(0.85 0.25 ${m.accentHue} / 0.1)`,
                    border: `2px solid oklch(0.85 0.25 ${m.accentHue} / 0.4)`,
                    boxShadow:
                      m.status === "active"
                        ? `0 0 40px oklch(0.85 0.25 ${m.accentHue} / 0.4)`
                        : `0 0 20px oklch(0.85 0.25 ${m.accentHue} / 0.15)`,
                  }}
                >
                  <Icon
                    className="w-8 h-8"
                    style={{ color: `oklch(0.85 0.25 ${m.accentHue})` }}
                  />
                </div>

                <span
                  className="font-mono text-xs tracking-widest uppercase mb-2 px-3 py-1 rounded-sm"
                  style={{
                    background: `oklch(0.85 0.25 ${m.accentHue} / 0.1)`,
                    color: `oklch(0.85 0.25 ${m.accentHue})`,
                    border: `1px solid oklch(0.85 0.25 ${m.accentHue} / 0.3)`,
                  }}
                >
                  {m.year}
                </span>

                <div className="glass-card rounded-sm p-5 w-full mt-3">
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">
                    {m.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {m.description}
                  </p>

                  {m.status === "active" && (
                    <div
                      className="mt-3 inline-flex items-center gap-1.5 px-2 py-1 rounded-sm"
                      style={{
                        background: "oklch(0.85 0.25 200 / 0.1)",
                        border: "1px solid oklch(0.85 0.25 200 / 0.3)",
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full pulse-glow"
                        style={{ background: "oklch(0.85 0.25 200)" }}
                      />
                      <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                        In Progress
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative overflow-hidden rounded-sm p-8 lg:p-12 text-center"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.85 0.25 200 / 0.08), oklch(0.85 0.25 220 / 0.04))",
            border: "1px solid oklch(0.85 0.25 200 / 0.2)",
            boxShadow: "0 0 60px oklch(0.85 0.25 200 / 0.08)",
          }}
        >
          {/* Corner decorations */}
          {[
            "top-3 left-3",
            "top-3 right-3",
            "bottom-3 left-3",
            "bottom-3 right-3",
          ].map((pos, i) => (
            <div
              key={pos}
              className={`absolute ${pos} w-5 h-5`}
              style={{
                borderTop:
                  i < 2 ? "1px solid oklch(0.85 0.25 200 / 0.4)" : undefined,
                borderBottom:
                  i >= 2 ? "1px solid oklch(0.85 0.25 200 / 0.4)" : undefined,
                borderLeft:
                  i % 2 === 0
                    ? "1px solid oklch(0.85 0.25 200 / 0.4)"
                    : undefined,
                borderRight:
                  i % 2 === 1
                    ? "1px solid oklch(0.85 0.25 200 / 0.4)"
                    : undefined,
              }}
            />
          ))}

          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3">
            Be Part of India's Evaluation Revolution
          </p>
          <h3 className="font-display font-bold text-2xl lg:text-3xl text-foreground mb-4">
            Partner With Us &mdash;{" "}
            <span className="text-glow">
              Shape the Future of Fair Evaluation
            </span>
          </h3>
          <p className="text-muted-foreground text-base max-w-xl mx-auto mb-8">
            Join the universities already transforming their evaluation cycles.
            Early partners get dedicated onboarding support and priority access
            to new features.
          </p>
          <motion.button
            type="button"
            onClick={scrollToContact}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            data-ocid="vision-cta"
            className="px-8 py-3.5 font-display font-semibold text-sm tracking-wider uppercase rounded-sm transition-smooth inline-flex items-center gap-2"
            style={{
              background: "oklch(0.85 0.25 200)",
              color: "oklch(0.06 0.01 240)",
              boxShadow: "0 0 30px oklch(0.85 0.25 200 / 0.4)",
            }}
          >
            <Rocket className="w-4 h-4" />
            Start Your Partnership
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
