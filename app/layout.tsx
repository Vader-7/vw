"use client"

import { CC } from "@/components/CC"
import { Footer } from "@/components/Footer"
import { NavBar } from "@/components/Navbar"
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import { JetBrains_Mono } from "next/font/google"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

import { variant, variantx } from "@/lib/framer"
import { cn } from "@/lib/utils"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  return (
    <html
      lang="en"
      className="bg-[#efefef] text-black dark:bg-[#0e0e0e] dark:text-white"
    >
      <body
        className={cn(
          "font-sfPro antialiased min-h-screen min-w-full",
          inter.variable,
          jetbrains.variable
        )}
      >
        {pathname !== "/" ? (
          <div className="container py-[4.5rem] lg:py-[5.5rem]">
            <motion.div initial="hidden" animate="visible" variants={variant}>
              <NavBar />
            </motion.div>
            <motion.div
              className="py-[3.5rem] lg:py-[5.5rem]"
              initial="pageInitial"
              animate="pageAnimate"
              variants={{
                pageInitial: { opacity: 0.2 },
                pageAnimate: { opacity: 1 },
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
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
