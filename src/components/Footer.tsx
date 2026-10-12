"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface Props {
  text?: string;
}

export default function Footer({ text = "© 2026 Nagam Chandrakanth Reddy. All rights reserved." }: Props) {
  return (
    <footer className="relative py-8 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0a] border-t border-black/10 dark:border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-black/45 dark:text-white/45 text-sm text-center sm:text-left">
          {text}
        </p>

        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="text-black/45 dark:text-white/45 hover:text-black dark:hover:text-white text-sm font-medium transition-colors"
          >
            Home
          </Link>
          <Link
            href="/#case-studies"
            className="text-black/45 dark:text-white/45 hover:text-black dark:hover:text-white text-sm font-medium transition-colors"
          >
            Case Studies
          </Link>
          <Link
            href="/#projects"
            className="text-black/45 dark:text-white/45 hover:text-black dark:hover:text-white text-sm font-medium transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/#contact"
            className="text-black/45 dark:text-white/45 hover:text-black dark:hover:text-white text-sm font-medium transition-colors"
          >
            Contact
          </Link>
        </div>

        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white text-sm font-medium transition-colors cursor-pointer"
        >
          <span>Back to top</span>
          <span>↑</span>
        </motion.button>
      </div>
    </footer>
  );
}
