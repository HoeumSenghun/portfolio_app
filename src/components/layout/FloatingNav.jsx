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

const localeFlags = { en: 'US', kh: 'KH' }

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

function NavIconButton ({ className, ...props }) {
  return (
    <button
      type="button"
      className={cn(
        'flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-muted hover:text-foreground',
        className
      )}
      {...props}
    />
  )
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
        'fixed z-40 flex -translate-x-1/2 left-1/2 items-center md:hidden',
        'top-[max(1.25rem,env(safe-area-inset-top))] rounded-[20px] px-4 py-2.5 gap-1.5',
        'bg-card/95 backdrop-blur-sm border border-border/50',
        'shadow-[0_4px_24px_rgba(0,0,0,0.1)]'
      )}
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
              'flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors',
              active
                ? 'bg-accent/15 text-accent'
                : 'text-muted-foreground hover:bg-muted hover:text-foreground'
            )}
          >
            <Icon className="h-[22px] w-[22px]" strokeWidth={2} aria-hidden />
          </Link>
        )
      })}

      <span className="mx-0.5 hidden h-6 w-px bg-border sm:block" aria-hidden />

      {isClient ? (
        <>
          <NavIconButton
            aria-label={`${tLocale('switch')} ${tLocale(nextLocale)}`}
            onClick={toggleLocale}
          >
            <ReactCountryFlag
              countryCode={localeFlags[nextLocale]}
              svg
              style={{ width: '1.125rem', height: '1.125rem', borderRadius: '2px' }}
              aria-hidden
            />
          </NavIconButton>
          <NavIconButton
            aria-label={tTheme('toggle')}
            onClick={toggleTheme}
          >
            {isDark ? (
              <Sun className="h-[22px] w-[22px]" strokeWidth={2} aria-hidden />
            ) : (
              <Moon className="h-[22px] w-[22px]" strokeWidth={2} aria-hidden />
            )}
          </NavIconButton>
        </>
      ) : (
        <>
          <span className="h-10 w-10" aria-hidden />
          <span className="h-10 w-10" aria-hidden />
        </>
      )}
    </nav>
  )
}
