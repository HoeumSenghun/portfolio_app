'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { profile } from '@/data/mock'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero () {
  const t = useTranslations('hero')

  return (
    <section
      aria-labelledby="hero-heading"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
        <motion.div
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.p
            custom={0}
            variants={fadeUp}
            className="text-sm font-medium text-accent"
          >
            {t('greeting')}
          </motion.p>
          <motion.h1
            id="hero-heading"
            custom={1}
            variants={fadeUp}
            className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            {t('name')}
          </motion.h1>
          <motion.p custom={2} variants={fadeUp} className="text-xl text-muted-foreground">
            {t('role')}
          </motion.p>
          <motion.p custom={3} variants={fadeUp} className="max-w-lg text-muted-foreground">
            {t('tagline')}
          </motion.p>
          <motion.div custom={4} variants={fadeUp} className="flex flex-wrap gap-3">
            <Button asChild>
              <a href="#projects">{t('cta')}</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#contact">{t('contact')}</a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto aspect-square w-48 sm:w-56 lg:w-64"
        >
          <div className="absolute inset-0 rounded-full bg-accent/15 blur-3xl" />
          <Image
            src={profile.avatar}
            alt={profile.name}
            width={256}
            height={256}
            priority
            className="relative rounded-full border border-border object-cover shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  )
}
