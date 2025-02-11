import { Layout } from '@/components/Layout'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { ThemeProvider } from '@/components/ThemeProvider'

import '@/styles/tailwind.css'

const fontSans = GeistSans
const fontMono = GeistMono

export const metadata = {
  title: {
    template: '%s - Tonthowi Al Ahyar',
    default: 'Tonthowi Al Ahyar - Software Designer',
  },
  description: 
    `I'm Towi, a software designer(UI/UX) based in Bali. I developed this website while learning NextJS. It was daunting.`,
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`h-full antialiased ${fontSans.variable} ${fontMono.variable}`} suppressHydrationWarning>
      <body className="bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 min-h-screen">
        <ThemeProvider>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
