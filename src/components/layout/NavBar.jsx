'use client'

import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '#about', key: 'about' },
  { href: '#projects', key: 'projects' },
  { href: '#skills', key: 'skills' },
  { href: '#experience', key: 'experience' },
  { href: '#contact', key: 'contact' },
]

export default function NavBar ({ className }) {
  const t = useTranslations('nav')

  return (
    <nav aria-label="Primary" className={cn('hidden items-center gap-6 md:flex', className)}>
      {navItems.map(({ href, key }) => (
        <a
          key={key}
          href={href}
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          {t(key)}
        </a>
      ))}
    </nav>
  )
}
