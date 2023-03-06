"use client"

import React from "react"
import Link from "next/link"
import { faEye } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"

import { staggerChildrenI, staggerI } from "@/lib/framer"
import { Canvas } from "@/components/Canvas"

export default function Home() {
  const [isButtonClicked, setIsButtonClicked] = React.useState(false)

  return (
    <motion.div
      className="flex h-screen flex-col items-center justify-center"
      variants={staggerI}
      initial="hidden"
      animate="visible"
    >
      <div
        className={`h-64 w-64 lg:h-96 lg:w-1/2 z-50 ${isButtonClicked
            ? "mt-10 scale-x-[1.7] scale-y-[2] transition-all duration-1000"
            : "transition-all duration-1000"
          }
            }`}
        onClick={() => setIsButtonClicked(false)}
      >
        <Canvas />
      </div>
      <motion.div
        className="align-center flex items-center gap-[7rem] pt-5 text-base font-semibold"
        variants={staggerChildrenI}
      >
        <Link
          href="/about"
          className="flex items-center justify-center gap-2 transition-colors duration-1000 hover:text-zinc-400 font-jetBrains"
        >
          GET INSIDE
        </Link>
        <button
          className="hidden lg:block"
          onClick={() => setIsButtonClicked(true)}
          id="see"
          aria-label="see"
        >
          <FontAwesomeIcon icon={faEye} />
        </button>
      </motion.div>
    </motion.div>
  )
}
