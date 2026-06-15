'use client'

import { useSyncExternalStore } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useLocale, useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'
import ReactCountryFlag from 'react-country-flag'
import {
  Home,
  User,
  Briefcase,
  Code2,
  Folder,
  Mail,
  Sun,
  Moon,
} from 'lucide-react'
import { Link, usePathname, useRouter } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'
import { navLinks, isNavActive } from '@/data/nav'
import { cn } from '@/lib/utils'

const icons = {
  home: Home,
  about: User,
  experience: Briefcase,
  skills: Code2,
  projects: Folder,
  contact: Mail,
}

const localeFlags = { en: 'GB', kh: 'KH' }

const iconBtn =
  'relative flex h-10 w-9.5 shrink-0 items-center justify-center rounded-lg touch-manipulation'

const navEase = [0.22, 1, 0.36, 1]
const spring = { type: 'spring', stiffness: 400, damping: 30 }

const navContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.12 },
  },
}

const navItem = {
  hidden: { opacity: 0, y: 8, scale: 0.85 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: navEase },
  },
}

function useIsClient () {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  )
}

function getNextLocale (current) {
  const index = routing.locales.indexOf(current)
  return routing.locales[(index + 1) % routing.locales.length]
}

function applyColorScheme (theme) {
  document.documentElement.style.colorScheme =
    theme === 'dark' ? 'dark' : 'light'
}

export default function FloatingNav () {
  const pathname = usePathname()
  const router = useRouter()
  const locale = useLocale()
  const tNav = useTranslations('nav')
  const tTheme = useTranslations('theme')
  const tLocale = useTranslations('locale')
  const { resolvedTheme, setTheme } = useTheme()
  const isClient = useIsClient()
  const shouldReduceMotion = useReducedMotion()

  const nextLocale = getNextLocale(locale)
  const isDark = resolvedTheme === 'dark'

  function toggleTheme () {
    const next = isDark ? 'light' : 'dark'
    setTheme(next)
    applyColorScheme(next)
  }

  function toggleLocale () {
    router.replace(pathname, { locale: nextLocale })
  }

  const motionProps = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: -16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, ease: navEase },
      }

  const listMotionProps = shouldReduceMotion
    ? {}
    : {
        variants: navContainer,
        initial: 'hidden',
        animate: 'visible',
      }

  const itemMotionProps = shouldReduceMotion ? {} : { variants: navItem }

  const tapProps = shouldReduceMotion ? {} : { whileTap: { scale: 0.88 } }

  return (
    <motion.nav
      aria-label="Mobile"
      {...motionProps}
      className={cn(
        'fixed z-40 left-1/2 -translate-x-1/2 md:hidden',
        'top-[max(0.5rem,env(safe-area-inset-top))]',
        'max-w-[calc(100vw-0.75rem)]',
        'rounded-2xl border border-border/50 bg-card/95 px-1 py-1',
        'shadow-[0_2px_16px_rgba(0,0,0,0.08)] backdrop-blur-sm'
      )}
    >
      <motion.div
        {...listMotionProps}
        className="flex items-center gap-0.5 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {navLinks.map(({ href, label }) => {
          const Icon = icons[label]
          const active = isNavActive(pathname, href)

          return (
            <motion.div key={href} {...itemMotionProps} className="shrink-0">
              <Link
                href={href}
                title={tNav(label)}
                aria-label={tNav(label)}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  iconBtn,
                  'transition-colors',
                  active
                    ? 'text-accent'
                    : 'text-muted-foreground active:text-foreground'
                )}
              >
                {active && !shouldReduceMotion && (
                  <motion.span
                    layoutId="mobile-nav-pill"
                    className="absolute inset-0 rounded-lg bg-accent/15"
                    transition={spring}
                  />
                )}
                {active && shouldReduceMotion && (
                  <span
                    aria-hidden
                    className="absolute inset-0 rounded-lg bg-accent/15"
                  />
                )}
                <motion.span
                  {...tapProps}
                  className="relative flex items-center justify-center"
                >
                  <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
                </motion.span>
              </Link>
            </motion.div>
          )
        })}

        <span className="mx-0.5 h-4 w-px shrink-0 bg-border" aria-hidden />

        {isClient ? (
          <>
            <motion.button
              type="button"
              {...itemMotionProps}
              {...tapProps}
              title={`${tLocale(locale)} — ${tLocale('switch')} ${tLocale(nextLocale)}`}
              aria-label={`${tLocale(locale)}. ${tLocale('switch')} ${tLocale(nextLocale)}`}
              onClick={toggleLocale}
              className={cn(iconBtn, 'text-muted-foreground')}
            >
              <ReactCountryFlag
                countryCode={localeFlags[locale]}
                svg
                style={{ width: '0.995rem', height: '0.995rem', borderRadius: '1px' }}
                aria-hidden
              />
            </motion.button>
            <motion.button
              type="button"
              {...itemMotionProps}
              {...tapProps}
              aria-label={tTheme('toggle')}
              onClick={toggleTheme}
              className={cn(iconBtn, 'text-muted-foreground')}
            >
              {isDark ? (
                <Sun className="h-5 w-5" strokeWidth={2} aria-hidden />
              ) : (
                <Moon className="h-5 w-5" strokeWidth={2} aria-hidden />
              )}
            </motion.button>
          </>
        ) : (
          <>
            <span className="h-8 w-8 shrink-0" aria-hidden />
            <span className="h-8 w-8 shrink-0" aria-hidden />
          </>
        )}
      </motion.div>
    </motion.nav>
  )
}
