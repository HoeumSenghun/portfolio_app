import { setRequestLocale, getTranslations } from 'next-intl/server'
import Hero from '@/components/sections/Hero'
import BentoGrid from '@/components/sections/BentoGrid'
import { buildMetadata } from '@/lib/seo'

export async function generateMetadata ({ params }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta' })
  return buildMetadata({
    locale,
    title: t('title'),
    description: t('description'),
    path: '',
  })
}

export default async function HomePage ({ params }) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <Hero />
      <BentoGrid />
    </>
  )
}
