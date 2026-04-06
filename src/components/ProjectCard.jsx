'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

export function ProjectCard({ project }) {
  const { dict } = useLanguage()
  const labels = dict.pages.projectCard

  return (
    <motion.article
      whileHover={{ scale: 1.05, translateY: -4 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-900/70 shadow-lg shadow-slate-950/60"
    >
      <div className="relative h-40 w-full overflow-hidden bg-slate-950/60">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/25 via-slate-900 to-violet-500/20 opacity-80 group-hover:opacity-100 transition-opacity" />
        <div className="relative flex h-full w-full items-center justify-center">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-slate-200">
            {project.title}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 px-4 py-4">
        <div>
          <h3 className="text-sm font-semibold text-slate-50">
            {project.title}
          </h3>
          <p className="mt-1 text-xs text-slate-400">{project.desc}</p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.tech.map(tech => (
            <span
              key={tech}
              className="rounded-full bg-slate-800/80 px-2 py-0.5 text-[11px] font-medium text-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between pt-3">
          <span className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
            {project.category === 'web' ? labels.web : labels.mobile}
          </span>
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-3 py-1 text-xs font-semibold text-slate-950 shadow shadow-cyan-500/40 transition hover:shadow-cyan-400/60"
          >
            {labels.viewProject}
            <span aria-hidden>↗</span>
          </a>
        </div>
      </div>
    </motion.article>
  )
}

