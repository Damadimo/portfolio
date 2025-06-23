"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, User, Briefcase, Mail, Code } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

// Pixel Art Logo Component
const PixelLogo = ({ size = 32 }: { size?: number }) => {
  const pixelSize = size / 8

  return (
    <div className="grid grid-cols-8 gap-0 bg-black p-1" style={{ width: size + 8, height: size + 8 }}>
      {/* Pixel pattern for a simple computer/terminal icon */}
      {[
        1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1,
        1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      ].map((pixel, index) => (
        <div key={index} className={pixel ? "bg-white" : "bg-black"} style={{ width: pixelSize, height: pixelSize }} />
      ))}
    </div>
  )
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "HOME", icon: Code },
    { href: "/about", label: "ABOUT", icon: User },
    { href: "/experience", label: "EXPERIENCE", icon: Briefcase },
    { href: "/projects", label: "PROJECTS", icon: Code },
    { href: "/contact", label: "CONTACT", icon: Mail },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md border-b-2 border-black/10" : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <PixelLogo size={32} />
              </motion.div>
              <span className="text-black font-black text-xl tracking-tight font-mono group-hover:text-black/70 transition-colors">
                DEV.PORTFOLIO
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.div key={item.href} whileHover={{ y: -2 }}>
                  <Link
                    href={item.href}
                    className={`text-sm font-black transition-colors hover:text-black/70 tracking-wide font-mono ${
                      pathname === item.href ? "text-black border-b-2 border-black pb-1" : "text-black/60"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="sm"
                  className="bg-black hover:bg-black/90 text-white font-black border-2 border-black hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 font-mono"
                  asChild
                >
                  <Link href="/contact">CONNECT</Link>
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-black hover:bg-black/10"
              onClick={() => setIsOpen(!isOpen)}
            >
              <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.div>
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-white" />
            <div className="relative flex flex-col h-full pt-20 px-6">
              <div className="space-y-8">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-4 text-2xl font-black transition-colors hover:text-black/70 font-mono ${
                        pathname === item.href ? "text-black" : "text-black/60"
                      }`}
                    >
                      <item.icon className="w-6 h-6" />
                      <span>{item.label}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-12"
              >
                <Button
                  className="w-full bg-black hover:bg-black/90 text-white font-black py-4 text-lg border-2 border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 font-mono"
                  asChild
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/contact">CONNECT</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
