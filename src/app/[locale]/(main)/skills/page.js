import { setRequestLocale, getTranslations } from 'next-intl/server'
import SkillsCarousel from '@/components/sections/SkillsCarousel'
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
      <div className="mt-10 overflow-x-clip">
        <SkillsCarousel />
      </div>
    </div>
  )
}
