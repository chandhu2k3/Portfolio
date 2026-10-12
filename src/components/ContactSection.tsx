"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import type { SiteSettings } from "@/lib/types";

interface Props {
  settings?: SiteSettings;
}

export default function ContactSection({ settings }: Props) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const contactEmail = settings?.email ?? "chandrakanthr876@gmail.com";
  const github = settings?.github;
  const linkedin = settings?.linkedin;
  const subtitle =
    settings?.contactSubtitle ??
    "Always happy to discuss product, engineering, or collaboration opportunities";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/xlgrlgqw", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
        setMessage("");
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#f5f5f5] dark:bg-[#050505] overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-black/[0.02] dark:bg-white/[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-black/[0.015] dark:bg-white/[0.015] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 text-black dark:text-white"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
          >
            Let&apos;s Connect
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-black/55 dark:text-white/55 text-sm mb-10 font-light">
              {subtitle}
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10"
        >
          <motion.a
            href={`mailto:${contactEmail}`}
            whileHover={{ scale: 1.03, y: -3 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="group flex items-center gap-2 px-5 py-2.5 bg-black text-white dark:bg-white dark:text-black rounded-lg hover:shadow-lg hover:shadow-black/15 transition-all font-medium text-sm"
          >
            <span className="text-lg">✉️</span>
            <span>Email</span>
          </motion.a>

          {github && (
            <motion.a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="flex items-center gap-2 px-5 py-2.5 border-2 border-black/25 dark:border-white/30 text-black dark:text-white rounded-lg hover:bg-black/5 dark:hover:bg-white/10 hover:border-black/40 transition-all font-medium text-sm backdrop-blur-sm"
            >
              <span className="text-lg">💻</span>
              <span>GitHub</span>
            </motion.a>
          )}

          {linkedin && (
            <motion.a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="flex items-center gap-2 px-5 py-2.5 border-2 border-black/25 dark:border-white/30 text-black dark:text-white rounded-lg hover:bg-black/5 dark:hover:bg-white/10 hover:border-black/40 transition-all font-medium text-sm backdrop-blur-sm"
            >
              <span className="text-lg">🔗</span>
              <span>LinkedIn</span>
            </motion.a>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="flex-1 h-px bg-black/15 dark:bg-white/15" />
          <span className="text-black/40 dark:text-white/40 font-medium text-sm">or</span>
          <div className="flex-1 h-px bg-black/15 dark:bg-white/15" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-black/55 dark:text-white/55 mb-5 text-sm">
            Or send me a message directly below
          </p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <motion.input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/80 dark:bg-white/5 backdrop-blur-sm text-black dark:text-white placeholder-black/40 dark:placeholder-white/40 border border-black/15 dark:border-white/15 focus:border-black/40 dark:focus:border-white/40 focus:ring-2 focus:ring-black/10 dark:focus:ring-white/10 focus:outline-none transition-all text-sm"
              required
              whileFocus={{ scale: 1.01 }}
            />
            <motion.textarea
              placeholder="Your message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/80 dark:bg-white/5 backdrop-blur-sm text-black dark:text-white placeholder-black/40 dark:placeholder-white/40 border border-black/15 dark:border-white/15 focus:border-black/40 dark:focus:border-white/40 focus:ring-2 focus:ring-black/10 dark:focus:ring-white/10 focus:outline-none transition-all resize-none text-sm"
              required
              whileFocus={{ scale: 1.01 }}
            />
            <motion.button
              type="submit"
              disabled={status === "sending"}
              whileHover={{
                scale: status === "sending" ? 1 : 1.02,
                y: status === "sending" ? 0 : -2,
              }}
              whileTap={{ scale: status === "sending" ? 1 : 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className={`w-full px-6 py-3 rounded-lg font-medium text-sm transition-all ${
                status === "sending"
                  ? "bg-black/30 dark:bg-white/30 cursor-not-allowed text-white dark:text-black"
                  : status === "success"
                    ? "bg-black text-white dark:bg-white dark:text-black hover:bg-black/80 dark:hover:bg-white/90"
                    : status === "error"
                      ? "bg-black/70 text-white dark:bg-white/70 dark:text-black hover:bg-black/60"
                      : "bg-black text-white dark:bg-white dark:text-black hover:shadow-lg hover:shadow-black/15"
              }`}
            >
              {status === "sending" && "Sending..."}
              {status === "success" && "Message Sent! ✓"}
              {status === "error" && "Failed. Try again"}
              {status === "idle" && "Send Message"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
