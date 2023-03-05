"use client"

import { motion } from "framer-motion"

import { staggerB } from "@/lib/framer"

interface ThoughtsLayoutProps {
  children?: React.ReactNode
}

export default function ThoughtsLayout({ children }: ThoughtsLayoutProps) {
  return (
    <motion.div initial="hidden" animate="visible" variants={staggerB}>
      {children}
    </motion.div>
  )
}
