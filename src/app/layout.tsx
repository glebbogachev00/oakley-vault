import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Vault | Oakley Heritage Collection',
  description: 'A technical archive showcasing Oakley\'s iconic 90s products through clean documentation aesthetics',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}