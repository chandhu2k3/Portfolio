"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/data/skills";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
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
            About Me
          </motion.h2>
          <motion.div
            className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mx-auto rounded-full shadow-lg shadow-cyan-500/50"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
            style={{ originX: 0.5 }}
          />
        </motion.div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-5 text-white tracking-tight">
              From Engineering to Product Thinking
            </h3>
            <p className="text-gray-300 text-base mb-5 leading-relaxed">
              I began my journey as a{" "}
              <span className="font-semibold text-white">software engineer</span>,
              building user-facing applications and collaborating closely with
              development teams. Over time, I became increasingly interested in
              understanding the <span className="font-semibold text-white">why</span>{" "}
              behind products — identifying user problems, validating solutions, and
              shaping decisions that drive meaningful outcomes.
            </p>
            <p className="text-gray-300 text-base mb-5 leading-relaxed">
              My engineering background enables me to reason about{" "}
              <span className="font-semibold text-white">technical feasibility</span>,
              system trade-offs, and effective collaboration with engineers. Alongside
              this foundation, I&apos;ve been developing a strong interest in{" "}
              <span className="font-semibold text-white">product discovery</span>,{" "}
              <span className="font-semibold text-white">user research</span>, and
              structured product decision-making.
            </p>
            <p className="text-gray-300 text-base mb-5 leading-relaxed">
              Currently, I am pursuing the{" "}
              <span className="font-bold text-white">
                Product Design and Management (PDM)
              </span>{" "}
              program at{" "}
              <span className="font-semibold text-white">IIIT Hyderabad</span>, where
              I am strengthening my understanding of product strategy, user research,
              and data-informed product decisions through hands-on projects and case
              studies.
            </p>
          </motion.div>

          {/* Right Column - What I Bring */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="relative bg-gradient-to-br from-blue-900/30 via-slate-800/30 to-slate-900/30 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/30 shadow-2xl shadow-cyan-500/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl" />
            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-6 text-cyan-400 tracking-tight">
                What I Bring to Product Teams
              </h3>
              <div className="space-y-5">
                {[
                  {
                    icon: "⚙️",
                    text: "Strong technical foundation enabling effective collaboration with engineering teams",
                  },
                  {
                    icon: "🧩",
                    text: "Structured problem framing and hypothesis-driven thinking",
                  },
                  {
                    icon: "🔍",
                    text: "User research and usability evaluation to uncover meaningful insights",
                  },
                  {
                    icon: "📊",
                    text: "Data-informed decision making supported by metrics and experimentation",
                  },
                  {
                    icon: "🌱",
                    text: "Curiosity and continuous learning mindset suited for early-career product roles",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-xl mt-0.5 shrink-0">{item.icon}</span>
                    <p className="font-medium text-white text-sm leading-relaxed">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Grid - Keep existing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-12 text-center text-white tracking-tight">
            Skills & Tools
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.map((skillGroup, index) => (
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
                className="group relative bg-gradient-to-br from-slate-800/60 via-slate-800/40 to-slate-900/60 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 rounded-xl transition-all duration-300" />
                <div className="relative z-10">
                  <h4 className="font-bold text-cyan-400 mb-5 text-lg tracking-tight">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="inline-block px-3 py-1.5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 text-sm font-medium rounded-lg border border-cyan-500/30 hover:border-cyan-400/50 hover:bg-cyan-500/30 transition-all cursor-default"
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
