
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import './globals.css'
import { LanguageProvider } from '../contexts/LanguageContext'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}

