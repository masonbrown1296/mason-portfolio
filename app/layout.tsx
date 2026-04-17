import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://masonbrown.co'),
  title: {
    default: 'Mason Brown — A marketer who ships.',
    template: '%s — Mason Brown',
  },
  description:
    'I build marketing functions end to end, from brand through growth through enablement. I also build the AI tools that make the work possible.',
  keywords: [
    'product marketing',
    'growth marketing',
    'head of marketing',
    'AI tools',
    'B2B SaaS',
    'healthtech',
    'cybersecurity',
    'Chicago',
  ],
  authors: [{ name: 'Mason Brown' }],
  creator: 'Mason Brown',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://masonbrown.co',
    siteName: 'Mason Brown',
    title: 'Mason Brown — A marketer who ships.',
    description:
      'Senior marketing leader. Builder of AI tools. Chicago, remote-first.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mason Brown — A marketer who ships.',
    description:
      'Senior marketing leader. Builder of AI tools. Chicago, remote-first.',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#FAFAF8',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
