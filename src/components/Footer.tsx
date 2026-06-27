"use client";

import { SITE_CONFIG } from "@/lib/constants";
import { Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-muted flex items-center gap-1">
            Made with <Heart size={14} className="text-red-500" fill="currentColor" /> by{" "}
            <span className="text-text font-medium">{SITE_CONFIG.name}</span>
          </p>

          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <a
              href={SITE_CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-text-muted hover:text-text transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={SITE_CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-text-muted hover:text-text transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
