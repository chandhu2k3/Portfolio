"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import type { ProjectItem } from "@/lib/types";

interface Props {
  projects?: ProjectItem[];
}

export default function ProjectsGrid({ projects = [] }: Props) {
  const featured = projects.slice(0, 4);

  return (
    <section
      id="projects"
      className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0a] overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-black/[0.015] dark:bg-white/[0.02] rounded-full blur-3xl" />
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
            Projects
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-black/55 dark:text-white/55 text-base font-light">
              A collection of engineering projects showcasing technical
              expertise
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          {featured.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {projects.length > 4 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link href="/projects">
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="inline-flex items-center gap-2 px-8 py-3 border-2 border-black/25 dark:border-white/30 text-black dark:text-white rounded-xl font-semibold text-sm hover:bg-black/5 dark:hover:bg-white/10 hover:border-black/40 transition-all"
              >
                <span>View All Projects</span>
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
