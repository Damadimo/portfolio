"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Send, Github, Linkedin, MessageCircle, Twitter, Instagram, Calendar, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error" | "demo">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        const result = await response.json()
        setSubmitStatus("success")
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        })
        
        // Store the response for different feedback messages
        if (result.demo) {
          setSubmitStatus("demo")
        }
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "adam1.abdalla@gmail.com",
      href: "mailto:adam1.abdalla@gmail.com",
      description: "Send me an email",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "416-996-6808",
      href: "tel:+14169966808",
      description: "Give me a call",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@Damadimo",
      href: "https://github.com/Damadimo",
      description: "Check out my code and engineering projects",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Adam Abdalla",
      href: "https://www.linkedin.com/in/adabdal/",
      description: "Connect with me professionally",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@adamabdalla9_",
      href: "https://www.instagram.com/adamabdalla9_/",
      description: "Behind the scenes of my projects",
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
          <h1 className="text-5xl md:text-7xl font-black text-black mb-6 font-mono">LET'S_CONNECT</h1>
          <div className="w-24 h-1 bg-black mx-auto mb-8" />
          <p className="text-xl text-black/70 max-w-3xl mx-auto leading-relaxed font-mono">
            Always excited to collaborate on engineering projects, discuss new technologies, or connect with fellow
            developers and engineers. Drop me a message!
          </p>
        </motion.div>

        {/* Contact Form and Contact Info */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full"
          >
            <Card className="border-2 border-black/10 hover:border-black transition-all duration-300 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] w-full">
              <CardHeader>
                <CardTitle className="text-2xl font-black text-black font-mono">SEND_A_MESSAGE</CardTitle>
                <div className="w-16 h-1 bg-black" />
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="w-full">
                      <label className="block text-sm font-bold text-black mb-2 font-mono">FIRST_NAME</label>
                      <Input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="John"
                        required
                        className="border-2 border-black/20 focus:border-black text-black placeholder:text-black/40 font-mono font-medium w-full"
                      />
                    </div>
                    <div className="w-full">
                      <label className="block text-sm font-bold text-black mb-2 font-mono">LAST_NAME</label>
                      <Input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Doe"
                        required
                        className="border-2 border-black/20 focus:border-black text-black placeholder:text-black/40 font-mono font-medium w-full"
                      />
                    </div>
                  </div>

                  <div className="w-full">
                    <label className="block text-sm font-bold text-black mb-2 font-mono">EMAIL</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      required
                      className="border-2 border-black/20 focus:border-black text-black placeholder:text-black/40 font-mono font-medium w-full"
                    />
                  </div>

                  <div className="w-full">
                    <label className="block text-sm font-bold text-black mb-2 font-mono">SUBJECT</label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project Collaboration"
                      required
                      className="border-2 border-black/20 focus:border-black text-black placeholder:text-black/40 font-mono font-medium w-full"
                    />
                  </div>

                  <div className="w-full">
                    <label className="block text-sm font-bold text-black mb-2 font-mono">MESSAGE</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or how we can collaborate..."
                      rows={6}
                      required
                      className="border-2 border-black/20 focus:border-black text-black placeholder:text-black/40 resize-none font-mono font-medium w-full"
                    />
                  </div>

                  {submitStatus === "success" && (
                    <div className="p-4 bg-green-50 border-2 border-green-200 rounded-lg">
                      <p className="text-green-800 font-mono font-medium">✅ Message sent successfully! I'll get back to you soon.</p>
                    </div>
                  )}

                  {submitStatus === "demo" && (
                    <div className="p-4 bg-blue-50 border-2 border-blue-200 rounded-lg">
                      <p className="text-blue-800 font-mono font-medium">
                        🎯 Form submitted successfully! 
                        <br />
                        <span className="text-sm opacity-80">
                          (Demo mode: Contact info logged to console. To enable email sending, configure RESEND_API_KEY)
                        </span>
                      </p>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="p-4 bg-red-50 border-2 border-red-200 rounded-lg">
                      <p className="text-red-800 font-mono font-medium">❌ Failed to send message. Please try again or email me directly.</p>
                    </div>
                  )}

                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-black hover:bg-black/90 text-white py-4 font-bold text-lg border-2 border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 font-mono disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {isSubmitting ? "SENDING..." : "SEND_MESSAGE"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Get In Touch - Merged Contact Info and Social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full"
          >
            <Card className="border-2 border-black/10 hover:border-black transition-all duration-300 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] w-full h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-black text-black font-mono">GET_IN_TOUCH</CardTitle>
                <div className="w-16 h-1 bg-black" />
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-start p-4 border-2 border-black/10 hover:border-black transition-all duration-300 group w-full"
                  >
                    <div className="w-12 h-12 border-2 border-black/20 group-hover:border-black flex items-center justify-center mr-4 mt-1 transition-all duration-300 flex-shrink-0">
                      <info.icon className="w-6 h-6 text-black" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <p className="font-black text-black font-mono">{info.label}</p>
                        <p className="text-sm font-medium text-black/60 font-mono truncate">{info.value}</p>
                      </div>
                      <p className="text-sm text-black/70 font-light font-mono">{info.description}</p>
                    </div>
                  </motion.a>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Current Status - Full width underneath */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-7xl mx-auto mb-16"
        >
          <Card className="bg-gray-50 border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] w-full">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-black mb-4 font-mono text-black">CURRENT_STATUS</h3>
              <div className="flex items-center justify-center mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse flex-shrink-0"></div>
                <span className="text-green-600 font-bold font-mono">Available for Opportunities</span>
              </div>
              <p className="text-black/70 text-sm font-light leading-relaxed font-mono max-w-2xl mx-auto">
                Currently pursuing Computer Engineering at University of Toronto. Open to internships, co-op
                positions, and exciting engineering projects. Let's build something amazing together!
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20 bg-black text-white p-12 w-full rounded-2xl"
        >
          <h2 className="text-3xl font-black mb-4 font-mono">READY_TO_COLLABORATE?</h2>
          <div className="w-16 h-1 bg-white mx-auto mb-6" />
          <p className="text-white/80 mb-8 max-w-2xl mx-auto font-light leading-relaxed font-mono">
            Whether you have a project idea, want to discuss technology, or are looking for a passionate engineering
            student, I'm always excited to connect with fellow innovators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-black px-8 py-4 font-bold hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all duration-200 font-mono"
              asChild
            >
              <a href="mailto:adam1.abdalla@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                SEND_EMAIL
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-black px-8 py-4 font-bold hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all duration-200 font-mono"
              asChild
            >
              <a href="https://www.linkedin.com/in/adabdal/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                LINKEDIN
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
