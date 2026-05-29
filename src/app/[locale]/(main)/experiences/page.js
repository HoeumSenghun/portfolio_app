import { setRequestLocale, getTranslations } from 'next-intl/server'
import { experiences } from '@/data/mock'

export default async function ExperiencesPage ({ params }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('pages.experiences')

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold">{t('title')}</h1>
      <p className="mt-3 text-muted-foreground">{t('description')}</p>
      <ol className="mt-8 space-y-4">
        {experiences.map((item) => (
          <li key={item.id} className="rounded-xl border border-border bg-card p-6">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h2 className="font-semibold">{item.role}</h2>
                <p className="text-sm text-muted-foreground">{item.company}</p>
              </div>
              <time className="text-sm text-muted-foreground">{item.period}</time>
            </div>
            {item.highlights ? (
              <ul className="mt-3 flex flex-wrap gap-2">
                {item.highlights.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md bg-muted px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  )
}
