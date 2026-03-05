"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactSection() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/xlgrlgqw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          message: message,
        }),
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
      className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative max-w-3xl mx-auto text-center z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg"
            whileHover={{ scale: 1.03, letterSpacing: "0.05em" }}
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
            <p className="text-gray-300 text-sm mb-10 font-light">
              Always happy to discuss product, engineering, or collaboration
              opportunities
            </p>
          </motion.div>
        </motion.div>

        {/* Contact Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10"
        >
          <motion.a
            href="mailto:chandrakanthr876@gmail.com"
            whileHover={{ scale: 1.03, y: -3 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="group flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500 via-blue-600 to-blue-700 text-white rounded-lg hover:shadow-xl hover:shadow-cyan-500/50 transition-all font-medium text-sm"
          >
            <span className="text-lg">✉️</span>
            <span>Email</span>
          </motion.a>
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -3 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="flex items-center gap-2 px-5 py-2.5 border-2 border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400/10 hover:border-cyan-300 hover:text-cyan-300 transition-all font-medium text-sm backdrop-blur-sm"
          >
            <span className="text-lg">💻</span>
            <span>GitHub</span>
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -3 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="flex items-center gap-2 px-5 py-2.5 border-2 border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400/10 hover:border-cyan-300 hover:text-cyan-300 transition-all font-medium text-sm backdrop-blur-sm"
          >
            <span className="text-lg">🔗</span>
            <span>LinkedIn</span>
          </motion.a>
        </motion.div>

        {/* Or Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
          <span className="text-gray-400 font-medium text-sm">or</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 mb-5 text-sm">
            Or send me a message directly below
          </p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <motion.input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-slate-800/60 backdrop-blur-sm text-white placeholder-gray-400 border border-cyan-500/30 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none transition-all text-sm"
              required
              whileFocus={{ scale: 1.01 }}
            />
            <motion.textarea
              placeholder="Your message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-slate-800/60 backdrop-blur-sm text-white placeholder-gray-400 border border-cyan-500/30 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none transition-all resize-none text-sm"
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
                  ? "bg-gray-600 cursor-not-allowed"
                  : status === "success"
                  ? "bg-green-600 hover:bg-green-700"
                  : status === "error"
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-gradient-to-r from-cyan-500 via-blue-600 to-blue-700 hover:shadow-xl hover:shadow-cyan-500/50"
              } text-white`}
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
