import { setRequestLocale, getTranslations } from 'next-intl/server'
import SkillsCarousel from '@/components/sections/SkillsCarousel'
import SkillsMarquee from '@/components/sections/SkillsMarquee'
import { createPageMetadata } from '@/lib/page-metadata'

export async function generateMetadata ({ params }) {
  return createPageMetadata({ params, namespace: 'pages.skills', path: '/skills' })
}

export default async function SkillsPage ({ params }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('pages.skills')

  return (
    <div className="py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">{t('title')}</h1>
        <p className="mt-3 text-muted-foreground">{t('description')}</p>
      </div>

      {/* Wider area so the 3D ring can scale on big monitors */}
      <div className="mx-auto mt-10 w-full max-w-[min(100vw,90rem)] px-3 sm:px-6">
        <SkillsCarousel />
      </div>

      <div className="mx-auto mt-2 max-w-6xl px-4 sm:px-6 lg:px-8">
        <SkillsMarquee />
      </div>
    </div>
  )
}
