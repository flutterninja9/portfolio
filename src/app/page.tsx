import About from '@/components/About'
import Loading from '@/components/Loading'
import NowSection from '@/components/NowSection'
import ProjectsSection from '@/components/ProjectsSection'
import ToolsSection from '@/components/ToolsSection'
import { Suspense } from 'react'

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 lg:max-w-[768px]">
      <Suspense fallback={<Loading />}>
        <About />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <NowSection />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <ProjectsSection />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <ToolsSection />
      </Suspense>
    </main>
  )
}