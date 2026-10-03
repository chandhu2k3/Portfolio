"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import CaseStudyCard from "./CaseStudyCard";
import type { CaseStudyItem } from "@/lib/types";

interface Props {
  caseStudies?: CaseStudyItem[];
}

export default function CaseStudiesGrid({ caseStudies = [] }: Props) {
  // Show a 2×3 grid (up to 6 cards) on the homepage
  const visible = caseStudies.slice(0, 6);

  return (
    <section
      id="case-studies"
      className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-slate-900 via-purple-900/20 to-slate-900 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-10">
          {visible.map((caseStudy, index) => (
            <CaseStudyCard
              key={caseStudy.id}
              caseStudy={caseStudy}
              index={index}
            />
          ))}
        </div>

        {caseStudies.length > 6 && (
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
        )}

        {caseStudies.length > 0 && caseStudies.length <= 6 && (
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
                className="inline-flex items-center gap-2 px-8 py-3 bg-linear-to-r from-purple-500 via-purple-600 to-blue-600 text-white rounded-xl font-semibold text-sm shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/60 transition-all"
              >
                <span>Browse Case Studies</span>
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
