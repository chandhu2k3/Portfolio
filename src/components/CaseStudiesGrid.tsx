"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import CaseStudyCard from "./CaseStudyCard";
import type { CaseStudyItem } from "@/lib/types";

interface Props {
  caseStudies?: CaseStudyItem[];
}

export default function CaseStudiesGrid({ caseStudies = [] }: Props) {
  const visible = caseStudies.slice(0, 6);

  return (
    <section
      id="case-studies"
      className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#fafafa] dark:bg-[#0a0a0a] overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/[0.015] dark:bg-white/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl xl:max-w-[90rem] mx-auto z-10 px-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 text-black dark:text-white"
            whileHover={{ scale: 1.02 }}
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
            <p className="text-black/55 dark:text-white/55 text-base font-light">
              Deep dives into product thinking and strategic decisions
            </p>
          </motion.div>
          <motion.div
            className="w-24 h-1.5 bg-black/80 dark:bg-white/80 mx-auto mt-4 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
            style={{ originX: 0.5 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {visible.map((caseStudy, index) => (
            <CaseStudyCard
              key={caseStudy.id}
              caseStudy={caseStudy}
              index={index}
            />
          ))}
        </div>

        {caseStudies.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link href="/case-studies">
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="inline-flex items-center gap-2 px-8 py-3 bg-black text-white dark:bg-white dark:text-black rounded-xl font-semibold text-sm shadow-lg shadow-black/15 dark:shadow-white/10 hover:shadow-black/25 transition-all"
              >
                <span>
                  {caseStudies.length > 6
                    ? "View All Case Studies"
                    : "Browse Case Studies"}
                </span>
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.div>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
