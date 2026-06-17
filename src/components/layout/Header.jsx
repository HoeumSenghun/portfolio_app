import { Link } from '@/i18n/navigation'
import HeaderNav from '@/components/layout/HeaderNav'
import ThemeToggle from '@/components/ThemeToggle'
import LocaleSwitcher from '@/components/LocaleSwitcher'

export default function Header () {
  return (
    <header className="sticky top-0 z-40 hidden border-b border-border/60 bg-background backdrop-blur-md md:block">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-foreground"
        >
          SH
        </Link>
        <HeaderNav />
        <div className="flex items-center gap-1">
          <LocaleSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
