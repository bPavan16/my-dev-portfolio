"use client";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";

export function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-center mx-auto max-w-6xl px-4"
      >
        <motion.h1 
          className="text-3xl md:text-5xl lg:text-7xl font-bold text-neutral-700 dark:text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Hey, I&apos;m{" "}
          <Highlight className="text-black dark:text-white">
            Pavan H Bhakta
          </Highlight>
        </motion.h1>
        
        <motion.h2 
          className="text-xl md:text-2xl lg:text-3xl font-semibold text-neutral-600 dark:text-neutral-300 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Highlight className="text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20">
            Full Stack Developer
          </Highlight>
          {" • "}
          <Highlight className="text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20">
            Machine Learning
          </Highlight>
          {" • "}
          <Highlight className="text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20">
          {""}
          </Highlight>
        </motion.h2>

        <motion.div 
          className="max-w-5xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
            Passionate about crafting elegant solutions that bridge the gap between{" "}
            <Highlight className="text-orange-600 dark:text-white bg-gradient-to-r from-orange-100 to-orange-100 dark:from-orange-900 dark:to-orange-900">
              complex algorithms
            </Highlight>
            {" "}and{" "}
            <Highlight className="text-cyan-600 dark:text-cyan-400 bg-gradient-to-r from-cyan-100 to-cyan-100 dark:from-cyan-900 dark:to-cyan-900">
              user-friendly interfaces
            </Highlight>
            . From building{" "}
            <Highlight className="text-indigo-600 dark:text-white font-medium bg-gradient-to-r from-indigo-100 to-indigo-100 ">
              scalable web applications
            </Highlight>
            {" "}to implementing{" "}
            <Highlight className="text-rose-600 dark:text-white font-medium bg-gradient-to-r from-rose-100 to-rose-100 dark:from-rose-900 dark:to-rose-900">
              cutting-edge AI models
            </Highlight>
            .
          </p>
          
          
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 border border-blue-200/50 dark:border-blue-800/50">
            <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-2">Frontend Excellence</h3>
            <p className="text-sm text-blue-600 dark:text-blue-400">
              Crafting responsive, interactive experiences with modern frameworks
            </p>
          </div>
          
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/10 dark:to-green-900/10 border border-emerald-200/50 dark:border-emerald-800/50">
            <h3 className="text-lg font-semibold text-emerald-700 dark:text-emerald-300 mb-2">Backend Mastery</h3>
            <p className="text-sm text-emerald-600 dark:text-emerald-400">
              Building robust APIs and scalable server architectures
            </p>
          </div>
          
          <Highlight className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10 border border-purple-200/50 dark:border-purple-800/50">
            <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-300 mb-2">AI Innovation</h3>
            <p className="text-sm text-purple-600 dark:text-purple-400">
              Implementing intelligent solutions with machine learning
            </p>
          </Highlight>
        </motion.div>
      </motion.div>
    </HeroHighlight>
  );
}
