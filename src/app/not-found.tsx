"use client";

import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg grid-pattern flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md"
      >
        <div className="mb-8">
          <span className="text-8xl font-bold text-primary/20">404</span>
        </div>

        <h1 className="text-2xl font-bold text-text mb-3">Page Not Found</h1>
        <p className="text-sm text-text-muted mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        <div className="flex items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-text border border-border hover:bg-white/5 rounded-lg transition-colors"
          >
            <ArrowLeft size={16} />
            Go Back
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-primary hover:bg-primary-hover rounded-lg transition-colors"
          >
            <Home size={16} />
            Home
          </Link>
        </div>

        <div className="mt-12 font-mono text-xs text-text-muted/50">
          <p>$ curl -I rahuldeopa.dev/unknown</p>
          <p className="text-red-400/50">HTTP/1.1 404 Not Found</p>
        </div>
      </motion.div>
    </div>
  );
}
