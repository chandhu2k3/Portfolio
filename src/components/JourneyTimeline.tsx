"use client";

import { motion } from "framer-motion";
import { journeyData } from "@/data/journey";

export default function JourneyTimeline() {
  return (
    <section
      id="journey"
      className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto z-10">
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
            My Journey
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-300 text-base font-light">
              Tracing my path from building systems to understanding products
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

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[3px] -translate-x-1/2" style={{ background: "linear-gradient(to bottom, #22d3ee, #3b82f6, #a855f7)", zIndex: 0 }} />

          {/* Timeline Items */}
          <div className="space-y-8">
            {journeyData.map((item, index) => (
              <motion.div
                key={item.year}
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
                {/* Content */}
                <div className="w-full md:w-[calc(50%-2.5rem)]">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -3 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="group relative bg-gradient-to-br from-slate-800/70 via-slate-800/50 to-slate-900/70 backdrop-blur-sm border-2 border-cyan-500/30 rounded-xl p-5 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 rounded-xl transition-all duration-300" />
                    <div className="relative z-10">
                      <div className="text-3xl mb-3 filter drop-shadow-lg">
                        {item.icon}
                      </div>
                      <p className="text-xs font-bold text-cyan-400 mb-2 tracking-wider uppercase">
                        {item.year}
                      </p>
                      <h3 className="text-lg font-bold text-white mb-3 tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-sm">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Center Dot */}
                <div className="hidden md:flex w-20 shrink-0 justify-center items-center" style={{ zIndex: 2 }}>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      delay: index * 0.15 + 0.2,
                      type: "spring",
                      stiffness: 300,
                    }}
                    viewport={{ once: true }}
                    className="w-5 h-5 rounded-full border-4 border-slate-900 shadow-xl shadow-cyan-500/60"
                    style={{ background: "linear-gradient(to right, #22d3ee, #3b82f6)" }}
                  />
                </div>

                {/* Empty Space */}
                <div className="hidden md:block w-[calc(50%-2.5rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
