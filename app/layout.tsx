"use client"

import { CC } from "@/components/CC"
import { Footer } from "@/components/Footer"
import { NavBar } from "@/components/Navbar"
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

const variant = {
  hidden: {
    y: -30,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.2,
      ease: "easeInOut",
      Animation: "spring",
    },
  },
}

const variantx = {
  hidden: {
    y: 30,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.2,
      ease: "easeInOut",
      Animation: "spring",
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  return (
    <html lang="en">
      <body
        className={`${inter.className}
           min-h-screen min-w-full bg-[#efefef] text-black antialiased dark:bg-[#0e0e0e] dark:text-white`}
      >
        {pathname !== "/" ? (
          <div className="container py-[2rem] lg:py-[3rem]">
            <motion.div initial="hidden" animate="visible" variants={variant}>
              <NavBar />
            </motion.div>
            <motion.div
              className="py-[2rem] lg:py-[5rem]"
              initial="pageInitial"
              animate="pageAnimate"
              variants={{
                pageInitial: { opacity: 0 },
                pageAnimate: { opacity: 1 },
              }}
              transition={{ duration: 0.5 }}
              key={pathname}
            >
              {children}
            </motion.div>
            <motion.div initial="hidden" animate="visible" variants={variantx}>
              <Footer />
            </motion.div>
            <CC />
          </div>
        ) : (
          <>{children}</>
        )}
      </body>
    </html>
  )
}
