'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { HiArrowRight } from 'react-icons/hi'
import { Link } from '@/i18n/navigation'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { bentoSections, skills, projects } from '@/data/mock'
import { cn } from '@/lib/utils'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function BentoGrid () {
  const t = useTranslations('bento')

  return (
    <section
      aria-label="Portfolio highlights"
      className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="grid auto-rows-[minmax(140px,auto)] grid-cols-1 gap-4 md:grid-cols-4"
      >
        {bentoSections.map(({ key, href, span }) => (
          <motion.div
            key={key}
            variants={item}
            className={cn(span, key === 'about' && 'min-h-[280px]')}
          >
            <Link href={href} className="group block h-full">
              <Card className="flex h-full flex-col justify-between p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-md">
                <CardHeader className="p-0">
                  <CardTitle className="flex items-center justify-between gap-2">
                    {t(`${key}.title`)}
                    <HiArrowRight className="h-4 w-4 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </CardTitle>
                  <CardDescription className="mt-2">
                    {t(`${key}.body`)}
                  </CardDescription>
                </CardHeader>

                {key === 'skills' && (
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label="Skills">
                    {skills.slice(0, 6).map(({ name, icon: Icon }) => (
                      <li
                        key={name}
                        className="flex items-center gap-1.5 rounded-md bg-muted px-2.5 py-1 text-xs"
                      >
                        <Icon className="h-3.5 w-3.5" aria-hidden />
                        {name}
                      </li>
                    ))}
                  </ul>
                )}

                {key === 'projects' && (
                  <ul className="mt-4 space-y-2">
                    {projects.slice(0, 2).map((p) => (
                      <li key={p.id} className="text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">{p.title}</span>
                        {' — '}
                        {p.description}
                      </li>
                    ))}
                  </ul>
                )}
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
