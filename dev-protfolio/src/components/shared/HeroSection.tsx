"use client";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Highlight } from "../ui/hero-highlight";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Download,
  ArrowRight,
  MapPin,
  Calendar,
  Code,
  Sparkles,
  Instagram
} from "lucide-react";

export function HeroSection() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/bPavan16", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Mail, href: "mailto:pavan@example.com", label: "Email" },
    {icon:Instagram}
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950">
      {/* Background Patterns */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/20 dark:bg-blue-800/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/20 dark:bg-purple-800/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-indigo-200/20 dark:bg-indigo-800/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Dot Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
          <div className="absolute top-20 right-20 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-300"></div>
          <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-ping delay-700"></div>
          <div className="absolute bottom-32 right-32 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-1000"></div>
        </div>
      </div>
      
      <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">

            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6 sm:space-y-8"
            >
              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3"
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                    Available for work
                  </span>
                </div>
                <Separator orientation="vertical" className="h-4 hidden sm:block" />
                <div className="flex items-center gap-1 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                  <MapPin className="w-3 h-3" />
                  <span>Bangalore, India</span>
                </div>
              </motion.div>

              {/* Main Heading */}
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                    <span className="text-neutral-800 dark:text-white">{"👋Hey, I'm "}</span>
                    <br className="hidden sm:block" />
                    <Highlight className="text-black dark:text-white bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30">
                      Pavan H Bhakta
                    </Highlight>
                  </h1>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex flex-wrap gap-2"
                >
                  <Badge variant="secondary" className="text-xs sm:text-sm px-2 sm:px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                    <Code className="w-3 h-3 mr-1" />
                    Full Stack Developer
                  </Badge>
                  <Badge variant="secondary" className="text-xs sm:text-sm px-2 sm:px-3 py-1 bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                    <Sparkles className="w-3 h-3 mr-1" />
                    ML Engineer
                  </Badge>
                </motion.div>
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4"
              >
                
                <Separator orientation="vertical" className="h-4 hidden sm:block" />
                <div className="flex gap-2 sm:gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={(social.label ?? "social") + Math.random() * 100}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                      className="p-2 sm:p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors border border-neutral-200 dark:border-neutral-700"
                      aria-label={social.label}
                    >
                      <social.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-neutral-600 dark:text-neutral-400" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed"
              >
                I craft{" "}
                <Highlight className="text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20">
                  innovative digital experiences
                </Highlight>
                {" "}that seamlessly blend cutting-edge technology with intuitive design.
                From building{" "}
                <Highlight className="text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20">
                  scalable applications
                </Highlight>
                {" "}to implementing{" "}
                <Highlight className="text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-900/20">
                  AI-powered solutions
                </Highlight>
                .
              </motion.p>

              {/* Skills */}


              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-wrap gap-4"
              >
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                  <span>Let&apos;s Connect</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="border-neutral-300 dark:border-neutral-600">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
              </motion.div>


            </motion.div>

            {/* Right Content - Photo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <Card className="relative p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-neutral-200 dark:border-neutral-700 max-w-md">
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1 px-2 py-1 bg-green-100 dark:bg-green-900/30 rounded-full">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-green-700 dark:text-green-300 font-medium">
                      Available
                    </span>
                  </div>
                </div>

                <div className="text-center space-y-6">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <Avatar className="w-48 h-48 mx-auto border-4 border-white dark:border-neutral-800 shadow-xl">
                      <AvatarImage
                        src="/profile.jpg"
                        alt="Pavan H Bhakta"
                        className="object-cover"
                      />
                      <AvatarFallback className="text-4xl font-bold bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                        PB
                      </AvatarFallback>
                    </Avatar>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="space-y-2"
                  >
                    <h3 className="text-xl font-semibold text-neutral-800 dark:text-white">
                      Pavan H Bhakta
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      Full Stack Developer & ML Engineer
                    </p>
                    <div className="flex items-center justify-center gap-2 text-sm text-neutral-500 dark:text-neutral-500">
                      <Calendar className="w-3 h-3" />
                      <span>5+ years experience</span>
                    </div>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
