import { setRequestLocale, getTranslations } from 'next-intl/server'
import { Button } from '@/components/ui/button'
import { profile, socialLinks } from '@/data/mock'
import { createPageMetadata } from '@/lib/page-metadata'

export async function generateMetadata ({ params }) {
  return createPageMetadata({ params, namespace: 'pages.contact', path: '/contact' })
}

export default async function ContactPage ({ params }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('pages.contact')

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold">{t('title')}</h1>
      <p className="mt-3 text-muted-foreground">{t('description')}</p>
      <div className="mt-8 max-w-xl space-y-6">
        <Button asChild>
          <a href={`mailto:${profile.email}`}>{t('email')}</a>
        </Button>
        <ul className="grid gap-3 sm:grid-cols-2">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-accent/40"
              >
                <Icon className="h-5 w-5 text-accent" aria-hidden />
                <span className="font-medium">{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
