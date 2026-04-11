import { Lock } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useSubmitInquiry } from "../hooks/useQueries";
import SuccessAnimation from "./SuccessAnimation";

interface FormState {
  name: string;
  email: string;
  institution: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  institution?: string;
  message?: string;
}

const defaultForm: FormState = {
  name: "",
  email: "",
  institution: "",
  phone: "",
  message: "",
};

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = "Name is required";
  if (!form.email.trim()) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errors.email = "Enter a valid email address";
  if (!form.institution.trim()) errors.institution = "Institution is required";
  if (!form.message.trim()) errors.message = "Message is required";
  return errors;
}

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return (
    <p
      className="font-mono text-xs mt-1"
      style={{ color: "oklch(0.65 0.19 22)" }}
    >
      {msg}
    </p>
  );
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(defaultForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [showSuccess, setShowSuccess] = useState(false);
  const { mutate, isPending } = useSubmitInquiry();

  const setField = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      setErrors(validate({ ...form, [field]: value }));
    }
  };

  const onBlur = (field: keyof FormState) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validate(form));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = Object.fromEntries(
      Object.keys(form).map((k) => [k, true]),
    );
    setTouched(allTouched);
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    mutate(form, {
      onSuccess: () => {
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
          setForm(defaultForm);
          setTouched({});
          setErrors({});
        }, 3000);
      },
    });
  };

  const inputClass = (field: keyof FormErrors) =>
    `w-full px-4 py-3 rounded-sm font-body text-sm text-foreground placeholder-muted-foreground bg-transparent transition-smooth focus:outline-none ${
      errors[field] && touched[field]
        ? "border" + " border-destructive"
        : "border border-input focus:border-primary"
    }`;

  return (
    <div className="relative">
      <SuccessAnimation visible={showSuccess} />

      <form
        onSubmit={onSubmit}
        noValidate
        className="space-y-4"
        data-ocid="contact-form"
      >
        <div className="grid sm:grid-cols-2 gap-4">
          {/* Name */}
          <div>
            <label
              htmlFor="cf-name"
              className="font-mono text-xs text-muted-foreground uppercase tracking-wider block mb-2"
            >
              Name <span style={{ color: "oklch(0.85 0.25 200)" }}>*</span>
            </label>
            <input
              id="cf-name"
              type="text"
              value={form.name}
              onChange={(e) => setField("name", e.target.value)}
              onBlur={() => onBlur("name")}
              placeholder="Ramesh Singh"
              className={inputClass("name")}
              data-ocid="contact-name"
              style={{
                background: "oklch(0.12 0.015 240 / 0.6)",
                border: `1px solid ${errors.name && touched.name ? "oklch(0.65 0.19 22)" : "oklch(0.22 0.02 240)"}`,
              }}
            />
            <FieldError msg={touched.name ? errors.name : undefined} />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="cf-email"
              className="font-mono text-xs text-muted-foreground uppercase tracking-wider block mb-2"
            >
              Email <span style={{ color: "oklch(0.85 0.25 200)" }}>*</span>
            </label>
            <input
              id="cf-email"
              type="email"
              value={form.email}
              onChange={(e) => setField("email", e.target.value)}
              onBlur={() => onBlur("email")}
              placeholder="principal@university.edu"
              className={inputClass("email")}
              data-ocid="contact-email"
              style={{
                background: "oklch(0.12 0.015 240 / 0.6)",
                border: `1px solid ${errors.email && touched.email ? "oklch(0.65 0.19 22)" : "oklch(0.22 0.02 240)"}`,
              }}
            />
            <FieldError msg={touched.email ? errors.email : undefined} />
          </div>

          {/* Institution */}
          <div>
            <label
              htmlFor="cf-institution"
              className="font-mono text-xs text-muted-foreground uppercase tracking-wider block mb-2"
            >
              Institution{" "}
              <span style={{ color: "oklch(0.85 0.25 200)" }}>*</span>
            </label>
            <input
              id="cf-institution"
              type="text"
              value={form.institution}
              onChange={(e) => setField("institution", e.target.value)}
              onBlur={() => onBlur("institution")}
              placeholder="Patna University"
              className={inputClass("institution")}
              data-ocid="contact-institution"
              style={{
                background: "oklch(0.12 0.015 240 / 0.6)",
                border: `1px solid ${errors.institution && touched.institution ? "oklch(0.65 0.19 22)" : "oklch(0.22 0.02 240)"}`,
              }}
            />
            <FieldError
              msg={touched.institution ? errors.institution : undefined}
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="cf-phone"
              className="font-mono text-xs text-muted-foreground uppercase tracking-wider block mb-2"
            >
              Phone <span className="text-muted-foreground">(optional)</span>
            </label>
            <input
              id="cf-phone"
              type="tel"
              value={form.phone}
              onChange={(e) => setField("phone", e.target.value)}
              placeholder="+91 98765 43210"
              className="w-full px-4 py-3 rounded-sm font-body text-sm text-foreground placeholder-muted-foreground transition-smooth focus:outline-none"
              data-ocid="contact-phone"
              style={{
                background: "oklch(0.12 0.015 240 / 0.6)",
                border: "1px solid oklch(0.22 0.02 240)",
              }}
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="cf-message"
            className="font-mono text-xs text-muted-foreground uppercase tracking-wider block mb-2"
          >
            Message <span style={{ color: "oklch(0.85 0.25 200)" }}>*</span>
          </label>
          <textarea
            id="cf-message"
            rows={4}
            value={form.message}
            onChange={(e) => setField("message", e.target.value)}
            onBlur={() => onBlur("message")}
            placeholder="Tell us about your institution's evaluation challenges and what you're looking for..."
            className="w-full px-4 py-3 rounded-sm font-body text-sm text-foreground placeholder-muted-foreground transition-smooth focus:outline-none resize-none"
            data-ocid="contact-message"
            style={{
              background: "oklch(0.12 0.015 240 / 0.6)",
              border: `1px solid ${errors.message && touched.message ? "oklch(0.65 0.19 22)" : "oklch(0.22 0.02 240)"}`,
            }}
          />
          <FieldError msg={touched.message ? errors.message : undefined} />
        </div>

        {/* Submit */}
        <motion.button
          type="submit"
          disabled={isPending}
          whileHover={{ scale: isPending ? 1 : 1.01 }}
          whileTap={{ scale: isPending ? 1 : 0.98 }}
          data-ocid="contact-submit"
          className="w-full py-4 rounded-sm font-display font-semibold text-sm tracking-wider uppercase transition-smooth disabled:opacity-60 flex items-center justify-center gap-2"
          style={{
            background: "oklch(0.85 0.25 200)",
            color: "oklch(0.06 0.01 240)",
            boxShadow: isPending
              ? "none"
              : "0 0 30px oklch(0.85 0.25 200 / 0.4)",
          }}
        >
          {isPending ? (
            <>
              <motion.span
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="inline-block w-4 h-4 border-2 rounded-full"
                style={{
                  borderColor: "oklch(0.06 0.01 240)",
                  borderTopColor: "transparent",
                }}
              />
              Encrypting & Transmitting...
            </>
          ) : (
            <>
              <Lock className="w-4 h-4" />
              Submit Secure Inquiry
            </>
          )}
        </motion.button>

        <p className="text-center font-mono text-[10px] text-muted-foreground">
          Your data is encrypted and stored securely. We respond within 24
          hours.
        </p>
      </form>
    </div>
  );
}
