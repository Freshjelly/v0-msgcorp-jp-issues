"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { AnimatedButton } from "@/components/animations/AnimatedButton"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-green-600">
              <span className="text-lg font-bold text-white">M</span>
            </div>
            <div>
              <span className="text-xl font-bold text-gray-900">MSG株式会社</span>
              <div className="text-xs text-gray-600">True health belongs to everyone.</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              ホーム
            </Link>
            <Link href="/#vision" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              VISION
            </Link>
            <Link href="/services" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              SERVICE
            </Link>
            <Link href="/media" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              MEDIA
            </Link>
            <Link href="/news" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              NEWS
            </Link>
            <Link href="/partnership" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              PARTNERSHIP
            </Link>
            <Link href="/company" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              COMPANY
            </Link>
            <Link href="/careers" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              CAREERS
            </Link>
            <Link href="/contact">
              <AnimatedButton className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold px-6 py-2 rounded-lg shadow-lg">
                お問い合わせ
              </AnimatedButton>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <AnimatedButton
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.div>
          </AnimatedButton>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden border-t bg-white py-4 overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <motion.nav
                className="flex flex-col space-y-4"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
              <Link
                href="/"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                ホーム
              </Link>
              <Link
                href="/#vision"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                VISION
              </Link>
              <Link
                href="/services"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                SERVICE
              </Link>
              <Link
                href="/media"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                MEDIA
              </Link>
              <Link
                href="/news"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                NEWS
              </Link>
              <Link
                href="/partnership"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                PARTNERSHIP
              </Link>
              <Link
                href="/company"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                COMPANY
              </Link>
              <Link
                href="/careers"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                CAREERS
              </Link>
              <div className="px-4 py-2">
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  <AnimatedButton className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold">
                    お問い合わせ
                  </AnimatedButton>
                </Link>
              </div>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
