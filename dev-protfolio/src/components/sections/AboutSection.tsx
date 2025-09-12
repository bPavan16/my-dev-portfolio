"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
    User,
    MapPin,
    Calendar,
    GraduationCap,
    Briefcase,
    Code,
    Heart,
    Coffee,
    Download,
    Mail,
    Github,
    Linkedin,
    Globe,
    BookOpen,
    Users,
    Lightbulb
} from "lucide-react";

// Content Configuration Object - Easy to edit
const aboutContent = {
    header: {
        title: "About Me",
        subtitle: "Passionate Computer Science student with a love for creating innovative solutions"
    },

    personalInfo: [
        { icon: User, label: "Full Name", value: "Pavan B" },
        { icon: MapPin, label: "Location", value: "India" },
        { icon: Calendar, label: "Age", value: "21 years" },
        { icon: GraduationCap, label: "Education", value: "Computer Science Student" },
        { icon: Briefcase, label: "Experience", value: "2+ Years" },
        { icon: Code, label: "Projects", value: "15+ Completed" }
    ],

    aboutText: {
        intro: "Hello! I'm Pavan B, a passionate Computer Science student with a strong foundation in full-stack development. I love creating digital experiences that are not only functional but also visually appealing and user-friendly.",

        journey: "My journey in programming started with curiosity about how websites work, and it has evolved into a deep passion for building complete applications. I enjoy working with modern technologies like React, Next.js, Node.js, and exploring new frameworks that make development more efficient.",

        passion: "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or learning about the latest trends in web development. I believe in continuous learning and staying updated with the rapidly evolving tech landscape."
    },

    interests: [
        {
            icon: Code,
            title: "Full-Stack Development",
            description: "Building end-to-end applications with modern technologies"
        },
        {
            icon: Globe,
            title: "Web Technologies",
            description: "Exploring cutting-edge frameworks and tools"
        },
        {
            icon: BookOpen,
            title: "Continuous Learning",
            description: "Always discovering new technologies and best practices"
        },
        {
            icon: Users,
            title: "Open Source",
            description: "Contributing to community projects and collaboration"
        }
    ],

    funFact: {
        text: "I've consumed over 500 cups of coffee while coding! ☕",
        label: "Fun Fact"
    },

    quote: {
        text: "Code is like humor. When you have to explain it, it's bad.",
        attribution: "My philosophy on writing clean, self-explanatory code"
    }
};

const AboutSection = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section
            id="about"
            className="min-h-screen md:px-12  flex items-center py-12 bg-gradient-to-br from-slate-50 via-slate-50 to-neutral-100 dark:from-slate-950 dark:via-gray-950 dark:to-black relative overflow-hidden"
        >
            {/* Enhanced Background Effects */}            
            {/* Animated floating elements */}
            <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"></div>
            <div className="absolute top-40 right-40 w-3 h-3 bg-purple-400/30 rounded-full animate-bounce delay-1000"></div>
            <div className="absolute bottom-40 left-40 w-1.5 h-1.5 bg-pink-400/30 rounded-full animate-pulse delay-500"></div>
            <div className="absolute bottom-20 right-20 w-2.5 h-2.5 bg-indigo-400/30 rounded-full animate-bounce delay-700"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Compact Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="text-center mb-12"
                >
                    <motion.h2 
                        className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 relative"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="bg-gradient-to-r from-gray-900 via-blue-700 to-purple-700 dark:from-slate-100 dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent font-extrabold tracking-tight">
                            {aboutContent.header.title}
                        </span>
                        {/* Animated underline */}
                        <motion.div
                            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: "120px" }}
                            transition={{ duration: 1, delay: 0.5 }}
                        ></motion.div>
                    </motion.h2>
                    <motion.p 
                        className="text-xl text-gray-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        {aboutContent.header.subtitle}
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                        {/* Sidebar - Personal Info & Fun Fact */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="lg:col-span-4 space-y-6"
                    >
                        {/* Enhanced Personal Information */}
                        <Card className="shadow-2xl gap-1 border-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl relative overflow-hidden group hover:shadow-3xl transition-all duration-500">
                            {/* <div className="absolute inset-0 bg-gradient-to-br from-purple-500/8 to-pink-500/8 dark:from-purple-400/20 dark:to-pink-400/20"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-purple-500/5 dark:to-purple-400/10"></div> */}

                            <CardHeader className="relative z-10">
                                <CardTitle className="flex items-center gap-4 text-xl">
                                    <motion.div 
                                        className="p-3 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-800/50 dark:to-pink-800/50 rounded-2xl shadow-lg"
                                        whileHover={{ scale: 1.1, rotate: -5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <User className="w-6 h-6 text-purple-600 dark:text-purple-300" />
                                    </motion.div>
                                    <span className="bg-gradient-to-r from-purple-700 to-pink-600 dark:from-purple-300 dark:to-pink-300 bg-clip-text text-transparent font-bold">
                                        Personal Info
                                    </span>
                                </CardTitle>
                            </CardHeader>

                            <CardContent className="relative z-10 py-1 ">
                                <div className="">
                                    {aboutContent.personalInfo.map((item, index) => {
                                        const Icon = item.icon;
                                        return (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: 20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                whileHover={{ x: 5, scale: 1.02 }}
                                                transition={{ delay: index * 0.1, duration: 0.3 }}
                                                className="flex items-center gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-gray-50/80 hover:to-white/80 dark:hover:from-slate-800/80 dark:hover:to-slate-700/80 transition-all duration-300 group cursor-pointer border border-transparent hover:border-gray-200/50 dark:hover:border-slate-600/50"
                                            >
                                                <motion.div 
                                                    className="p-3 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-800/50 dark:to-purple-800/50 rounded-xl group-hover:shadow-lg transition-all duration-300"
                                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                                >
                                                    <Icon className="w-4 h-4 text-blue-600 dark:text-blue-300" />
                                                </motion.div>
                                                <div className="flex-1">
                                                    <p className="text-sm text-gray-500 dark:text-slate-400 font-medium">{item.label}</p>
                                                    <p className="font-bold text-base text-gray-900 dark:text-slate-100">{item.value}</p>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Enhanced Fun Fact Card */}
                        <Card className="shadow-2xl py-1 px-3 border-0 bg-gradient-to-br from-orange-50/90 to-red-50/90 dark:from-orange-900/30 dark:to-red-900/30 backdrop-blur-2xl relative overflow-hidden group hover:shadow-3xl transition-all duration-500">
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/15 to-red-400/15 dark:from-orange-400/25 dark:to-red-400/25"></div>
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400"></div>

                            <CardContent className="p-2 px-8 text-center relative z-10">
                                <motion.div
                                    initial={{ scale: 0, rotate: -180 }}
                                    whileInView={{ scale: 1, rotate: 0 }}
                                    whileHover={{ scale: 1.1, rotate: 10 }}
                                    transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                                    className="mb-1"
                                >
                                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-800/50 dark:to-red-800/50 rounded-full flex items-center justify-center shadow-lg">
                                        <Coffee className="w-8 h-8 text-orange-600 dark:text-orange-300" />
                                    </div>
                                </motion.div>
                                <motion.p 
                                    className="text-sm text-gray-600 dark:text-slate-300 mb-3 font-bold tracking-wider uppercase"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    {aboutContent.funFact.label}
                                </motion.p>
                                <motion.p 
                                    className="font-bold text-lg text-gray-900 dark:text-slate-100 leading-relaxed"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    {aboutContent.funFact.text}
                                </motion.p>
                            </CardContent>
                        </Card>

                        {/* Enhanced Personal Quote */}
                        <Card className="shadow-2xl py-1 px-2 border-0 bg-gradient-to-br from-blue-50/90 to-purple-50/90 dark:from-blue-900/30 dark:to-purple-900/30 backdrop-blur-2xl relative overflow-hidden group hover:shadow-3xl transition-all duration-500">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/15 to-purple-400/15 dark:from-blue-400/25 dark:to-purple-400/25"></div>
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></div>

                            <CardContent className="p-2 text-center relative z-10">
                                <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                                    className="mb-4"
                                >
                                    <div className="w-12 h-12 mx-auto bg-gradient-to-br from-red-100 to-pink-100 dark:from-red-800/50 dark:to-pink-800/50 rounded-full flex items-center justify-center shadow-lg">
                                        <Heart className="w-6 h-6 text-red-500 dark:text-red-400" />
                                    </div>
                                </motion.div>
                                <motion.blockquote 
                                    className="text-base font-bold text-gray-900 dark:text-slate-100 mb-3 leading-relaxed italic"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    &ldquo;{aboutContent.quote.text}&rdquo;
                                </motion.blockquote>
                                <motion.p 
                                    className="text-sm text-gray-600 dark:text-slate-300 font-medium"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    {aboutContent.quote.attribution}
                                </motion.p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Main About Content - Takes more space */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="lg:col-span-8"
                    >
                        <Card className=" shadow-2xl border-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl relative overflow-hidden group hover:shadow-3xl transition-all duration-500">
                            {/* Enhanced Card gradient overlay */}
                           

                            <CardHeader className="relative z-10">
                                <CardTitle className="flex items-center gap-4 text-2xl">
                                    <motion.div 
                                        className="p-3 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-800/50 dark:to-purple-800/50 rounded-2xl shadow-lg"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <User className="w-7 h-7 text-blue-600 dark:text-blue-300" />
                                    </motion.div>
                                    <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent font-bold">
                                        Who I Am
                                    </span>
                                </CardTitle>
                            </CardHeader>

                            <CardContent className="space-y-6 relative z-10">
                                <div className="prose dark:prose-invert max-w-none space-y-6">
                                    <motion.p 
                                        className="text-gray-700 dark:text-slate-300 leading-relaxed text-lg font-medium"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.1 }}
                                    >
                                        {aboutContent.aboutText.intro}
                                    </motion.p>

                                    <motion.p 
                                        className="text-gray-700 dark:text-slate-300 leading-relaxed text-lg font-medium"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.2 }}
                                    >
                                        {aboutContent.aboutText.journey}
                                    </motion.p>

                                    <motion.p 
                                        className="text-gray-700 dark:text-slate-300 leading-relaxed text-lg font-medium"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.3 }}
                                    >
                                        {aboutContent.aboutText.passion}
                                    </motion.p>
                                </div>

                                <Separator className="my-8 bg-gradient-to-r from-transparent via-gray-300 dark:via-slate-600 to-transparent" />

                                {/* Enhanced Interests Grid */}
                                <div>
                                    <motion.h4 
                                        className="text-xl font-bold text-gray-900 dark:text-slate-100 mb-6 flex items-center gap-3"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <motion.div
                                            className="p-2 bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-800/50 dark:to-orange-800/50 rounded-xl"
                                            whileHover={{ rotate: 10, scale: 1.1 }}
                                        >
                                            <Lightbulb className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                                        </motion.div>
                                        What I&apos;m Passionate About
                                    </motion.h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        {aboutContent.interests.map((interest, index) => {
                                            const Icon = interest.icon;
                                            return (
                                                <motion.div
                                                    key={index}
                                                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                                    whileHover={{ scale: 1.02, y: -2 }}
                                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                                    className="group p-5 rounded-2xl bg-gradient-to-br from-gray-50/80 to-white/80 dark:from-slate-800/80 dark:to-slate-700/80 border border-gray-200/50 dark:border-slate-600/50 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-purple-500/20 transition-all duration-500 backdrop-blur-sm"
                                                >
                                                    <div className="flex items-start gap-4">
                                                        <motion.div 
                                                            className="p-3 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-800/50 dark:to-purple-800/50 rounded-xl group-hover:shadow-lg transition-all duration-300"
                                                            whileHover={{ scale: 1.15, rotate: 5 }}
                                                        >
                                                            <Icon className="w-5 h-5 text-blue-600 dark:text-blue-300" />
                                                        </motion.div>
                                                        <div className="flex-1">
                                                            <h5 className="font-bold text-gray-900 dark:text-slate-100 text-base mb-2">
                                                                {interest.title}
                                                            </h5>
                                                            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
                                                                {interest.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                </div>

                                <Separator className="my-8 bg-gradient-to-r from-transparent via-gray-300 dark:via-slate-600 to-transparent" />

                                {/* Enhanced Action Buttons */}
                                <motion.div 
                                    className="flex flex-wrap gap-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                >
                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                        <Button className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-6 py-3 text-base font-semibold">
                                            <Download className="w-5 h-5 mr-2" />
                                            Download CV
                                        </Button>
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                        <Button variant="outline" className="hover:bg-gray-100 dark:hover:bg-slate-800 border-2 border-gray-300 dark:border-slate-600 hover:border-blue-400 dark:hover:border-blue-400 px-6 py-3 text-base font-semibold">
                                            <Mail className="w-5 h-5 mr-2" />
                                            Contact Me
                                        </Button>
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                        <Button variant="outline" size="lg" className="hover:bg-gray-100 dark:hover:bg-slate-800 border-2 border-gray-300 dark:border-slate-600 hover:border-gray-400 dark:hover:border-slate-500 p-3">
                                            <Github className="w-5 h-5" />
                                        </Button>
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                        <Button variant="outline" size="lg" className="hover:bg-gray-100 dark:hover:bg-slate-800 border-2 border-gray-300 dark:border-slate-600 hover:border-blue-400 dark:hover:border-blue-400 p-3">
                                            <Linkedin className="w-5 h-5" />
                                        </Button>
                                    </motion.div>
                                </motion.div>
                            </CardContent>
                        </Card>
                    </motion.div>

                
                </div>
            </div>
        </section>
    );
};

export default AboutSection;