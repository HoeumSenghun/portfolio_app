'use client'

import { createContext, useContext, useState, useMemo } from 'react'
import { dictionaries, getDictionary } from '../i18n/dictionaries'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState('en')

  const value = useMemo(() => {
    const dict = getDictionary(locale)

    return {
      locale,
      setLocale,
      dict,
      availableLocales: Object.keys(dictionaries),
    }
  }, [locale])

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }

  return context
}

