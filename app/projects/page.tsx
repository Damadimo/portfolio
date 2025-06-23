"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github, Play, Calendar, Code, Database, Brain, ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { projects } from "@/lib/projects-data"

export default function ProjectsPage() {
  const [expandedProjects, setExpandedProjects] = useState<Set<number>>(new Set())

  const toggleProject = (projectId: number) => {
    setExpandedProjects(prev => {
      const newSet = new Set(prev)
      if (newSet.has(projectId)) {
        newSet.delete(projectId)
      } else {
        newSet.add(projectId)
      }
      return newSet
    })
  }

  const getBriefDescription = (fullDescription: string) => {
    const words = fullDescription.split(' ')
    return words.length > 20 ? words.slice(0, 20).join(' ') + '...' : fullDescription
  }

  const categories = [
    { name: "All", icon: Code },
    { name: "AI/ML", icon: Brain },
    { name: "Full-Stack", icon: Code },
    { name: "Robotics", icon: Database },
    { name: "Enterprise", icon: Code },
    { name: "Game Development", icon: Code },
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-black text-black mb-6 font-mono">MY_PROJECTS</h1>
          <div className="w-24 h-1 bg-black mx-auto mb-8" />
          <p className="text-xl text-black/70 max-w-3xl mx-auto leading-relaxed font-mono">
            A showcase of engineering projects spanning AI/ML, full-stack development, robotics, and enterprise
            solutions.
          </p>
        </motion.div>



        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-black text-black mb-12 text-center font-mono">FEATURED_PROJECTS</h2>
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {projects
              .filter((p) => p.featured)
              .map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="border-2 border-black/10 hover:border-black transition-all duration-300 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] overflow-hidden group">
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={500}
                        height={300}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <Badge className="bg-black text-white font-bold font-mono">{project.category}</Badge>
                        <Badge
                          variant="outline"
                          className="border-2 font-bold border-green-500 text-green-700 bg-green-50 font-mono"
                        >
                          {project.status}
                        </Badge>
                      </div>

                    </div>
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-black text-black mb-4 font-mono">{project.title}</h3>
                      <p className="text-black/70 mb-6 leading-relaxed font-mono text-sm">{project.description}</p>

                      {/* Metrics */}
                      <div className="mb-6">
                        <h4 className="text-sm font-bold text-black mb-2 font-mono">KEY_METRICS</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {Object.entries(project.metrics).map(([key, value]) => (
                            <div key={key} className="text-black/60 font-mono text-xs">
                              <span className="text-black font-bold">{">"}</span> {value}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="border-black/20 text-black font-mono font-medium"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex gap-3">
                        {project.links.github && (
                          <Button
                            variant="outline"
                            className="border-2 border-black/20 text-black hover:bg-black hover:text-white font-mono font-bold hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
                            asChild
                          >
                            <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4 mr-2" />
                              CODE
                            </a>
                          </Button>
                        )}


                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>
        </motion.div>

        {/* All Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-black text-black mb-12 text-center font-mono">ALL_PROJECTS</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {projects.map((project, index) => {
              const isExpanded = expandedProjects.has(project.id)
              const isNonFeatured = !project.featured
              
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  layout
                >
                  <Card className="border-2 border-black/10 hover:border-black transition-all duration-300 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] overflow-hidden group">
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={400}
                        height={200}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 flex gap-2">
                        <Badge className="bg-black text-white text-xs font-bold font-mono">{project.category}</Badge>
                        {project.featured && (
                          <Badge className="bg-yellow-500 text-black text-xs font-bold font-mono">FEATURED</Badge>
                        )}
                      </div>
                    </div>
                    
                    <CardContent className="p-6 flex flex-col">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-black text-black font-mono">{project.title}</h3>
                        <Badge variant="outline" className="text-xs font-bold border-green-500 text-green-700 font-mono">
                          {project.status}
                        </Badge>
                      </div>

                      {/* Description - Brief when collapsed, full when expanded */}
                      <p className="text-black/70 text-sm mb-4 leading-relaxed font-mono">
                        {isExpanded 
                          ? project.description 
                          : getBriefDescription(project.description)
                        }
                      </p>

                      {/* Expanded content for ALL projects when expanded */}
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mb-4"
                        >
                          {/* Metrics */}
                          <div className="mb-4">
                            <h4 className="text-sm font-bold text-black mb-2 font-mono">KEY_METRICS</h4>
                            <div className="grid grid-cols-1 gap-1">
                              {Object.entries(project.metrics).map(([key, value]) => (
                                <div key={key} className="text-black/60 font-mono text-xs">
                                  <span className="text-black font-bold">{">"}</span> {value}
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {/* Technologies - Limited when collapsed, all when expanded */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {(isExpanded ? project.technologies : project.technologies.slice(0, 3))
                          .map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="border-black/20 text-black text-xs font-medium font-mono"
                            >
                              {tech}
                            </Badge>
                          ))}
                        {!isExpanded && project.technologies.length > 3 && (
                          <Badge variant="outline" className="border-black/20 text-black text-xs font-medium font-mono">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>

                      {/* Links - Only show when expanded */}
                      {isExpanded && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.links.github && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-2 border-black/20 text-black hover:bg-black hover:text-white font-bold text-xs hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 font-mono"
                              asChild
                            >
                              <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                                <Github className="w-3 h-3 mr-1" />
                                CODE
                              </a>
                            </Button>
                          )}
                          {project.links.company && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-2 border-black/20 text-black hover:bg-black hover:text-white font-bold text-xs hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 font-mono"
                              asChild
                            >
                              <a href={project.links.company} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-3 h-3 mr-1" />
                                COMPANY
                              </a>
                            </Button>
                          )}

                        </div>
                      )}

                      {/* Read More/Less Button for ALL projects */}
                      <div className="mt-4">
                        <Button
                          onClick={() => toggleProject(project.id)}
                          variant="outline"
                          size="sm"
                          className="border-2 border-blue-500/20 text-blue-600 hover:bg-blue-500 hover:text-white font-bold text-xs hover:shadow-[2px_2px_0px_0px_rgba(59,130,246,1)] transition-all duration-200 font-mono w-full"
                        >
                          {isExpanded ? (
                            <>
                              <ChevronUp className="w-3 h-3 mr-1" />
                              READ_LESS
                            </>
                          ) : (
                            <>
                              <ChevronDown className="w-3 h-3 mr-1" />
                              READ_MORE
                            </>
                          )}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
