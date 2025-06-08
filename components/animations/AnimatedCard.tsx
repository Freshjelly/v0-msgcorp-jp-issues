"use client";

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface AnimatedCardProps {
  children: ReactNode
  className?: string
}

export const AnimatedCard = ({ children, className }: AnimatedCardProps) => {
  return (
    <motion.div
      className={className}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
        y: -5,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      {children}
    </motion.div>
  )
}