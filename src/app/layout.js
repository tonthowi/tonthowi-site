import { Layout } from '@/components/Layout'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'

import '@/styles/tailwind.css'

const inter = Inter({ subsets: ['latin'] })

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
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-zinc-950 text-zinc-800 dark:text-zinc-100 min-h-screen`}>
        <ThemeProvider>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
