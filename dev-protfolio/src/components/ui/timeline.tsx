"use client"
import { useScroll, useTransform, motion } from "motion/react"
import type React from "react"
import { useEffect, useRef, useState } from "react"

interface TimelineEntry {
  title: string
  content: React.ReactNode
  key: number
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (ref.current && mounted) {
      const rect = ref.current.getBoundingClientRect()
      setHeight(rect.height)
    }
  }, [ref, mounted])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  })

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  return (

    <div className="relative w-full font-sans p-12 px-4 sm:px-6 md:px-10" ref={containerRef}>
      <div className="relative max-w-6xl mx-auto py-5 sm:py-5 md:py-5">
        <div className="text-center mb-5 sm:mb-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative inline-block"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent mb-4 sm:mb-6">
              My Educational Journey
            </h2>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-6 sm:mt-8 leading-relaxed px-4"
          >
            Academic achievements and milestones that shaped my journey in computer science and technology.
          </motion.p>
        </div>
      </div>

      <div ref={ref} className="relative max-w-6xl mx-auto pb-12 sm:pb-16 md:pb-20">
        {data.map((item, index) => (

        <motion.div
          key={item.title + index}
          initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="flex justify-start pt-6 sm:pt-8 md:pt-12 lg:pt-16 md:gap-8 lg:gap-10"
        >
          <div className="sticky flex flex-col md:flex-row z-40 items-center top-20 sm:top-24 md:top-32 lg:top-40 self-start max-w-xs lg:max-w-sm md:w-full">
            <div className="h-10 w-10 sm:h-12 sm:w-12 absolute left-1 sm:left-2 md:left-2 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500 flex items-center justify-center shadow-lg">
              <div className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 rounded-full bg-white dark:bg-gray-900 border-2 border-blue-200 dark:border-blue-700" />
            </div>
            <h3 className="hidden md:block text-lg lg:text-xl md:pl-16 lg:pl-20 md:text-3xl xl:text-5xl font-bold bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-300 dark:to-gray-100 bg-clip-text text-transparent">
              {item.title}
            </h3>
          </div>

          <div className="relative pl-16 sm:pl-18 md:pl-4 w-full max-w-2xl">
            <h3 className="md:hidden block text-xl sm:text-2xl mb-3 sm:mb-4 text-left font-bold bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-300 dark:to-gray-100 bg-clip-text text-transparent">
              {item.title}
            </h3>
            {item.content}
          </div>
        </motion.div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-6 sm:left-8 md:left-8 top-0 overflow-hidden w-[2px] sm:w-[3px] bg-gradient-to-b from-transparent via-gray-200 dark:via-gray-700 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] sm:w-[3px] bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-500 rounded-full shadow-lg"
          />
        </div>
      </div>
    </div>
  )
}
