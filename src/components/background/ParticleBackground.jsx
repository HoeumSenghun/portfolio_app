'use client'

import { useEffect, useMemo, useState } from 'react'
import { useTheme } from 'next-themes'
import Particles, { ParticlesProvider } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { getParticleOptions } from '@/lib/particle-config'

const initParticles = (engine) => loadSlim(engine)

function useViewport () {
  const [mobile, setMobile] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mobileMq = window.matchMedia('(max-width: 767px)')
    const motionMq = window.matchMedia('(prefers-reduced-motion: reduce)')

    const update = () => {
      setMobile(mobileMq.matches)
      setReducedMotion(motionMq.matches)
    }

    update()
    mobileMq.addEventListener('change', update)
    motionMq.addEventListener('change', update)

    return () => {
      mobileMq.removeEventListener('change', update)
      motionMq.removeEventListener('change', update)
    }
  }, [])

  return { mobile, reducedMotion }
}

function ParticleCanvas () {
  const { resolvedTheme } = useTheme()
  const { mobile, reducedMotion } = useViewport()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const isDark = resolvedTheme === 'dark'
  const options = useMemo(
    () => getParticleOptions(isDark, mobile),
    [isDark, mobile]
  )

  if (!mounted || reducedMotion) return null

  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <Particles
        id="portfolio-particles"
        className="h-full w-full"
        options={options}
      />
    </div>
  )
}

export default function ParticleBackground () {
  return (
    <ParticlesProvider init={initParticles}>
      <ParticleCanvas />
    </ParticlesProvider>
  )
}
