
const themeInitScript = `
(function () {
  try {
    var root = document.documentElement
    var stored = localStorage.getItem('theme')
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    var isDark =
      stored === 'dark' ||
      (stored !== 'light' && (stored === 'system' || !stored) && prefersDark)
    root.classList.toggle('dark', isDark)
    root.style.colorScheme = isDark ? 'dark' : 'light'
  } catch (e) {}
})()
`

export default function ThemeScript () {
  return (
    <script
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: themeInitScript }}
    />
  )
}
