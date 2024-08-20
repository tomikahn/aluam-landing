import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'ALUAM',
  description: 'En ALUAM nos dedicamos a la fabricación y comercialización de aberturas de aluminio, PVC y vidrios.',
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta property="og:image" content="/favicon.ico" />

      <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
      </head>
      <body className={`${montserrat.className} antialiased`}>{children}</body>
    </html>
  )
}
