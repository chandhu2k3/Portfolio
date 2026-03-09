"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { caseStudiesData } from "@/data/caseStudies";

export default function CaseStudiesPage() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900/20 to-slate-900 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto mb-8">
        <Link href="/#case-studies">
          <motion.div
            whileHover={{ x: -4 }}
            className="inline-flex items-center gap-2 text-purple-400 text-sm font-medium hover:text-purple-300 transition-colors"
          >
            <span>←</span>
            <span>Back to Portfolio</span>
          </motion.div>
        </Link>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-linear-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            All Case Studies
          </h1>
          <p className="text-gray-400 text-base font-light">
            Deep dives into product thinking and strategic decisions
          </p>
          <div className="w-24 h-1.5 bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {caseStudiesData.map((caseStudy, index) => {
            const isExpanded = expanded[caseStudy.id] ?? false;
            return (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                layout
                className="group relative bg-linear-to-br from-purple-900/40 via-slate-800/50 to-slate-900/60 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-purple-500/30 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
              >
                {/* Background image */}
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
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-purple-300 transition-colors">
                      {caseStudy.title}
                    </h3>
                    <p className="text-purple-300/80 text-sm font-medium mt-0.5">
                      {caseStudy.subtitle}
                    </p>
                  </div>

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
                      className="text-purple-400 hover:text-purple-300 text-xs font-medium mt-1 transition-colors cursor-pointer"
                    >
                      {isExpanded ? "Show less ↑" : "Read more ↓"}
                    </button>
                  </div>

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
      </div>
    </div>
  );
}

