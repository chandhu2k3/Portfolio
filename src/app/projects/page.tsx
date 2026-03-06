"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projectsData } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Back Button */}
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
        {/* Header */}
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
            A full collection of engineering projects showcasing technical expertise
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group relative h-64 bg-gradient-to-br from-slate-800/60 via-slate-800/40 to-slate-900/60 backdrop-blur-sm border border-cyan-500/20 rounded-xl overflow-hidden hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 via-blue-600/20 to-purple-600/20" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/75 to-slate-900/20" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-5 h-full flex flex-col justify-end">
                <h3 className="text-base font-bold text-white mb-2 tracking-tight group-hover:text-cyan-400 transition-colors line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-3 line-clamp-2 leading-relaxed">
                  {project.summary}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block px-2 py-0.5 bg-cyan-500/30 text-cyan-300 text-xs font-medium rounded border border-cyan-500/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Overlay with Links */}
              <div className="absolute inset-0 bg-slate-900/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 z-20">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs font-medium text-cyan-400 border border-cyan-500/40 rounded-lg hover:bg-cyan-500/10 transition-all"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Code
                  </a>
                )}
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs font-medium text-white bg-cyan-600 rounded-lg hover:bg-cyan-500 transition-all"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
