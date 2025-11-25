import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Trinity Heritage Clinic | Occupational Medicine in Mansfield TX',
  description:
    'Professional occupational health services for businesses in Dallas Fort Worth. Pre-employment exams, diagnostic testing, wellness programs. Working to keep your workforce well.',
  keywords: [
    'occupational medicine',
    'occupational health',
    'Mansfield TX',
    'Dallas Fort Worth',
    'employee health',
    'workplace wellness',
    'pre-employment exam',
    'drug screening',
    'diagnostic testing',
  ],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Trinity Heritage Clinic - Occupational Medicine Services',
    description: 'Professional occupational health services for businesses in DFW',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='50' font-size='90'>💚</text></svg>" />
      </head>
      <body>{children}</body>
    </html>
  )
}
