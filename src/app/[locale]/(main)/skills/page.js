import { setRequestLocale, getTranslations } from 'next-intl/server'
import { skills } from '@/data/mock'
import { createPageMetadata } from '@/lib/page-metadata'

export async function generateMetadata ({ params }) {
  return createPageMetadata({ params, namespace: 'pages.skills', path: '/skills' })
}

export default async function SkillsPage ({ params }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('pages.skills')

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold">{t('title')}</h1>
      <p className="mt-3 text-muted-foreground">{t('description')}</p>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map(({ name, icon: Icon }) => (
          <li
            key={name}
            className="flex items-center gap-3 rounded-xl border border-border bg-card p-4"
          >
            <Icon className="h-5 w-5 shrink-0 text-accent" aria-hidden />
            <span className="font-medium">{name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
