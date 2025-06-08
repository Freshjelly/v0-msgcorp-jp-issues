"use client";

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'ホーム' },
    { href: '/#vision', label: 'VISION' },
    { href: '/services', label: 'SERVICE' },
    { href: '/media', label: 'MEDIA' },
    { href: '/news', label: 'NEWS' },
    { href: '/partnership', label: 'PARTNERSHIP' },
    { href: '/company', label: 'COMPANY' },
    { href: '/careers', label: 'CAREERS' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 shadow-sm backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* ロゴ */}
        <Link href="/" className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-green-600">
            <span className="text-lg font-bold text-white">M</span>
          </div>
          <div>
            <span className="text-xl font-bold text-gray-900">MSG株式会社</span>
            <div className="text-xs text-gray-600">True health belongs to everyone.</div>
          </div>
        </Link>

        {/* PC用ナビゲーション (md以上で表示) */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-4 inline-block rounded-md bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 px-4 py-2 text-sm font-medium text-white transition-colors"
          >
            お問い合わせ
          </Link>
        </nav>

        {/* ハンバーガーメニューボタン (md未満で表示) */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            aria-label="メニューを開閉する"
            className="p-2 text-gray-700 hover:text-blue-600"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* スマホ用メニュー (isMenuOpenがtrueの時だけ表示) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute left-0 top-full w-full bg-white pb-8 shadow-lg md:hidden"
          >
            <nav className="flex flex-col items-center gap-6 pt-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium text-gray-700 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-4 rounded-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 px-8 py-3 text-lg font-medium text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                お問い合わせ
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}