'use client'

import React from 'react'
import Navar from '../Navar'
import { useLanguage } from '../../contexts/LanguageContext'

export default function Header() {
  const { locale, setLocale, dict, availableLocales } = useLanguage()

  return (
    <header className="flex items-center justify-between px-6 py-4 border-b">
      <div className="flex items-center gap-4">
        <span className="text-xl font-semibold">
          {dict.header.brand}
        </span>
        <Navar />
      </div>

      <div className="flex items-center gap-2">
        <label htmlFor="language-select" className="text-sm">
          Language
        </label>
        <select
          id="language-select"
          value={locale}
          onChange={event => setLocale(event.target.value)}
          className="border rounded px-2 py-1 text-sm"
        >
          {availableLocales.map(code => (
            <option key={code} value={code}>
              {code.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </header>
  )
}

