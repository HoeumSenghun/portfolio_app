export const navLinks = [
  { href: '/', label: 'home' },
  { href: '/about', label: 'about' },
  { href: '/experiences', label: 'experience' },
  { href: '/skills', label: 'skills' },
  { href: '/projects', label: 'projects' },
  { href: '/contact', label: 'contact' },
]

export function isNavActive (pathname, href) {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(`${href}/`)
}
