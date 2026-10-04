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
      initial={animate ? { opacity: 0, scale: 0.9 } : false}
      whileInView={animate ? { opacity: 1, scale: 1 } : undefined}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="group relative h-72 sm:h-80 lg:h-[22rem] bg-gradient-to-br from-slate-800/60 via-slate-800/40 to-slate-900/60 backdrop-blur-sm border border-purple-500/20 rounded-xl overflow-hidden hover:border-purple-400/40 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300"
    >
      {/* Full-bleed cover — same as project cards */}
      <div className="absolute inset-0">
        {caseStudy.image ? (
          <img
            src={caseStudy.image}
            alt={caseStudy.title}
            className="w-full h-full object-cover opacity-60 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-purple-500/20 via-pink-600/20 to-blue-600/20" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/75 to-slate-900/20" />
      </div>

      {/* Content at bottom — same layout as project cards */}
      <div className="relative z-10 p-6 h-full flex flex-col justify-end">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 tracking-tight group-hover:text-purple-400 transition-colors line-clamp-2">
          {caseStudy.title}
        </h3>
        <p className="text-purple-300/80 text-sm font-medium mb-2.5 line-clamp-1">
          {caseStudy.subtitle}
        </p>
        <p className="text-gray-300 text-sm sm:text-[0.95rem] mb-4 line-clamp-2 leading-relaxed">
          {caseStudy.summary}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {caseStudy.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="inline-block px-2.5 py-1 bg-purple-500/30 text-purple-200 text-xs font-medium rounded border border-purple-500/40"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Hover overlay with links — same as project cards */}
      <div className="absolute inset-0 bg-slate-900/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 z-20">
        <a
          href={detailHref}
          className="px-5 py-2.5 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-500 transition-all"
          onClick={(e) => e.stopPropagation()}
        >
          View Case Study
        </a>
        {caseStudy.deckUrl && (
          <a
            href={caseStudy.deckUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-sm font-medium text-purple-300 border border-purple-500/40 rounded-lg hover:bg-purple-500/10 transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            ↓ Deck
          </a>
        )}
      </div>
    </motion.div>
  );
}
