import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hybrid Total Training | Be Better. Be Total.',
  description: 'The ultimate hybrid training program for athletes and training centers. 5 categories, smart progress, personalized adaptation. Speed, Strength, Endurance, Gymnastics, Mobility.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
