import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import pnaLogo from "../../public/assets/pnalogo.png";

const navLinks = [
  { label: "COSE Framework", href: "#cose" },
  { label: "Features", href: "#features-carousel" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Leadership", href: "#founder" },
  { label: "Contact", href: "#contact" },
];

function scrollToSection(href: string) {
  const el = document.querySelector(href);
  el?.scrollIntoView({ behavior: "smooth" });
}

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      data-ocid="nav"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-card/90 backdrop-blur-xl border-b border-border shadow-glass"
          : "bg-transparent",
      )}
    >
      <nav className="container mx-auto flex items-center justify-between h-16 px-6">
        {/* Logo */}
        <motion.button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2.5 group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative h-8 flex items-center justify-center">
            <img
              src={pnaLogo}
              alt="PNACADEMY Logo"
              className="h-8 w-auto object-contain"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(78%) sepia(60%) hue-rotate(150deg) saturate(400%) drop-shadow(0 0 6px #00d9ff88)",
              }}
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[11px] font-mono text-accent tracking-widest uppercase">
              PNACADEMY
            </span>
            <span className="text-[13px] font-display font-semibold text-foreground tracking-wide">
              EDTECH
            </span>
          </div>
        </motion.button>

        {/* Desktop links */}
        <motion.ul
          className="hidden md:flex items-center gap-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                type="button"
                onClick={() => scrollToSection(link.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 font-body tracking-wide relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
              </button>
            </li>
          ))}
        </motion.ul>

        {/* CTA */}
        <motion.div
          className="hidden md:flex items-center gap-3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button
            data-ocid="nav-cta"
            size="sm"
            onClick={() => scrollToSection("#contact")}
            className="bg-accent/10 hover:bg-accent/20 text-accent border border-accent/40 hover:border-accent hover:shadow-glow-cyan-sm transition-all duration-300 font-mono text-xs tracking-widest uppercase"
          >
            Partner With Us
          </Button>
        </motion.div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="md:hidden text-foreground p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-card/95 backdrop-blur-xl border-b border-border px-6 py-4 flex flex-col gap-3"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.href}
                onClick={() => {
                  scrollToSection(link.href);
                  setMenuOpen(false);
                }}
                className="text-sm text-muted-foreground hover:text-accent text-left py-1 transition-colors duration-200 font-body"
              >
                {link.label}
              </button>
            ))}
            <Button
              size="sm"
              onClick={() => {
                scrollToSection("#contact");
                setMenuOpen(false);
              }}
              className="bg-accent/10 hover:bg-accent/20 text-accent border border-accent/40 mt-2 font-mono text-xs tracking-widest uppercase"
            >
              Partner With Us
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
