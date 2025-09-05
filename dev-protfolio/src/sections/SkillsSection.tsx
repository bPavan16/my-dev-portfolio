"use client";

import { motion } from "framer-motion";
import {
    SiJavascript,
    SiTypescript,
    SiPython,
    SiCplusplus,
    SiC,
    SiHtml5,
    SiCss3,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiExpress,
    SiDjango,
    SiFlask,
    SiBootstrap,
    SiTailwindcss,
    SiMysql,
    SiPostgresql,
    SiMongodb,
    SiRedis,
    SiFirebase,
    SiDocker,
    SiGit,
    SiGithub
} from "react-icons/si";

// Simplified skills data
const skillCategories = [
    {
        title: "Languages",
        skills: [
            { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
            { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
            { name: "Python", icon: SiPython, color: "text-green-500" },
            { name: "C++", icon: SiCplusplus, color: "text-blue-600" },
            { name: "C", icon: SiC, color: "text-gray-600" },
            { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
            { name: "CSS", icon: SiCss3, color: "text-blue-400" }
        ]
    },
    {
        title: "Frontend",
        skills: [
            { name: "React", icon: SiReact, color: "text-cyan-400" },
            { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
            { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-500" }
        ]
    },
    {
        title: "Backend",
        skills: [
            { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
            { name: "Express.js", icon: SiExpress, color: "text-gray-600" },
            { name: "Django", icon: SiDjango, color: "text-green-600" },
            { name: "Flask", icon: SiFlask, color: "text-blue-600" }
        ]
    },
    {
        title: "Database",
        skills: [
            { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
            { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-700" },
            { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
            { name: "Redis", icon: SiRedis, color: "text-red-500" },
            { name: "Firebase", icon: SiFirebase, color: "text-orange-500" }
        ]
    },
    {
        title: "Tools",
        skills: [
            { name: "Git", icon: SiGit, color: "text-orange-500" },
            { name: "GitHub", icon: SiGithub, color: "text-gray-800 dark:text-white" },
            { name: "Docker", icon: SiDocker, color: "text-blue-500" }
        ]
    }
];

export default function SkillsSection() {
    return (
        <section 
            id="skills" 
            className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
        >
            <div className="container mx-auto px-6">
                {/* Simple Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Skills
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Technologies I work with
                    </p>
                </motion.div>

                {/* Skills Categories */}
                <div className="space-y-12">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                        >
                            {/* Category Title */}
                            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8 text-center">
                                {category.title}
                            </h3>

                            {/* Skills Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
                                {category.skills.map((skill, skillIndex) => {
                                    const SkillIcon = skill.icon;
                                    return (
                                        <motion.div
                                            key={skill.name}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ 
                                                duration: 0.4, 
                                                delay: (categoryIndex * 0.1) + (skillIndex * 0.05) 
                                            }}
                                            whileHover={{ 
                                                scale: 1.1, 
                                                y: -5,
                                                transition: { duration: 0.2 }
                                            }}
                                            className="group"
                                        >
                                            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col items-center space-y-3">
                                                {/* Large Icon */}
                                                <SkillIcon 
                                                    className={`w-12 h-12 ${skill.color} group-hover:scale-110 transition-transform duration-200`} 
                                                />
                                                {/* Skill Name */}
                                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center leading-tight">
                                                    {skill.name}
                                                </span>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Simple Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-20 text-center"
                >
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 inline-block">
                        <div className="flex items-center justify-center space-x-8">
                            <div>
                                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                                    {skillCategories.reduce((total, category) => total + category.skills.length, 0)}
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                    Technologies
                                </div>
                            </div>
                            <div className="w-px h-12 bg-gray-200 dark:bg-gray-600"></div>
                            <div>
                                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                                    {skillCategories.length}
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                    Categories
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
