import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import pnaLogo from "../../public/assets/pnalogo.png";
import NeuralNetworkScene from "./NeuralNetworkScene";
import ParticleField from "./ParticleField";

// COSE pillar legend for the 3D scene overlay
const COSE_LEGEND = [
  { label: "Security", color: "oklch(0.7 0.22 28)" },
  { label: "Anonymization", color: "oklch(0.72 0.22 295)" },
  { label: "Teacher Support", color: "oklch(0.72 0.2 145)" },
  { label: "Integrity", color: "oklch(0.85 0.25 200)" },
];

export default function HeroScene() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden circuit-bg"
      data-ocid="hero-section"
    >
      {/* Particle network background */}
      <ParticleField count={70} />

      {/* Radial glow orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, oklch(0.85 0.25 200 / 0.3) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, oklch(0.7 0.15 200 / 0.4) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-24 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text content */}
        <motion.div style={{ y, opacity }} className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="space-y-8"
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 glass-card rounded-sm"
            >
              <span
                className="w-1.5 h-1.5 rounded-full pulse-glow"
                style={{ background: "oklch(0.85 0.25 200)" }}
              />
              <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                PNACADEMY EDTECH — Digital Neural Campus
              </span>
            </motion.div>

            {/* Main headline */}
            <div className="space-y-3">
              <h1 className="font-display font-bold leading-[1.05] tracking-tight">
                <span className="block text-4xl lg:text-5xl xl:text-6xl text-foreground">
                  Human-Led,
                </span>
                <span className="block text-4xl lg:text-5xl xl:text-6xl text-glow mt-1">
                  AI-Assisted
                </span>
                <span className="block text-4xl lg:text-5xl xl:text-6xl text-foreground">
                  Evaluation:
                </span>
                <span className="block text-2xl lg:text-3xl xl:text-4xl text-muted-foreground font-medium mt-2">
                  The Future of Academic Integrity.
                </span>
              </h1>

              {/* COSE tagline — gradient accent line */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex items-center gap-3 mt-3"
              >
                <div
                  className="w-8 h-px shrink-0"
                  style={{
                    background:
                      "linear-gradient(90deg, oklch(0.85 0.25 200), transparent)",
                  }}
                />
                <p
                  className="font-mono text-xs tracking-widest uppercase font-medium"
                  style={{
                    background:
                      "linear-gradient(90deg, oklch(0.85 0.25 200) 0%, oklch(0.92 0.08 210) 50%, oklch(0.88 0.12 220) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  COSE Framework — Where Human Judgement Meets AI Precision
                </p>
              </motion.div>
            </div>

            {/* Sub-headline */}
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl">
              Based in Bihar, PNACADEMY empowers institutions with world-class
              technology to{" "}
              <span style={{ color: "oklch(0.85 0.25 200)" }}>
                eliminate evaluation bias
              </span>{" "}
              and accelerate results.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 items-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToContact}
                data-ocid="hero-cta-partner"
                className="relative px-8 py-3.5 font-display font-semibold text-sm tracking-wider uppercase rounded-sm overflow-hidden transition-smooth"
                style={{
                  background: "oklch(0.85 0.25 200)",
                  color: "oklch(0.06 0.01 240)",
                  boxShadow: "0 0 30px oklch(0.85 0.25 200 / 0.5)",
                }}
              >
                Partner With Us
              </motion.button>

              <div className="flex items-center gap-3">
                <div className="w-px h-8 bg-border" />
                <div className="space-y-0.5">
                  <p className="font-mono text-xs text-muted-foreground">
                    Trusted by institutions across
                  </p>
                  <p
                    className="font-mono text-xs"
                    style={{ color: "oklch(0.85 0.25 200)" }}
                  >
                    Bihar & Eastern India
                  </p>
                </div>
              </div>
            </div>

            {/* Credential chips */}
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                "M.Tech NIT Rourkela",
                "AWS Authorized",
                "COSE Framework",
                "Zero-Bias Evaluation",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 font-mono text-[10px] tracking-wider uppercase glass-card rounded-sm text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right: 3D Neural Network on desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="relative hidden lg:block"
        >
          {/* COSE label above the canvas */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex items-center justify-between mb-3 px-1"
          >
            <p
              className="font-mono text-[10px] tracking-widest uppercase"
              style={{ color: "oklch(0.85 0.25 200 / 0.7)" }}
            >
              COSE Evaluation Ecosystem
            </p>
            <div className="flex items-center gap-3">
              {COSE_LEGEND.map((item) => (
                <div key={item.label} className="flex items-center gap-1">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{
                      background: item.color,
                      boxShadow: `0 0 4px ${item.color}`,
                    }}
                  />
                  <span
                    className="font-mono text-[9px] uppercase tracking-wider"
                    style={{ color: "oklch(0.5 0.02 240)" }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 3D Neural Network Canvas */}
          <div
            className="relative rounded-sm"
            style={{
              height: "500px",
              border: "1px solid oklch(0.85 0.25 200 / 0.25)",
              boxShadow:
                "0 0 80px oklch(0.85 0.25 200 / 0.15), inset 0 0 40px oklch(0.85 0.25 200 / 0.04)",
              overflow: "visible",
            }}
          >
            <div className="absolute inset-0" style={{ pointerEvents: "none" }}>
              <NeuralNetworkScene />
            </div>

            {/* Brand watermark — top-left of canvas (clear of Processing Time stat at bottom-right) */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
              className="absolute top-4 left-4 z-10 brand-border-pulse pointer-events-none"
              style={{
                transform: "perspective(600px) rotateX(2deg)",
                background: "oklch(0.10 0.015 240 / 0.75)",
                backdropFilter: "blur(14px) saturate(1.5)",
                WebkitBackdropFilter: "blur(14px) saturate(1.5)",
                border: "1px solid oklch(0.85 0.25 200 / 0.35)",
                borderRadius: "4px",
                padding: "8px 14px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              {/* Logo */}
              <img
                src={pnaLogo}
                alt="PNACADEMY logo"
                style={{
                  height: "40px",
                  width: "auto",
                  objectFit: "contain",
                  filter:
                    "drop-shadow(0 0 6px oklch(0.85 0.25 200 / 0.6)) brightness(1.1)",
                  flexShrink: 0,
                }}
              />
              {/* Divider */}
              <div
                style={{
                  width: "1px",
                  height: "32px",
                  background:
                    "linear-gradient(to bottom, transparent, oklch(0.85 0.25 200 / 0.5), transparent)",
                  flexShrink: 0,
                }}
              />
              {/* Brand text */}
              <div
                style={{ display: "flex", flexDirection: "column", gap: "1px" }}
              >
                <span
                  className="font-display font-bold tracking-widest uppercase"
                  style={{
                    fontSize: "13px",
                    lineHeight: 1,
                    background:
                      "linear-gradient(90deg, oklch(0.85 0.25 200) 0%, oklch(0.95 0.12 200) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textShadow: "none",
                  }}
                >
                  PNACADEMY
                </span>
                <span
                  className="font-mono tracking-widest uppercase"
                  style={{
                    fontSize: "9px",
                    lineHeight: 1,
                    color: "oklch(0.65 0.08 200)",
                    letterSpacing: "0.22em",
                  }}
                >
                  EDTECH
                </span>
              </div>
            </motion.div>

            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 60% 60% at 50% 50%, transparent 40%, oklch(0.06 0.02 230 / 0.5) 100%)",
              }}
            />

            {/* COSE acronym overlay — bottom-center of canvas, above stat cards */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="absolute bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-2 pointer-events-none"
            >
              {["C", "O", "S", "E"].map((letter, i) => (
                <motion.span
                  key={letter}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 + i * 0.08 }}
                  className="font-display font-bold text-xs w-5 h-5 flex items-center justify-center rounded-sm"
                  style={{
                    color: COSE_LEGEND[i].color,
                    background: `${COSE_LEGEND[i].color}18`,
                    border: `1px solid ${COSE_LEGEND[i].color}35`,
                    textShadow: `0 0 8px ${COSE_LEGEND[i].color}`,
                  }}
                >
                  {letter}
                </motion.span>
              ))}
              <span
                className="font-mono text-[9px] tracking-widest uppercase ml-1"
                style={{ color: "oklch(0.45 0.02 240)" }}
              >
                Framework Active
              </span>
            </motion.div>

            {/* Corner brackets */}
            {[
              {
                pos: "top-2 left-2",
                style: {
                  borderTop: "1px solid oklch(0.85 0.25 200 / 0.6)",
                  borderLeft: "1px solid oklch(0.85 0.25 200 / 0.6)",
                },
              },
              {
                pos: "top-2 right-2",
                style: {
                  borderTop: "1px solid oklch(0.85 0.25 200 / 0.6)",
                  borderRight: "1px solid oklch(0.85 0.25 200 / 0.6)",
                },
              },
              {
                pos: "bottom-2 left-2",
                style: {
                  borderBottom: "1px solid oklch(0.85 0.25 200 / 0.6)",
                  borderLeft: "1px solid oklch(0.85 0.25 200 / 0.6)",
                },
              },
              {
                pos: "bottom-2 right-2",
                style: {
                  borderBottom: "1px solid oklch(0.85 0.25 200 / 0.6)",
                  borderRight: "1px solid oklch(0.85 0.25 200 / 0.6)",
                },
              },
            ].map(({ pos, style }) => (
              <div
                key={pos}
                className={`absolute ${pos} w-4 h-4`}
                style={style}
              />
            ))}

            {/* Floating stat — Accuracy Rate: bottom-left corner of canvas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-6 left-6 z-10 glass-card rounded-sm p-4 min-w-36 overflow-hidden"
              style={{
                boxShadow:
                  "0 4px 8px rgba(0,0,0,0.6), 0 12px 24px rgba(0,0,0,0.4), 0 0 40px oklch(0.85 0.25 200 / 0.15)",
                border: "1px solid oklch(0.85 0.25 200 / 0.3)",
                transform:
                  "perspective(600px) rotateY(4deg) rotateX(-3deg) translateZ(20px)",
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-[30%] pointer-events-none rounded-t-sm"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(255,255,255,0.06) 0%, transparent 100%)",
                }}
              />
              <div
                className="absolute top-0 left-0 right-0 h-px pointer-events-none"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, oklch(0.85 0.25 200 / 0.5), transparent)",
                }}
              />
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                Accuracy Rate
              </p>
              <p className="font-display text-2xl font-bold text-glow mt-1">
                99.7%
              </p>
            </motion.div>

            {/* Floating stat — Processing Time: bottom-right corner of canvas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="absolute bottom-6 right-6 z-10 glass-card rounded-sm p-4 min-w-36 overflow-hidden"
              style={{
                boxShadow:
                  "0 4px 8px rgba(0,0,0,0.6), 0 12px 24px rgba(0,0,0,0.4), 0 0 40px oklch(0.85 0.25 200 / 0.15)",
                border: "1px solid oklch(0.85 0.25 200 / 0.3)",
                transform:
                  "perspective(600px) rotateY(-4deg) rotateX(-3deg) translateZ(20px)",
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-[30%] pointer-events-none rounded-t-sm"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(255,255,255,0.06) 0%, transparent 100%)",
                }}
              />
              <div
                className="absolute top-0 left-0 right-0 h-px pointer-events-none"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, oklch(0.85 0.25 200 / 0.5), transparent)",
                }}
              />
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                Processing Time
              </p>
              <p className="font-display text-2xl font-bold text-glow mt-1">
                72h ↓
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          className="w-0.5 h-8 rounded-full"
          style={{
            background:
              "linear-gradient(to bottom, oklch(0.85 0.25 200 / 0.6), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
