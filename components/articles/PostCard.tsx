"use client"

import { FunctionComponent } from "react"
import Image from "next/image"
import Link from "next/link"
import dayjs from "dayjs"
import { motion } from "framer-motion"

import { staggerChildrenB } from "@/lib/framer"

const localizedFormat = require("dayjs/plugin/localizedFormat")

export const PostCard: FunctionComponent<{ post: any }> = ({ post }) => {
  dayjs.extend(localizedFormat)
  return (
    <Link href={`/thoughts/${post.id}`} passHref>
      <motion.div
        key={post.id}
        className="flex-col shadow-lg"
        variants={staggerChildrenB}
      >
        <div className="shrink drop-shadow-sm overflow-hidden">
          <Image
            className="w-full h-auto object-cover object-center hover:scale-105 transition duration-2000"
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
