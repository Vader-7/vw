'use client'

import { CC } from "@/components/CC";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/Navbar";
import { AnimatePresence, motion } from "framer-motion";

interface ThoughtsLayoutProps {
  children: React.ReactNode;
}

export default function ThoughtsLayout({ children }: ThoughtsLayoutProps) {
  return (
    <div className="container py-[3rem]">
      <NavBar />
      <AnimatePresence mode='popLayout' >
        <motion.div
          className="py-[2rem]"
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
      <Footer />
      <CC />
    </div>
  );
}
