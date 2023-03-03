'use client'

import { CC } from "@/components/CC";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/Navbar";
import "@/styles/globals.css";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ['latin'], variable: "--font-inter" });

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body
        className={`${inter.className}
           min-h-screen min-w-full bg-[#efefef] text-black antialiased dark:bg-[#0e0e0e] dark:text-white`}
      >
        {
          pathname !== "/" ? (
            <div className="container py-[3rem]">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={variant}
              >
                <NavBar />
              </motion.div>
              <motion.div
                className="py-[2rem]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 1, ease: "easeInOut", Animation: "spring" }}
                key={pathname}
              >
                {children}
              </motion.div>
              <Footer />
              <CC />
            </div>
          ) : (
            <>
              {children}
            </>
          )
        }
      </body>
    </html>
  );
}
