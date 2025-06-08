"use client";

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface AnimatedButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  whileHover?: object
  whileTap?: object
  transition?: object
}

export const AnimatedButton = ({
  children,
  className,
  onClick,
  whileHover = {
    scale: 1.05,
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
  },
  whileTap = { scale: 0.95 },
  transition,
}: AnimatedButtonProps) => {
  return (
    <motion.button
      className={className}
      onClick={onClick}
      whileHover={whileHover}
      whileTap={whileTap}
      transition={transition || {
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      {children}
    </motion.button>
  )
}