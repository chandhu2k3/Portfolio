"use client";

import { motion } from "framer-motion";
import type { SiteSettings, SkillGroup } from "@/lib/types";

interface Props {
  settings?: SiteSettings;
  skills?: SkillGroup[];
}

export default function AboutSection({ settings, skills = [] }: Props) {
  const heading = settings?.aboutHeading ?? "From Engineering to Product Thinking";
  const paragraphs = settings?.aboutParagraphs ?? [];
  const whatIBring = settings?.whatIBring ?? [];

  return (
    <section
      id="about"
      className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#fafafa] dark:bg-[#0a0a0a] overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-black/[0.02] dark:bg-white/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
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
            About Me
          </motion.h2>
          <motion.div
            className="w-24 h-1.5 bg-black/80 dark:bg-white/80 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
            style={{ originX: 0.5 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-12 mb-10 md:mb-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-5 text-black dark:text-white tracking-tight">
              {heading}
            </h3>
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-black/60 dark:text-white/60 text-base mb-5 leading-relaxed last:mb-0"
              >
                {p}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="relative bg-white/80 dark:bg-white/[0.04] backdrop-blur-xl rounded-2xl p-8 border border-black/10 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-black/40"
          >
            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-6 text-black dark:text-white tracking-tight">
                What I Bring to Product Teams
              </h3>
              <div className="space-y-5">
                {whatIBring.map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-xl mt-0.5 shrink-0 opacity-60">
                      {item.icon ?? "→"}
                    </span>
                    <p className="font-medium text-black/85 dark:text-white/85 text-sm leading-relaxed">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-6 md:mb-12 text-center text-black dark:text-white tracking-tight">
            Skills & Tools
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white/70 dark:bg-white/[0.03] backdrop-blur-sm border border-black/10 dark:border-white/10 rounded-xl p-6 hover:border-black/25 dark:hover:border-white/25 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-white/5 transition-all duration-300"
              >
                <div className="relative z-10">
                  <h4 className="font-bold text-black dark:text-white mb-5 text-lg tracking-tight">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="inline-block px-3 py-1.5 bg-black/[0.05] dark:bg-white/5 text-black/80 dark:text-white/80 text-sm font-medium rounded-lg border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 hover:bg-black/10 dark:hover:bg-white/10 transition-all cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
