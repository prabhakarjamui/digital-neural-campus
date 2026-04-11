import { Check, Lock } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

interface SuccessAnimationProps {
  visible: boolean;
}

export default function SuccessAnimation({ visible }: SuccessAnimationProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center rounded-sm"
          style={{ background: "oklch(0.08 0.01 240 / 0.97)" }}
        >
          {/* Encryption cube animation */}
          <div className="relative w-24 h-24 mb-6">
            {/* Outer rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-sm"
              style={{ border: "1px solid oklch(0.85 0.25 200 / 0.4)" }}
            />
            {/* Middle ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute inset-3 rounded-sm"
              style={{ border: "1px solid oklch(0.85 0.25 200 / 0.6)" }}
            />
            {/* Lock icon center */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="absolute inset-6 rounded-sm flex items-center justify-center"
              style={{
                background: "oklch(0.85 0.25 200 / 0.15)",
                boxShadow: "0 0 30px oklch(0.85 0.25 200 / 0.5)",
              }}
            >
              <Lock
                className="w-5 h-5"
                style={{ color: "oklch(0.85 0.25 200)" }}
              />
            </motion.div>

            {/* Orbiting particles */}
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={`orbit-${i}`}
                className="absolute w-1.5 h-1.5 rounded-full"
                style={{
                  background: "oklch(0.85 0.25 200)",
                  boxShadow: "0 0 6px oklch(0.85 0.25 200)",
                }}
                animate={{
                  x: [
                    Math.cos((i / 4) * Math.PI * 2) * 40,
                    Math.cos(((i + 0.5) / 4) * Math.PI * 2) * 40,
                    Math.cos(((i + 1) / 4) * Math.PI * 2) * 40,
                  ],
                  y: [
                    Math.sin((i / 4) * Math.PI * 2) * 40,
                    Math.sin(((i + 0.5) / 4) * Math.PI * 2) * 40,
                    Math.sin(((i + 1) / 4) * Math.PI * 2) * 40,
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                  delay: i * 0.5,
                }}
              />
            ))}
          </div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center space-y-2"
          >
            <h3 className="font-display font-bold text-xl text-glow">
              Data Successfully Encrypted & Sent
            </h3>
            <p className="font-mono text-xs text-muted-foreground tracking-wider">
              Your inquiry is secured and transmitted
            </p>
            <div className="flex items-center justify-center gap-1.5 mt-2">
              {["Encrypted", "Stored", "Notification Sent"].map((step, i) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + i * 0.15 }}
                  className="flex items-center gap-1"
                >
                  {i > 0 && (
                    <div
                      className="w-6 h-px"
                      style={{ background: "oklch(0.85 0.25 200 / 0.4)" }}
                    />
                  )}
                  <span className="font-mono text-[10px] text-muted-foreground flex items-center gap-0.5">
                    <Check
                      className="w-3 h-3"
                      style={{ color: "oklch(0.72 0.2 145)" }}
                    />
                    {step}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
