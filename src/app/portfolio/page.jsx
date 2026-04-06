'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { projects } from '../../lib/projects'
import { ProjectCard } from '../../components/ProjectCard'
import { useLanguage } from '../../contexts/LanguageContext'

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

export default function PortfolioPage() {
  const [filter, setFilter] = useState('all')
  const [theme, setTheme] = useState('dark')
  const { dict } = useLanguage()
  const page = dict.pages.portfolio

  const filteredProjects = useMemo(() => {
    if (filter === 'all') return projects
    return projects.filter(project => project.category === filter)
  }, [filter])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }

  const filters = ['all', 'web', 'mobile']

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 transition-colors duration-300">
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -left-24 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute top-40 -right-24 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />
        </div>

        <header className="sticky top-0 z-20 border-b border-slate-800/60 bg-slate-950/40 px-4 py-3 backdrop-blur-xl dark:border-slate-800/60 dark:bg-slate-950/40">
          <div className="mx-auto flex max-w-5xl items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-8 w-8 rounded-full bg-gradient-to-tr from-cyan-500 to-violet-500" />
              <span className="text-sm font-medium tracking-tight text-slate-100">
                {dict.header.brand}
              </span>
            </div>

            <nav className="hidden items-center gap-6 text-xs font-medium text-slate-300 sm:flex">
              <Link href="/" className="hover:text-cyan-400 transition-colors">
                Home
              </Link>
              <Link
                href="/about"
                className="hover:text-cyan-400 transition-colors"
              >
                About
              </Link>
              <Link
                href="/portfolio"
                className="hover:text-cyan-400 transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="/contact"
                className="hover:text-cyan-400 transition-colors"
              >
                Contact
              </Link>
            </nav>

            <button
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-900/70 text-slate-200 shadow-sm shadow-slate-900/40 transition hover:border-cyan-500 hover:text-cyan-400"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? (
                <span className="text-lg">☾</span>
              ) : (
                <span className="text-lg">☼</span>
              )}
            </button>
          </div>
        </header>

        <main className="mx-auto flex max-w-5xl flex-col gap-10 px-4 pb-16 pt-10">
          <section className="grid gap-10 md:grid-cols-[2fr,1fr] md:items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
                {page.sectionLabel}
              </p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                {page.headingPrefix}{' '}
                <span className="text-cyan-400">{page.headingHighlight}</span>
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-400">
                {page.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
              className="mx-auto h-40 w-40 overflow-hidden rounded-3xl border border-slate-700/70 bg-slate-900/70 shadow-2xl shadow-slate-900/60"
            >
              <motion.div
                className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="text-sm font-medium tracking-wide text-slate-200">
                  Your&nbsp;Photo
                </span>
              </motion.div>
            </motion.div>
          </section>

          <section>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                {page.filterLabel}
              </p>

              <div className="inline-flex gap-1 rounded-full bg-slate-900/70 p-1 text-xs font-medium text-slate-300 shadow-sm shadow-slate-900/60">
                {filters.map(key => {
                  const label =
                    key === 'all'
                      ? page.filterAll
                      : key === 'web'
                      ? page.filterWeb
                      : page.filterMobile
                  const isActive = filter === key

                  return (
                    <button
                      key={key}
                      onClick={() => setFilter(key)}
                      className={[
                        'rounded-full px-3 py-1 transition',
                        isActive
                          ? 'bg-gradient-to-r from-cyan-500 to-violet-500 text-slate-950 shadow shadow-cyan-500/40'
                          : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/80',
                      ].join(' ')}
                    >
                      {label}
                    </button>
                  )
                })}
              </div>
            </div>
          </section>

          <section>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filteredProjects.map(project => (
                <motion.div
                  key={project.id}
                  variants={fadeInUp}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          </section>
        </main>
      </div>
    </div>
  )
}

