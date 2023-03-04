"use client"

import { motion } from "framer-motion"

import { Separator } from "@/components/ui/separator"

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

export default function ProjectsPage() {
  return (
    <motion.div initial="hidden" animate="visible" variants={stagger}>
      <motion.div variants={staggerChildren}>
        <h1 className="scroll-m-20 text-4xl font-medium tracking-tight drop-shadow-sm lg:text-5xl">
          Projects
        </h1>
        <p className="py-1 text-sm font-medium leading-7 drop-shadow-sm md:text-base">
          Here are some of the projects I&rsquo;ve worked on.
        </p>
        <Separator />
      </motion.div>
      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex flex-col space-y-4">
          <motion.div
            className="flex flex-col space-y-2"
            variants={staggerChildren}
          >
            <h2 className="text-xl font-semibold leading-none">
              <a
                href="https://github.com/Vader-7/vw"
                className=" transition duration-700 ease-in-out hover:text-zinc-400"
              >
                Portfolio
              </a>
            </h2>
            <p className="text-sm leading-5 md:text-base md:leading-7">
              This website you&rsquo;re on right now! I built it using Next.js,
              Tailwind CSS, Framer Motion and TypeScript connected to Notion as
              a CMS.
            </p>
          </motion.div>
          <br />
          <motion.div
            className="flex flex-col space-y-2"
            variants={staggerChildren}
          >
            <h2 className="text-xl font-semibold leading-none">
              <a
                href={""}
                className=" transition duration-700 ease-in-out hover:text-zinc-400"
              >
                {" "}
                Interpreter Robot{" "}
              </a>
            </h2>
            <p className="text-sm leading-5 md:text-base md:leading-7">
              A robot that can recognize and translate Chilean Sign Language. I
              built it using Python, TensorFlow and Arduino.
            </p>
          </motion.div>
          <br />
          <motion.div
            className="flex flex-col space-y-2"
            variants={staggerChildren}
          >
            <h2 className="text-xl font-semibold leading-none">
              <a
                href={"https://github.com/Vader-7/RegistAPP"}
                className=" transition duration-700 ease-in-out hover:text-zinc-400"
              >
                Attendance App
              </a>
            </h2>
            <p className="text-sm leading-5 md:text-base md:leading-7">
              An attendance app for my University. I built it using Ionic,
              Firebase and Typescript.
            </p>
          </motion.div>
          <br />
          <motion.div
            className="flex flex-col space-y-2"
            variants={staggerChildren}
          >
            <h2 className="text-xl font-semibold leading-none">
              <a
                href={"https://bazza.studio"}
                className=" transition duration-700 ease-in-out hover:text-zinc-400"
              >
                Bazza Studio
              </a>
            </h2>
            <p className="text-sm leading-5 md:text-base md:leading-7">
              A website for a local studio. I built it using Next.js, Tailwind
              CSS, Framer Motion, Supabase and TypeScript connected to Strapi
              API as a CMS.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
