'use client'

import { useLanguage } from '../contexts/LanguageContext'

export default function HomePage() {
  const { dict } = useLanguage()
  const page = dict.pages.home

  return (
    <div className="px-4 py-10">
      <main className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-semibold tracking-tight">
          {page.title}
        </h1>
        <p className="mt-3 text-sm text-slate-400">{page.description}</p>
      </main>
    </div>
  )
}
