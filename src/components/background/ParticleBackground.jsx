'use client'

import { useMemo, useSyncExternalStore } from 'react'
import { useTheme } from 'next-themes'
import Particles, { ParticlesProvider } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { getParticleOptions } from '@/lib/particle-config'

const initParticles = (engine) => loadSlim(engine)

function subscribeNoop () {
  return () => {}
}

function useClientMounted () {
  return useSyncExternalStore(subscribeNoop, () => true, () => false)
}

function useMediaQuery (query, serverSnapshot = false) {
  return useSyncExternalStore(
    (onStoreChange) => {
      const mq = window.matchMedia(query)
      mq.addEventListener('change', onStoreChange)
      return () => mq.removeEventListener('change', onStoreChange)
    },
    () => window.matchMedia(query).matches,
    () => serverSnapshot
  )
}

function useViewport () {
  const mobile = useMediaQuery('(max-width: 767px)')
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
  return { mobile, reducedMotion }
}

function ParticleCanvas () {
  const { resolvedTheme } = useTheme()
  const { mobile, reducedMotion } = useViewport()
  const mounted = useClientMounted()

  const isDark = resolvedTheme === 'dark'
  const options = useMemo(
    () => getParticleOptions(isDark, mobile),
    [isDark, mobile]
  )

  if (!mounted || reducedMotion) return null

  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-0 top-14 z-0 overflow-hidden md:top-16"
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
