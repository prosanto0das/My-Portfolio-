import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Prosanto Das | Backend & AI Infrastructure Engineer',
  description:
    'Portfolio of Prosanto Das — Backend & AI Infrastructure Engineer building Java/Spring Boot services, AI gateways, and production ML systems. Competitive programmer (Codeforces Expert, CodeChef 5★).',
  keywords: [
    'Prosanto Das',
    'Backend Engineer',
    'AI Infrastructure Engineer',
    'Java',
    'Spring Boot',
    'Microservices',
    'REST APIs',
    'AWS',
    'Docker',
    'Kubernetes',
    'System Design',
    'RAG',
    'Competitive Programming',
  ],
  authors: [{ name: 'Prosanto Das' }],
  openGraph: {
    title: 'Prosanto Das | Backend & AI Infrastructure Engineer',
    description: 'Portfolio showcasing backend and AI infrastructure engineering work.',
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
