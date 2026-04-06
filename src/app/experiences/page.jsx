'use client'

import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'

export default function ExperiencesPage() {
  const { dict } = useLanguage()
  const page = dict.pages.experiences

  return (
    <div className="px-4 py-10">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-2xl font-semibold tracking-tight">{page.title}</h1>
        <p className="mt-3 text-sm text-slate-400">{page.description}</p>
      </div>
    </div>
  )
}
