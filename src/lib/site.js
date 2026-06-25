/** Strip trailing slash and accidental /en or /kh from env values. */
function normalizeSiteUrl (value) {
  const fallback = 'https://www.hoeumsenghun.com'

  if (!value?.trim()) return fallback

  try {
    const parsed = new URL(value.trim())

    if (/^\/(en|kh)\/?$/.test(parsed.pathname)) {
      return parsed.origin
    }

    const path = parsed.pathname.replace(/\/$/, '')
    return path ? `${parsed.origin}${path}` : parsed.origin
  } catch {
    return fallback
  }
}

export const siteUrl = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL)

/** Host only — used by robots.txt Host directive (no https:// or path). */
export const siteHost = new URL(siteUrl).host

export const siteName = 'Hoeum Senghun'

export const sitePaths = [
  '',
  '/about',
  '/experiences',
  '/skills',
  '/projects',
  '/contact',
  '/achievement',
]
