import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Prosanto Das | Software Engineer & Competitive Programmer',
  description: 'Portfolio of Prosanto Das - Software Engineer, Competitive Programmer, and Full-Stack Developer specializing in modern web technologies and problem-solving.',
  keywords: ['Prosanto Das', 'Software Engineer', 'Competitive Programming', 'Web Developer', 'MERN Stack'],
  authors: [{ name: 'Prosanto Das' }],
  openGraph: {
    title: 'Prosanto Das | Software Engineer & Competitive Programmer',
    description: 'Portfolio showcasing projects, achievements, and technical skills',
    type: 'website',
  },
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
