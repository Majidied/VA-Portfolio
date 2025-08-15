import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingProps {
  isLoading?: boolean;
  onComplete?: () => void;
  className?: string;
  steps?: string[];
  /** Ensures the loader is visible at least this long (ms) */
  minDurationMs?: number;
}

const DEFAULT_STEPS = [
  "Initializing virtual assistant…",
  "Connecting to the cosmos…",
  "Loading stellar portfolio…",
  "Preparing magical experience…",
  "Almost ready for launch…",
];

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const usePrefersReducedMotion = () => {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    const handler = () => setReduced(!!mq?.matches);
    handler();
    mq?.addEventListener?.("change", handler);
    return () => mq?.removeEventListener?.("change", handler);
  }, []);
  return reduced;
};

const Loading: React.FC<LoadingProps> = ({
  isLoading = true,
  onComplete,
  className = "",
  steps = DEFAULT_STEPS,
  minDurationMs = 2600,
}) => {
  const reduced = usePrefersReducedMotion();
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [showPortal, setShowPortal] = useState(false);

  // Precompute background elements once (no re-layout on each render)
  const starCount = reduced ? 60 : 120;
  const stars = useMemo(
    () =>
      Array.from({ length: starCount }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2,
      })),
    [starCount]
  );

  const particles = useMemo(
    () =>
      Array.from({ length: reduced ? 8 : 18 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: Math.random() * 4 + 3,
        delay: Math.random() * 3,
      })),
    [reduced]
  );

  // Smooth progress with rAF (feels real + consistent)
  const startRef = useRef<number | null>(null);
  useEffect(() => {
    if (!isLoading) return;

    let raf = 0;
    startRef.current = null;
    setProgress(0);
    setCurrentStep(0);
    setShowPortal(false);

    const minMs = Math.max(800, reduced ? minDurationMs * 0.7 : minDurationMs);

    const tick = (ts: number) => {
      if (startRef.current == null) startRef.current = ts;
      const elapsed = ts - startRef.current!;
      const t = Math.min(1, elapsed / minMs);
      // tiny jitter so it doesn’t look linear/robotic
      const jitter = (Math.sin(ts / 280) + 1) / 200; // <= 1%
      const eased = Math.min(1, easeOutCubic(t) + jitter);

      const pct = Math.round(eased * 100);
      setProgress(pct);
      setCurrentStep(Math.min(steps.length - 1, Math.floor(eased * steps.length)));

      if (pct >= 95) setShowPortal(true);

      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => onComplete?.(), 500);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isLoading, steps.length, minDurationMs, reduced, onComplete]);

  if (!isLoading) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
        className={`fixed inset-0 z-[9999] flex items-center justify-center ${className}`}
        style={{
          background:
            "radial-gradient(1200px 800px at 20% 30%, rgba(59,130,246,.18), rgba(0,0,0,0))," +
            "radial-gradient(1000px 700px at 80% 70%, rgba(168,85,247,.16), rgba(0,0,0,0))," +
            "linear-gradient(135deg, #0b1020 0%, #0a0f2a 40%, #0b1020 100%)",
        }}
      >
        {/* Background Field */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {stars.map((s, i) => (
            <motion.span
              key={`star-${i}`}
              className="absolute rounded-full"
              style={{
                left: `${s.left}%`,
                top: `${s.top}%`,
                width: `${s.size}px`,
                height: `${s.size}px`,
                backgroundColor: "rgba(255,255,255,.9)",
              }}
              animate={reduced ? undefined : { opacity: [0.3, 1, 0.3], scale: [0.9, 1.25, 0.9] }}
              transition={{ duration: s.duration, repeat: Infinity, delay: s.delay }}
            />
          ))}

          {particles.map((p, i) => (
            <motion.span
              key={`p-${i}`}
              className="absolute w-2 h-2 rounded-full"
              style={{
                left: `${p.left}%`,
                top: `${p.top}%`,
                background:
                  "linear-gradient(90deg, rgba(96,165,250,1) 0%, rgba(147,51,234,1) 100%)",
                filter: "blur(.2px)",
              }}
              animate={reduced ? undefined : { y: [-15, -100], opacity: [0, 1, 0], scale: [0.6, 1, 0.6] }}
              transition={{ duration: p.duration, repeat: Infinity, delay: p.delay }}
            />
          ))}
        </div>

        {/* Main */}
        <div className="relative z-10 text-center max-w-md mx-auto px-8">
          {/* Loader Core */}
          <div className="relative mb-8">
            {/* Outer ring (conic gradient for smooth glow) */}
            <motion.div
              className="mx-auto rounded-full"
              style={{
                width: 128,
                height: 128,
                background:
                  "conic-gradient(from 0deg, rgba(59,130,246,.9), rgba(147,51,234,.9), rgba(59,130,246,.9))",
                WebkitMask:
                  "radial-gradient(farthest-side, #000 71%, transparent 72%)",
                mask: "radial-gradient(farthest-side, #000 71%, transparent 72%)",
                filter: "drop-shadow(0 0 12px rgba(99,102,241,.45))",
              }}
              animate={reduced ? undefined : { rotate: 360 }}
              transition={{ duration: 2.2, ease: "linear", repeat: Infinity }}
            />

            {/* Inner counter-rotating ring */}
            <motion.div
              className="absolute inset-6 rounded-full"
              style={{
                background:
                  "conic-gradient(from 180deg, rgba(59,130,246,.75), rgba(147,51,234,.75), rgba(59,130,246,.75))",
                WebkitMask:
                  "radial-gradient(farthest-side, #000 72%, transparent 73%)",
                mask: "radial-gradient(farthest-side, #000 72%, transparent 73%)",
                filter: "drop-shadow(0 0 10px rgba(147,51,234,.35))",
              }}
              animate={reduced ? undefined : { rotate: -360 }}
              transition={{ duration: 1.6, ease: "linear", repeat: Infinity }}
            />

            {/* Core pulse */}
            <motion.div
              className="absolute inset-12 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 35% 35%, rgba(255,255,255,.9), rgba(59,130,246,.9) 40%, rgba(0,0,0,0) 70%)",
              }}
              animate={reduced ? undefined : { scale: [0.85, 1.15, 0.85], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Portal burst near completion */}
            <AnimatePresence>
              {showPortal && (
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{ background: "radial-gradient(circle, rgba(255,255,255,.25), transparent 70%)" }}
                  initial={{ scale: 0.2, opacity: 0 }}
                  animate={{ scale: 1.6, opacity: 1 }}
                  exit={{ scale: 2.1, opacity: 0 }}
                  transition={{ duration: 0.65 }}
                />
              )}
            </AnimatePresence>
          </div>

          {/* Progress */}
          <div className="mb-6">
            <div
              className="w-full h-2 rounded-full overflow-hidden backdrop-blur-sm"
              style={{ background: "rgba(148,163,184,.25)" }}
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={progress}
            >
              <motion.div
                className="h-full"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(59,130,246,1), rgba(147,51,234,1), rgba(236,72,153,1))",
                  boxShadow: "0 0 12px rgba(99,102,241,.35)",
                }}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              />
            </div>
            <motion.div
              className="mt-2 text-blue-200 font-semibold text-lg"
              key={progress}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.18 }}
            >
              {progress}%
            </motion.div>
          </div>

          {/* Dynamic step text */}
          <motion.div
            className="text-white text-lg font-medium mb-4"
            key={currentStep}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            {steps[currentStep]}
          </motion.div>

          {/* Dots */}
          {!reduced && (
            <div className="flex justify-center space-x-1">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="w-2 h-2 rounded-full bg-blue-400"
                  animate={{ scale: [1, 1.25, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Branding line */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
        >
          <div className="text-white/70 text-sm">Crafted with magic ✨</div>
          {!reduced && (
            <motion.div
              className="mt-2 w-16 h-px mx-auto"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(59,130,246,1), transparent)",
              }}
              animate={{ scaleX: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loading;
