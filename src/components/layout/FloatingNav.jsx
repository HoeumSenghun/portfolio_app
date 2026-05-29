'use client'

import { useSyncExternalStore } from 'react'
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
import { navLinks } from '@/data/nav'
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
  'flex h-10 w-9.5 shrink-0 items-center justify-center rounded-lg touch-manipulation'

function useIsClient () {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  )
}

function isActive (pathname, href) {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(`${href}/`)
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

  return (
    <nav
      aria-label="Mobile"
      className={cn(
        'fixed z-40 left-1/2 -translate-x-1/2 md:hidden',
        'top-[max(0.5rem,env(safe-area-inset-top))]',
        'max-w-[calc(100vw-0.75rem)]',
        'rounded-2xl border border-border/50 bg-card/95 px-1 py-1',
        'shadow-[0_2px_16px_rgba(0,0,0,0.08)] backdrop-blur-sm'
      )}
    >
      <div
        className="flex items-center gap-0.5 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {navLinks.map(({ href, label }) => {
          const Icon = icons[label]
          const active = isActive(pathname, href)

          return (
            <Link
              key={href}
              href={href}
              title={tNav(label)}
              aria-label={tNav(label)}
              aria-current={active ? 'page' : undefined}
              className={cn(
                iconBtn,
                'transition-colors',
                active
                  ? 'bg-accent/15 text-accent'
                  : 'text-muted-foreground active:bg-muted active:text-foreground'
              )}
            >
              <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
            </Link>
          )
        })}

        <span className="mx-0.5 h-4 w-px shrink-0 bg-border" aria-hidden />

        {isClient ? (
          <>
            <button
              type="button"
              title={`${tLocale(locale)} — ${tLocale('switch')} ${tLocale(nextLocale)}`}
              aria-label={`${tLocale(locale)}. ${tLocale('switch')} ${tLocale(nextLocale)}`}
              onClick={toggleLocale}
              className={cn(iconBtn, 'text-muted-foreground active:bg-muted')}
            >
              <ReactCountryFlag
                countryCode={localeFlags[locale]}
                svg
                style={{ width: '0.995rem', height: '0.995rem', borderRadius: '1px' }}
                aria-hidden
              />
            </button>
            <button
              type="button"
              aria-label={tTheme('toggle')}
              onClick={toggleTheme}
              className={cn(iconBtn, 'text-muted-foreground active:bg-muted')}
            >
              {isDark ? (
                <Sun className="h-5 w-5" strokeWidth={2} aria-hidden />
              ) : (
                <Moon className="h-5 w-5" strokeWidth={2} aria-hidden />
              )}
            </button>
          </>
        ) : (
          <>
            <span className="h-8 w-8 shrink-0" aria-hidden />
            <span className="h-8 w-8 shrink-0" aria-hidden />
          </>
        )}
      </div>
    </nav>
  )
}
