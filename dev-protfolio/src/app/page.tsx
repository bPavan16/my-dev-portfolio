import EducationalTimeline from '@/components/shared/EducationDetails'
import { HeroHighlightDemo } from '@/components/shared/Hero'
import React from 'react'

const HomePage = () => (
  <main className="min-h-screen">
    <div>
      <HeroHighlightDemo />
    </div>
    <div className="flex flex-col items-end justify-end py-2">
      <EducationalTimeline />
    </div>
  </main>
)

export default HomePage