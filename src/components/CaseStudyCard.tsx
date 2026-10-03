"use client";

import { motion } from "framer-motion";
import type { CaseStudyItem } from "@/lib/types";

interface Props {
  caseStudy: CaseStudyItem;
  index?: number;
  animate?: boolean;
}

export default function CaseStudyCard({ caseStudy, index = 0, animate = true }: Props) {
  const slug = caseStudy.slug || caseStudy.id;
  const detailHref = `/case-studies/${slug}`;

  return (
    <motion.div
      initial={animate ? { opacity: 0, y: 30 } : false}
      whileInView={animate ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      viewport={{ once: true }}
      layout
      className="group relative bg-linear-to-br from-purple-900/40 via-slate-800/50 to-slate-900/60 backdrop-blur-sm rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-purple-500/30 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 h-full min-h-[28rem] flex flex-col"
    >
      {/* Cover image — larger, deck-like */}
      <div className="relative w-full h-48 sm:h-52 lg:h-56 shrink-0 overflow-hidden">
        {caseStudy.image ? (
          <img
            src={caseStudy.image}
            alt={caseStudy.title}
            className="w-full h-full object-cover opacity-70 group-hover:opacity-85 group-hover:scale-105 transition-all duration-500"
          />
        ) : (
          <div className="w-full h-full bg-linear-to-br from-purple-500/30 via-pink-600/25 to-blue-600/30" />
        )}
        <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/25 to-transparent" />

        {/* Tags overlay on image */}
        <div className="absolute top-3 left-3 right-3 flex flex-wrap gap-1.5 z-10">
          {caseStudy.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-block px-2.5 py-1 bg-slate-900/70 backdrop-blur-sm text-purple-200 text-xs font-medium rounded-full border border-purple-400/30"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 sm:p-7 flex flex-col gap-3 flex-1">
        <div>
          <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-purple-300 transition-colors leading-snug">
            {caseStudy.title}
          </h3>
          <p className="text-purple-300/80 text-sm font-medium mt-1">
            {caseStudy.subtitle}
          </p>
        </div>

        <p className="text-gray-300 text-sm sm:text-base leading-relaxed line-clamp-3">
          {caseStudy.summary}
        </p>

        {caseStudy.role && (
          <p className="text-sm text-gray-400">
            <span className="text-purple-400/80 font-medium">Role:</span>{" "}
            {caseStudy.role}
            {caseStudy.timeline ? ` · ${caseStudy.timeline}` : ""}
          </p>
        )}

        <div className="flex flex-wrap gap-1.5 mt-1">
          {caseStudy.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block px-2.5 py-0.5 bg-purple-500/20 text-purple-300 text-xs font-medium rounded-full border border-purple-400/30"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-4 flex flex-wrap items-center gap-3 border-t border-purple-500/15">
          <a
            href={detailHref}
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-200 font-semibold text-sm rounded-lg border border-purple-400/30 hover:border-purple-300/50 transition-all"
          >
            <span>View Case Study</span>
            <motion.span
              className="inline-block"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </a>

          {caseStudy.deckUrl && (
            <a
              href={caseStudy.deckUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-purple-200/90 border border-purple-400/30 rounded-lg hover:bg-purple-500/15 hover:text-purple-100 transition-all"
            >
              ↓ Download Deck
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
