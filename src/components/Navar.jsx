'use client'

import React from 'react'
import Link from 'next/link'
import { useLanguage } from '../contexts/LanguageContext'

export default function Navar() {
  const { dict } = useLanguage()
  const nav = dict.header.nav

  return (
    <nav className="flex gap-4 text-sm">
      <Link href="/">{nav.home}</Link>
      <Link href="/about">{nav.about}</Link>
      <Link href="/skills">{nav.skills}</Link>
      <Link href="/experiences">{nav.experiences}</Link>
      <Link href="/projects">{nav.projects}</Link>
      <Link href="/achievement">{nav.achievement}</Link>
    </nav>
  )
}

