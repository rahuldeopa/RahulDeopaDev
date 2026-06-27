"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const COMPILE_LINES = [
  "Initializing...",
  "Loading modules...",
  "Compiling TypeScript...",
  "Building components...",
  "Optimizing assets...",
  "Starting server...",
  "Ready ✓",
];

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    COMPILE_LINES.forEach((_, index) => {
      timers.push(
        setTimeout(() => {
          setCurrentLine(index);
        }, index * 200)
      );
    });

    timers.push(
      setTimeout(() => {
        setLoading(false);
      }, COMPILE_LINES.length * 200 + 300)
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[99999] bg-bg flex items-center justify-center"
        >
          <div className="text-center">
            <div className="font-mono text-sm space-y-1 mb-6 text-left">
              {COMPILE_LINES.slice(0, currentLine + 1).map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={
                    i === currentLine
                      ? "text-accent"
                      : "text-text-muted/50"
                  }
                >
                  <span className="text-text-muted/30 mr-2">{String(i + 1).padStart(2, "0")}</span>
                  {line}
                </motion.div>
              ))}
            </div>
            <div className="h-0.5 w-48 bg-border rounded-full overflow-hidden mx-auto">
              <motion.div
                className="h-full bg-primary"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: COMPILE_LINES.length * 0.2 + 0.2,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
