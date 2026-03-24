import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AppProviders } from '@/components/layout/app-providers'
import { PWARegister } from '@/components/pwa/pwa-register'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Online Commercial Portal',
  description: 'Multi-branch ordering, inventory, finance and reporting portal',
  appleWebApp: {
    capable: true,
    title: 'Portal Mockup',
    statusBarStyle: 'default',
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProviders>
          <PWARegister />
          {children}
        </AppProviders>
      </body>
    </html>
  )
}
