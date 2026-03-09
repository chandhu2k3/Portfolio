"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { caseStudiesData } from "@/data/caseStudies";

export default function CaseStudiesGrid() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section
      id="case-studies"
      className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-slate-900 via-purple-900/20 to-slate-900 overflow-hidden"
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
            className="text-3xl md:text-4xl font-bold mb-6 bg-linear-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg"
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
            className="w-24 h-1.5 bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 mx-auto mt-4 rounded-full shadow-lg shadow-cyan-500/50"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
            style={{ originX: 0.5 }}
          />
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {caseStudiesData.map((caseStudy, index) => {
            const isExpanded = expanded[caseStudy.id] ?? false;
            return (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                layout
                className="group relative bg-linear-to-br from-purple-900/40 via-slate-800/50 to-slate-900/60 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-purple-500/30 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
              >
                {/* Background image — fixed height layer */}
                <div className="absolute inset-0">
                  {caseStudy.image ? (
                    <img
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-all duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-linear-to-br from-purple-500/20 via-pink-600/20 to-blue-600/20" />
                  )}
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/80 to-slate-900/30" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 flex flex-col gap-3">
                  {/* Title + subtitle: always fixed */}
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-purple-300 transition-colors">
                      {caseStudy.title}
                    </h3>
                    <p className="text-purple-300/80 text-sm font-medium mt-0.5">
                      {caseStudy.subtitle}
                    </p>
                  </div>

                  {/* Summary with clamp + read more */}
                  <div>
                    <p
                      className={`text-gray-300 text-sm leading-relaxed transition-all duration-300 ${
                        isExpanded ? "" : "line-clamp-2"
                      }`}
                    >
                      {caseStudy.summary}
                    </p>
                    <button
                      onClick={(e) => toggleExpand(caseStudy.id, e)}
                      className="text-purple-400 hover:text-purple-300 text-xs font-medium mt-1 transition-colors cursor-pointer relative z-30"
                    >
                      {isExpanded ? "Show less ↑" : "Read more ↓"}
                    </button>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {caseStudy.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block px-2.5 py-0.5 bg-purple-500/20 text-purple-300 text-xs font-medium rounded-full border border-purple-400/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Case Study / Coming Soon */}
                  {caseStudy.link ? (
                    <a
                      href={caseStudy.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-purple-400 font-medium text-sm hover:text-purple-300 transition-colors w-fit mt-1"
                    >
                      <span>View Case Study</span>
                      <motion.span
                        className="inline-block"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </a>
                  ) : (
                    <div className="inline-flex items-center gap-2 text-purple-400/50 text-sm cursor-not-allowed mt-1">
                      <span>Coming Soon</span>
                    </div>
                  )}
                </div>
              </motion.div>
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
            href="/case-studies"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-linear-to-r from-purple-500 via-purple-600 to-blue-600 text-white rounded-xl font-semibold text-sm shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/60 transition-all"
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