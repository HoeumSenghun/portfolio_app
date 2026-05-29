import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { navLinks } from '@/data/nav'
import ThemeToggle from '@/components/ThemeToggle'
import LocaleSwitcher from '@/components/LocaleSwitcher'

export default async function Header () {
  const t = await getTranslations('nav')

  return (
    <header className="sticky top-0 z-40 hidden border-b border-border/60 bg-background/95 backdrop-blur-md md:block">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-foreground"
        >
          SH
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {t(label)}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-1">
          <LocaleSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
