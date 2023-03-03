'use client'

import { CC } from "@/components/CC";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/Navbar";
import "@/styles/globals.css";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import { IBM_Plex_Sans } from "next/font/google";
import { IBM_Plex_Mono } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import { Fira_Code } from "next/font/google";
import { usePathname } from "next/navigation";
import { metadata } from "./(home)/about/page";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans",
});
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-mono",
});
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-jetbrains-mono",
});
const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-fira-code",
});

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
        className={`${ibmPlexSans.className} min-h-screen min-w-full bg-[#efefef] text-black antialiased dark:bg-[#0e0e0e] dark:text-white`}
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
                initial={{ opacity: 0.8 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0.5 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
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
