import {
  BarChart3,
  Bot,
  ChevronDown,
  Lock,
  Megaphone,
  ScanLine,
} from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

// Styled 44×44 icon container
function IconBox({
  children,
  hue,
}: { children: React.ReactNode; hue: number }) {
  return (
    <div
      className="shrink-0 flex items-center justify-center rounded"
      style={{
        width: 44,
        height: 44,
        background: `oklch(0.85 0.25 ${hue} / 0.1)`,
        border: `1px solid oklch(0.85 0.25 ${hue} / 0.4)`,
        boxShadow: `0 0 16px oklch(0.85 0.25 ${hue} / 0.2), inset 0 0 8px oklch(0.85 0.25 ${hue} / 0.05)`,
      }}
    >
      {children}
    </div>
  );
}

const STEPS = [
  {
    id: "scan",
    number: "01",
    Icon: ScanLine,
    title: "SCAN",
    subtitle: "On-Premise Capture",
    description:
      "Answer scripts scanned on-premise at your university using our mobile scanning unit. Data never leaves campus boundaries until encrypted and secured.",
    accent: 200,
  },
  {
    id: "anonymize",
    number: "02",
    Icon: Lock,
    title: "ANONYMIZE",
    subtitle: "Identity Encryption",
    description:
      "Student identities are encrypted and replaced with secure tokens. Evaluators receive only the script — identity is mathematically impossible to reverse without the key.",
    accent: 185,
  },
  {
    id: "evaluate",
    number: "03",
    Icon: BarChart3,
    title: "EVALUATE",
    subtitle: "Human + AI Grading",
    description:
      "AI + human evaluators grade anonymized scripts with standardized rubrics. AI flags potential issues; teachers retain full authority over every mark awarded.",
    accent: 170,
  },
  {
    id: "verify",
    number: "04",
    Icon: Bot,
    title: "AI VERIFY",
    subtitle: "Second-Pass Review",
    description:
      "A second independent AI pass cross-checks all numerical answers, identifies scoring anomalies, and flags scripts that warrant human re-review before finalization.",
    accent: 215,
  },
  {
    id: "publish",
    number: "05",
    Icon: Megaphone,
    title: "PUBLISH",
    subtitle: "Instant Declaration",
    description:
      "Verified results published to the secure student portal instantly. Students access results as soon as evaluation and verification complete — no waiting for printed lists.",
    accent: 195,
  },
];

function StepCard({ step, index }: { step: (typeof STEPS)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { Icon } = step;

  return (
    <div
      ref={ref}
      className="relative flex flex-col lg:flex-row items-center gap-4 lg:gap-0"
    >
      {/* Connector line — before this step */}
      {index > 0 && (
        <div
          className="hidden lg:block absolute right-full top-8 w-full h-0.5"
          style={{
            background: `linear-gradient(to right, oklch(0.85 0.25 ${STEPS[index - 1].accent} / 0.3), oklch(0.85 0.25 ${step.accent} / 0.5))`,
            transform: "translateX(calc(100% + 1px))",
            width: "calc(100% + 2px)",
          }}
        />
      )}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{
          rotateY: 4,
          rotateX: -3,
          scale: 1.02,
          transition: { duration: 0.2 },
        }}
        className="glass-card-hover rounded-sm p-6 w-full text-center lg:text-left relative overflow-hidden"
        data-ocid={`step-${step.id}`}
        style={{
          transformStyle: "preserve-3d",
          boxShadow:
            "0 2px 4px rgba(0,0,0,0.5), 0 8px 16px rgba(0,0,0,0.35), 0 0 30px oklch(0.85 0.25 200 / 0.06)",
        }}
      >
        {/* Top glass highlight */}
        <div
          className="absolute top-0 left-0 right-0 h-[28%] pointer-events-none rounded-t-sm"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.04) 0%, transparent 100%)",
          }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-px pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(0.98 0 0 / 0.12), transparent)",
          }}
        />

        {/* Number badge */}
        <div className="flex lg:flex-row flex-col items-center lg:items-start gap-3 mb-4">
          <IconBox hue={step.accent}>
            <Icon
              className="w-5 h-5"
              style={{ color: `oklch(0.85 0.25 ${step.accent})` }}
            />
          </IconBox>
          <div>
            <p
              className="font-mono text-[10px] tracking-widest uppercase"
              style={{ color: `oklch(0.85 0.25 ${step.accent} / 0.6)` }}
            >
              Step {step.number}
            </p>
            <h3
              className="font-display font-bold text-xl"
              style={{ color: `oklch(0.85 0.25 ${step.accent})` }}
            >
              {step.title}
            </h3>
          </div>
        </div>

        <p className="font-mono text-xs text-muted-foreground tracking-wide uppercase mb-2">
          {step.subtitle}
        </p>

        <p className="text-sm text-foreground/75 leading-relaxed">
          {step.description}
        </p>
      </motion.div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "oklch(0.09 0.011 245)" }}
    >
      {/* Top gradient divider */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, oklch(0.85 0.25 200 / 0.5) 30%, oklch(0.95 0.15 190 / 0.7) 50%, oklch(0.85 0.25 200 / 0.5) 70%, transparent 100%)",
        }}
      />

      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 glass-card rounded-sm mb-4">
            <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase font-light">
              HOW IT WORKS
            </span>
          </div>
          <h2 className="font-display leading-tight">
            <span className="block text-sm font-mono tracking-widest text-muted-foreground uppercase font-light mb-2">
              The Process
            </span>
            <span className="block font-bold text-3xl lg:text-4xl text-foreground">
              From Paper to Portal —{" "}
              <span className="text-glow">5 Secure Steps</span>
            </span>
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            Every evaluation follows the same rigorous, audited pipeline. No
            shortcuts, no exceptions.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div
          className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 relative"
          style={{ perspective: "1200px" }}
        >
          {/* Horizontal connector line on desktop */}
          <div
            className="hidden lg:block absolute top-8 left-0 right-0 h-px pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, transparent, oklch(0.85 0.25 200 / 0.2) 10%, oklch(0.85 0.25 200 / 0.2) 90%, transparent)",
              top: "2.5rem",
            }}
          />

          {STEPS.map((step, i) => (
            <StepCard key={step.id} step={step} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="font-mono text-xs text-muted-foreground mb-4 tracking-widest uppercase">
            Total end-to-end time
          </p>
          <div
            className="inline-flex items-center gap-3 px-6 py-3 glass-card rounded-sm"
            style={{
              boxShadow:
                "0 2px 4px rgba(0,0,0,0.5), 0 8px 20px rgba(0,0,0,0.3), 0 0 40px oklch(0.85 0.25 200 / 0.08)",
            }}
          >
            <span className="font-display font-bold text-3xl text-glow">
              48h
            </span>
            <span className="text-muted-foreground text-sm">
              From last exam to student result
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
