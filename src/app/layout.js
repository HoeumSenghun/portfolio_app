
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html>
      <Header />
      <body>
        {children}
      </body>
      <Footer />
    </html>
  );
}
