'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Link, usePathname } from '@/i18n/navigation'
import { navLinks, isNavActive } from '@/data/nav'
import { cn } from '@/lib/utils'

const spring = { type: 'spring', stiffness: 400, damping: 30 }

export default function HeaderNav () {
  const pathname = usePathname()
  const t = useTranslations('nav')
  const shouldReduceMotion = useReducedMotion()

  return (
    <nav aria-label="Primary" className="flex items-center gap-6">
      {navLinks.map(({ href, label }) => {
        const active = isNavActive(pathname, href)

        return (
          <Link
            key={href}
            href={href}
            className={cn(
              'group relative inline-block pb-1 text-sm transition-colors',
              active
                ? 'text-foreground'
                : 'text-muted-foreground hover:text-foreground'
            )}
          >
            {t(label)}
            {!active && (
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-accent/70 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
              />
            )}
            {active && !shouldReduceMotion && (
              <motion.span
                layoutId="header-nav-underline"
                className="absolute inset-x-0 bottom-0 h-0.5 bg-accent"
                transition={spring}
              />
            )}
            {active && shouldReduceMotion && (
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-0.5 bg-accent"
              />
            )}
          </Link>
        )
      })}
    </nav>
  )
}
