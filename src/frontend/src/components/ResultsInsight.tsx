import {
  AlertTriangle,
  BarChart3,
  BookOpen,
  Brain,
  Building2,
  Calendar,
  Check,
  ChevronDown,
  ClipboardList,
  FlaskConical,
  GraduationCap,
  Layers,
  Lightbulb,
  MapPin,
  PenLine,
  RefreshCcw,
  Rocket,
  Search,
  ShieldCheck,
  Sigma,
  TrendingUp,
  Trophy,
  Users,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import EasyWordCallout from "./EasyWordCallout";

// ── Data ─────────────────────────────────────────────────────────────────────

type LucideIcon = React.FC<{ className?: string; style?: React.CSSProperties }>;

type RoadmapStep = {
  Icon: LucideIcon;
  title: string;
  description: string;
  proTip: string;
};

type Topic = {
  subject: string;
  score: number;
  level: "strong" | "moderate" | "weak";
  strong: string[];
  weak: string[];
  detailedRoadmap: RoadmapStep[];
};

const STUDENT_TOPICS: Topic[] = [
  {
    subject: "Mathematics",
    score: 82,
    level: "strong",
    strong: [
      "Excellent command of Differential Calculus — solved 9/10 correctly",
      "Strong understanding of Matrix Operations and Linear Algebra",
      "Consistent accuracy in Integration by Parts problems",
    ],
    weak: [
      "Struggles with Probability & Statistics — only 3/10 correct",
      "Trigonometric identities show repeated errors in multi-step proofs",
    ],
    detailedRoadmap: [
      {
        Icon: BookOpen,
        title: "Probability: Revision Module",
        description:
          "Begin with foundational concepts — sample spaces, events, and classical probability. Revisit conditional probability and independence using NCERT + PNAcademy reference notes.",
        proTip:
          "Focus on Bayes theorem and conditional probability — these appear in 40% of exam questions. Practice at least 15 sums daily and write each formula by hand to reinforce memory.",
      },
      {
        Icon: Layers,
        title: "Practice Sets A3 – A7",
        description:
          "Work through PNAcademy progressive practice sets A3 (basic) to A7 (advanced). Each set escalates difficulty: combinatorics, probability distributions, then real exam-pattern questions.",
        proTip:
          "Do not skip sets A4–A5 — they bridge the gap between theory and exam-style questions. Time yourself: each set should take no more than 25 minutes.",
      },
      {
        Icon: Sigma,
        title: "Formula Flash Cards",
        description:
          "Create formula cards for: permutations, combinations, binomial distribution, Bayes theorem, and trigonometric identities. Use spaced repetition to review these daily.",
        proTip:
          "Group trig identities by family (Pythagorean, sum-product, double angle). Students who master the 12 core identities solve 85% of trig problems without derivation.",
      },
      {
        Icon: ClipboardList,
        title: "Topic Mock Test",
        description:
          "Attempt a full 30-minute mock test on Probability & Trigonometry exclusively. Simulate exam conditions — no notes, strict timing, pen and paper.",
        proTip:
          "Review wrong answers immediately after the test. Write a one-line correction for each error. This active review technique improves retention by 60% compared to passive re-reading.",
      },
      {
        Icon: RefreshCcw,
        title: "Review & Re-attempt",
        description:
          "Analyse your mock test score. If Probability is still below 70%, revisit the conditional probability section. Re-attempt a different question set with fresh eyes after 24 hours.",
        proTip:
          "Track your improvement numerically — set a mini-goal (e.g. improve from 30% to 60% in one week). Small measurable wins build confidence for full-subject exams.",
      },
    ],
  },
  {
    subject: "Physics",
    score: 54,
    level: "moderate",
    strong: [
      "Solid grasp of Newton's Laws and Free Body Diagrams",
      "Accurate numerical calculations in Kinematics",
    ],
    weak: [
      "Wave Optics and Interference patterns remain conceptually unclear",
      "Thermodynamics second law applications are frequently misapplied",
      "Electromagnetic Induction problems show formula confusion",
    ],
    detailedRoadmap: [
      {
        Icon: BookOpen,
        title: "Wave Optics: Revision Module",
        description:
          "Start with Huygens principle, then move to Young's double-slit experiment and interference patterns. Use diagrams extensively — Wave Optics is 80% visual understanding.",
        proTip:
          "Draw the path difference diagram for every interference problem before solving. Most errors come from skipping the diagram step. YDSE alone carries 15–20% of optics marks.",
      },
      {
        Icon: Layers,
        title: "Practice Sets A3 – A7",
        description:
          "Complete PNAcademy Wave Optics and Thermodynamics practice sets from conceptual (A3) to numerical application (A7). Focus on second-law entropy problems in Thermodynamics.",
        proTip:
          "For Thermodynamics: always identify the system, surroundings, and sign convention (heat into system = positive) before any calculation. This eliminates 70% of sign errors.",
      },
      {
        Icon: FlaskConical,
        title: "Formula Flash Cards",
        description:
          "Build cards for: fringe width formula, path difference conditions, Carnot efficiency, entropy change equations, and Faraday's and Lenz's laws for electromagnetic induction.",
        proTip:
          "Separate Faraday's quantitative law (EMF = -dΦ/dt) from Lenz's qualitative law (direction). Students who conflate these lose 5–8 marks on induction questions every time.",
      },
      {
        Icon: ClipboardList,
        title: "Topic Mock Test",
        description:
          "Take a focused 40-minute mock covering Wave Optics, Thermodynamics and EM Induction with equal weightage. Use PNAcademy's adaptive test engine for physics-specific timing.",
        proTip:
          "In Physics exams, numerical questions carry more marks than theory. If stuck on a theory question, skip and return — never let one question consume more than 3 minutes.",
      },
      {
        Icon: RefreshCcw,
        title: "Review & Re-attempt",
        description:
          "After scoring, identify which of the three weak topics cost the most marks. Spend an extra revision session on that single topic, then re-attempt a parallel question set.",
        proTip:
          "Target 65%+ in each weak topic before the final exam. Concentrated improvement in weak areas raises your Physics total faster than polishing already-strong Mechanics.",
      },
    ],
  },
  {
    subject: "Chemistry",
    score: 35,
    level: "weak",
    strong: ["Basic Stoichiometry and Mole Concept are well understood"],
    weak: [
      "Organic reaction mechanisms show very low recall — missed 8/10",
      "Electrochemistry numerical problems have systematic calculation errors",
      "IUPAC naming of compounds has high error rate across all question types",
    ],
    detailedRoadmap: [
      {
        Icon: BookOpen,
        title: "Organic Chemistry: Revision Module",
        description:
          "Begin with reaction types classification: substitution, addition, elimination, and redox. Do not memorise individual reactions — learn the mechanism logic so you can predict any reaction.",
        proTip:
          "Memorise the reaction types first, then practice balancing equations. Organic chemistry mnemonics ('SN2 is back-side attack: Back-door Slam') save significant exam time. 3 core mechanisms cover 70% of questions.",
      },
      {
        Icon: Layers,
        title: "Practice Sets A3 – A7",
        description:
          "Work through PNAcademy Organic Mechanisms sets (A3: identify reaction type; A4–A5: predict products; A6–A7: full mechanism writing). Electrochemistry numericals start at set A4.",
        proTip:
          "For Electrochemistry: unit analysis saves marks. Always write units through every step — if your final unit is not V, A, or C, you have made an error somewhere in the chain.",
      },
      {
        Icon: Layers,
        title: "Formula Flash Cards",
        description:
          "Create flash cards for: Faraday's laws of electrolysis, Nernst equation, standard electrode potentials, IUPAC priority rules (halogen < alkyl < alkenyl < OH < COOH), and common functional group names.",
        proTip:
          "Learn IUPAC naming as a decision tree, not a list of rules. Draw the tree on a single page: longest chain → principal group → numbering direction. This tree alone solves 90% of naming questions.",
      },
      {
        Icon: ClipboardList,
        title: "Topic Mock Test",
        description:
          "Attempt a 35-minute mock covering Organic Reactions, Electrochemistry, and IUPAC naming in equal proportion. Prioritise accuracy over speed at this stage — aim for 50% correct first.",
        proTip:
          "In Chemistry, partial credit is common. Even if you cannot complete a mechanism, write what you know — the first and last steps often carry individual marks in university exams.",
      },
      {
        Icon: RefreshCcw,
        title: "Review & Re-attempt",
        description:
          "Compare your mock answer to model answers step by step. For every organic mechanism error, trace back to which step you deviated. Re-attempt the exact question type (not same question) after 48 hours.",
        proTip:
          "Chemistry improvement is non-linear — the first week feels slow, but after the mechanisms click conceptually, scores jump 15–20 marks rapidly. Consistency is the only key.",
      },
    ],
  },
  {
    subject: "English",
    score: 71,
    level: "strong",
    strong: [
      "Comprehension passages answered with high accuracy",
      "Grammar and sentence structure are strong",
    ],
    weak: [
      "Essay writing lacks structured argument development",
      "Vocabulary in formal writing is limited",
    ],
    detailedRoadmap: [
      {
        Icon: BookOpen,
        title: "Essay Structure: Revision Module",
        description:
          "Study the PEEL paragraph structure (Point, Evidence, Explain, Link). Read 3 model essays from PNAcademy's sample bank — annotate how each paragraph opens and transitions.",
        proTip:
          "The introduction and conclusion together account for 30–40% of essay marks. Spend at least 3–4 minutes planning your structure before writing a single sentence.",
      },
      {
        Icon: Layers,
        title: "Practice Sets A3 – A7",
        description:
          "Complete PNAcademy essay writing progressions: A3 (outline-only), A4 (timed paragraph), A5–A6 (full timed essays on academic topics), A7 (peer-reviewed essay with feedback integration).",
        proTip:
          "Write every practice essay under timed conditions. A 500-word essay should take 20 minutes maximum. Overlong essays that run out of time are the single most common cause of mark loss.",
      },
      {
        Icon: PenLine,
        title: "Formula Flash Cards",
        description:
          "Build vocabulary cards using the Academic Word List (AWL) — 570 words that appear in 60% of academic texts. Learn 10 new words daily with a sentence example for each.",
        proTip:
          "Do not learn synonyms in isolation — learn a word in context. Replace one word in your next practice essay with a higher-register synonym. Active use in writing fixes vocabulary 5x faster than passive memorisation.",
      },
      {
        Icon: ClipboardList,
        title: "Topic Mock Test",
        description:
          "Attempt one full timed essay (30 minutes) on an unseen topic. Then answer one comprehension passage from a past paper. Self-evaluate your essay against the PEEL rubric.",
        proTip:
          "In English exams, neat handwriting and clear paragraph breaks earn 'presentation marks' at many universities. Ensure your answer is easy for the examiner to read — legibility is a free mark.",
      },
      {
        Icon: RefreshCcw,
        title: "Review & Re-attempt",
        description:
          "Have a teacher or peer review your timed essay. Focus on: does each paragraph make one clear point? Is the argument logically ordered? Re-write only the weakest paragraph after feedback.",
        proTip:
          "Re-reading your essay aloud (even silently mouthing words) is the fastest way to catch awkward phrasing and grammar errors. Do this for every exam answer before submitting.",
      },
    ],
  },
];

const TEACHER_MATRIX = [
  {
    teacher: "Prof. A. Sharma",
    subject: "Mathematics",
    topics: [
      { topic: "Calculus", performance: 88, level: "strong" as const },
      { topic: "Probability", performance: 42, level: "weak" as const },
      { topic: "Algebra", performance: 76, level: "moderate" as const },
    ],
  },
  {
    teacher: "Prof. R. Verma",
    subject: "Physics",
    topics: [
      { topic: "Mechanics", performance: 80, level: "strong" as const },
      { topic: "Optics", performance: 38, level: "weak" as const },
      { topic: "Thermodynamics", performance: 51, level: "moderate" as const },
    ],
  },
  {
    teacher: "Prof. S. Singh",
    subject: "Chemistry",
    topics: [
      { topic: "Stoichiometry", performance: 79, level: "strong" as const },
      { topic: "Organic Reactions", performance: 29, level: "weak" as const },
      { topic: "Electrochemistry", performance: 44, level: "weak" as const },
    ],
  },
  {
    teacher: "Prof. M. Jha",
    subject: "English",
    topics: [
      { topic: "Comprehension", performance: 85, level: "strong" as const },
      { topic: "Essay Writing", performance: 55, level: "moderate" as const },
      { topic: "Grammar", performance: 83, level: "strong" as const },
    ],
  },
];

const ROADMAP_STEPS = [
  {
    Icon: Search,
    label: "Identify Weakness",
    desc: "AI scans topic-wise score",
  },
  {
    Icon: BookOpen,
    label: "Topic Deep Dive",
    desc: "Targeted concept modules",
  },
  {
    Icon: PenLine,
    label: "Practice & Assessment",
    desc: "Adaptive question banks",
  },
  {
    Icon: TrendingUp,
    label: "Track Progress",
    desc: "Real-time improvement graph",
  },
  { Icon: Trophy, label: "Mastery", desc: "Certified topic proficiency" },
];

// ── Helpers ───────────────────────────────────────────────────────────────────

const LEVEL_COLORS = {
  strong: {
    bar: "oklch(0.72 0.2 145)",
    text: "oklch(0.72 0.2 145)",
    label: "Strong",
  },
  moderate: {
    bar: "oklch(0.78 0.2 65)",
    text: "oklch(0.78 0.2 65)",
    label: "Needs Focus",
  },
  weak: {
    bar: "oklch(0.65 0.22 25)",
    text: "oklch(0.65 0.22 25)",
    label: "Priority",
  },
};

function ScoreBar({
  score,
  level,
  animate,
}: { score: number; level: "strong" | "moderate" | "weak"; animate: boolean }) {
  const color = LEVEL_COLORS[level].bar;
  return (
    <div
      className="relative h-2 rounded-full overflow-hidden"
      style={{ background: "oklch(0.2 0.02 240)" }}
    >
      <motion.div
        className="absolute inset-y-0 left-0 rounded-full"
        style={{ background: color, boxShadow: `0 0 8px ${color}` }}
        initial={{ width: 0 }}
        animate={animate ? { width: `${score}%` } : { width: 0 }}
        transition={{ duration: 1, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
      />
    </div>
  );
}

// ── AI Roadmap Panel ──────────────────────────────────────────────────────────

function AIRoadmapPanel({ steps }: { steps: RoadmapStep[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
      className="overflow-hidden"
    >
      <div
        className="mx-4 mb-4 rounded-sm overflow-hidden"
        style={{
          background: "oklch(0.11 0.015 240 / 0.95)",
          border: "1px solid oklch(0.85 0.25 200 / 0.2)",
          boxShadow: "0 0 30px oklch(0.85 0.25 200 / 0.08)",
        }}
      >
        {/* Panel Header */}
        <div
          className="flex items-center gap-2.5 px-4 py-3"
          style={{
            borderBottom: "1px solid oklch(0.85 0.25 200 / 0.15)",
            background:
              "linear-gradient(135deg, oklch(0.85 0.25 200 / 0.08) 0%, transparent 60%)",
          }}
        >
          <div
            className="w-7 h-7 rounded-sm flex items-center justify-center"
            style={{
              background: "oklch(0.85 0.25 200 / 0.15)",
              border: "1px solid oklch(0.85 0.25 200 / 0.35)",
            }}
          >
            <Brain
              className="w-4 h-4"
              style={{ color: "oklch(0.85 0.25 200)" }}
            />
          </div>
          <div>
            <p
              className="font-mono text-[10px] tracking-widest uppercase font-semibold"
              style={{ color: "oklch(0.85 0.25 200)" }}
            >
              AI-Generated Learning Path
            </p>
            <p className="font-mono text-[9px] text-muted-foreground">
              Personalised 5-step recovery plan · PNAcademy
            </p>
          </div>
          <div className="ml-auto flex items-center gap-1">
            <span
              className="w-1.5 h-1.5 rounded-full pulse-glow"
              style={{ background: "oklch(0.72 0.2 145)" }}
            />
            <span className="font-mono text-[9px] text-muted-foreground uppercase tracking-wider">
              Live
            </span>
          </div>
        </div>

        {/* Steps */}
        <div className="p-4 space-y-0">
          {steps.map((step, i) => {
            const { Icon } = step;
            const isLast = i === steps.length - 1;
            return (
              <div key={step.title} className="flex gap-3">
                {/* Step connector column */}
                <div className="flex flex-col items-center">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                    className="relative w-8 h-8 rounded-full flex items-center justify-center shrink-0 z-10"
                    style={{
                      background: "oklch(0.14 0.018 240)",
                      border: "1.5px solid oklch(0.85 0.25 200 / 0.5)",
                      boxShadow:
                        "0 0 12px oklch(0.85 0.25 200 / 0.25), inset 0 0 8px oklch(0.85 0.25 200 / 0.08)",
                    }}
                  >
                    <Icon
                      className="w-3.5 h-3.5"
                      style={{ color: "oklch(0.85 0.25 200)" }}
                    />
                    {/* Step number bubble */}
                    <span
                      className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 rounded-full flex items-center justify-center font-mono font-bold"
                      style={{
                        fontSize: "7px",
                        background: "oklch(0.85 0.25 200)",
                        color: "oklch(0.06 0.01 240)",
                      }}
                    >
                      {i + 1}
                    </span>
                  </motion.div>
                  {/* Vertical connector line */}
                  {!isLast && (
                    <div
                      className="w-px flex-1 my-1"
                      style={{
                        background:
                          "linear-gradient(to bottom, oklch(0.85 0.25 200 / 0.4) 0%, oklch(0.85 0.25 200 / 0.1) 100%)",
                        minHeight: "16px",
                      }}
                    />
                  )}
                </div>

                {/* Step content */}
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.25 }}
                  className={`flex-1 pb-4 ${isLast ? "" : ""}`}
                >
                  <p
                    className="font-display font-semibold text-sm leading-tight mb-1"
                    style={{ color: "oklch(0.92 0.01 240)" }}
                  >
                    {step.title}
                  </p>
                  <p className="font-mono text-[11px] text-muted-foreground leading-relaxed mb-2">
                    {step.description}
                  </p>

                  {/* Pro Tip callout */}
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 + 0.35 }}
                    className="rounded-sm px-3 py-2 flex items-start gap-2"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.78 0.2 65 / 0.1) 0%, oklch(0.78 0.2 65 / 0.05) 100%)",
                      border: "1px solid oklch(0.78 0.2 65 / 0.35)",
                      boxShadow: "0 0 12px oklch(0.78 0.2 65 / 0.08)",
                    }}
                  >
                    <Lightbulb
                      className="w-3.5 h-3.5 shrink-0 mt-0.5"
                      style={{ color: "oklch(0.85 0.2 65)" }}
                    />
                    <div>
                      <span
                        className="font-mono text-[9px] tracking-widest uppercase block mb-0.5 font-bold"
                        style={{ color: "oklch(0.85 0.2 65)" }}
                      >
                        Pro Tip
                      </span>
                      <p
                        className="font-mono text-[11px] leading-relaxed"
                        style={{ color: "oklch(0.82 0.1 65)" }}
                      >
                        {step.proTip}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Footer CTA */}
        <div
          className="px-4 pb-4"
          style={{ borderTop: "1px solid oklch(0.85 0.25 200 / 0.1)" }}
        >
          <motion.button
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-3 w-full py-2.5 text-xs font-mono font-semibold tracking-widest uppercase rounded-sm transition-smooth flex items-center justify-center gap-2"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.85 0.25 200) 0%, oklch(0.75 0.22 210) 100%)",
              color: "oklch(0.06 0.01 240)",
              boxShadow: "0 0 20px oklch(0.85 0.25 200 / 0.4)",
            }}
            data-ocid="start-learning-path-cta"
          >
            <Rocket className="w-3.5 h-3.5" />
            Start This Learning Path on PNAcademy
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

// ── Student Topic Card ────────────────────────────────────────────────────────

function TopicCard({
  topic,
  index,
  animate,
  isOpen,
  onToggle,
}: {
  topic: Topic;
  index: number;
  animate: boolean;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const [roadmapOpen, setRoadmapOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const colors = LEVEL_COLORS[topic.level];
  const hasWeakPoints = topic.weak.length > 0;

  // Auto-close roadmap when card closes
  useEffect(() => {
    if (!isOpen) setRoadmapOpen(false);
  }, [isOpen]);

  // Auto-collapse this card when it scrolls mostly out of view
  useEffect(() => {
    if (!isOpen) return;
    const card = cardRef.current;
    if (!card) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          onToggle();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(card);
    return () => observer.disconnect();
  }, [isOpen, onToggle]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: -20 }}
      animate={animate ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card-hover rounded-sm overflow-hidden"
      data-ocid={`topic-card-${topic.subject.toLowerCase()}`}
    >
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <span className="font-display font-semibold text-sm text-foreground">
              {topic.subject}
            </span>
            <span
              className="font-mono text-[10px] px-2 py-0.5 rounded-sm"
              style={{
                background: `${colors.bar}20`,
                color: colors.text,
                border: `1px solid ${colors.bar}40`,
              }}
            >
              {colors.label}
            </span>
          </div>
          <span
            className="font-display font-bold text-lg"
            style={{ color: colors.text }}
          >
            {topic.score}%
          </span>
        </div>
        <ScoreBar score={topic.score} level={topic.level} animate={animate} />

        <button
          type="button"
          onClick={onToggle}
          className="mt-3 w-full flex items-center justify-between text-xs font-mono tracking-wider uppercase text-muted-foreground hover:text-foreground transition-smooth px-2 py-1.5 rounded-sm"
          style={{ background: "oklch(0.16 0.015 240 / 0.5)" }}
          data-ocid={`expand-${topic.subject.toLowerCase()}`}
        >
          <span>View Strength & Weakness Analysis</span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="w-3.5 h-3.5" />
          </motion.div>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="details"
            initial={{ height: 0, opacity: 0, scale: 0.98 }}
            animate={{ height: "auto", opacity: 1, scale: 1 }}
            exit={{ height: 0, opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div
              className="px-4 pb-4 space-y-3"
              style={{ borderTop: "1px solid oklch(0.85 0.25 200 / 0.1)" }}
            >
              {/* Strong points */}
              <div className="pt-3">
                <p
                  className="font-mono text-[10px] tracking-widest uppercase mb-2 flex items-center gap-1.5"
                  style={{ color: "oklch(0.72 0.2 145)" }}
                >
                  <Check className="w-3 h-3" /> Strong Points
                </p>
                <ul className="space-y-1.5">
                  {topic.strong.map((s) => (
                    <li
                      key={s}
                      className="flex items-start gap-2 text-xs text-foreground/80"
                    >
                      <Check
                        className="w-3 h-3 shrink-0 mt-0.5"
                        style={{ color: "oklch(0.72 0.2 145)" }}
                      />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Weak points */}
              <div
                className="pt-2 border-t"
                style={{ borderColor: "oklch(0.85 0.25 200 / 0.08)" }}
              >
                <p
                  className="font-mono text-[10px] tracking-widest uppercase mb-2 flex items-center gap-1.5"
                  style={{ color: "oklch(0.65 0.22 25)" }}
                >
                  <AlertTriangle className="w-3 h-3" /> Weak Points
                </p>
                <ul className="space-y-1.5">
                  {topic.weak.map((w) => (
                    <li
                      key={w}
                      className="flex items-start gap-2 text-xs text-muted-foreground"
                    >
                      <AlertTriangle
                        className="w-3 h-3 shrink-0 mt-0.5"
                        style={{ color: "oklch(0.65 0.22 25)" }}
                      />
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* AI Roadmap Toggle */}
              {hasWeakPoints && (
                <div className="pt-2">
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setRoadmapOpen(!roadmapOpen)}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-sm transition-smooth"
                    style={{
                      background: roadmapOpen
                        ? "oklch(0.85 0.25 200 / 0.12)"
                        : "oklch(0.85 0.25 200 / 0.06)",
                      border: "1px solid oklch(0.85 0.25 200 / 0.35)",
                      boxShadow: roadmapOpen
                        ? "0 0 20px oklch(0.85 0.25 200 / 0.15)"
                        : "none",
                    }}
                    data-ocid={`roadmap-toggle-${topic.subject.toLowerCase()}`}
                  >
                    <div className="flex items-center gap-2">
                      <Brain
                        className="w-3.5 h-3.5"
                        style={{ color: "oklch(0.85 0.25 200)" }}
                      />
                      <span
                        className="font-mono text-[10px] tracking-widest uppercase font-semibold"
                        style={{ color: "oklch(0.85 0.25 200)" }}
                      >
                        View AI-Generated Learning Path
                      </span>
                      <span
                        className="font-mono text-[9px] px-1.5 py-0.5 rounded-sm"
                        style={{
                          background: "oklch(0.85 0.25 200 / 0.15)",
                          color: "oklch(0.85 0.25 200)",
                          border: "1px solid oklch(0.85 0.25 200 / 0.3)",
                        }}
                      >
                        5 Steps
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: roadmapOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown
                        className="w-3.5 h-3.5"
                        style={{ color: "oklch(0.85 0.25 200)" }}
                      />
                    </motion.div>
                  </motion.button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* AI Roadmap Panel — outside the main expand region so it can animate independently */}
      <AnimatePresence>
        {isOpen && roadmapOpen && (
          <AIRoadmapPanel steps={topic.detailedRoadmap} />
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ── Teacher Matrix ────────────────────────────────────────────────────────────

const PERF_CELL = {
  strong: {
    bg: "oklch(0.72 0.2 145 / 0.15)",
    border: "oklch(0.72 0.2 145 / 0.4)",
    text: "oklch(0.72 0.2 145)",
  },
  moderate: {
    bg: "oklch(0.78 0.2 65 / 0.15)",
    border: "oklch(0.78 0.2 65 / 0.4)",
    text: "oklch(0.78 0.2 65)",
  },
  weak: {
    bg: "oklch(0.65 0.22 25 / 0.15)",
    border: "oklch(0.65 0.22 25 / 0.5)",
    text: "oklch(0.65 0.22 25)",
  },
};

function TeacherMatrix({ animate }: { animate: boolean }) {
  return (
    <div className="space-y-3">
      {TEACHER_MATRIX.map((row, ri) => (
        <motion.div
          key={row.teacher}
          initial={{ opacity: 0, x: 20 }}
          animate={animate ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.5, delay: ri * 0.1 }}
          className="glass-card rounded-sm p-4"
        >
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="font-display font-semibold text-sm text-foreground">
                {row.teacher}
              </p>
              <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                {row.subject}
              </p>
            </div>
            <span
              className="font-mono text-[10px] px-2 py-0.5 rounded-sm"
              style={{
                background: "oklch(0.85 0.25 200 / 0.1)",
                color: "oklch(0.85 0.25 200)",
                border: "1px solid oklch(0.85 0.25 200 / 0.3)",
              }}
            >
              Class Analysis
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {row.topics.map((t) => {
              const c = PERF_CELL[t.level];
              return (
                <motion.div
                  key={t.topic}
                  whileHover={{ scale: 1.04 }}
                  className="rounded-sm p-2.5 text-center cursor-default transition-smooth"
                  style={{ background: c.bg, border: `1px solid ${c.border}` }}
                  title={`${t.topic}: ${t.performance}% class average`}
                >
                  <p
                    className="font-display font-bold text-sm"
                    style={{ color: c.text }}
                  >
                    {t.performance}%
                  </p>
                  <p className="font-mono text-[9px] text-muted-foreground mt-0.5 leading-tight">
                    {t.topic}
                  </p>
                  {t.level === "weak" && (
                    <p
                      className="font-mono text-[8px] mt-1 uppercase tracking-wider flex items-center justify-center gap-0.5"
                      style={{ color: c.text }}
                    >
                      <AlertTriangle className="w-2 h-2" /> Needs Attention
                    </p>
                  )}
                </motion.div>
              );
            })}
          </div>
          {row.topics.some((t) => t.level === "weak") && (
            <div
              className="mt-3 px-3 py-2 rounded-sm text-xs font-mono"
              style={{
                background: "oklch(0.65 0.22 25 / 0.08)",
                border: "1px solid oklch(0.65 0.22 25 / 0.25)",
              }}
            >
              <span style={{ color: "oklch(0.65 0.22 25)" }}>Insight: </span>
              <span className="text-muted-foreground">
                Students score low in{" "}
                {row.topics
                  .filter((t) => t.level === "weak")
                  .map((t) => t.topic)
                  .join(", ")}
                . Consider faculty development program for this topic.
              </span>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}

// ── Roadmap Visual ────────────────────────────────────────────────────────────

function RoadmapVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mt-16"
    >
      <div className="text-center mb-8">
        <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-2">
          PNAcademy Improvement Pathway
        </p>
        <h3 className="font-display font-bold text-xl text-foreground">
          From <span className="text-glow">Weakness</span> to{" "}
          <span className="text-glow">Mastery</span>
        </h3>
      </div>

      <div className="relative">
        {/* Connector line — desktop */}
        <div
          className="hidden lg:block absolute top-8 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(0.85 0.25 200 / 0.5), transparent)",
          }}
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-0">
          {ROADMAP_STEPS.map((step, i) => {
            const { Icon } = step;
            return (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex flex-col items-center text-center lg:px-4 relative"
              >
                <div
                  className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center mb-3 transition-smooth"
                  style={{
                    background: "oklch(0.14 0.015 240 / 0.9)",
                    border: "1px solid oklch(0.85 0.25 200 / 0.4)",
                    boxShadow:
                      i === 4
                        ? "0 0 24px oklch(0.85 0.25 200 / 0.5)"
                        : "0 0 12px oklch(0.85 0.25 200 / 0.2)",
                  }}
                >
                  <Icon
                    className="w-6 h-6"
                    style={{ color: "oklch(0.85 0.25 200)" }}
                  />
                </div>
                <span
                  className="font-mono text-[10px] tracking-wider uppercase mb-0.5"
                  style={{ color: "oklch(0.85 0.25 200)" }}
                >
                  Step {i + 1}
                </span>
                <p className="font-display font-semibold text-sm text-foreground leading-tight">
                  {step.label}
                </p>
                <p className="font-mono text-[10px] text-muted-foreground mt-1 leading-relaxed">
                  {step.desc}
                </p>
                {i < ROADMAP_STEPS.length - 1 && (
                  <div
                    className="hidden lg:flex absolute top-8 -right-2 items-center justify-center"
                    style={{ color: "oklch(0.85 0.25 200 / 0.6)" }}
                  >
                    <Zap className="w-3 h-3" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function ResultsInsight() {
  const [activeTab, setActiveTab] = useState<"students" | "colleges">(
    "students",
  );
  // Controlled open index for student topic cards — only one open at a time
  const [openTopicIndex, setOpenTopicIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Auto-close all expanded cards when section scrolls out of viewport
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setOpenTopicIndex(null);
        }
      },
      { threshold: 0.05 },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const handleTopicToggle = (index: number) => {
    setOpenTopicIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      ref={sectionRef}
      id="results-insight"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "oklch(0.09 0.012 240)" }}
    >
      {/* Section divider */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, oklch(0.85 0.25 200 / 0.5) 30%, oklch(0.95 0.15 190 / 0.7) 50%, oklch(0.85 0.25 200 / 0.5) 70%, transparent 100%)",
        }}
      />

      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 0%, oklch(0.85 0.25 200 / 0.05) 0%, transparent 70%)",
          }}
        />
        <div className="absolute inset-0 opacity-30 circuit-bg" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section badge */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 glass-card rounded-sm mb-4">
            <span
              className="w-1.5 h-1.5 rounded-full pulse-glow"
              style={{ background: "oklch(0.85 0.25 200)" }}
            />
            <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase font-light">
              INTELLIGENCE ENGINE
            </span>
          </div>

          <h2 className="font-display leading-tight">
            <span className="block text-sm font-mono tracking-widest text-muted-foreground uppercase font-light mb-2">
              Beyond Marks
            </span>
            <span className="block font-bold text-3xl lg:text-4xl xl:text-5xl text-foreground">
              Intelligence That <span className="text-glow">Transforms</span>
            </span>
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Topic-wise analysis for every student. Institutional intelligence
            for every college. We reveal not just <em>what</em> score — but{" "}
            <em>why</em>, and <em>how to fix it</em>.
          </p>

          <div className="max-w-2xl mx-auto mt-4">
            <EasyWordCallout text="In simple words: We don't just tell you the score — we show you exactly what went wrong, who needs help, and how to fix it." />
          </div>
        </motion.div>

        {/* Tab Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-10"
        >
          <div
            className="flex glass-card rounded-sm p-1 gap-1"
            style={{ boxShadow: "0 0 30px oklch(0.85 0.25 200 / 0.08)" }}
            role="tablist"
            aria-label="Results view selector"
          >
            {(["students", "colleges"] as const).map((tab) => {
              const isActive = activeTab === tab;
              const TabIcon = tab === "students" ? GraduationCap : Building2;
              return (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(tab)}
                  className="relative px-5 py-2.5 text-sm font-mono font-semibold uppercase tracking-widest rounded-sm transition-smooth flex items-center gap-2"
                  style={
                    isActive
                      ? {
                          background: "oklch(0.85 0.25 200)",
                          color: "oklch(0.06 0.01 240)",
                          boxShadow: "0 0 16px oklch(0.85 0.25 200 / 0.5)",
                        }
                      : { color: "oklch(0.55 0.01 200)" }
                  }
                  data-ocid={`tab-${tab}`}
                >
                  <TabIcon className="w-4 h-4" />
                  {tab === "students" ? "For Students" : "For Colleges"}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === "students" ? (
            <motion.div
              key="students"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="grid lg:grid-cols-2 gap-6 lg:gap-10">
                {/* Left: explanation */}
                <div className="space-y-4">
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm font-mono text-xs tracking-widest uppercase"
                    style={{
                      background: "oklch(0.85 0.25 200 / 0.08)",
                      color: "oklch(0.85 0.25 200)",
                      border: "1px solid oklch(0.85 0.25 200 / 0.25)",
                    }}
                  >
                    <GraduationCap className="w-3.5 h-3.5" />
                    Student Intelligence Report
                  </div>
                  <h3 className="font-display font-bold text-2xl text-foreground leading-tight">
                    Know Exactly Where You Stand — And{" "}
                    <span className="text-glow">How to Rise</span>
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Every student gets a topic-wise breakdown of their
                    performance. Not just a percentage — but your exact strong
                    points, weak points, and a PNAcademy AI-curated step-by-step
                    roadmap to close the gap.
                  </p>

                  {/* Legend */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    {(["strong", "moderate", "weak"] as const).map((l) => (
                      <div key={l} className="flex items-center gap-1.5">
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ background: LEVEL_COLORS[l].bar }}
                        />
                        <span className="font-mono text-[10px] uppercase text-muted-foreground">
                          {LEVEL_COLORS[l].label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Roadmap feature callout */}
                  <div
                    className="rounded-sm px-4 py-3 flex items-start gap-3"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.85 0.25 200 / 0.08) 0%, transparent 60%)",
                      border: "1px solid oklch(0.85 0.25 200 / 0.2)",
                    }}
                  >
                    <Brain
                      className="w-4 h-4 shrink-0 mt-0.5"
                      style={{ color: "oklch(0.85 0.25 200)" }}
                    />
                    <div>
                      <p
                        className="font-mono text-[10px] uppercase tracking-widest font-semibold mb-1"
                        style={{ color: "oklch(0.85 0.25 200)" }}
                      >
                        AI Learning Path Feature
                      </p>
                      <p className="font-mono text-[11px] text-muted-foreground leading-relaxed">
                        Expand any subject card below, then tap{" "}
                        <span style={{ color: "oklch(0.85 0.25 200)" }}>
                          "View AI-Generated Learning Path"
                        </span>{" "}
                        to see a personalised 5-step roadmap with practice sets
                        A3–A7 and expert pro tips for that exact topic.
                      </p>
                    </div>
                  </div>

                  {/* Sample student badge */}
                  <div
                    className="rounded-sm p-4"
                    style={{
                      background: "oklch(0.14 0.015 240 / 0.7)",
                      border: "1px solid oklch(0.85 0.25 200 / 0.2)",
                    }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                        style={{
                          background: "oklch(0.85 0.25 200 / 0.15)",
                          color: "oklch(0.85 0.25 200)",
                          border: "1px solid oklch(0.85 0.25 200 / 0.4)",
                        }}
                      >
                        S
                      </div>
                      <div>
                        <p className="font-display font-semibold text-sm text-foreground">
                          Sample Student — Roll No. 2024-BCA-047
                        </p>
                        <p className="font-mono text-[10px] text-muted-foreground">
                          B.Sc. Science · Semester 3 · 2024–25
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-3">
                      {[
                        { label: "Overall Score", val: "60.5%" },
                        { label: "Rank in Class", val: "23 / 78" },
                        { label: "Topics Analyzed", val: "4 Subjects" },
                        { label: "Roadmap Items", val: "3 Priority" },
                      ].map((m) => (
                        <div key={m.label}>
                          <p className="font-mono text-[10px] text-muted-foreground uppercase">
                            {m.label}
                          </p>
                          <p className="font-display font-bold text-sm text-glow">
                            {m.val}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: topic cards */}
                <div className="space-y-3">
                  {STUDENT_TOPICS.map((t, i) => (
                    <TopicCard
                      key={t.subject}
                      topic={t}
                      index={i}
                      animate={activeTab === "students"}
                      isOpen={openTopicIndex === i}
                      onToggle={() => handleTopicToggle(i)}
                    />
                  ))}
                </div>
              </div>

              {/* Roadmap Visual */}
              <RoadmapVisual />
            </motion.div>
          ) : (
            <motion.div
              key="colleges"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="grid lg:grid-cols-2 gap-6 lg:gap-10">
                {/* Left: explanation */}
                <div className="space-y-4">
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm font-mono text-xs tracking-widest uppercase"
                    style={{
                      background: "oklch(0.75 0.22 300 / 0.08)",
                      color: "oklch(0.75 0.22 300)",
                      border: "1px solid oklch(0.75 0.22 300 / 0.25)",
                    }}
                  >
                    <Building2 className="w-3.5 h-3.5" />
                    Institutional Intelligence Dashboard
                  </div>
                  <h3 className="font-display font-bold text-2xl text-foreground leading-tight">
                    Discover Why Students Struggle —{" "}
                    <span
                      style={{
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        background:
                          "linear-gradient(135deg, oklch(0.75 0.22 300), oklch(0.85 0.25 200))",
                      }}
                    >
                      Before It's Too Late
                    </span>
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    When many students score low on the same topic, the data
                    reveals a systemic gap — often linked to how that topic was
                    taught. PNAcademy's institutional intelligence flags these
                    patterns so colleges can act proactively.
                  </p>

                  {/* Legend */}
                  <div className="flex flex-wrap gap-3 pt-1">
                    {(["strong", "moderate", "weak"] as const).map((l) => (
                      <div key={l} className="flex items-center gap-1.5">
                        <span
                          className="w-3 h-3 rounded-sm"
                          style={{
                            background: PERF_CELL[l].bg,
                            border: `1px solid ${PERF_CELL[l].border}`,
                          }}
                        />
                        <span className="font-mono text-[10px] uppercase text-muted-foreground">
                          {l === "strong"
                            ? "High Performance"
                            : l === "moderate"
                              ? "Average"
                              : "Low — Flag"}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Stats badges */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    {[
                      {
                        Icon: AlertTriangle,
                        val: "3 Topics",
                        label: "Flagged This Semester",
                        accent: "oklch(0.65 0.22 25)",
                      },
                      {
                        Icon: Users,
                        val: "4 Faculty",
                        label: "Performance Reviewed",
                        accent: "oklch(0.85 0.25 200)",
                      },
                      {
                        Icon: BarChart3,
                        val: "78 Students",
                        label: "Data Points Analyzed",
                        accent: "oklch(0.72 0.2 145)",
                      },
                      {
                        Icon: Calendar,
                        val: "Real-time",
                        label: "Continuous Monitoring",
                        accent: "oklch(0.78 0.2 65)",
                      },
                    ].map((s) => {
                      const { Icon: StatIcon } = s;
                      return (
                        <div
                          key={s.label}
                          className="glass-card rounded-sm p-3"
                          style={{ borderColor: `${s.accent}30` }}
                        >
                          <StatIcon
                            className="w-4 h-4 mb-1"
                            style={{ color: s.accent }}
                          />
                          <p
                            className="font-display font-bold text-sm"
                            style={{ color: s.accent }}
                          >
                            {s.val}
                          </p>
                          <p className="font-mono text-[10px] text-muted-foreground">
                            {s.label}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  {/* RTI note */}
                  <div
                    className="rounded-sm px-4 py-3 text-xs font-mono flex items-start gap-2"
                    style={{
                      background: "oklch(0.85 0.25 200 / 0.05)",
                      border: "1px solid oklch(0.85 0.25 200 / 0.2)",
                    }}
                  >
                    <ShieldCheck
                      className="w-3.5 h-3.5 shrink-0 mt-0.5"
                      style={{ color: "oklch(0.85 0.25 200)" }}
                    />
                    <span>
                      <span style={{ color: "oklch(0.85 0.25 200)" }}>
                        RTI Compliant:{" "}
                      </span>
                      <span className="text-muted-foreground">
                        All institutional analytics are audit-logged and can be
                        submitted as evidence during accreditation reviews.
                      </span>
                    </span>
                  </div>
                </div>

                {/* Right: teacher matrix */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
                      Subject-Teacher Performance Matrix
                    </p>
                    <div
                      className="flex-1 h-px"
                      style={{ background: "oklch(0.85 0.25 200 / 0.15)" }}
                    />
                  </div>
                  <TeacherMatrix animate={activeTab === "colleges"} />
                </div>
              </div>

              {/* Bottom call to action */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-12 text-center"
              >
                <div
                  className="inline-block glass-card rounded-sm px-8 py-6 max-w-xl mx-auto"
                  style={{ boxShadow: "0 0 40px oklch(0.85 0.25 200 / 0.1)" }}
                >
                  <p className="font-display font-bold text-lg text-foreground mb-2">
                    Ready to unlock institutional intelligence?
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Partner with PNAcademy and receive a full subject-teacher
                    analytics dashboard for your institution — free for the
                    first semester.
                  </p>
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-sm font-mono text-sm font-semibold tracking-widest uppercase transition-smooth"
                    style={{
                      background: "oklch(0.85 0.25 200)",
                      color: "oklch(0.06 0.01 240)",
                      boxShadow: "0 0 20px oklch(0.85 0.25 200 / 0.4)",
                    }}
                    data-ocid="colleges-partner-cta"
                  >
                    <MapPin className="w-4 h-4" />
                    Partner With Us
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
