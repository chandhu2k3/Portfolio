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
      className="group relative h-72 sm:h-80 lg:h-[22rem] bg-white dark:bg-[#111111] backdrop-blur-md border border-black/15 dark:border-white/15 rounded-xl overflow-hidden hover:border-black/30 dark:hover:border-white/30 hover:shadow-lg hover:shadow-black/10 dark:hover:shadow-black/30 transition-all duration-300"
    >
      <div className="absolute inset-0">
        {caseStudy.image ? (
          <img
            src={caseStudy.image}
            alt={caseStudy.title}
            className="w-full h-full object-cover opacity-100 group-hover:scale-105 transition-all duration-500"
          />
        ) : (
          <div className="w-full h-full bg-black/5 dark:bg-white/5" />
        )}
        {/* Solid white at bottom for text readability, fade only at top */}
        <div className="absolute inset-x-0 bottom-0 h-[75%] bg-gradient-to-t from-white via-white via-white/95 to-transparent dark:from-[#111111] dark:via-[#111111] dark:via-[#111111]/95 dark:to-transparent" />
      </div>

      <div className="relative z-10 p-6 h-full flex flex-col justify-end">
        <h3 className="text-lg sm:text-xl font-bold text-black dark:text-white mb-1.5 tracking-tight line-clamp-2">
          {caseStudy.title}
        </h3>
        <p className="text-black/55 dark:text-white/55 text-sm font-medium mb-2.5 line-clamp-1">
          {caseStudy.subtitle}
        </p>
        <p className="text-black/55 dark:text-white/55 text-sm sm:text-[0.95rem] mb-4 line-clamp-2 leading-relaxed">
          {caseStudy.summary}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {caseStudy.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="inline-block px-2.5 py-1 bg-black/[0.06] dark:bg-white/10 text-black/80 dark:text-white/80 text-xs font-medium rounded border border-black/10 dark:border-white/15"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-white/95 dark:bg-black/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 z-20">
        <a
          href={detailHref}
          className="px-5 py-2.5 text-sm font-medium text-white bg-black dark:text-black dark:bg-white rounded-lg hover:bg-black/80 dark:hover:bg-white/90 transition-all"
          onClick={(e) => e.stopPropagation()}
        >
          View Case Study
        </a>
        {caseStudy.deckUrl && (
          <a
            href={caseStudy.deckUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-sm font-medium text-black dark:text-white border border-black/25 dark:border-white/30 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            View Deck
          </a>
        )}
      </div>
    </motion.div>
  );
}
