import type { Metadata } from 'next'
import { Poppins, Orbitron } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

const orbitron = Orbitron({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-orbitron',
})

export const metadata: Metadata = {
  title: 'Ben Ameur Tournage - Pièces Industrielles & Réparation Grands Engins',
  description: 'Spécialiste en tournage, fraisage, réparation et construction de pièces pour grands engins (Caterpillar, etc.). Tous types de matières.',
  keywords: 'tournage, fraisage, réparation engins, Caterpillar, pièces industrielles, usinage',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${poppins.variable} ${orbitron.variable}`}>
        {children}
      </body>
    </html>
  )
}

