"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import CaseStudyCard from "@/components/CaseStudyCard";
import type { CaseStudyItem } from "@/lib/types";

interface Props {
  caseStudies?: CaseStudyItem[];
}

export default function CaseStudiesPageClient({ caseStudies = [] }: Props) {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900/20 to-slate-900 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
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

      <div className="max-w-7xl xl:max-w-[90rem] mx-auto px-2">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyCard
              key={caseStudy.id}
              caseStudy={caseStudy}
              index={index}
              animate={false}
            />
          ))}
        </div>

        {caseStudies.length === 0 && (
          <p className="text-center text-gray-400">
            No case studies published yet.
          </p>
        )}
      </div>
    </div>
  );
}
