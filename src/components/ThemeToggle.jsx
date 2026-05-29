'use client'

import { useSyncExternalStore } from 'react'
import { useTheme } from 'next-themes'
import { useTranslations } from 'next-intl'
import { HiSun, HiMoon } from 'react-icons/hi'
import { Button } from '@/components/ui/button'

function useIsClient () {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  )
}

function prefersReducedMotion () {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function applyColorScheme (theme) {
  document.documentElement.style.colorScheme =
    theme === 'dark' ? 'dark' : 'light'
}

export default function ThemeToggle () {
  const { resolvedTheme, setTheme } = useTheme()
  const t = useTranslations('theme')
  const isClient = useIsClient()

  function toggleTheme () {
    const next = resolvedTheme === 'dark' ? 'light' : 'dark'

    const update = () => {
      setTheme(next)
      applyColorScheme(next)
    }

    const canCrossfade =
      typeof document !== 'undefined' &&
      document.startViewTransition &&
      !prefersReducedMotion() &&
      window.matchMedia('(hover: hover) and (pointer: fine)').matches

    if (canCrossfade) {
      document.startViewTransition(update)
      return
    }

    update()
  }

  if (!isClient) {
    return (
      <Button variant="ghost" size="icon" aria-label={t('toggle')} disabled>
        <span className="h-5 w-5" aria-hidden />
      </Button>
    )
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={t('toggle')}
      onClick={toggleTheme}
    >
      {isDark ? (
        <HiSun className="h-5 w-5" aria-hidden />
      ) : (
        <HiMoon className="h-5 w-5" aria-hidden />
      )}
    </Button>
  )
}
