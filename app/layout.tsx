import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Prosanto Das | AI/ML Software Engineer',
  description:
    'Portfolio of Prosanto Das — AI/ML Software Engineer focused on infrastructure, distributed systems, and production ML systems. Competitive programmer (Codeforces Expert, CodeChef 5★).',
  keywords: [
    'Prosanto Das',
    'AI/ML Engineer',
    'Software Engineer',
    'MLOps',
    'Distributed Systems',
    'Python',
    'PyTorch',
    'Competitive Programming',
  ],
  authors: [{ name: 'Prosanto Das' }],
  openGraph: {
    title: 'Prosanto Das | AI/ML Software Engineer',
    description: 'Portfolio showcasing AI, ML, and infrastructure engineering work.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#FAFAFA] text-navy antialiased">{children}</body>
    </html>
  )
}
