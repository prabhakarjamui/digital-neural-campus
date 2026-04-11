import {
  AlertTriangle,
  Bot,
  Check,
  Clock,
  EyeOff,
  FileText,
  Landmark,
  Link2,
  Lock,
  Newspaper,
  Package,
  ScrollText,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "motion/react";

interface TradItem {
  Icon: LucideIcon;
  label: string;
  problem: string;
}
interface DigItem {
  Icon: LucideIcon;
  label: string;
  benefit: string;
}
interface BiharFact {
  Icon: LucideIcon;
  stat: string;
  label: string;
}

const TRADITIONAL: TradItem[] = [
  {
    Icon: Package,
    label: "Physical bundle transport",
    problem: "Lost or tampered scripts",
  },
  {
    Icon: Clock,
    label: "Manual marking: 3–6 weeks",
    problem: "Delays university admissions",
  },
  {
    Icon: EyeOff,
    label: "Evaluator knows student",
    problem: "Bias, favoritism, caste influence",
  },
  {
    Icon: ScrollText,
    label: "Manual tabulation",
    problem: "Arithmetic errors in final marks",
  },
  {
    Icon: FileText,
    label: "No audit trail",
    problem: "Cannot prove fairness post-submission",
  },
];

const DIGITAL: DigItem[] = [
  {
    Icon: Lock,
    label: "On-site encrypted scan",
    benefit: "Data never leaves premises",
  },
  {
    Icon: Zap,
    label: "AI-accelerated: 72 hours",
    benefit: "Results before admissions close",
  },
  {
    Icon: EyeOff,
    label: "Cryptographic anonymization",
    benefit: "Zero identity exposure",
  },
  {
    Icon: Bot,
    label: "AI-verified tabulation",
    benefit: "Catches every arithmetic error",
  },
  {
    Icon: Link2,
    label: "Immutable audit log",
    benefit: "RTI-ready at any time",
  },
];

const BIHAR_FACTS: BiharFact[] = [
  {
    Icon: Landmark,
    stat: "20+",
    label: "State universities with annual exam cycles",
  },
  {
    Icon: FileText,
    stat: "Millions",
    label: "Answer scripts processed manually each cycle",
  },
  {
    Icon: Clock,
    stat: "3–6 wks",
    label: "Average result delay per evaluation round",
  },
  {
    Icon: Newspaper,
    stat: "Decades",
    label: "Of paper leaks damaging institutional trust",
  },
];

export default function TraditionalVsDigital() {
  return (
    <>
      {/* Bihar Urgency Banner */}
      <section
        className="relative py-16 lg:py-20 overflow-hidden"
        style={{ background: "oklch(0.07 0.015 250)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 50%, oklch(0.65 0.19 22 / 0.06) 0%, transparent 70%)",
          }}
        />
        {/* Top/bottom accent lines */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, oklch(0.65 0.19 22 / 0.5) 30%, oklch(0.75 0.15 35 / 0.7) 50%, oklch(0.65 0.19 22 / 0.5) 70%, transparent 100%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-[2px]"
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
            className="text-center mb-10"
          >
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm mb-5"
              style={{
                background: "oklch(0.65 0.19 22 / 0.1)",
                border: "1px solid oklch(0.65 0.19 22 / 0.3)",
              }}
            >
              <AlertTriangle
                className="w-3.5 h-3.5"
                style={{ color: "oklch(0.75 0.15 35)" }}
              />
              <span
                className="font-mono text-xs tracking-widest uppercase"
                style={{ color: "oklch(0.75 0.15 35)" }}
              >
                The Crisis Is Now
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl lg:text-4xl xl:text-5xl text-foreground mb-4">
              Bihar's Universities{" "}
              <span className="text-glow">Need This Now</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              The digital transformation is no longer optional — it's an RTI and
              academic integrity mandate. Every semester of delay costs
              students, institutions, and Bihar's future.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {BIHAR_FACTS.map((fact, i) => {
              const { Icon } = fact;
              return (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="text-center p-5 rounded-sm"
                  style={{
                    background: "oklch(0.1 0.012 240 / 0.8)",
                    border: "1px solid oklch(0.65 0.19 22 / 0.2)",
                  }}
                >
                  <Icon
                    className="w-7 h-7 mx-auto mb-2"
                    style={{ color: "oklch(0.75 0.15 35)" }}
                  />
                  <p className="font-display font-bold text-2xl text-glow">
                    {fact.stat}
                  </p>
                  <p className="font-mono text-xs text-muted-foreground mt-1 leading-relaxed">
                    {fact.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Traditional vs Digital comparison */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-background">
        {/* Divider lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-0 right-0 h-[2px]"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, oklch(0.85 0.25 200 / 0.5) 30%, oklch(0.95 0.15 190 / 0.7) 50%, oklch(0.85 0.25 200 / 0.5) 70%, transparent 100%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-[2px]"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, oklch(0.85 0.25 200 / 0.5) 30%, oklch(0.95 0.15 190 / 0.7) 50%, oklch(0.85 0.25 200 / 0.5) 70%, transparent 100%)",
            }}
          />
        </div>

        <div className="container mx-auto px-6 lg:px-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 space-y-4"
          >
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-foreground">
              The Old Way vs.{" "}
              <span className="text-glow">The PNACADEMY Way</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Bihar's universities deserve better than 1970s paper processes.
              See the transformation.
            </p>
          </motion.div>

          {/* Split comparison */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-0 relative">
            {/* Center divider */}
            <div
              className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, oklch(0.85 0.25 200 / 0.5), transparent)",
              }}
            >
              <div
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center glass-card"
                style={{
                  border: "1px solid oklch(0.85 0.25 200 / 0.5)",
                  boxShadow: "0 0 20px oklch(0.85 0.25 200 / 0.3)",
                }}
              >
                <span
                  className="font-mono text-xs"
                  style={{ color: "oklch(0.85 0.25 200)" }}
                >
                  VS
                </span>
              </div>
            </div>

            {/* Traditional side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-3 lg:pr-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-destructive" />
                <h3 className="font-display font-semibold text-xl text-foreground">
                  Traditional Paper Process
                </h3>
              </div>
              {TRADITIONAL.map((item, i) => {
                const { Icon } = item;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-3 p-4 rounded-sm"
                    style={{
                      background: "oklch(0.65 0.19 22 / 0.06)",
                      border: "1px solid oklch(0.65 0.19 22 / 0.15)",
                    }}
                  >
                    <Icon
                      className="w-5 h-5 shrink-0 mt-0.5 opacity-50"
                      style={{ color: "oklch(0.65 0.22 25)" }}
                    />
                    <div>
                      <p className="text-sm font-medium text-foreground opacity-70">
                        {item.label}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5 flex items-center gap-1">
                        <AlertTriangle
                          className="w-3 h-3 shrink-0"
                          style={{ color: "oklch(0.65 0.22 25)" }}
                        />
                        {item.problem}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Digital side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-3 lg:pl-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-2 h-2 rounded-full pulse-glow"
                  style={{ background: "oklch(0.85 0.25 200)" }}
                />
                <h3 className="font-display font-semibold text-xl text-glow">
                  PNACADEMY Digital System
                </h3>
              </div>
              {DIGITAL.map((item, i) => {
                const { Icon } = item;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-3 p-4 rounded-sm glass-card-hover"
                  >
                    <Icon
                      className="w-5 h-5 shrink-0 mt-0.5"
                      style={{ color: "oklch(0.85 0.25 200)" }}
                    />
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {item.label}
                      </p>
                      <p
                        className="text-xs mt-0.5 flex items-center gap-1"
                        style={{ color: "oklch(0.85 0.25 200 / 0.8)" }}
                      >
                        <Check className="w-3 h-3 shrink-0" />
                        {item.benefit}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
