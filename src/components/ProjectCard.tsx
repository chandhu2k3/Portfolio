"use client";

import { motion } from "framer-motion";
import type { ProjectItem } from "@/lib/types";

interface Props {
  project: ProjectItem;
  index?: number;
  animate?: boolean;
}

export default function ProjectCard({ project, index = 0, animate = true }: Props) {
  return (
    <motion.div
      initial={animate ? { opacity: 0, scale: 0.9 } : false}
      whileInView={animate ? { opacity: 1, scale: 1 } : undefined}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="group relative h-64 bg-white dark:bg-[#111111] backdrop-blur-md border border-black/15 dark:border-white/15 rounded-xl overflow-hidden hover:border-black/30 dark:hover:border-white/30 hover:shadow-lg hover:shadow-black/10 dark:hover:shadow-black/30 transition-all duration-300"
    >
      <div className="absolute inset-0">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-100 group-hover:scale-105 transition-all duration-500"
          />
        ) : (
          <div className="w-full h-full bg-black/5 dark:bg-white/5" />
        )}
        {/* Solid white at bottom for text readability, fade only at top */}
        <div className="absolute inset-x-0 bottom-0 h-[78%] bg-gradient-to-t from-white via-white via-white/95 to-transparent dark:from-[#111111] dark:via-[#111111] dark:via-[#111111]/95 dark:to-transparent" />
      </div>

      <div className="relative z-10 p-5 h-full flex flex-col justify-end">
        <h3 className="text-base font-bold text-black dark:text-white mb-2 tracking-tight line-clamp-2">
          {project.title}
        </h3>
        <p className="text-black/60 dark:text-white/60 text-sm mb-3 line-clamp-2 leading-relaxed">
          {project.summary}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="inline-block px-2 py-0.5 bg-black/[0.06] dark:bg-white/10 text-black/80 dark:text-white/80 text-xs font-medium rounded border border-black/10 dark:border-white/15"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {(project.github || project.liveDemo) && (
        <div className="absolute inset-0 bg-white/95 dark:bg-black/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 z-20">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} code on GitHub`}
              title="View code on GitHub"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-black dark:text-white border border-black/25 dark:border-white/30 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-all"
              onClick={(e) => e.stopPropagation()}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12v3.15c0 .3.21.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
              </svg>
              GitHub / Code
            </a>
          )}
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-medium text-white bg-black dark:text-black dark:bg-white rounded-lg hover:bg-black/80 dark:hover:bg-white/90 transition-all"
              onClick={(e) => e.stopPropagation()}
            >
              View Demo
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
}
