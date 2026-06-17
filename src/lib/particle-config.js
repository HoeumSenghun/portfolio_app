/** Particle network colors aligned with site accent tokens. */
export function getParticleOptions (isDark, isMobile = false) {
  const particleColor = isDark ? '#8fb39a' : '#5c7c6a'
  const linkColor = isDark ? '#a8c9b4' : '#6b8f7a'

  return {
    fullScreen: { enable: false },
    background: { color: { value: 'transparent' } },
    fpsLimit: isMobile ? 45 : 60,
    detectRetina: true,
    particles: {
      number: {
        value: isMobile ? 36 : 65,
        density: { enable: true, width: 900, height: 900 },
      },
      color: { value: particleColor },
      opacity: {
        value: { min: isDark ? 0.35 : 0.3, max: isDark ? 0.6 : 0.5 },
      },
      size: {
        value: { min: 1.5, max: isMobile ? 2.4 : 3 },
      },
      move: {
        enable: true,
        speed: isMobile ? 0.5 : 0.9,
        direction: 'none',
        random: true,
        straight: false,
        outModes: { default: 'bounce' },
      },
      links: {
        enable: true,
        distance: isMobile ? 115 : 140,
        color: linkColor,
        opacity: isDark ? 0.38 : 0.3,
        width: 1,
      },
    },
    interactivity: {
      detectsOn: 'window',
      events: {
        onHover: { enable: !isMobile, mode: 'grab' },
        onClick: { enable: false },
        resize: { enable: true },
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            blink: false,
            consent: false,
            opacity: 0.45,
            color: linkColor,
          },
        },
      },
    },
  }
}
