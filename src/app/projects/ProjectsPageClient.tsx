"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import type { ProjectItem } from "@/lib/types";

interface Props {
  projects?: ProjectItem[];
}

export default function ProjectsPageClient({ projects = [] }: Props) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto mb-8">
        <Link href="/#projects">
          <motion.div
            whileHover={{ x: -4 }}
            className="inline-flex items-center gap-2 text-cyan-400 text-sm font-medium hover:text-cyan-300 transition-colors"
          >
            <span>←</span>
            <span>Back to Portfolio</span>
          </motion.div>
        </Link>
      </div>

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            All Projects
          </h1>
          <p className="text-gray-400 text-base font-light">
            A full collection of engineering projects showcasing technical
            expertise
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              animate={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
