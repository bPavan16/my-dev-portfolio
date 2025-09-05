"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Github,
  ExternalLink,
  Calendar,
  Users,
  Eye,
  FileText,
  ChevronRight,
  Star,
  Clock
} from "lucide-react";

interface Contributor {
  name: string;
  github: string;
}

interface Project {
  title: string;
  "short-description": string;
  "detailed-description": string;
  images: string[];
  contributors: Contributor[];
  "code-link": string;
  "deploy-link": string;
  technologies: string[];
  date: string[];
  tag: string;
  status: string;
  "readme-link": string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      case "in progress":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
    }
  };

  const getTagColor = () => {
    const colors = [
       "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
      "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400",
      "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-400",
      "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-400",
    ];
    return colors[index % colors.length];
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="group h-full flex flex-col  max-w-2xl overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 relative pt-0">
        <div className="relative z-10 flex flex-col h-full">
          {/* Project Image */}
          <div className="relative overflow-hidden pb-3 pt-0 mt-0 rounded-t-lg">
            {!imageError ? (
              <Image
                src={"https://github.com/bPavan16/AlgoVisualizer/blob/main/images/image-(4).png"}
                alt={project.title}
                width={800}
                height={600}
                className="w-full h-68 object-cover group-hover:scale-102 transition-transform duration-300 pt-0"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center">
                <div className="text-gray-400 dark:text-gray-500 text-center">
                  <FileText className="w-12 h-12 mx-auto mb-2" />
                  <p className="text-sm">No preview available</p>
                </div>
              </div>
            )}

            {/* Status and Tag Overlay */}
            <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
              <Badge className={`${getStatusColor(project.status)} font-medium`}>
                {project.status === "In Progress" && <Clock className="w-3 h-3 mr-1" />}
                {project.status === "Completed" && <Star className="w-3 h-3 mr-1" />}
                {project.status}
              </Badge>
              <Badge className={`${getTagColor()}`}>
                {project.tag}
              </Badge>
            </div>
          </div>

          <CardHeader className="pb-3">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <CardTitle className="text-xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {project.title}
                </CardTitle>
                <CardDescription className="mt-2 text-sm leading-relaxed">
                  {project["short-description"]}
                </CardDescription>
              </div>
            </div>

            {/* Date and Contributors */}
            <div className="flex flex-col items-start gap-3 text-xs text-gray-500 dark:text-gray-400 mt-3">
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>{project.date.join(" - ")}</span>
              </div>

              {project.contributors.length > 0 && (
                <div className="flex-col flex items-start gap-2">
                  <div className="flex items-start gap-1">
                    <Users className="w-3 h-3" />
                    {"Other Contributors"}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-1">
                      {project.contributors.slice(0, 3).map((contributor, i) => (
                        <Avatar
                          key={i}
                          className="w-6 h-6 border-2 border-white dark:border-gray-800 hover:z-10 transition-all duration-200 cursor-pointer"
                          onClick={() => window.open(contributor.github, "_blank")}
                          title={contributor.name}
                        >
                          <AvatarFallback className="text-xs bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold">
                            {contributor.name.charAt(0).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                      ))}
                      {project.contributors.length > 3 && (
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center text-xs font-semibold text-white border-2 border-white dark:border-gray-800">
                          +{project.contributors.length - 3}
                        </div>
                      )}
                    </div>
                    <span className="text-xs font-medium">
                      {project.contributors.length === 1
                        ? project.contributors[0].name
                        : `${project.contributors.length} contributors`
                      }
                    </span>
                  </div>
                </div>
              )}
            </div>
          </CardHeader>

          <CardContent className="flex-1 pb-3">
            {/* Technologies */}
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Technologies</h4>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech, i) => (
                  <Badge key={i} variant="outline" className="text-xs px-2 py-0.5 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Expandable Description */}
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <Separator className="my-3" />
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project["detailed-description"]}
                </p>
              </motion.div>
            )}
          </CardContent>

          <CardFooter className="pt-0 flex flex-col gap-3">
            {/* Expand Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full text-xs hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Eye className="w-3 h-3 mr-1" />
              {isExpanded ? "Show Less" : "Read More"}
              <ChevronRight className={`w-3 h-3 ml-1 transition-transform ${isExpanded ? "rotate-90" : ""}`} />
            </Button>

            {/* Action Buttons */}
            <div className="flex gap-2 w-full">
              <Button
                variant="outline"
                size="sm"
                className="flex-1 text-xs"
                onClick={() => window.open(project["code-link"], "_blank")}
              >
                <Github className="w-3 h-3 mr-1" />
                Code
              </Button>
             {
                project["deploy-link"] && (
                   <Button
                variant="outline"
                size="sm"
                className="flex-1 text-xs"
                onClick={() => window.open(project["deploy-link"], "_blank")}
              >
                <ExternalLink className="w-3 h-3 mr-1" />
                Live
              </Button>)
             }
            
            </div>
          </CardFooter>
        </div>
      </Card>
    </motion.div>
  );
}