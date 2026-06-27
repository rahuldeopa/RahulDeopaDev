"use client";

import { useEffect, useCallback } from "react";
import { Command } from "cmdk";
import {
  Home,
  Briefcase,
  Code2,
  Layers,
  Clock,
  Mail,
  Download,
  Moon,
  Sun,
  X,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
  theme: "dark" | "light";
  onToggleTheme: () => void;
}

const navItems = [
  { label: "Home", href: "#home", icon: <Home size={16} /> },
  { label: "Projects", href: "#projects", icon: <Code2 size={16} /> },
  { label: "Experience", href: "#experience", icon: <Briefcase size={16} /> },
  { label: "Skills", href: "#skills", icon: <Layers size={16} /> },
  { label: "Timeline", href: "#timeline", icon: <Clock size={16} /> },
  { label: "Contact", href: "#contact", icon: <Mail size={16} /> },
];

export default function CommandPalette({
  open,
  onClose,
  theme,
  onToggleTheme,
}: CommandPaletteProps) {
  const navigate = useCallback(
    (href: string) => {
      onClose();
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    },
    [onClose]
  );

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
        onClick={onClose}
      />

      {/* Dialog */}
      <div className="fixed top-[20%] left-1/2 -translate-x-1/2 w-[min(640px,90vw)] z-[9999]">
        <Command
          className="bg-bg-card border border-border rounded-2xl overflow-hidden shadow-2xl shadow-black/50"
          label="Command Palette"
        >
          <div className="flex items-center border-b border-border">
            <Command.Input
              placeholder="Type a command or search..."
              className="flex-1 px-5 py-4 bg-transparent text-text text-sm outline-none placeholder:text-text-muted"
              autoFocus
            />
            <button
              onClick={onClose}
              className="px-4 text-text-muted hover:text-text transition-colors"
            >
              <X size={16} />
            </button>
          </div>

          <Command.List className="max-h-80 overflow-y-auto p-2">
            <Command.Empty className="py-8 text-center text-sm text-text-muted">
              No results found.
            </Command.Empty>

            <Command.Group heading="Navigation">
              {navItems.map((item) => (
                <Command.Item
                  key={item.href}
                  onSelect={() => navigate(item.href)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-text-muted cursor-pointer data-[selected=true]:bg-primary/10 data-[selected=true]:text-text hover:bg-white/5"
                >
                  {item.icon}
                  {item.label}
                </Command.Item>
              ))}
            </Command.Group>

            <Command.Group heading="Actions">
              <Command.Item
                onSelect={() => {
                  onClose();
                  window.open("https://github.com/rahuldeopa", "_blank");
                }}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-text-muted cursor-pointer data-[selected=true]:bg-primary/10 data-[selected=true]:text-text hover:bg-white/5"
              >
                <GithubIcon size={16} />
                Open GitHub
              </Command.Item>
              <Command.Item
                onSelect={() => {
                  onClose();
                  window.open("https://linkedin.com/in/rahuldeopa", "_blank");
                }}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-text-muted cursor-pointer data-[selected=true]:bg-primary/10 data-[selected=true]:text-text hover:bg-white/5"
              >
                <LinkedinIcon size={16} />
                Open LinkedIn
              </Command.Item>
              <Command.Item
                onSelect={() => {
                  onClose();
                  const a = document.createElement("a");
                  a.href = "/resume.pdf";
                  a.download = "";
                  a.click();
                }}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-text-muted cursor-pointer data-[selected=true]:bg-primary/10 data-[selected=true]:text-text hover:bg-white/5"
              >
                <Download size={16} />
                Download Resume
              </Command.Item>
              <Command.Item
                onSelect={() => {
                  onToggleTheme();
                  onClose();
                }}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-text-muted cursor-pointer data-[selected=true]:bg-primary/10 data-[selected=true]:text-text hover:bg-white/5"
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                Toggle {theme === "dark" ? "Light" : "Dark"} Mode
              </Command.Item>
            </Command.Group>
          </Command.List>

          <div className="flex items-center justify-between px-4 py-2.5 border-t border-border">
            <div className="flex items-center gap-3 text-xs text-text-muted">
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-white/5 border border-border rounded text-[10px]">↑↓</kbd>
                Navigate
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-white/5 border border-border rounded text-[10px]">↵</kbd>
                Select
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-white/5 border border-border rounded text-[10px]">Esc</kbd>
                Close
              </span>
            </div>
          </div>
        </Command>
      </div>
    </>
  );
}
