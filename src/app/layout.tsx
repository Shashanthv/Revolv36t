import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import { Metadata } from 'next'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-primary',
})

export const metadata: Metadata = {
  title: 'Revolv36t - Leading Digital Agency',
  description: "Bangalore's Premier Digital Marketing Agency",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html suppressHydrationWarning>
      <body className={`${inter.variable} min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
