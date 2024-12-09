import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Tonthowi Al Ahyar',
    default:
      'Tonthowi Al Ahyar - Software Designer',
  },
  description:
    'I’m Towi, a software designer(UI/UX) based in Bali. I developed this website while learning NextJS. It was daunting.',
  // alternates: {
  //   types: {
  //     'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
  //   },
  // },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-white dark:bg-black">
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
      </body>
    </html>
  )
}
