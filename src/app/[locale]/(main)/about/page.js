import { setRequestLocale, getTranslations } from 'next-intl/server'
import { profile } from '@/data/mock'
import { createPageMetadata } from '@/lib/page-metadata'

export async function generateMetadata ({ params }) {
  return createPageMetadata({ params, namespace: 'pages.about', path: '/about' })
}

export default async function AboutPage ({ params }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('pages.about')

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold">{t('title')}</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">{t('description')}</p>
      <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">{t('body')}</p>
      <dl className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-4">
          <dt className="text-sm text-muted-foreground">Name</dt>
          <dd className="mt-1 font-medium">{profile.name}</dd>
        </div>
        <div className="rounded-xl border border-border bg-card p-4">
          <dt className="text-sm text-muted-foreground">Location</dt>
          <dd className="mt-1 font-medium">{profile.location}</dd>
        </div>
      </dl>
    </div>
  )
}
