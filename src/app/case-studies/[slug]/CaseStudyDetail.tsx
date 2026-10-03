"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { CaseStudyItem } from "@/lib/types";

interface Props {
  study: CaseStudyItem;
}

function Section({ title, body }: { title: string; body?: string }) {
  if (!body?.trim()) return null;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-slate-800/40 border border-purple-500/20 rounded-xl p-6"
    >
      <h2 className="text-xl font-bold text-purple-300 mb-3 tracking-tight">
        {title}
      </h2>
      <p className="text-gray-300 leading-relaxed whitespace-pre-line">
        {body}
      </p>
    </motion.div>
  );
}

export default function CaseStudyDetail({ study }: Props) {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900/20 to-slate-900 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/case-studies">
          <motion.div
            whileHover={{ x: -4 }}
            className="inline-flex items-center gap-2 text-purple-400 text-sm font-medium hover:text-purple-300 transition-colors mb-8"
          >
            <span>←</span>
            <span>All Case Studies</span>
          </motion.div>
        </Link>

        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="relative rounded-2xl overflow-hidden mb-6 border border-purple-500/20">
            {study.image ? (
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-48 sm:h-64 object-cover"
              />
            ) : (
              <div className="w-full h-48 sm:h-64 bg-linear-to-br from-purple-500/30 via-pink-600/20 to-blue-600/30" />
            )}
            <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/40 to-transparent" />
          </div>

          <p className="text-purple-300/80 font-medium mb-2">{study.subtitle}</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            {study.title}
          </h1>
          <p className="text-gray-300 leading-relaxed mb-4">{study.summary}</p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block px-2.5 py-0.5 bg-purple-500/20 text-purple-300 text-xs font-medium rounded-full border border-purple-400/30"
              >
                {tag}
              </span>
            ))}
          </div>

          {(study.role || study.timeline) && (
            <p className="text-sm text-gray-400">
              {study.role && (
                <>
                  <span className="text-purple-400 font-medium">Role:</span>{" "}
                  {study.role}
                </>
              )}
              {study.role && study.timeline && <span> · </span>}
              {study.timeline && (
                <>
                  <span className="text-purple-400 font-medium">Timeline:</span>{" "}
                  {study.timeline}
                </>
              )}
            </p>
          )}
        </motion.header>

        <div className="space-y-6 mb-10">
          <Section title="Problem" body={study.problem} />
          <Section title="Research & Insights" body={study.research} />
          <Section title="Solution" body={study.solution} />

          {study.impact && study.impact.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-slate-800/40 border border-purple-500/20 rounded-xl p-6"
            >
              <h2 className="text-xl font-bold text-purple-300 mb-3 tracking-tight">
                Impact / Outcomes
              </h2>
              <ul className="space-y-2">
                {study.impact.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-gray-300 text-sm leading-relaxed"
                  >
                    <span className="text-purple-400 mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {study.highlights && study.highlights.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-slate-800/40 border border-purple-500/20 rounded-xl p-6"
            >
              <h2 className="text-xl font-bold text-purple-300 mb-3 tracking-tight">
                Key Highlights
              </h2>
              <div className="flex flex-wrap gap-2">
                {study.highlights.map((item, i) => (
                  <span
                    key={i}
                    className="inline-block px-3 py-1.5 bg-purple-500/15 text-purple-200 text-sm rounded-lg border border-purple-400/25"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {(study.deckUrl || study.externalLink) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-3 mb-10"
          >
            {study.deckUrl && (
              <>
                <a
                  href={study.deckUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-purple-500 via-purple-600 to-blue-600 text-white rounded-xl font-semibold text-sm shadow-xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-all"
                >
                  ↓ Download Deck
                </a>
                <a
                  href={study.deckUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-purple-400/50 text-purple-300 rounded-xl font-semibold text-sm hover:bg-purple-500/10 hover:border-purple-300 transition-all"
                >
                  View Deck
                </a>
              </>
            )}
            {study.externalLink && (
              <a
                href={study.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-cyan-400/50 text-cyan-300 rounded-xl font-semibold text-sm hover:bg-cyan-400/10 hover:border-cyan-300 transition-all"
              >
                External Link →
              </a>
            )}
          </motion.div>
        )}

        {study.deckUrl && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-xl font-bold text-white mb-4 tracking-tight">
              Case Study Deck
            </h2>
            <div className="rounded-xl overflow-hidden border border-purple-500/30 bg-slate-900">
              <iframe
                src={study.deckUrl}
                title={`${study.title} deck`}
                className="w-full h-[600px] bg-slate-950"
              />
            </div>
            <p className="text-xs text-gray-500 mt-2">
              If the preview does not load,{" "}
              <a
                href={study.deckUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 underline"
              >
                download the PDF
              </a>
              .
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
