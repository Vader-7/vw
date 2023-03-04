"use client"

import { motion } from "framer-motion"

interface ThoughtsLayoutProps {
  children?: React.ReactNode
}

const stagger = {
  hidden: {
    opacity: 0.5,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export default function ThoughtsLayout({ children }: ThoughtsLayoutProps) {
  return (
    <motion.div initial="hidden" animate="visible" variants={stagger}>
      {children}
    </motion.div>
  )
}
