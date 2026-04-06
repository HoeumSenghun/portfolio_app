'use client'

import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'

export default function Footer() {
  const { dict } = useLanguage()

  return (
    <footer className="mt-10 border-t py-4 text-center text-sm text-gray-500">
      {dict.footer.text}
    </footer>
  )
}


