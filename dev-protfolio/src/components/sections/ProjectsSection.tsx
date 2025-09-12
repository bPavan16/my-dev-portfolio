"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from '@/components/shared/ProjectCard';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Code,
  Github,
  Sparkles,
  ArrowRight,
  Filter,
  Grid3X3,
  List
} from 'lucide-react';
import projectsData from '@/data/projetcs.json';

const ProjectsSection = () => {
  const [viewMode, setViewMode] = React.useState<'grid' | 'list'>('grid');
  const [filter, setFilter] = React.useState<string>('all');

  // Get unique tags for filtering
  const uniqueTags = React.useMemo(() => {
    const tags = projectsData.map(project => project.tag);
    return ['all', ...Array.from(new Set(tags))];
  }, []);

  // Filter projects based on selected filter
  const filteredProjects = React.useMemo(() => {
    if (filter === 'all') return projectsData;
    return projectsData.filter(project => project.tag === filter);
  }, [filter]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-950 z-10">

      <div className="absolute inset-0 z-1 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
            <Code className="w-4 h-4" />
            <span>My Work</span>
            <Sparkles className="w-4 h-4" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Projects</span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A showcase of my latest work, spanning across web development, mobile apps, and innovative solutions. 
            Each project represents a unique challenge and learning experience.
          </p>
          
          <Separator className="max-w-24 mx-auto" />
        </motion.div>

        {/* Filter and View Controls */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row z-10 justify-between items-center gap-4 mb-12 p-2 px-4 bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
        >
          {/* Filter Tags */}
          <div className="flex items-center gap-2 flex-wrap z-10">
            <Filter className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mr-2">Filter:</span>
            {uniqueTags.map((tag) => (
              <Button
                key={tag}
                variant={filter === tag ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(tag)}
                className={`text-xs capitalize transition-all duration-200 ${
                  filter === tag 
                    ? "bg-blue-600 hover:bg-blue-700 text-white" 
                    : "hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {tag}
                {filter === tag && <span className="ml-1">({filteredProjects.length})</span>}
              </Button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center z-10 gap-2 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('grid')}
              className="text-xs"
            >
              <Grid3X3 className="w-3 h-3" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('list')}
              className="text-xs"
            >
              <List className="w-3 h-3" />
            </Button>
          </div>
        </motion.div>

        {/* Projects Grid/List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={
            viewMode === 'grid'
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 z-10"
              : "flex flex-col gap-6 z-10"
          }
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={`${project.title}-${index}`}
              variants={itemVariants}
              className={viewMode === 'list' ? " flex flex-col justify-between items-center w-full z-10" : "z-10"}
            >
              <ProjectCard
                project={{
                  ...project,
                  ["readme-link"]: project["readme-link"] ?? "",
                  images: project.images ?? []
                }}
                index={index}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 z-10"
          >
            <div className="text-gray-400 dark:text-gray-500 mb-4">
              <Code className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-semibold mb-2">No projects found</h3>
              <p>Try adjusting your filter to see more projects.</p>
            </div>
            <Button
              variant="outline"
              onClick={() => setFilter('all')}
              className="mt-4"
            >
              Show All Projects
            </Button>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-2xl border border-blue-200 dark:border-blue-800 z-10"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Interested in working together?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            I&apos;m always open to discussing new opportunities and innovative projects. 
            Let&apos;s create something amazing together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              onClick={() => window.open('#contact', '_self')}
            >
              Get In Touch
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open('https://github.com/bPavan16', '_blank')}
            >
              <Github className="w-4 h-4 mr-2" />
              View All on GitHub
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;