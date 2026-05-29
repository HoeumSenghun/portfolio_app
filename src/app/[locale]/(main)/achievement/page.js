import { setRequestLocale, getTranslations } from 'next-intl/server'
import { achievements } from '@/data/mock'

export default async function AchievementPage ({ params }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('pages.achievement')

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold">{t('title')}</h1>
      <p className="mt-3 text-muted-foreground">{t('description')}</p>
      <ul className="mt-8 space-y-4">
        {achievements.map((item) => (
          <li key={item.id} className="rounded-xl border border-border bg-card p-6">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <h2 className="font-semibold">{item.title}</h2>
              <span className="text-sm text-muted-foreground">{item.year}</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
