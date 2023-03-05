"use client"

import { motion } from "framer-motion"

import { staggerP } from "@/lib/framer"

interface ProjectLayoutProps {
  children?: React.ReactNode
}

export default function ProjectLayout({ children }: ProjectLayoutProps) {
  return (
    <motion.div initial="hidden" animate="visible" variants={staggerP}>
      {children}
    </motion.div>
  )
}
