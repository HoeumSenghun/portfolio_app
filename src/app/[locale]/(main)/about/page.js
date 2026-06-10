import Image from 'next/image'
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
      <section className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
        <div className="min-w-0 space-y-6">
          <h1 className="text-3xl font-bold sm:text-4xl">{t('title')}</h1>
          <p className="max-w-2xl text-muted-foreground">{t('description')}</p>
          <p className="max-w-2xl leading-relaxed text-muted-foreground">{t('body')}</p>
        </div>

        <div className="relative mx-auto aspect-square w-48 shrink-0 sm:w-56 lg:w-64">
          <div className="absolute inset-0 rounded-full bg-accent/15 blur-3xl" />
          <Image
            src={profile.avatar}
            alt={profile.name}
            width={256}
            height={256}
            priority
            className="relative rounded-full border border-border object-cover shadow-lg"
          />
        </div>
      </section>

      <section className="mt-12 border-t border-border pt-12">
        <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-4">
            <dt className="text-sm text-muted-foreground">Name</dt>
            <dd className="mt-1 font-medium">{profile.name}</dd>
          </div>
          <div className="rounded-xl border border-border bg-card p-4">
            <dt className="text-sm text-muted-foreground">Location</dt>
            <dd className="mt-1 font-medium">{profile.location}</dd>
          </div>
          <div className="rounded-xl border border-border bg-card p-4">
            <dt className="text-sm text-muted-foreground">Phone</dt>
            <dd className="mt-1 font-medium">{profile.phone}</dd>
          </div>
          <div className="rounded-xl border border-border bg-card p-4">
            <dt className="text-sm text-muted-foreground">Experience</dt>
            <dd className="mt-1 font-medium">{profile.experience}</dd>
          </div>
          <div className="rounded-xl border border-border bg-card p-4">
            <dt className="text-sm text-muted-foreground">Projects</dt>
            <dd className="mt-1 font-medium">{profile.projects}</dd>
          </div>
        </dl>
      </section>
    </div>
  )
}
