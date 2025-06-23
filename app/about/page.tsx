"use client"

import { motion } from "framer-motion"
import { Music, Camera, Gamepad2, Book, User, Mountain, Code, Trophy, Rocket, BookOpen, Users, Lightbulb } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  const hobbies = [
    {
      icon: Music,
      title: "Music & Audio Tech",
      description: "Exploring the intersection of technology and music, from audio processing to digital instruments.",
      color: "hover:bg-purple-50",
    },
    {
      icon: Trophy,
      title: "Fitness & Athletics",
      description: "Staying active through various sports and fitness activities to maintain physical and mental well-being.",
      color: "hover:bg-blue-50",
    },
    {
      icon: Mountain,
      title: "Outdoor Adventures",
      description:
        "Hiking and exploring nature to find inspiration and clear thinking for complex engineering problems.",
      color: "hover:bg-orange-50",
    },
  ]

  const values = [
    {
      title: "Innovation Through Engineering",
      description:
        "Believing that the best solutions come from combining solid engineering principles with creative thinking.",
      icon: Rocket,
    },
    {
      title: "Continuous Learning",
      description: "Technology evolves rapidly, and I'm committed to staying curious and adapting to new challenges.",
      icon: BookOpen,
    },
    {
      title: "Collaborative Problem Solving",
      description: "The most impactful engineering solutions emerge from diverse teams working together.",
      icon: Users,
    },
    {
      title: "Real-World Impact",
      description: "Technology should solve meaningful problems and improve people's lives in tangible ways.",
      icon: Lightbulb,
    },
  ]



  const currentProjects = [
    {
      icon: Code,
      text: "Building a local LLM platform that runs entirely offline",
    },
    {
      icon: User,
      text: "Developing an intelligent Privacy Advisor Agent for autonomous personal data management and protection",
    },
    {
      icon: Trophy,
      text: "Creating data maturity assessment tools for enterprise clients",
    },
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
          <h1 className="text-5xl md:text-7xl font-black text-black mb-6 font-mono">ABOUT_ME</h1>
          <div className="w-24 h-1 bg-black mx-auto mb-8" />
          <p className="text-xl text-black/70 max-w-3xl mx-auto leading-relaxed font-mono">
            Beyond the code and engineering projects, I'm a curious individual passionate about the intersection of
            technology, creativity, and human experience.
          </p>
        </motion.div>

        {/* Personal Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <Card className="border-2 border-black/10 hover:border-black transition-all duration-300 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] max-w-4xl mx-auto">
            <CardContent className="p-12">
              <div className="flex items-center mb-6">
                <User className="w-8 h-8 text-black mr-4" />
                <h2 className="text-3xl font-black text-black font-mono">WHO_I_AM</h2>
              </div>
              <div className="space-y-6 text-black/70 font-mono leading-relaxed">
                <p>
                  I'm Adam Abdalla, a Computer Engineering student at the University of Toronto. My journey into engineering started with a simple question: "How can we build systems that
                  think and learn like humans?"
                </p>
                <p>
                  This curiosity has led me through fascinating projects - from developing autonomous soccer-playing
                  robots to building local LLM platforms that run entirely offline. I believe the best engineering
                  solutions come from understanding both the technical complexity and the human needs behind every
                  problem.
                </p>
                <p>
                  When I'm not coding or working on projects, you'll find me playing sports, reading, or hiking.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Hobbies Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-black text-black mb-6 text-center font-mono">HOBBIES</h2>
          <p className="text-xl text-black/70 max-w-2xl mx-auto text-center leading-relaxed font-mono mb-12">
            Outside of work, here are some of my interests:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {hobbies.map((hobby, index) => (
              <motion.div
                key={hobby.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card
                  className={`border-2 border-black/10 hover:border-black transition-all duration-300 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] h-full group ${hobby.color}`}
                >
                  <CardContent className="p-6">
                    <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }} className="mb-4">
                      <hobby.icon className="w-8 h-8 text-black" />
                    </motion.div>
                    <h3 className="text-xl font-black text-black mb-3 font-mono">
                      {hobby.title.toUpperCase().replace(" ", "_")}
                    </h3>
                    <p className="text-black/70 font-mono text-sm leading-relaxed">{hobby.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-black text-black mb-12 text-center font-mono">CORE_VALUES</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="border-2 border-black/10 hover:border-black transition-all duration-300 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <value.icon className="w-8 h-8 text-black mr-4" />
                      <h3 className="text-xl font-black text-black font-mono">
                        {value.title.toUpperCase().replace(" ", "_")}
                      </h3>
                    </div>
                    <p className="text-black/70 font-mono text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>



        {/* Current Status */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-black text-white p-12 text-center rounded-lg"
        >
          <Trophy className="w-12 h-12 text-white mx-auto mb-6" />
          <h2 className="text-3xl font-black mb-6 font-mono">CURRENTLY_WORKING_ON</h2>
          <div className="w-16 h-1 bg-white mx-auto mb-8" />
          <div className="max-w-3xl mx-auto space-y-4 font-mono">
            {currentProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center text-white/80 leading-relaxed"
              >
                <project.icon className="w-6 h-6 text-white mr-3 flex-shrink-0" />
                <span>{project.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
