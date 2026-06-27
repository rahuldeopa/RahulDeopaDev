"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LINES = [
  { text: "$ whoami", delay: 0, isCommand: true },
  { text: "Rahul Deopa — Software Developer", delay: 800, isCommand: false },
  { text: "", delay: 1200, isCommand: false },
  { text: "$ cat stack.json", delay: 1600, isCommand: true },
  { text: '{', delay: 2000, isCommand: false },
  { text: '  "backend": ["Node.js", "Express", "Hono"],', delay: 2100, isCommand: false },
  { text: '  "frontend": ["React", "Next.js", "Angular"],', delay: 2200, isCommand: false },
  { text: '  "databases": ["PostgreSQL", "MySQL", "MongoDB"],', delay: 2300, isCommand: false },
  { text: '  "cloud": ["Docker", "AWS", "Cloudflare"]', delay: 2400, isCommand: false },
  { text: '}', delay: 2500, isCommand: false },
  { text: "", delay: 2800, isCommand: false },
  { text: "$ echo $STATUS", delay: 3200, isCommand: true },
  { text: "Building production systems ✓", delay: 3600, isCommand: false },
];

export default function TerminalAnimation() {
  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    LINES.forEach((line, index) => {
      const timer = setTimeout(() => {
        setVisibleLines(index + 1);
      }, line.delay);
      timers.push(timer);
    });

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="w-full rounded-xl border border-border bg-bg-card overflow-hidden shadow-2xl shadow-black/20">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-bg-card/80">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#28CA41]" />
        </div>
        <span className="ml-2 text-xs text-text-muted font-mono">terminal</span>
      </div>

      {/* Content */}
      <div className="p-4 font-mono text-sm min-h-[280px]">
        {LINES.slice(0, visibleLines).map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className={
              line.isCommand
                ? "text-accent font-medium"
                : "text-text-muted"
            }
          >
            {line.text || "\u00A0"}
          </motion.div>
        ))}

        {/* Blinking cursor */}
        {visibleLines >= LINES.length && (
          <div className="flex items-center gap-1 mt-1">
            <span className="text-accent">$</span>
            <span className="w-2 h-4 bg-accent terminal-cursor" />
          </div>
        )}
      </div>
    </div>
  );
}
