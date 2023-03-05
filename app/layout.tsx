"use client"

import { CC } from "@/components/CC"
import { Footer } from "@/components/Footer"
import { NavBar } from "@/components/Navbar"
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import localFont from "next/font/local"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

import { variant, variantx } from "@/lib/framer"
import { cn } from "@/lib/utils"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const neueMontreal = localFont({
  src: [
    {
      path: "../assets/fonts/PPNeueMontreal-Bold.otf",
      weight: "800",
      style: "bold",
    },
    {
      path: "../assets/fonts/PPNeueMontreal-Book.otf",
      weight: "400",
      style: "base",
    },
    {
      path: "../assets/fonts/PPNeueMontreal-Medium.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../assets/fonts/PPNeueMontreal-Thin.otf",
      weight: "300",
      style: "sm",
    },
  ],
  variable: "--font-neue-montreal",
  display: "swap",
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
          inter.className,
          neueMontreal.variable
        )}
      >
        {pathname !== "/" ? (
          <div className="container py-[3.5rem] lg:py-[5rem]">
            <motion.div initial="hidden" animate="visible" variants={variant}>
              <NavBar />
            </motion.div>
            <motion.div
              className="py-[2rem] lg:py-[2.5rem]"
              initial="pageInitial"
              animate="pageAnimate"
              variants={{
                pageInitial: { opacity: 0.5 },
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
