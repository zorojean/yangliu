import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Yang Liu - Web3 Developer Portfolio',
  description: 'Yang Liu - Professional Web3 developer showcasing blockchain projects, smart contracts, and decentralized applications.',
  keywords: ['Yang Liu', 'Web3', 'Blockchain', 'Smart Contracts', 'DeFi', 'NFT', 'DApp'],
  authors: [{ name: 'Yang Liu' }],
  openGraph: {
    title: 'Yang Liu - Web3 Developer Portfolio',
    description: 'Yang Liu - Professional Web3 developer showcasing blockchain projects and smart contracts.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
