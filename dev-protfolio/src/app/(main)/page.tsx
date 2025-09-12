import AboutSection from '@/components/sections/AboutSection'
import { HeroSection } from '@/components/sections/HeroSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import React from 'react'

const HomePage = () => (
  <main className="min-h-screen overflow-x-hidden">
    <div>
      <HeroSection />
    </div>

    <div id='about' className="">
      <AboutSection />
    </div>


    <div id='skills' className="">
      

      
    </div>
    <div id='projects' className="">
      <ProjectsSection />
    </div>
  </main>
)

export default HomePage