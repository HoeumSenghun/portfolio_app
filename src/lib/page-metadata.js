import { getTranslations } from 'next-intl/server'
import { buildMetadata } from '@/lib/seo'

export async function createPageMetadata ({ params, namespace, path = '' }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace })

  return buildMetadata({
    locale,
    title: `${t('title')} | senghunhoeum`,
    description: t('description'),
    path,
  })
}
