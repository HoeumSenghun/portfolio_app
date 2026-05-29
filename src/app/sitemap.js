import { routing } from '@/i18n/routing'
import { sitePaths, siteUrl } from '@/lib/site'

export default function sitemap () {
  const lastModified = new Date()

  return routing.locales.flatMap((locale) =>
    sitePaths.map((path) => ({
      url: `${siteUrl}/${locale}${path}`,
      lastModified,
      changeFrequency: path === '' ? 'weekly' : 'monthly',
      priority: path === '' ? 1 : 0.8,
    }))
  )
}
