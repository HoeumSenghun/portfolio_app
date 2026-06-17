import { useTranslations } from 'next-intl'

export default function Footer () {
  const t = useTranslations('footer')
  const year = new Date().getFullYear()

  return (
    <footer className="relative z-10 mt-auto shrink-0 border-t border-border bg-background py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 text-center text-sm text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
        <p>© {year} Hoeum Senghun . {t('rights')}</p>
        <p>{t('built')}</p>
      </div>
    </footer>
  )
}
