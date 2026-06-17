import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'

export async function generateMetadata () {
  const t = await getTranslations('notFound')
  return { title: t('title') }
}

export default async function NotFoundPage () {
  const t = await getTranslations('notFound')

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <section className="flex min-h-[50vh] flex-col items-center justify-center text-center">
        <p className="text-7xl font-bold tracking-tight text-accent/55 sm:text-8xl">404</p>
        <h1 className="mt-4 text-3xl font-bold sm:text-4xl">{t('title')}</h1>
        <p className="mt-3 max-w-md text-muted-foreground">{t('description')}</p>
        <Link
          href="/"
          className="group relative mt-8 inline-block pb-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          {t('home')}
          <span
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-accent/70 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
          />
        </Link>
      </section>
    </div>
  )
}
