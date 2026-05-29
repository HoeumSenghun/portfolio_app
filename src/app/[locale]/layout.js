import { Geist } from 'next/font/google'
import { Noto_Sans_Khmer, Battambang } from 'next/font/google'
import { notFound } from 'next/navigation'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import ThemeScript from '@/components/ThemeScript'
import Header from '@/components/layout/Header'
import FloatingNav from '@/components/layout/FloatingNav'
import { Analytics } from '@vercel/analytics/next'
import Footer from '@/components/layout/Footer'
import JsonLd from '@/components/JsonLd'
import { buildMetadata } from '@/lib/seo'
import '../globals.css'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
})

const notoKhmer = Noto_Sans_Khmer({
  subsets: ['khmer'],
  variable: '--font-noto-khmer',
  display: 'swap',
})

const battambang = Battambang({
  weight: ['400', '700'],
  subsets: ['khmer'],
  variable: '--font-battambang',
  display: 'swap',
})

export function generateStaticParams () {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata ({ params }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta' })

  return buildMetadata({
    locale,
    title: t('title'),
    description: t('description'),
  })
}

export default async function LocaleLayout ({ children, params }) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)
  const messages = await getMessages()
  const t = await getTranslations({ locale, namespace: 'meta' })

  return (
    <html
      lang={locale === 'kh' ? 'km' : 'en'}
      suppressHydrationWarning
      className={`${geist.variable} ${notoKhmer.variable} ${battambang.variable}`}
    >
      <head>
        <ThemeScript />
        <JsonLd
          locale={locale}
          title={t('title')}
          description={t('description')}
        />
      </head>
      <body className="min-h-screen antialiased">
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            <div className="flex min-h-screen flex-col">
              <Header />
              <FloatingNav />
              <main id="main-content" className="flex-1 pt-20 md:pt-0">
                {children}
              </main>
              <Footer />
            </div>
          </NextIntlClientProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
