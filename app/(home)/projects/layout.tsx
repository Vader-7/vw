"use client"

import { motion } from "framer-motion"

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

interface ProjectsLayoutProps {
  children?: React.ReactNode
}

export default function ProjectsLayout({ children }: ProjectsLayoutProps) {
  return (
    <motion.div initial="hidden" animate="visible" variants={stagger}>
      {children}
    </motion.div>
  )
}
