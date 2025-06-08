"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

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
              <div className="text-xs text-gray-500">True health belongs to everyone.</div>
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
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                CONTACT
              </Button>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-white py-4">
            <nav className="flex flex-col space-y-4">
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
              <Link
                href="/contact"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
