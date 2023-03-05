"use client"

import { motion } from "framer-motion"

import { staggerChildrenP, staggerP } from "@/lib/framer"
import { Separator } from "@/components/ui/separator"

interface ProjectsLayoutProps {
  children?: React.ReactNode
}

export default function ProjectsLayout({ children }: ProjectsLayoutProps) {
  return (
    <motion.div initial="hidden" animate="visible" variants={staggerP}>
      <motion.div variants={staggerChildrenP}>
        <h1 className="scroll-m-20 text-4xl font-medium tracking-tight drop-shadow-sm lg:text-5xl">
          Projects
        </h1>
        <p className="py-1 text-sm font-medium leading-7 drop-shadow-sm md:text-base">
          Here are some of the projects I&rsquo;ve worked on.
        </p>
        <Separator />
      </motion.div>
      {children}
    </motion.div>
  )
}
