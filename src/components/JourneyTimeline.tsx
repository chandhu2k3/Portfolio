"use client";

import { motion } from "framer-motion";
import type { JourneyEntry } from "@/lib/types";

interface Props {
  items?: JourneyEntry[];
}

export default function JourneyTimeline({ items = [] }: Props) {
  return (
    <section
      id="journey"
      className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0a] overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-black/[0.015] dark:bg-white/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto z-10">
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
            My Journey
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-black/55 dark:text-white/55 text-base font-light">
              Tracing my path from building systems to understanding products
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

        <div className="relative">
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-black/15 dark:bg-white/20"
            style={{ zIndex: 0 }}
          />

          <div className="space-y-8">
            {items.map((item, index) => (
              <motion.div
                key={`${item.year}-${index}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                } flex-col md:flex-row`}
                style={{ zIndex: 1 }}
              >
                <div className="w-full md:w-[calc(50%-2.5rem)] border-l-2 border-black/15 dark:border-white/15 pl-4 md:border-l-0 md:pl-0">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -3 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="group relative bg-white/80 dark:bg-white/[0.04] backdrop-blur-sm border border-black/10 dark:border-white/10 rounded-xl p-5 hover:border-black/25 dark:hover:border-white/25 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-white/5 transition-all duration-300"
                  >
                    <div className="relative z-10">
                      <div className="text-3xl mb-3 opacity-70">
                        {item.icon}
                      </div>
                      <p className="text-xs font-bold text-black/45 dark:text-white/45 mb-2 tracking-wider uppercase">
                        {item.year}
                      </p>
                      <h3 className="text-lg font-bold text-black dark:text-white mb-3 tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-black/60 dark:text-white/60 leading-relaxed text-sm">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </div>

                <div
                  className="hidden md:flex w-20 shrink-0 justify-center items-center"
                  style={{ zIndex: 2 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      delay: index * 0.15 + 0.2,
                      type: "spring",
                      stiffness: 300,
                    }}
                    viewport={{ once: true }}
                    className="w-4 h-4 rounded-full border-4 border-white dark:border-[#0a0a0a] bg-black dark:bg-white shadow-md shadow-black/20 dark:shadow-white/20"
                  />
                </div>

                <div className="hidden md:block w-[calc(50%-2.5rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
