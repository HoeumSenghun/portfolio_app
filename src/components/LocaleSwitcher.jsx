'use client'

import { useSyncExternalStore } from 'react'
import ReactCountryFlag from 'react-country-flag'
import { useLocale, useTranslations } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'
import { Button } from '@/components/ui/button'

function useIsClient () {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  )
}

const localeFlags = {
  en: 'GB',
  kh: 'KH',
}

function getNextLocale (current) {
  const index = routing.locales.indexOf(current)
  return routing.locales[(index + 1) % routing.locales.length]
}

export default function LocaleSwitcher () {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const t = useTranslations('locale')
  const isClient = useIsClient()

  const nextLocale = getNextLocale(locale)
  const flagCode = localeFlags[locale]

  function toggleLocale () {
    router.replace(pathname, { locale: nextLocale })
  }

  if (!isClient) {
    return (
      <Button variant="ghost" size="icon" aria-label={t('switch')} disabled>
        <span className="h-5 w-5" aria-hidden />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      title={`${t(locale)} - ${t('switch')} ${t(nextLocale)}`}
      aria-label={`${t(locale)}. ${t('switch')} ${t(nextLocale)}`}
      onClick={toggleLocale}
    >
      <ReactCountryFlag
        countryCode={flagCode}
        svg
        style={{
          width: '1.25rem',
          height: '1.25rem',
          borderRadius: '2px',
        }}
        aria-hidden
      />
    </Button>
  )
}
