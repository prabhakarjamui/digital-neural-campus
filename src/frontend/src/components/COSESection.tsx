import {
  AlertTriangle,
  BarChart3,
  Bot,
  Check,
  ChevronDown,
  EyeOff,
  ShieldCheck,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import EasyWordCallout from "./EasyWordCallout";

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
        background: `oklch(0.85 0.25 ${hue} / 0.08)`,
        border: `1px solid oklch(0.85 0.25 ${hue} / 0.35)`,
        boxShadow: `0 0 14px oklch(0.85 0.25 ${hue} / 0.18), inset 0 0 8px oklch(0.85 0.25 ${hue} / 0.06)`,
      }}
    >
      {children}
    </div>
  );
}

const PILLARS = [
  {
    id: "centralized-security",
    letter: "C",
    Icon: ShieldCheck,
    title: "Centralized Security",
    subtitle: "Zero-Leakage Vault",
    description:
      "End-to-end encrypted answer scripts stored in on-premise servers. Zero external data transmission. Military-grade encryption from scan to storage.",
    easyWord:
      "Your exam papers never leave your building — they're scanned and locked on your own servers, like a bank vault only you control.",
    accentHue: 200,
    strengths: [
      "Single encrypted vault — all answer scripts stored in one secure, access-controlled environment",
      "Zero physical leakage risk — no printed papers, no human couriers, no interception points",
      "Military-grade encryption on every script from scan to storage",
      "Real-time access logging — every view, every touch is recorded",
    ],
    challenges: [
      "Requires robust and redundant server infrastructure — single point of failure must be mitigated with backups",
      "Initial digitization setup demands institutional discipline and staff training",
      "Higher upfront infrastructure cost compared to paper-based systems",
    ],
  },
  {
    id: "optimized-evaluation",
    letter: "O",
    Icon: Bot,
    title: "Optimized Evaluation",
    subtitle: "AI-Powered Grading",
    description:
      "AI performs automatic math verification and answer pattern matching. Processes 500+ scripts per hour vs 30-40 for a human examiner.",
    easyWord:
      "AI checks math errors and flags unusual answers for the teacher to review. The teacher always makes the final call. AI helps, not decides.",
    accentHue: 185,
    strengths: [
      "Eliminates human evaluator fatigue bias — AI scores consistently at 3am just as at 9am",
      "Speed: processes 500+ scripts per hour vs. 30-40 for a human examiner",
      "Mathematical answer verification is 99.7% accurate — catches calculation errors humans miss",
      "Standardized rubric application ensures every student is judged by identical criteria",
    ],
    challenges: [
      "AI currently struggles with highly contextual or creative written answers — human review remains essential for essay-type questions",
      "Model accuracy depends on quality of training data from past examinations",
      "Edge cases in regional language scripts may need manual override",
    ],
  },
  {
    id: "secure-anonymization",
    letter: "S",
    Icon: EyeOff,
    title: "Secure Anonymization",
    subtitle: "Double-Blind Evaluation",
    description:
      "Double-blind evaluation protocol: evaluator and student identities are both cryptographically masked. Bias elimination by design, not by trust.",
    easyWord:
      "The teacher marking your paper doesn't know whose paper it is, and the student doesn't know who marked it — preventing favoritism automatically.",
    accentHue: 170,
    strengths: [
      "Teacher never sees student name, roll number, or institution — true double-blind evaluation",
      "Eliminates favoritism, caste/regional bias, and personal relationship influence",
      "Fully RTI-compliant — anonymization chain is auditable",
      "Re-evaluation requests can be handled without breaking anonymization",
    ],
    challenges: [
      "Anonymization pipeline adds technical complexity — linking final scores back to students requires secure de-anonymization protocols",
      "Re-evaluation disputes require careful workflow to preserve chain of custody",
      "Requires institutional trust in the system — some stakeholders may initially resist opacity",
    ],
  },
  {
    id: "encrypted-audit",
    letter: "E",
    Icon: BarChart3,
    title: "Encrypted Audit Trail",
    subtitle: "Tamper-Proof Records",
    description:
      "Every action — scan, anonymize, grade, verify, publish — logged with timestamp and operator ID. Tamper-proof cryptographic hash chain.",
    easyWord:
      "Every mark change is recorded permanently, like a digital notebook that can't be erased. Universities can always prove they did everything fairly.",
    accentHue: 215,
    strengths: [
      "Every action — scan, anonymize, grade, verify, publish — is logged with timestamp and operator ID",
      "Tamper-proof: any modification attempt breaks the cryptographic hash chain and triggers alerts",
      "Legally defensible in court — records meet government compliance standards",
      "Supports RTI queries, external audits, and university inspection boards",
    ],
    challenges: [
      "Audit logs grow significantly over time — long-term storage management is an operational cost",
      "Requires periodic integrity verification runs (automated) to ensure logs remain uncorrupted",
      "Access to audit data must be tightly permissioned — over-exposure creates its own privacy risk",
    ],
  },
];

function PillarCard({
  pillar,
  index,
}: { pillar: (typeof PILLARS)[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const { Icon } = pillar;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.4, 0, 0.2, 1],
      }}
      whileHover={{
        rotateY: 3,
        rotateX: -2,
        scale: 1.01,
        transition: { duration: 0.25 },
      }}
      className="glass-card-hover rounded-sm flex flex-col card-3d"
      data-ocid={`cose-card-${pillar.id}`}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      {/* Luxury glass highlight strip at top */}
      <div
        className="absolute top-0 left-0 right-0 h-px rounded-t-sm pointer-events-none"
        style={{
          background: `linear-gradient(90deg, transparent, oklch(0.95 0.1 ${pillar.accentHue} / 0.4), transparent)`,
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-[30%] rounded-t-sm pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, oklch(0.98 0 0 / 0.04) 0%, transparent 100%)",
        }}
      />

      {/* Card header */}
      <div className="p-6 relative">
        <div className="flex items-start gap-4 mb-4">
          {/* Letter badge */}
          <div
            className="w-12 h-12 rounded-sm flex items-center justify-center text-xl font-display font-bold shrink-0"
            style={{
              background: `oklch(0.85 0.25 ${pillar.accentHue} / 0.1)`,
              border: `1px solid oklch(0.85 0.25 ${pillar.accentHue} / 0.4)`,
              boxShadow: `0 0 20px oklch(0.85 0.25 ${pillar.accentHue} / 0.2)`,
              color: `oklch(0.85 0.25 ${pillar.accentHue})`,
            }}
          >
            {pillar.letter}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-display font-bold text-lg text-foreground leading-tight">
              {pillar.title}
            </h3>
            <p className="font-mono text-xs text-muted-foreground mt-0.5 tracking-wide uppercase">
              {pillar.subtitle}
            </p>
          </div>
          <IconBox hue={pillar.accentHue}>
            <Icon
              className="w-5 h-5"
              style={{ color: `oklch(0.85 0.25 ${pillar.accentHue})` }}
            />
          </IconBox>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {pillar.description}
        </p>

        <EasyWordCallout text={pillar.easyWord} />

        {/* Expand toggle */}
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="mt-4 w-full flex items-center justify-between px-3 py-2 rounded-sm transition-smooth text-xs font-mono tracking-wider uppercase text-muted-foreground hover:text-foreground"
          style={{
            background: `oklch(0.85 0.25 ${pillar.accentHue} / 0.05)`,
            border: `1px solid oklch(0.85 0.25 ${pillar.accentHue} / 0.2)`,
          }}
          data-ocid={`cose-expand-${pillar.id}`}
        >
          <span>View Analysis</span>
          <motion.span
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="w-3.5 h-3.5" />
          </motion.span>
        </button>
      </div>

      {/* Expandable strengths/challenges */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div
              className="px-6 pb-6 space-y-4"
              style={{
                borderTop: `1px solid oklch(0.85 0.25 ${pillar.accentHue} / 0.15)`,
              }}
            >
              {/* Strengths */}
              <div className="pt-4">
                <p
                  className="font-mono text-[10px] tracking-widest uppercase mb-3 flex items-center gap-2"
                  style={{ color: "oklch(0.75 0.2 150)" }}
                >
                  <Check className="w-3 h-3" /> Strengths
                </p>
                <ul className="space-y-2">
                  {pillar.strengths.map((s) => (
                    <li
                      key={s}
                      className="flex items-start gap-2.5 text-sm text-foreground/80"
                    >
                      <Check
                        className="w-3.5 h-3.5 shrink-0 mt-0.5"
                        style={{ color: "oklch(0.75 0.2 150)" }}
                      />
                      <span className="leading-relaxed">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges */}
              <div
                className="pt-3 border-t"
                style={{
                  borderColor: `oklch(0.85 0.25 ${pillar.accentHue} / 0.1)`,
                }}
              >
                <p
                  className="font-mono text-[10px] tracking-widest uppercase mb-3 flex items-center gap-2"
                  style={{ color: "oklch(0.75 0.18 55)" }}
                >
                  <AlertTriangle className="w-3 h-3" /> Challenges
                </p>
                <ul className="space-y-2">
                  {pillar.challenges.map((c) => (
                    <li
                      key={c}
                      className="flex items-start gap-2.5 text-sm text-muted-foreground"
                    >
                      <AlertTriangle
                        className="w-3.5 h-3.5 shrink-0 mt-0.5"
                        style={{ color: "oklch(0.75 0.18 55)" }}
                      />
                      <span className="leading-relaxed">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function COSESection() {
  return (
    <section
      id="cose"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "oklch(0.1 0.012 240)" }}
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, oklch(0.85 0.25 200 / 0.05) 0%, transparent 70%)",
        }}
      />

      {/* Section divider top */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, oklch(0.85 0.25 200 / 0.5) 30%, oklch(0.95 0.15 190 / 0.8) 50%, oklch(0.85 0.25 200 / 0.5) 70%, transparent 100%)",
        }}
      />

      <div className="container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 glass-card rounded-sm mb-4">
            <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase font-light">
              THE COSE FRAMEWORK
            </span>
          </div>
          <h2 className="font-display leading-tight">
            <span className="block text-sm font-mono tracking-widest text-muted-foreground uppercase font-light mb-2">
              Four Pillars of
            </span>
            <span className="block font-bold text-3xl lg:text-4xl xl:text-5xl text-foreground">
              Evaluation <span className="text-glow">Excellence</span>
            </span>
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            A systematic methodology designed to eliminate academic fraud,
            reduce evaluation time, and empower teachers with AI-grade tooling.
            Click each pillar to see the detailed strengths and challenges
            analysis.
          </p>
        </motion.div>

        {/* Pillars grid */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
          style={{ perspective: "1200px" }}
        >
          {PILLARS.map((pillar, i) => (
            <PillarCard key={pillar.id} pillar={pillar} index={i} />
          ))}
        </div>

        {/* Bottom metric bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-px glass-card rounded-sm overflow-hidden"
          style={{
            boxShadow:
              "0 2px 4px rgba(0,0,0,0.5), 0 8px 16px rgba(0,0,0,0.4), 0 20px 40px rgba(0,0,255,0.1), 0 0 60px oklch(0.85 0.25 200 / 0.06)",
          }}
        >
          {[
            { value: "0%", label: "Evaluation Leakage" },
            { value: "100%", label: "RTI Compliant" },
            { value: "10×", label: "Faster Results" },
            { value: "99.7%", label: "Accuracy Verified" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-5 text-center relative overflow-hidden"
              style={{ background: "oklch(0.12 0.015 240 / 0.5)" }}
            >
              {/* Top highlight */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, oklch(0.98 0 0 / 0.08), transparent)",
                }}
              />
              <p className="font-display font-bold text-2xl text-glow">
                {stat.value}
              </p>
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
