import { GraduationCap, Landmark, Star, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "motion/react";

interface Testimonial {
  id: string;
  quote: string;
  name: string;
  title: string;
  Icon: LucideIcon;
  stars: number;
  accentHue: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "patna-u",
    quote:
      "PNACADEMY's system eliminated months of result delays. Our students now have results within days, and we've had zero complaints about evaluation bias since implementation.",
    name: "Dr. Rajesh Prasad",
    title: "Registrar, Patna University",
    Icon: Landmark,
    stars: 5,
    accentHue: 200,
  },
  {
    id: "bnmu",
    quote:
      "As an examiner, I was initially skeptical. But the AI feedback actually made me a better evaluator — it catches patterns I'd miss after the 200th script. I've become a stronger assessor.",
    name: "Prof. Meena Sharma",
    title: "Head of Examinations, BNMU",
    Icon: Users,
    stars: 5,
    accentHue: 185,
  },
  {
    id: "lnmu",
    quote:
      "The RTI compliance and audit trail feature alone convinced our board. We can answer any question about any evaluation in seconds, not weeks. That's institutional transformation.",
    name: "Vice-Chancellor's Office",
    title: "Lalit Narayan Mithila University",
    Icon: GraduationCap,
    stars: 5,
    accentHue: 215,
  },
];

export default function Testimonials() {
  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "oklch(0.1 0.012 240)" }}
      data-ocid="testimonials"
    >
      {/* Section divider */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, oklch(0.85 0.25 200 / 0.5) 30%, oklch(0.95 0.15 190 / 0.7) 50%, oklch(0.85 0.25 200 / 0.5) 70%, transparent 100%)",
        }}
      />

      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, oklch(0.85 0.25 200 / 0.04) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 glass-card rounded-sm mb-4">
            <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase font-light">
              INSTITUTION VOICES
            </span>
          </div>
          <h2 className="font-display leading-tight">
            <span className="block text-sm font-mono tracking-widest text-muted-foreground uppercase font-light mb-2">
              Trusted By
            </span>
            <span className="block font-bold text-3xl lg:text-4xl text-foreground">
              Those Who <span className="text-glow">Demand Excellence</span>
            </span>
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            From registrars to examiners — the people running Bihar's
            universities trust COSE.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 lg:gap-7">
          {TESTIMONIALS.map((t, i) => {
            const { Icon } = t;
            return (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                whileHover={{
                  rotateY: 3,
                  rotateX: -2,
                  scale: 1.01,
                  transition: { duration: 0.2 },
                }}
                className="relative glass-card-hover rounded-sm p-6 flex flex-col group overflow-hidden"
                data-ocid={`testimonial-${t.id}`}
                style={{
                  transformStyle: "preserve-3d",
                  boxShadow:
                    "0 2px 4px rgba(0,0,0,0.4), 0 8px 16px rgba(0,0,0,0.3)",
                }}
              >
                {/* Top glass highlight */}
                <div
                  className="absolute top-0 left-0 right-0 h-[28%] pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(255,255,255,0.03) 0%, transparent 100%)",
                  }}
                />
                <div
                  className="absolute top-0 left-0 right-0 h-px pointer-events-none"
                  style={{
                    background: `linear-gradient(90deg, transparent, oklch(0.85 0.25 ${t.accentHue} / 0.4), transparent)`,
                  }}
                />

                {/* Left accent border */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-0.5 rounded-l-sm transition-smooth"
                  style={{
                    background: `linear-gradient(to bottom, oklch(0.85 0.25 ${t.accentHue}), oklch(0.85 0.25 ${t.accentHue} / 0.2))`,
                  }}
                />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, s) => (
                    <Star
                      key={`star-${t.id}-${s}`}
                      className="w-4 h-4 fill-current"
                      style={{ color: "oklch(0.82 0.18 55)" }}
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-sm text-foreground/85 leading-relaxed italic flex-1 mb-6">
                  "{t.quote}"
                </blockquote>

                {/* Person */}
                <div
                  className="flex items-center gap-3 pt-4"
                  style={{
                    borderTop: `1px solid oklch(0.85 0.25 ${t.accentHue} / 0.15)`,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                    style={{
                      background: `oklch(0.85 0.25 ${t.accentHue} / 0.1)`,
                      border: `1px solid oklch(0.85 0.25 ${t.accentHue} / 0.3)`,
                    }}
                  >
                    <Icon
                      className="w-5 h-5"
                      style={{ color: `oklch(0.85 0.25 ${t.accentHue})` }}
                    />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-sm text-foreground">
                      {t.name}
                    </p>
                    <p className="font-mono text-[10px] text-muted-foreground tracking-wide mt-0.5">
                      {t.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-center"
        >
          {[
            { label: "Universities Partnered", value: "15+" },
            { label: "Scripts Evaluated", value: "10,000+" },
            { label: "Avg. Satisfaction", value: "4.9 / 5.0" },
          ].map((m) => (
            <div key={m.label} className="px-6 py-3 glass-card rounded-sm">
              <p className="font-display font-bold text-xl text-glow">
                {m.value}
              </p>
              <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider mt-1">
                {m.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
