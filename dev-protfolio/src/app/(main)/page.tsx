import { HeroSection } from '@/sections/HeroSection'
import ProjectsSection from '@/sections/ProjectsSection'
import SkillsSection from '@/sections/SkillsSection'
import React from 'react'

const HomePage = () => (
  <main className="min-h-screen min-w-screen">
    <div>
      <HeroSection />
    </div>
    <div id='skills' className="">
      <SkillsSection />
    </div>
    <div id='projects' className="">
      <ProjectsSection />
    </div>
  </main>
)

export default HomePage