"use client"

import { FunctionComponent } from "react"
import Image from "next/image"
import Link from "next/link"
import dayjs from "dayjs"
import { motion } from "framer-motion"

const localizedFormat = require("dayjs/plugin/localizedFormat")

const staggerChildren = {
  hidden: {
    transform: "scale(0.9)",
    opacity: 0,
  },
  visible: {
    transform: "scale(1)",
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      type: "spring",
      stiffness: 20,
    },
  },
}

export const PostCard: FunctionComponent<{ post: any }> = ({ post }) => {
  dayjs.extend(localizedFormat)
  return (
    <Link href={`/thoughts/${post.id}`} passHref>
      <motion.div
        key={post.id}
        className="flex-col shadow-lg"
        variants={staggerChildren}
      >
        <div className="shrink drop-shadow-sm overflow-hidden">
          <Image
            className="w-full h-auto object-cover object-center hover:scale-105 transition duration-3000 hover:blur-[0.3rem]"
            src={post.cover}
            alt={post.title}
            width={500}
            height={500}
            priority={true}
          />
        </div>
        <div className="flex flex-1 flex-col justify-between bg-zinc-200 px-4 pt-2 pb-6 dark:bg-zinc-800">
          <div className="flex-1">
            <span className="mt-2 block">
              <h4 className="text-xs font-normal text-black dark:text-white">
                {dayjs(post.date).format("MMMM D / YYYY")}
              </h4>
            </span>
            <span className="mt-2 block">
              <h3 className="text-xl font-medium text-gray-900 drop-shadow-sm dark:text-white">
                {post.title}
              </h3>
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}