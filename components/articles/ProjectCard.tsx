"use client"

import { FunctionComponent } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

import { Separator } from "../ui/separator"

const staggerChildren = {
  hidden: {
    x: -10,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
}

export const ProjectCard: FunctionComponent<{ post: any }> = ({ post }) => {
  return (
    <>
      <motion.div variants={staggerChildren}>
        <h1 className="scroll-m-20 text-4xl font-medium tracking-tight drop-shadow-sm lg:text-5xl">
          Projects
        </h1>
        <p className="py-1 text-sm font-medium leading-7 drop-shadow-sm md:text-base">
          Here are some of the projects I&rsquo;ve worked on.
        </p>
        <Separator />
      </motion.div>
      <Link
        href={`/projects/${post.id}`}
        passHref
        className="transition-colors duration-1000 hover:text-zinc-400"
      >
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col space-y-4">
            <motion.div
              className="flex flex-col space-y-2"
              variants={staggerChildren}
            >
              <h2 className="text-xl font-semibold leading-none">
                {post.title}
              </h2>
              <p className="text-sm leading-5 md:text-base md:leading-7">
                {post.description}
              </p>
            </motion.div>
          </div>
        </div>
      </Link>
    </>
  )
}
