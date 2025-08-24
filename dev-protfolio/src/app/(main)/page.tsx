import EducationalTimeline from '@/components/shared/EducationDetails'
import { HeroSection } from '@/components/shared/HeroSection'
import React from 'react'

const HomePage = () => (
  <main className="min-h-screen">
    <div>
      <HeroSection />
    </div>
    <div id='about' className="flex flex-col items-end justify-end">
      <EducationalTimeline  />
    </div>
  </main>
)

export default HomePage