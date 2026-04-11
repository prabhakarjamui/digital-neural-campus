import {
  Award,
  BarChart3,
  Bot,
  Building2,
  Check,
  ChevronLeft,
  ChevronRight,
  Fingerprint,
  Landmark,
  Link2,
  Rocket,
  Scale,
  ScanLine,
  TrendingUp,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

interface Feature {
  id: string;
  Icon: LucideIcon;
  accentHue: number;
  title: string;
  description: string;
  bullets: string[];
}

const FEATURES: Feature[] = [
  {
    id: "realtime-results",
    Icon: Zap,
    accentHue: 200,
    title: "Real-Time Result Processing",
    description:
      "Results declared within 48 hours of the last exam — not weeks. Live processing dashboard gives university registrars full visibility into progress at every stage.",
    bullets: [
      "Live evaluation progress dashboard for registrars",
      "48-hour result declaration SLA",
      "Automated status notifications to all stakeholders",
    ],
  },
  {
    id: "script-management",
    Icon: ScanLine,
    accentHue: 270,
    title: "Digital Answer Script Management",
    description:
      "Every script scanned, catalogued, and retrievable in seconds. Permanent digital archive replaces aging paper storage that degrades, gets lost, or is vulnerable to fire.",
    bullets: [
      "Instant script retrieval by student ID, exam, or date",
      "Infinite archival vs paper decay and storage costs",
      "Version-controlled with full revision history",
    ],
  },
  {
    id: "anti-impersonation",
    Icon: Fingerprint,
    accentHue: 22,
    title: "Anti-Impersonation System",
    description:
      "Biometric verification at exam entry combined with digital fingerprinting of answer scripts creates an unbreakable chain of identity from student to final grade.",
    bullets: [
      "Biometric attendance verification at exam hall entry",
      "Digital fingerprint embedded in every scanned script",
      "Cross-reference alerts for identity inconsistencies",
    ],
  },
  {
    id: "rti-audit",
    Icon: Scale,
    accentHue: 160,
    title: "RTI-Compliant Audit Trail",
    description:
      "Every grading decision is logged, timestamped, and legally defensible. No RTI query goes unanswered — all data is retrieval-ready within minutes, not months.",
    bullets: [
      "Complete decision log for every evaluation action",
      "Legally defensible records meeting government standards",
      "RTI responses generated in minutes, not months",
    ],
  },
  {
    id: "multi-university",
    Icon: Landmark,
    accentHue: 285,
    title: "Multi-University Scalability",
    description:
      "One platform serving 50+ universities simultaneously. Centralized administration with per-institution isolation, custom branding, and independent data governance.",
    bullets: [
      "Isolated data environments for each institution",
      "Centralized admin with granular permission control",
      "Custom branding and workflows per university",
    ],
  },
  {
    id: "teacher-analytics",
    Icon: TrendingUp,
    accentHue: 55,
    title: "Teacher Performance Analytics",
    description:
      "Understand evaluator consistency patterns, flag divergent grading, and generate professional development insights. Data that makes every examiner better.",
    bullets: [
      "Evaluator consistency scoring and trend analysis",
      "Automated flagging of statistical outliers",
      "Professional development reports for institutions",
    ],
  },
  {
    id: "blockchain-records",
    Icon: Link2,
    accentHue: 190,
    title: "Blockchain-Style Tamper-Proof Records",
    description:
      "Cryptographic hashing on every record creates an unbreakable chain. Any tampering attempt — however subtle — is instantly detectable, logged, and triggers alerts.",
    bullets: [
      "SHA-256 cryptographic hash on every record",
      "Instant tamper detection with automated alerts",
      "Publicly verifiable chain integrity certificates",
    ],
  },
  {
    id: "instant-declaration",
    Icon: Rocket,
    accentHue: 320,
    title: "Instant Result Declaration",
    description:
      "Students receive results via secure portal the moment evaluation and verification complete. No waiting weeks while printed lists travel through postal systems.",
    bullets: [
      "Student portal access to results within seconds of release",
      "Secure individual result links with authentication",
      "Bulk result publication to institutional systems",
    ],
  },
  {
    id: "on-premise",
    Icon: Building2,
    accentHue: 175,
    title: "On-Premise Digitization",
    description:
      "Our trained team comes to your campus with portable scanning infrastructure. Scripts never leave your physical control until they are digitized and encrypted on your servers.",
    bullets: [
      "Mobile scanning team deployed to your campus",
      "Scripts digitized and encrypted before leaving your premises",
      "Full setup, training, and handover included",
    ],
  },
  {
    id: "ai-math-verify",
    Icon: Bot,
    accentHue: 220,
    title: "AI Mathematical Verification",
    description:
      "A second AI pass independently checks all numerical answers against computed solutions. Eliminates every human arithmetic error before the final grade is recorded.",
    bullets: [
      "Independent second-pass AI math verification",
      "Catches calculation errors humans miss after 200 scripts",
      "Flags discrepancies for human review with explanation",
    ],
  },
];

export default function FeaturesCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(
      () => setActive((a) => (a + 1) % FEATURES.length),
      4500,
    );
    return () => clearInterval(t);
  }, [paused]);

  const prev = () => {
    setPaused(true);
    setActive((a) => (a - 1 + FEATURES.length) % FEATURES.length);
  };
  const next = () => {
    setPaused(true);
    setActive((a) => (a + 1) % FEATURES.length);
  };

  const feature = FEATURES[active];
  const { Icon: ActiveIcon } = feature;

  return (
    <section
      id="features-carousel"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "oklch(0.09 0.012 240)" }}
      data-ocid="features-carousel"
    >
      {/* Section divider */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, oklch(0.85 0.25 200 / 0.5) 30%, oklch(0.95 0.15 190 / 0.7) 50%, oklch(0.85 0.25 200 / 0.5) 70%, transparent 100%)",
        }}
      />

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 60% 50% at 50% 50%, oklch(0.85 0.25 ${feature.accentHue} / 0.04) 0%, transparent 70%)`,
          transition: "background 0.6s ease",
        }}
      />

      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 glass-card rounded-sm mb-4">
            <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase font-light">
              PLATFORM CAPABILITIES
            </span>
          </div>
          <h2 className="font-display leading-tight">
            <span className="block text-sm font-mono tracking-widest text-muted-foreground uppercase font-light mb-2">
              Built to Win
            </span>
            <span className="block font-bold text-3xl lg:text-4xl text-foreground">
              Every Feature You <span className="text-glow">Need to Win</span>
            </span>
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            10 purpose-built capabilities covering the full evaluation lifecycle
            — from campus scan to student result.
          </p>
        </motion.div>

        {/* Main carousel card */}
        <div
          className="relative max-w-4xl mx-auto"
          style={{ perspective: "1200px" }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              whileHover={{
                rotateY: 2,
                rotateX: -1,
                transition: { duration: 0.25 },
              }}
              className="glass-card rounded-sm overflow-hidden relative"
              style={{
                transformStyle: "preserve-3d",
                boxShadow:
                  "0 2px 4px rgba(0,0,0,0.5), 0 12px 28px rgba(0,0,0,0.4), 0 0 60px oklch(0.85 0.25 200 / 0.08)",
              }}
            >
              {/* Top glass highlight */}
              <div
                className="absolute top-0 left-0 right-0 h-[30%] pointer-events-none z-10"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(255,255,255,0.03) 0%, transparent 100%)",
                }}
              />
              <div
                className="absolute top-0 left-0 right-0 h-px pointer-events-none z-10"
                style={{
                  background: `linear-gradient(90deg, transparent, oklch(0.85 0.25 ${feature.accentHue} / 0.5), transparent)`,
                }}
              />

              <div className="grid lg:grid-cols-5 min-h-[340px]">
                {/* Left panel — icon + title */}
                <div
                  className="lg:col-span-2 p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, oklch(0.85 0.25 ${feature.accentHue} / 0.08), oklch(0.85 0.25 ${(feature.accentHue + 30) % 360} / 0.04))`,
                    borderRight: `1px solid oklch(0.85 0.25 ${feature.accentHue} / 0.15)`,
                  }}
                >
                  {/* Feature number */}
                  <div
                    className="absolute top-4 right-4 font-mono text-xs tracking-widest"
                    style={{
                      color: `oklch(0.85 0.25 ${feature.accentHue} / 0.4)`,
                    }}
                  >
                    {String(active + 1).padStart(2, "0")} /{" "}
                    {String(FEATURES.length).padStart(2, "0")}
                  </div>

                  <div>
                    <div
                      className="w-14 h-14 rounded-sm flex items-center justify-center mb-6"
                      style={{
                        background: `oklch(0.85 0.25 ${feature.accentHue} / 0.1)`,
                        border: `1px solid oklch(0.85 0.25 ${feature.accentHue} / 0.3)`,
                        boxShadow: `0 0 30px oklch(0.85 0.25 ${feature.accentHue} / 0.2), inset 0 0 12px oklch(0.85 0.25 ${feature.accentHue} / 0.05)`,
                      }}
                    >
                      <ActiveIcon
                        className="w-6 h-6"
                        style={{
                          color: `oklch(0.85 0.25 ${feature.accentHue})`,
                        }}
                      />
                    </div>
                    <h3 className="font-display font-bold text-2xl text-foreground leading-tight">
                      {feature.title}
                    </h3>
                  </div>

                  {/* Decorative line */}
                  <div
                    className="w-12 h-0.5 mt-4"
                    style={{
                      background: `oklch(0.85 0.25 ${feature.accentHue})`,
                    }}
                  />
                </div>

                {/* Right panel — description + bullets */}
                <div className="lg:col-span-3 p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <p className="text-base text-foreground/85 leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    <ul className="space-y-3">
                      {feature.bullets.map((b, i) => (
                        <motion.li
                          key={b}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + i * 0.08 }}
                          className="flex items-start gap-3"
                        >
                          <span
                            className="mt-1 w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                            style={{
                              background: `oklch(0.85 0.25 ${feature.accentHue} / 0.15)`,
                              border: `1px solid oklch(0.85 0.25 ${feature.accentHue} / 0.4)`,
                            }}
                          >
                            <Check
                              className="w-2.5 h-2.5"
                              style={{
                                color: `oklch(0.85 0.25 ${feature.accentHue})`,
                              }}
                            />
                          </span>
                          <span className="text-sm text-muted-foreground leading-relaxed">
                            {b}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous feature"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 w-10 h-10 glass-card rounded-full flex items-center justify-center transition-smooth hover:border-accent/40 hover:shadow-glow-cyan-sm"
            data-ocid="carousel-prev"
          >
            <ChevronLeft className="w-4 h-4 text-muted-foreground" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next feature"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 w-10 h-10 glass-card rounded-full flex items-center justify-center transition-smooth hover:border-accent/40 hover:shadow-glow-cyan-sm"
            data-ocid="carousel-next"
          >
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {FEATURES.map((f, i) => (
            <button
              key={f.id}
              type="button"
              onClick={() => {
                setPaused(true);
                setActive(i);
              }}
              aria-label={`Go to feature ${i + 1}`}
              className="transition-smooth rounded-full"
              style={{
                width: i === active ? "24px" : "8px",
                height: "8px",
                background:
                  i === active
                    ? `oklch(0.85 0.25 ${feature.accentHue})`
                    : "oklch(0.85 0.25 200 / 0.2)",
              }}
              data-ocid={`carousel-dot-${i}`}
            />
          ))}
        </div>

        {/* Feature name pills */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {FEATURES.map((f, i) => {
            const { Icon: PillIcon } = f;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => {
                  setPaused(true);
                  setActive(i);
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm font-mono text-[10px] tracking-wider uppercase transition-smooth"
                style={{
                  background:
                    i === active
                      ? `oklch(0.85 0.25 ${f.accentHue} / 0.15)`
                      : "oklch(0.14 0.015 240 / 0.5)",
                  border: `1px solid ${i === active ? `oklch(0.85 0.25 ${f.accentHue} / 0.4)` : "oklch(0.22 0.02 240)"}`,
                  color:
                    i === active
                      ? `oklch(0.85 0.25 ${f.accentHue})`
                      : "oklch(0.5 0.01 200)",
                }}
              >
                <PillIcon className="w-3 h-3" />
                {f.title.split(" ").slice(0, 2).join(" ")}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
