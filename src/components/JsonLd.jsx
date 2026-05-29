import { siteUrl, siteName } from '@/lib/site'

export default function JsonLd ({ locale, title, description }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: siteName,
        description,
        inLanguage: locale === 'kh' ? 'km' : 'en',
      },
      {
        '@type': 'Person',
        '@id': `${siteUrl}/#person`,
        name: 'Senghun Hoeum',
        url: siteUrl,
        jobTitle: 'Full Stack Developer',
        description,
        knowsAbout: [
          'Java Spring Boot',
          'Next.js',
          'React',
          'TypeScript',
          'PostgreSQL',
          'Oracle',
        ],
        sameAs: [
          'https://github.com/HoeumSenghun',
        ],
      },
      {
        '@type': 'WebPage',
        '@id': `${siteUrl}/${locale}#webpage`,
        url: `${siteUrl}/${locale}`,
        name: title,
        description,
        isPartOf: { '@id': `${siteUrl}/#website` },
        about: { '@id': `${siteUrl}/#person` },
        inLanguage: locale === 'kh' ? 'km' : 'en',
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
