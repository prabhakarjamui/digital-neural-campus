import {
  Award,
  Cloud,
  GraduationCap,
  Landmark,
  Mail,
  Phone,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import ceoPrabhakar from "../../public/assets/ceo-prabhakar.jpg";

// Styled 44×44 icon container
function IconBox({
  children,
  hue = 200,
}: { children: React.ReactNode; hue?: number }) {
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

const CREDENTIALS = [
  { label: "M.Tech", sub: "NIT Rourkela", Icon: GraduationCap, hue: 200 },
  { label: "AWS Authorized", sub: "Instructor", Icon: Cloud, hue: 185 },
  { label: "12+ Years", sub: "EdTech Experience", Icon: Landmark, hue: 170 },
  { label: "COSE Creator", sub: "Framework Architect", Icon: Zap, hue: 215 },
];

export default function FounderSection() {
  return (
    <section
      id="founder"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "oklch(0.1 0.012 240)" }}
    >
      {/* Section divider top */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, oklch(0.85 0.25 200 / 0.5) 30%, oklch(0.95 0.15 190 / 0.7) 50%, oklch(0.85 0.25 200 / 0.5) 70%, transparent 100%)",
        }}
      />

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-5 circuit-bg" />
        <div
          className="absolute bottom-0 left-0 right-0 h-[2px]"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(0.85 0.25 200 / 0.3), transparent)",
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 glass-card rounded-sm mb-4">
            <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase font-light">
              LEADERSHIP
            </span>
          </div>
          <h2 className="font-display leading-tight">
            <span className="block text-sm font-mono tracking-widest text-muted-foreground uppercase font-light mb-2">
              The Vision
            </span>
            <span className="block font-bold text-3xl lg:text-4xl text-foreground">
              The Mind Behind <span className="text-glow">PNACADEMY</span>
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: Founder card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              whileHover={{
                rotateY: 3,
                rotateX: -2,
                transition: { duration: 0.25 },
              }}
              className="glass-card rounded-sm overflow-hidden relative"
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
                boxShadow:
                  "0 2px 4px rgba(0,0,0,0.5), 0 12px 28px rgba(0,0,0,0.4), 0 0 60px oklch(0.85 0.25 200 / 0.08)",
              }}
            >
              {/* Top glass highlight */}
              <div
                className="absolute top-0 left-0 right-0 h-[28%] pointer-events-none z-10"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(255,255,255,0.04) 0%, transparent 100%)",
                }}
              />
              <div
                className="absolute top-0 left-0 right-0 h-px pointer-events-none z-10"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, oklch(0.85 0.25 200 / 0.5), transparent)",
                }}
              />

              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={ceoPrabhakar}
                  alt="Prabhakar Kumar — CEO, PNACADEMY EDTECH"
                  className="w-full h-full object-cover object-top"
                />
                {/* Vignette (replacing scan-lines) — color-graded dark corners with subtle blue tint */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse 80% 80% at 50% 40%, transparent 40%, oklch(0.06 0.02 230 / 0.7) 100%)",
                  }}
                />
                {/* Gradient bottom fade */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, oklch(0.08 0.01 240) 0%, transparent 50%)",
                  }}
                />
                {/* Gradient border — top to transparent */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    boxShadow:
                      "inset 0 1px 0 oklch(0.85 0.25 200 / 0.5), inset 0 -1px 0 oklch(0.85 0.25 200 / 0.1), inset 1px 0 0 oklch(0.85 0.25 200 / 0.15), inset -1px 0 0 oklch(0.85 0.25 200 / 0.15)",
                  }}
                />

                {/* Live indicator */}
                <div
                  className="absolute top-4 right-4 flex items-center gap-1.5 px-2 py-1 rounded-sm"
                  style={{
                    background: "oklch(0.08 0.01 240 / 0.8)",
                    border: "1px solid oklch(0.85 0.25 200 / 0.3)",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full pulse-glow"
                    style={{ background: "oklch(0.85 0.25 200)" }}
                  />
                  <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                    Active CEO
                  </span>
                </div>
              </div>

              {/* Name & title */}
              <div className="p-6 space-y-3">
                <div>
                  <h3 className="font-display font-bold text-2xl text-foreground">
                    Prabhakar Kumar
                  </h3>
                  <p
                    className="font-mono text-sm mt-1"
                    style={{ color: "oklch(0.85 0.25 200)" }}
                  >
                    Founder & CEO — PNACADEMY EDTECH
                  </p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  M.Tech graduate from NIT Rourkela and AWS Authorized
                  Instructor, Prabhakar built the COSE Framework to solve the
                  deeply entrenched problems of evaluation bias and result
                  delays plaguing Bihar's universities. His mission: give every
                  student a fair chance, regardless of who marks their paper.
                </p>

                {/* Contact */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href="tel:7295999666"
                    className="flex items-center gap-2 px-3 py-2 rounded-sm transition-smooth text-sm text-muted-foreground hover:text-foreground"
                    style={{ border: "1px solid oklch(0.85 0.25 200 / 0.2)" }}
                    data-ocid="founder-phone"
                  >
                    <Phone className="w-3.5 h-3.5 text-accent/70 shrink-0" />
                    7295999666
                  </a>
                  <a
                    href="mailto:95prabhakar@gmail.com"
                    className="flex items-center gap-2 px-3 py-2 rounded-sm transition-smooth text-sm text-muted-foreground hover:text-foreground"
                    style={{ border: "1px solid oklch(0.85 0.25 200 / 0.2)" }}
                    data-ocid="founder-email"
                  >
                    <Mail className="w-3.5 h-3.5 text-accent/70 shrink-0" />
                    95prabhakar@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Credentials + vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Credentials grid */}
            <div
              className="grid grid-cols-2 gap-3"
              style={{ perspective: "1000px" }}
            >
              {CREDENTIALS.map((cred, i) => {
                const { Icon } = cred;
                return (
                  <motion.div
                    key={cred.label}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    whileHover={{
                      rotateY: 4,
                      rotateX: -3,
                      scale: 1.02,
                      transition: { duration: 0.2 },
                    }}
                    className="glass-card-hover rounded-sm p-4 relative overflow-hidden"
                    style={{
                      transformStyle: "preserve-3d",
                      boxShadow:
                        "0 2px 4px rgba(0,0,0,0.4), 0 8px 16px rgba(0,0,0,0.3), 0 0 30px oklch(0.85 0.25 200 / 0.05)",
                    }}
                  >
                    {/* Top highlight */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[30%] pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(to bottom, rgba(255,255,255,0.04) 0%, transparent 100%)",
                      }}
                    />
                    <div
                      className="absolute top-0 left-0 right-0 h-px pointer-events-none"
                      style={{
                        background: `linear-gradient(90deg, transparent, oklch(0.85 0.25 ${cred.hue} / 0.4), transparent)`,
                      }}
                    />
                    <IconBox hue={cred.hue}>
                      <Icon
                        className="w-5 h-5"
                        style={{ color: `oklch(0.85 0.25 ${cred.hue})` }}
                      />
                    </IconBox>
                    <p className="font-display font-semibold text-base text-foreground mt-3">
                      {cred.label}
                    </p>
                    <p className="font-mono text-xs text-muted-foreground mt-0.5">
                      {cred.sub}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Vision statement */}
            <div className="glass-card rounded-sm p-6 relative overflow-hidden">
              {/* Top glass highlight */}
              <div
                className="absolute top-0 left-0 right-0 h-[30%] pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(255,255,255,0.03) 0%, transparent 100%)",
                }}
              />
              <div
                className="absolute top-0 left-0 w-0.5 h-full"
                style={{
                  background:
                    "linear-gradient(to bottom, oklch(0.85 0.25 200), transparent)",
                }}
              />
              <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-3">
                Vision Statement
              </p>
              <blockquote className="text-base text-foreground leading-relaxed font-body">
                "Bihar's students deserve results they can trust. With COSE, we
                don't just digitize evaluation — we make it{" "}
                <span className="text-glow font-semibold">provably fair</span>{" "}
                for the first time in history."
              </blockquote>
              <footer className="mt-4 font-mono text-xs text-muted-foreground">
                — Prabhakar Kumar, Founder
              </footer>
            </div>

            {/* NIT Rourkela authority badge */}
            <div
              className="flex items-center gap-4 p-4 rounded-sm"
              style={{
                background: "oklch(0.85 0.25 200 / 0.05)",
                border: "1px solid oklch(0.85 0.25 200 / 0.2)",
              }}
            >
              <IconBox hue={200}>
                <Award
                  className="w-5 h-5"
                  style={{ color: "oklch(0.85 0.25 200)" }}
                />
              </IconBox>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  NIT Rourkela Engineering Pedigree
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  India's top 10 technical university — the same rigor applied
                  to evaluation science.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
