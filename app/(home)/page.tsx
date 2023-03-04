"use client"

import React from "react"
import Link from "next/link"
import { faEye } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"

import { Canvas } from "@/components/Canvas"

const variant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
}

const item = {
  hidden: {
    filter: "blur(3px)",
    transform: "scale(0.9)",
    opacity: 0,
  },
  visible: {
    filter: "blur(0px)",
    transform: "scale(1)",
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeInOut",
    },
  },
}

export default function Home() {
  const [isButtonClicked, setIsButtonClicked] = React.useState(false)

  return (
    <motion.div
      className="flex h-screen flex-col items-center justify-center"
      variants={variant}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className={`h-64 w-64 lg:h-96 lg:w-1/2 ${isButtonClicked
          ? "mt-10 scale-x-[1.7] scale-y-[2] transition-all duration-1000"
          : "transition-all duration-1000"
          }
            }`}
        onClick={() => setIsButtonClicked(false)}
        variants={item}
      >
        <Canvas />
      </motion.div>
      <motion.div
        className="align-center flex items-center gap-[7rem] pt-5 text-base font-semibold"
        variants={item}
      >
        <Link
          href="/about"
          className="flex items-center justify-center gap-2 transition-colors duration-1000 hover:text-zinc-400"
        >
          GET INSIDE
        </Link>
        <button
          className="hidden lg:block"
          onClick={() => setIsButtonClicked(true)}
        >
          <FontAwesomeIcon icon={faEye} />
        </button>
      </motion.div>
    </motion.div>
  )
}
