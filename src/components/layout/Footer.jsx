import { useTranslations } from 'next-intl'

export default function Footer () {
  const t = useTranslations('footer')
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 text-center text-sm text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
        <p>© {year} Senghun Hoeum. {t('rights')}</p>
        <p>{t('built')}</p>
      </div>
    </footer>
  )
}
