import EducationalTimeline from '@/components/shared/EducationDetails'
import { HeroSection } from '@/components/shared/Hero'
import React from 'react'

const HomePage = () => (
  <main className="min-h-screen">
    <div>
      <HeroSection />
    </div>
    <div className="flex flex-col items-end justify-end">
      <EducationalTimeline />
    </div>
  </main>
)

export default HomePage