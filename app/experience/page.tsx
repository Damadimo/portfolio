"use client"

import { motion } from "framer-motion"
import {
  Calendar,
  MapPin,
  ExternalLink,
  Building,
  Code,
  Users,
  Trophy,
  Award,
  TrendingUp,
  Download,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ExperiencePage() {
  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "Data Passports",
      period: "May 2025 - Sept. 2025",
      location: "Toronto, ON",
      type: "Internship",
      description:
        "Developed Privacy Advisor Agents to analyze and automate Privacy Rights Requests (GDPR, CCPA, etc.)",
      achievements: [
        "Launched LLAMA-based Python Privacy Advisor Agent using LangChain, sustaining 150+ req/s for over 10,000 users",
        "Containerized and deployed Privacy Advisor Agent on Azure VM and Docker with CI/CD, using blue-green releases and health checks to keep sub-second p95 latency and enable zero-downtime rollouts. ",
        "Implemented RAG pipeline to automate GDPR and CCPA compliance (Data Subject Access Request) generation through Privacy Advisor Agent, cutting average request time from 30 mins to 4 secs and raising submission volume 8-fold",
        "Implemented data-protection guardrails with PII redaction, least-privilege Role Based Access Control, and Azure Monitor alerts, maintaining 100 percent compliance and 0 security incidents through 10,000 production runs",
      ],
      technologies: ["Python", "LangChain", "LLAMA", "Azure", "Docker", "CI/CD", "RAG", "GDPR", "CCPA"],
      links: {
        company: "https://datapassports.com/",
      },
    },
    {
      title: "Software Engineering Intern",
      company: "FI Solutions",
      period: "May 2025 - Sept. 2025",
      location: "Toronto, ON",
      type: "Internship",
      description:
        "Developed a full-stack Data Maturity Assessment web application using Next.js and SQL that revolutionized client reporting processes. Engineered ACID-safe REST APIs with transaction-safe inserts for enterprise-grade data integrity.",
      achievements: [
        "Developed a full-stack Data Maturity Assessment web app (Next.js + SQL) that replaced manual spreadsheet audits, cutting report-turnaround time from days to under 10 minutes per client",
        "Engineered an ACID-safe REST API with transaction-safe inserts, achieving 100% data integrity for 500+ pilot surveys",
      ],
      technologies: ["Next.js", "SQL", "REST API", "Full-Stack Development", "Data Management"],
      links: {
        company: "https://fisolutionsinc.com/",
      },
    },
    {
      title: "Software Engineer",
      company: "University of Toronto Robotics Association",
      period: "Sept. 2024 - May 2025",
      location: "Toronto, ON",
      type: "Engineering Role",
      description:
        "Developed autonomous decision-making systems for soccer-playing robots, implementing computer vision and localization algorithms. Containerized ROS-based systems and optimized machine learning models for real-time performance.",
      achievements: [
        "Developed decision-making code in Python, enabling attacking and defending behaviors in autonomous soccer-playing robots",
        "Containerized ROS-based localization systems using Docker, cutting team-wide deployment and debugging times by 40%",
        "Fine-tuned YOLOv5 Computer Vision Model in Python, using custom datasets to accurately identify objects, achieving a 20% performance boost compared to initial models",
        "Optimized localization using Particle Filtering and Monte Carlo Localization, reducing positional errors by 15%",
      ],
      technologies: ["Python", "ROS", "Docker", "YOLOv5", "Computer Vision", "Particle Filtering", "Monte Carlo"],
      links: {
        company: "https://github.com/utra-robosoccer",
      },
    },
  ]

  const education = {
    degree: "Bachelor's, Computer Engineering",
    minor: "Minor in Engineering Business and AI",
    school: "University of Toronto",
    period: "Sept. 2024 - Apr. 2028",
    location: "Toronto, ON",
    gpa: "3.8/4.0",
    achievements: ["President's Scholar Recipient ($20k total)", "Dean's List"],
    coursework: ["Calculus I & II", "Computer Fundamentals", "Linear Algebra", "Electric Circuits", "MATLAB"],
    extracurriculars: [
      "University of Toronto Machine Intelligence Team",
      "Supply Chain & Intelligence Management Teams",
    ],
  }

  const skills = {
    "Programming Languages": ["Python", "C/C++", "Java", "JavaScript/TypeScript", "C#", "SQL", "Bash"],
    "Frameworks & Tools": ["FastAPI", "React/Next.js", "Node.js", "PyTorch", "scikit-learn", "Docker", "Terraform"],
    "AI & Machine Learning": ["YOLOv5", "Computer Vision", "NLP", "LLMs", "RAG", "Semantic Analysis"],
    "Systems & DevOps": ["Git", "Linux/Unix", "Qdrant", "CI/CD", "ROS", "Containerization"],
    "Cloud & Databases": ["AWS", "Azure", "SQL", "Vector Databases", "REST APIs"],
  }

  const certifications = [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "In Progress",
      credentialId: "AWS-CCP",
    },
    {
      name: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      date: "2025",
      credentialId: "AZ-900",
    },
  ]



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
      <div className="container mx-auto px-4 py-12 md:py-20 pb-16 md:pb-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <h1 className="text-4xl md:text-7xl font-black text-black mb-6 font-mono">EXPERIENCE</h1>
          <div className="w-24 h-1 bg-black mx-auto mb-8" />
          <p className="text-xl text-black/70 max-w-3xl mx-auto leading-relaxed font-mono">
            Professional experience in software engineering, AI, and robotics at University of Toronto and industry.
          </p>

          {/* Resume Download Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8"
          >
            <Button
              onClick={handleResumeDownload}
              className="bg-black hover:bg-black/90 text-white px-6 py-3 font-mono font-bold border-2 border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <Download className="w-5 h-5 mr-2" />
              DOWNLOAD_RESUME
            </Button>
          </motion.div>
        </motion.div>



        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20"
        >
          <div className="max-w-5xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                {/* Timeline line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-8 top-full w-0.5 h-8 bg-black/20 z-0" />
                )}

                <Card className="border-2 border-black/10 hover:border-black transition-all duration-300 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] relative overflow-hidden group">
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-black/5"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />

                  <CardContent className="p-8 relative z-10">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Building className="w-5 h-5 text-black" />
                          <Badge className="bg-black text-white font-mono font-bold">{exp.type}</Badge>
                        </div>
                        <h3 className="text-2xl font-black text-black mb-2 font-mono">{exp.title}</h3>
                        <p className="text-xl text-black/80 font-bold font-mono mb-2">{exp.company}</p>
                      </div>
                      <div className="flex flex-col lg:items-end mt-4 lg:mt-0">
                        <div className="flex items-center text-black/60 mb-2 font-mono">
                          <Calendar className="w-4 h-4 mr-2" />
                          {exp.period}
                        </div>
                        <div className="flex items-center text-black/60 font-mono">
                          <MapPin className="w-4 h-4 mr-2" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <p className="text-black/70 mb-6 leading-relaxed font-mono text-sm">{exp.description}</p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-black mb-3 font-mono flex items-center">
                        <Trophy className="w-4 h-4 mr-2" />
                        KEY_ACHIEVEMENTS
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="text-black/70 font-mono text-sm flex items-start"
                          >
                            <span className="text-black mr-2 font-bold">{">"}</span>
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-black mb-3 font-mono flex items-center">
                        <Code className="w-4 h-4 mr-2" />
                        TECH_STACK
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="border-black/20 text-black hover:bg-black hover:text-white font-mono font-bold transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    {Object.keys(exp.links).length > 0 && (
                      <div className="flex gap-3">
                        {exp.links.company && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-2 border-black/20 text-black hover:bg-black hover:text-white font-mono font-bold hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
                            asChild
                          >
                            <a href={exp.links.company} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              COMPANY
                            </a>
                          </Button>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20"
        >
          <h2 className="text-4xl font-black text-black mb-12 text-center font-mono">EDUCATION</h2>
          <div className="max-w-5xl mx-auto">
            <Card className="border-2 border-black/10 hover:border-black transition-all duration-300 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-black text-black mb-2 font-mono">{education.degree}</h3>
                    <p className="text-lg text-black/80 font-bold font-mono mb-2">{education.minor}</p>
                    <p className="text-xl text-black/70 font-bold font-mono">{education.school}</p>
                  </div>
                  <div className="flex flex-col lg:items-end mt-4 lg:mt-0">
                    <div className="flex items-center text-black/60 mb-2 font-mono">
                      <Calendar className="w-4 h-4 mr-2" />
                      {education.period}
                    </div>
                    <div className="flex items-center text-black/60 font-mono mb-2">
                      <MapPin className="w-4 h-4 mr-2" />
                      {education.location}
                    </div>
                    <div className="text-black font-bold font-mono">GPA: {education.gpa}</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-bold text-black mb-3 font-mono">ACHIEVEMENTS</h4>
                    <ul className="space-y-2">
                      {education.achievements.map((achievement, i) => (
                        <li key={i} className="text-black/70 font-mono text-sm flex items-start">
                          <span className="text-black mr-2 font-bold">{">"}</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-black mb-3 font-mono">EXTRACURRICULARS</h4>
                    <ul className="space-y-2">
                      {education.extracurriculars.map((activity, i) => (
                        <li key={i} className="text-black/70 font-mono text-sm flex items-start">
                          <span className="text-black mr-2 font-bold">{">"}</span>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-lg font-bold text-black mb-3 font-mono">RELEVANT_COURSEWORK</h4>
                  <div className="flex flex-wrap gap-2">
                    {education.coursework.map((course) => (
                      <Badge
                        key={course}
                        variant="outline"
                        className="border-black/20 text-black hover:bg-black hover:text-white font-mono font-bold"
                      >
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Skills Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20"
        >
          <h2 className="text-4xl font-black text-black mb-12 text-center font-mono">SKILL_MATRIX</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="border-2 border-black/10 hover:border-black transition-all duration-300 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] h-full group">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-black text-black mb-4 font-mono flex items-center">
                      <span className="text-black/40 mr-2 font-mono">{">"}</span>
                      {category.toUpperCase().replace(" ", "_")}
                    </h3>
                    <div className="space-y-2">
                      {skillList.map((skill, i) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          viewport={{ once: true }}
                          className="text-black/70 font-mono text-sm flex items-center group-hover:text-black transition-colors"
                        >
                          <span className="text-black/40 mr-2">-</span>
                          {skill}
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20"
        >
          <h2 className="text-4xl font-black text-black mb-12 text-center font-mono">CERTIFICATIONS</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="border-2 border-black/10 hover:border-black transition-all duration-300 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] h-full">
                  <CardContent className="p-6 text-center">
                    <Award className="w-8 h-8 text-black mx-auto mb-4" />
                    <h3 className="text-lg font-black text-black mb-2 font-mono">{cert.name}</h3>
                    <p className="text-black/70 font-mono text-sm mb-2">{cert.issuer}</p>
                    <p className="text-black/60 font-mono text-xs mb-2">{cert.date}</p>
                    <p className="text-black/50 font-mono text-xs">Code: {cert.credentialId}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <div className="pb-8 md:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-black text-white p-8 md:p-12 text-center rounded-lg"
          >
            <Users className="w-8 md:w-12 h-8 md:h-12 text-white mx-auto mb-4 md:mb-6" />
            <h2 className="text-2xl md:text-3xl font-black mb-4 md:mb-6 font-mono">GOT_AN_IDEA?</h2>
            <div className="w-12 md:w-16 h-1 bg-white mx-auto mb-6 md:mb-8" />
            <p className="text-white/80 text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto font-mono leading-relaxed">
              I'm always open to discussing new opportunities, interesting projects, or connecting with fellow engineers
              and industry professionals.
            </p>
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-mono font-bold border-2 border-white hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all duration-200"
              asChild
            >
              <a href="/contact">
                <ExternalLink className="w-4 md:w-5 h-4 md:h-5 mr-2" />
                GET_IN_TOUCH
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
