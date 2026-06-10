import { setRequestLocale, getTranslations } from 'next-intl/server'
import ExperienceTimeline from '@/components/sections/ExperienceTimeline'
import { experiences } from '@/data/mock'
import { createPageMetadata } from '@/lib/page-metadata'

export async function generateMetadata ({ params }) {
  return createPageMetadata({ params, namespace: 'pages.experiences', path: '/experiences' })
}

export default async function ExperiencesPage ({ params }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('pages.experiences')

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold">{t('title')}</h1>
      <p className="mt-3 text-muted-foreground">{t('description')}</p>
      <ExperienceTimeline items={experiences} />
    </div>
  )
}
