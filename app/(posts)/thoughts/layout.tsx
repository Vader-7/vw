'use client'

import { Footer } from "@/components/Footer"
import { NavBar } from "@/components/Navbar"
import { motion } from "framer-motion"

interface ThoughtsLayoutProps {
    children: React.ReactNode
}


export default function ThoughtsLayout({ children }: ThoughtsLayoutProps) {
    return (
        <div className="container py-[3rem]">
            <NavBar />
            <motion.div className="py-[3rem]"
                initial={{ opacity: 0.8 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0.8 }}
                transition={{ duration: 1 }}
            >
                {children}
            </motion.div>
            <Footer />
        </div>
    )
}