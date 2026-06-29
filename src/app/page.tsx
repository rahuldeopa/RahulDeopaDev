"use client";

import { useState, useEffect, useCallback } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TechStackSection from "@/components/TechStackSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import TimelineSection from "@/components/TimelineSection";
import AchievementsSection from "@/components/AchievementsSection";
import NowBuildingSection from "@/components/NowBuildingSection";
import GitHubSection from "@/components/GitHubSection";
import CodingProfilesSection from "@/components/CodingProfilesSection";
import GoogleBadgesSection from "@/components/GoogleBadgesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import InteractiveTerminal from "@/components/InteractiveTerminal";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      document.documentElement.classList.toggle("light", next === "light");
      document.documentElement.classList.toggle("dark", next === "dark");
      localStorage.setItem("theme", next);
      return next;
    });
  }, []);

  // Load saved theme
  useEffect(() => {
    const saved = localStorage.getItem("theme") as "dark" | "light" | null;
    if (saved) {
      setTheme(saved);
      document.documentElement.classList.toggle("light", saved === "light");
      document.documentElement.classList.toggle("dark", saved === "dark");
    }
  }, []);

  // Ctrl+K handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setCommandPaletteOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <Navbar
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <CommandPalette
        open={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main className="overflow-x-clip">
        <HeroSection />

        <div className="border-t border-border">
          <TechStackSection />
        </div>

        <div className="border-t border-border">
          <ExperienceSection />
        </div>

        <div className="border-t border-border">
          <ProjectsSection />
        </div>

        <div className="border-t border-border">
          <NowBuildingSection />
        </div>

        <div className="border-t border-border">
          <SkillsSection />
        </div>

        <div className="border-t border-border">
          <TimelineSection />
        </div>

        <div className="border-t border-border">
          <AchievementsSection />
        </div>

        <div className="border-t border-border">
          <GitHubSection />
        </div>

        <div className="border-t border-border">
          <CodingProfilesSection />
        </div>

        <div className="border-t border-border">
          <GoogleBadgesSection />
        </div>

        <div className="border-t border-border">
          <InteractiveTerminal />
        </div>

        <div className="border-t border-border">
          <TestimonialsSection />
        </div>

        <div className="border-t border-border">
          <ContactSection />
        </div>
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
