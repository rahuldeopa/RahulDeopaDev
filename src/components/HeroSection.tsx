"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import TerminalAnimation from "./TerminalAnimation";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center grid-pattern overflow-hidden"
    >
      {/* Subtle radial glow top-left */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-6">
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-accent border border-accent/20 rounded-full bg-accent/5">
                <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text"
            >
              {SITE_CONFIG.name}
            </motion.h1>

            {/* Titles */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="flex flex-wrap gap-2"
            >
              <span className="px-3 py-1 text-sm font-medium text-primary bg-primary/10 border border-primary/20 rounded-md">
                Backend Engineer
              </span>
              <span className="px-3 py-1 text-sm font-medium text-secondary bg-secondary/10 border border-secondary/20 rounded-md">
                Full Stack Developer
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="text-lg text-text-muted leading-relaxed max-w-lg"
            >
              Building scalable backend systems, AI-powered applications and
              enterprise software.
            </motion.p>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="text-sm text-text-muted leading-relaxed max-w-lg"
            >
              Currently working as a Software Developer building government-scale
              enterprise applications using Node.js, Express.js, PostgreSQL, MySQL,
              React and modern cloud technologies.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={5}
              className="flex flex-wrap gap-3 pt-2"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-primary hover:bg-primary-hover rounded-lg transition-colors"
              >
                View Projects
                <ArrowRight size={16} />
              </a>
              <a
                href={SITE_CONFIG.resumeUrl}
                download
                onClick={() => {
                  // Analytics event tracking
                  if (typeof window !== "undefined" && window.gtag) {
                    window.gtag("event", "download_resume", {
                      event_category: "engagement",
                    });
                  }
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-text border border-border hover:bg-white/5 rounded-lg transition-colors"
              >
                <Download size={16} />
                Resume
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-text-muted hover:text-text border border-border hover:bg-white/5 rounded-lg transition-colors"
              >
                <Mail size={16} />
                Contact
              </a>
            </motion.div>
          </div>

          {/* Right: Terminal Animation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <TerminalAnimation />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
