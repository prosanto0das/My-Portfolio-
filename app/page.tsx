import Hero from '@/components/Hero'
import TechnicalSkills from '@/components/TechnicalSkills'
import FeaturedProjects from '@/components/FeaturedProjects'
import AcademicBackground from '@/components/AcademicBackground'
import Recognitions from '@/components/Recognitions'
import Contact from '@/components/Contact'
import Leadership from '@/components/Leadership'
import Research from '@/components/Research'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TechnicalSkills />
      <FeaturedProjects />
  <Research />
      <AcademicBackground />
      <Recognitions />
  <Leadership />
      <Contact />
    </main>
  )
}
