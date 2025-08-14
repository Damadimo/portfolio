"use client"

import { motion } from "framer-motion"
import { ArrowDown, Code, Download, Sparkles, Terminal, Zap } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getTerminalProjectNames } from "@/lib/projects-data"

export default function HomePage() {
  const codeSnippets = [
    "const developer = 'passionate';",
    "while(learning) { grow(); }",
    "if(problem) solve();",
    "// Building the future",
  ]

  const greetingText = "Hi, I'm Adam, a Computer Engineering student who loves building intelligent systems."

  const handleResumeDownload = () => {
    // Download the PDF resume from the public folder
    const link = document.createElement("a")
    link.href = "/Adam_Abdalla_Resume.pdf"
    link.download = "Adam_Abdalla_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Code Background */}
        <div className="absolute inset-0 opacity-5">
          {codeSnippets.map((snippet, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl font-mono"
              initial={{ opacity: 0, x: -100 }}
              animate={{
                opacity: [0, 1, 0],
                x: [-100, typeof window !== "undefined" ? window.innerWidth + 100 : 1200],
              }}
              transition={{
                duration: 8,
                delay: i * 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 8,
              }}
              style={{
                top: `${20 + i * 20}%`,
              }}
            >
              {snippet}
            </motion.div>
          ))}
        </div>

        {/* Pixel Grid Background */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="grid grid-cols-20 h-full">
            {[...Array(400)].map((_, i) => (
              <motion.div
                key={i}
                className="border border-black aspect-square"
                initial={{ opacity: 0 }}
                animate={{ opacity: Math.random() > 0.95 ? 1 : 0 }}
                transition={{
                  duration: 0.5,
                  delay: Math.random() * 5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: Math.random() * 10,
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            {/* Personal Greeting with Typewriter Effect */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mb-8">
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6 tracking-tight font-mono leading-tight px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <span className="block">Hi there, I'm Adam!</span>
              </motion.h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4 }}
              className="text-lg sm:text-xl md:text-2xl text-black/70 mb-12 font-mono leading-relaxed px-4 max-w-4xl mx-auto"
            >
              <span className="block mb-2">I'm a Computer Engineering student at the University of Toronto</span>
              <span className="block mb-2">with hands-on experience in Machine Learning, and Backend Development.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4.5 }}
              className="flex flex-col gap-4 sm:gap-6 justify-center items-center px-4"
            >
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                <Link href="/projects">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg font-mono font-bold hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
                  >
                    <Terminal className="w-5 h-5 mr-2" />
                    VIEW_PROJECTS
                  </Button>
                </Link>
                <Link href="/experience">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg font-mono font-bold hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
                  >
                    MY_EXPERIENCE
                  </Button>
                </Link>
              </div>
              <Button
                onClick={handleResumeDownload}
                size="lg"
                className="bg-black hover:bg-black/90 text-white px-8 py-4 text-lg font-mono font-bold border-2 border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 group"
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                DOWNLOAD_RESUME
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="text-black/60 cursor-pointer"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
          >
            <ArrowDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-12 md:py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-6xl font-black mb-6 font-mono">EXPERTISE</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8" />
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-mono px-4">
              Combining academic excellence with real-world engineering experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Code,
                title: "Full-Stack Development",
                description: "Building scalable web applications with modern frameworks and cloud technologies",
                skills: ["Next.js", "FastAPI", "Docker", "AWS"],
              },
              {
                icon: Zap,
                title: "AI & Machine Learning",
                description: "Developing intelligent systems from computer vision to natural language processing",
                skills: ["PyTorch", "YOLOv5", "LLMs", "RAG"],
              },
              {
                icon: Sparkles,
                title: "Robotics & Systems",
                description: "Engineering autonomous systems and real-time decision-making algorithms",
                skills: ["ROS", "Computer Vision", "Localization", "C++"],
              },
            ].map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <div className="border-2 border-white/20 p-6 md:p-8 h-full hover:border-white transition-all duration-300 hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)] relative overflow-hidden">
                  {/* Animated background on hover */}
                  <motion.div
                    className="absolute inset-0 bg-white/5"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4 md:mb-6">
                      <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                        <skill.icon className="w-6 md:w-8 h-6 md:h-8 text-white" />
                      </motion.div>
                      <span className="text-4xl md:text-6xl font-black text-white/10 group-hover:text-white/20 transition-colors font-mono">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 font-mono">{skill.title}</h3>
                    <p className="text-white/70 leading-relaxed mb-4 font-mono text-sm">{skill.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {skill.skills.map((s) => (
                        <span key={s} className="text-xs bg-white/10 px-2 py-1 font-mono">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Terminal Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-black text-green-400 p-4 md:p-6 font-mono text-xs md:text-sm border-2 border-black">
              <div className="flex items-center mb-4">
                <div className="flex space-x-2">
                  <div className="w-2 md:w-3 h-2 md:h-3 bg-red-500 rounded-full"></div>
                  <div className="w-2 md:w-3 h-2 md:h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 md:w-3 h-2 md:h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="ml-4 text-white text-xs md:text-sm">adam@portfolio</span>
              </div>
              <div className="space-y-2">
                <div>
                  <span className="text-blue-400">adam@uoft</span>
                  <span className="text-white">:</span>
                  <span className="text-green-400">~$</span>
                  <span className="text-white ml-2">whoami</span>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-xs md:text-sm"
                >
                  Computer Engineering student at University of Toronto. President's Scholar with 3.8 GPA.
                </motion.div>
                <div className="mt-4">
                  <span className="text-blue-400">adam@uoft</span>
                  <span className="text-white">:</span>
                  <span className="text-green-400">~$</span>
                  <span className="text-white ml-2">ls current_projects/</span>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-yellow-400 text-xs md:text-sm"
                >
                  {getTerminalProjectNames().map((projectName, index) => (
                    <motion.div
                      key={projectName}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {projectName}
                    </motion.div>
                  ))}
                </motion.div>
                <div className="mt-4 flex items-center">
                  <span className="text-blue-400">adam@uoft</span>
                  <span className="text-white">:</span>
                  <span className="text-green-400">~$</span>
                  <motion.span
                    className="ml-2 text-white"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                  >
                    _
                  </motion.span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 pb-20 md:pb-32 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-black mb-6 font-mono px-4">LET'S_BUILD_SOMETHING</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8" />
            <p className="text-lg md:text-xl text-white/80 mb-12 font-mono leading-relaxed px-4">
              Always interested in discussing new technologies, collaborating on projects, or connecting with fellow
              engineers and developers.
            </p>
            <div className="pb-8">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-white/90 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-mono font-bold border-2 border-white hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all duration-200 group"
                >
                  <Terminal className="w-4 md:w-5 h-4 md:h-5 mr-2 group-hover:animate-pulse" />
                  CONNECT
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
