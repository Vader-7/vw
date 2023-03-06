"use client"

import { FunctionComponent } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

import { staggerChildrenP } from "@/lib/framer"

export const ProjectCard: FunctionComponent<{ post: any }> = ({ post }) => {
  return (
    <>
      <div className="mt-[2rem] grid grid-cols-1 gap-4 md:grid-cols-2">
        <motion.div
          className="flex flex-col space-y-2"
          variants={staggerChildrenP}
        >
          <h2 className="text-xl font-semibold leading-none">{post.title}</h2>
          <p className="text-sm leading-5 md:text-base md:leading-7">
            {post.description}
          </p>
        </motion.div>
        <motion.div className="md:col-start-2" variants={staggerChildrenP}>
          <div className="flex items-center justify-center h-full w-full">
            <Link
              href={`/${post.id}`}
              passHref
              className="transition-all duration-700 hover:text-zinc-500"
            >
              <h3 className="font-jetBrains text-sm font-semibold flex items-center justify-center">
                CASE STUDY <ChevronRight size={16} className="ml-2" />
              </h3>
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  )
}
