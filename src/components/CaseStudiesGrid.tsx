"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { caseStudiesData } from "@/data/caseStudies";

export default function CaseStudiesGrid() {
  const categoryColors: {
    [key: string]: { bg: string; text: string };
  } = {
    "Design Thinking": { bg: "bg-blue-900/40", text: "text-cyan-400" },
    "Product Strategy": { bg: "bg-purple-900/40", text: "text-cyan-400" },
    Research: { bg: "bg-green-900/40", text: "text-cyan-400" },
    "UX/UI": { bg: "bg-pink-900/40", text: "text-cyan-400" },
    AI: { bg: "bg-orange-900/40", text: "text-cyan-400" },
  };

  return (
    <section
      id="case-studies"
      className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg"
            whileHover={{ scale: 1.03, letterSpacing: "0.05em" }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
          >
            Case Studies
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-300 text-base font-light">
              Deep dives into product thinking and strategic decisions
            </p>
          </motion.div>
          <motion.div
            className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mx-auto mt-4 rounded-full shadow-lg shadow-cyan-500/50"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
            style={{ originX: 0.5 }}
          />
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {caseStudiesData.slice(0, 4).map((caseStudy, index) => {
            const colors =
              categoryColors[caseStudy.category] ||
              categoryColors["Design Thinking"];
            return (
              <Link
                key={caseStudy.id}
                href={caseStudy.link || `/case-studies/${caseStudy.id}`}
                target={caseStudy.link ? "_blank" : undefined}
                rel={caseStudy.link ? "noopener noreferrer" : undefined}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative h-64 bg-gradient-to-br from-purple-900/40 via-slate-800/50 to-slate-900/60 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 cursor-pointer"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    {caseStudy.image ? (
                      <img
                        src={caseStudy.image}
                        alt={caseStudy.title}
                        className="w-full h-full object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-purple-500/20 via-pink-600/20 to-blue-600/20" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/40" />
                  </div>

                  {/* Animated Border Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 rounded-xl border-2 border-purple-400/50 animate-pulse" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-6 h-full flex flex-col">
                    {/* Category Badge */}
                    <div
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-auto border ${colors.bg} ${colors.text} border-purple-400/30 self-start`}
                    >
                      {caseStudy.category}
                    </div>

                    {/* Bottom Content */}
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-purple-300 transition-colors">
                        {caseStudy.title}
                      </h3>

                      {/* One-liner Summary */}
                      <p className="text-gray-300 text-sm mb-4 line-clamp-2 leading-relaxed">
                        {caseStudy.summary}
                      </p>

                      {/* Read More Indicator */}
                      <div className="flex items-center gap-2 text-purple-400 font-medium text-sm">
                        <span>View Case Study</span>
                        <motion.span
                          className="inline-block"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </div>
                    </div>
                  </div>

                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/0 to-purple-500/0 group-hover:from-purple-600/10 group-hover:to-purple-500/5 transition-all duration-500 rounded-xl" />
                </motion.div>
              </Link>
            );
          })}
        </div>

        {/* View All Case Studies Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.a
            href="https://www.notion.so/2c1212b5a059806587bbcf3229e3a965?v=2c1212b5a05980a4a1ab000cf22097ca&source=copy_link"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-500 via-purple-600 to-blue-600 text-white rounded-xl font-semibold text-sm shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/60 transition-all"
          >
            <span>View All Case Studies</span>
            <motion.span
              className="inline-block"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
