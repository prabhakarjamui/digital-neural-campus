import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import COSESection from "../components/COSESection";
import ContactForm from "../components/ContactForm";
import FeaturesCarousel from "../components/FeaturesCarousel";
import FounderSection from "../components/FounderSection";
import HeroScene from "../components/HeroScene";
import HowItWorks from "../components/HowItWorks";
import ResultsInsight from "../components/ResultsInsight";
import StatsMarquee from "../components/StatsMarquee";
import TraditionalVsDigital from "../components/TraditionalVsDigital";
import Vision2030 from "../components/Vision2030";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          data-ocid="back-to-top"
          className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full flex items-center justify-center transition-smooth"
          style={{
            background: "oklch(0.85 0.25 200)",
            color: "oklch(0.06 0.01 240)",
            boxShadow: "0 0 24px oklch(0.85 0.25 200 / 0.5)",
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          ▲
        </motion.button>
      )}
    </AnimatePresence>
  );
}

function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "oklch(0.08 0.01 240)" }}
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 50% 50% at 50% 100%, oklch(0.85 0.25 200 / 0.06) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(0.85 0.25 200 / 0.3), transparent)",
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12">
        {/* Section header */}
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
            <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
              Secure Channel
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-foreground">
            Partner With <span className="text-glow">PNACADEMY</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto leading-relaxed">
            Ready to transform your institution's evaluation process? Send us an
            encrypted inquiry and our team will respond within 24 hours.
          </p>
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-2xl mx-auto"
        >
          <div
            className="relative glass-card rounded-sm p-8 lg:p-10"
            style={{ boxShadow: "0 0 60px oklch(0.85 0.25 200 / 0.08)" }}
          >
            {/* Corner decorations */}
            <div
              className="absolute top-3 left-3 w-4 h-4"
              style={{
                borderTop: "1px solid oklch(0.85 0.25 200 / 0.5)",
                borderLeft: "1px solid oklch(0.85 0.25 200 / 0.5)",
              }}
            />
            <div
              className="absolute top-3 right-3 w-4 h-4"
              style={{
                borderTop: "1px solid oklch(0.85 0.25 200 / 0.5)",
                borderRight: "1px solid oklch(0.85 0.25 200 / 0.5)",
              }}
            />
            <div
              className="absolute bottom-3 left-3 w-4 h-4"
              style={{
                borderBottom: "1px solid oklch(0.85 0.25 200 / 0.5)",
                borderLeft: "1px solid oklch(0.85 0.25 200 / 0.5)",
              }}
            />
            <div
              className="absolute bottom-3 right-3 w-4 h-4"
              style={{
                borderBottom: "1px solid oklch(0.85 0.25 200 / 0.5)",
                borderRight: "1px solid oklch(0.85 0.25 200 / 0.5)",
              }}
            />

            <ContactForm />
          </div>
        </motion.div>

        {/* Quick contact */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center space-y-2"
        >
          <p className="font-mono text-xs text-muted-foreground">
            Or reach directly:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:7295999666"
              className="font-mono text-sm transition-smooth hover:opacity-80"
              style={{ color: "oklch(0.85 0.25 200)" }}
              data-ocid="footer-phone"
            >
              📞 7295999666
            </a>
            <span className="text-muted-foreground">·</span>
            <a
              href="mailto:95prabhakar@gmail.com"
              className="font-mono text-sm transition-smooth hover:opacity-80"
              style={{ color: "oklch(0.85 0.25 200)" }}
              data-ocid="footer-email"
            >
              ✉ 95prabhakar@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Floating ambient logo — drifts across the viewport in background */}
      <img
        src="/pnalogo.png"
        alt=""
        aria-hidden="true"
        className="floating-logo-drift"
      />
      {/* 1. Hero */}
      <HeroScene />
      {/* 2. Stats ticker */}
      <StatsMarquee />
      {/* 3. COSE Framework */}
      <COSESection />
      {/* 4. Traditional vs Digital + Bihar urgency */}
      <TraditionalVsDigital />
      {/* 5. Features Carousel */}
      <FeaturesCarousel />
      {/* 6. Founder / CEO */}
      <FounderSection />
      {/* 7. How It Works */}
      <HowItWorks />
      {/* 8. Results Intelligence */}
      <ResultsInsight />
      {/* 9. Vision 2030 */}
      <Vision2030 />
      {/* 10. Contact */}
      <ContactSection />
      {/* Floating back-to-top */}
      <BackToTop />
    </div>
  );
}
