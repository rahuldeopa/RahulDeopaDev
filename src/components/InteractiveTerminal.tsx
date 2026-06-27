"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { TERMINAL_COMMANDS } from "@/lib/constants";
import SectionHeader from "./SectionHeader";
import AnimatedSection from "./AnimatedSection";

interface TerminalLine {
  type: "command" | "output";
  text: string;
}

export default function InteractiveTerminal() {
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: "output", text: "Welcome to rahuldeopa.dev terminal. Type 'help' for available commands." },
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newLines: TerminalLine[] = [
      ...lines,
      { type: "command", text: `$ ${cmd}` },
    ];

    if (trimmed === "clear") {
      setLines([]);
      setInput("");
      return;
    }

    const output = TERMINAL_COMMANDS[trimmed];
    if (output) {
      newLines.push({ type: "output", text: output });
    } else if (trimmed) {
      newLines.push({
        type: "output",
        text: `Command not found: ${trimmed}. Type 'help' for available commands.`,
      });
    }

    setLines(newLines);
    setInput("");
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [lines]);

  return (
    <section className="section-padding relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Interactive"
          title="Try My Terminal"
          description="Type commands to explore. Try 'help' to get started."
        />

        <AnimatedSection>
          <div
            className="bg-bg-card border border-border rounded-xl overflow-hidden"
            onClick={() => inputRef.current?.focus()}
          >
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28CA41]" />
              </div>
              <span className="ml-2 text-xs text-text-muted font-mono">
                visitor@rahuldeopa.dev
              </span>
            </div>

            {/* Terminal content */}
            <div
              ref={containerRef}
              className="p-4 font-mono text-sm min-h-[240px] max-h-[360px] overflow-y-auto"
            >
              {lines.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`whitespace-pre-wrap ${
                    line.type === "command" ? "text-accent" : "text-text-muted"
                  }`}
                >
                  {line.text}
                </motion.div>
              ))}

              {/* Input line */}
              <div className="flex items-center gap-2 mt-1">
                <span className="text-accent">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleCommand(input);
                    }
                  }}
                  className="flex-1 bg-transparent text-text outline-none font-mono text-sm caret-accent"
                  autoComplete="off"
                  spellCheck={false}
                  aria-label="Terminal input"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
