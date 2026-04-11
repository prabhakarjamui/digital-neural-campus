import { Separator } from "@/components/ui/separator";
import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";

const footerLinks = {
  platform: [
    { label: "COSE Framework", href: "#cose" },
    { label: "AI Evaluation", href: "#solution" },
    { label: "Security Model", href: "#cose" },
    { label: "RTI Compliance", href: "#cose" },
  ],
  company: [
    { label: "Leadership", href: "#founder" },
    { label: "Contact", href: "#contact" },
    { label: "Partner With Us", href: "#contact" },
  ],
};

function scrollTo(href: string) {
  const el = document.querySelector(href);
  el?.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer
      className="bg-card border-t border-border relative overflow-hidden"
      data-ocid="footer"
    >
      {/* Top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src="/assets/pnalogo.png"
                alt="PNACADEMY Logo"
                className="h-8 w-auto object-contain"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(78%) sepia(60%) hue-rotate(150deg) saturate(400%) drop-shadow(0 0 6px #00d9ff88)",
                }}
              />
              <div className="flex flex-col leading-none">
                <span className="text-[11px] font-mono text-accent tracking-widest uppercase">
                  PNACADEMY
                </span>
                <span className="text-[13px] font-display font-semibold text-foreground tracking-wide">
                  EDTECH
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mb-6">
              Revolutionizing academic evaluation with zero-bias AI. Secure,
              transparent, and teacher-empowering systems for India's top
              universities.
            </p>
            <div className="flex flex-col gap-2.5 text-sm text-muted-foreground">
              <a
                href="tel:7295999666"
                className="flex items-center gap-2 hover:text-accent transition-colors duration-200"
              >
                <Phone className="w-3.5 h-3.5 text-accent/70 shrink-0" />
                <span>+91 7295 999 666</span>
              </a>
              <a
                href="mailto:95prabhakar@gmail.com"
                className="flex items-center gap-2 hover:text-accent transition-colors duration-200"
              >
                <Mail className="w-3.5 h-3.5 text-accent/70 shrink-0" />
                <span>95prabhakar@gmail.com</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-accent/70 shrink-0" />
                <span>Bihar, India — Serving Universities Nationwide</span>
              </div>
            </div>
          </div>

          {/* Platform links */}
          <div>
            <h4 className="text-xs font-mono tracking-widest text-accent/80 uppercase mb-4">
              Platform
            </h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.platform.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-xs font-mono tracking-widest text-accent/80 uppercase mb-4">
              Company
            </h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-border" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>© {year} PNAcademy EdTech. All rights reserved.</span>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-accent transition-colors duration-200"
          >
            Built with love using caffeine.ai
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
