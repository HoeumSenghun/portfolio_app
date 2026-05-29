import { setRequestLocale } from 'next-intl/server'
import Hero from '@/components/sections/Hero'
import BentoGrid from '@/components/sections/BentoGrid'

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
