'use client'

import dynamic from 'next/dynamic'

const ParticleBackground = dynamic(
  () => import('@/components/background/ParticleBackground'),
  { ssr: false }
)

export default function ParticleBackgroundLoader () {
  return <ParticleBackground />
}
