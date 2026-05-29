import { siteName, siteUrl } from '@/lib/site'

const keywords = {
  en: [
    'Hoeum Senghun',
    'Full Stack Developer',
    'Java Spring Boot',
    'Next.js',
    'React',
    'TypeScript',
    'PostgreSQL',
    'Cambodia developer',
    'portfolio',
  ],
  kh: [
    'ហឿម សេងហ៊ុន',
    'អ្នកអភិវឌ្ឍ Full Stack',
    'Java Spring Boot',
    'Next.js',
    'React',
    'TypeScript',
    'PostgreSQL',
    'ផតហ្វូលីអូ',
  ],
}

export function buildMetadata ({ locale, title, description, path = '' }) {
  const canonicalPath = `/${locale}${path}`
  const canonical = `${siteUrl}${canonicalPath}`
  const ogImage = `${siteUrl}/icon-global.svg`
  const googleVerification =
    process.env.GOOGLE_SITE_VERIFICATION ?? null

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    keywords: keywords[locale] ?? keywords.en,
    authors: [{ name: 'Senghun Hoeum', url: siteUrl }],
    creator: 'Senghun Hoeum',
    ...(googleVerification
      ? {
          verification: {
            google: googleVerification,
          },
        }
      : {}),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical,
      languages: {
        en: `${siteUrl}/en${path}`,
        km: `${siteUrl}/kh${path}`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName,
      locale: locale === 'kh' ? 'km_KH' : 'en_US',
      type: 'website',
      images: [
        {
          url: ogImage,
          width: 512,
          height: 512,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    icons: {
      icon: [{ url: '/icon-global.svg', type: 'image/svg+xml' }],
      shortcut: '/icon-global.svg',
    },
  }
}
