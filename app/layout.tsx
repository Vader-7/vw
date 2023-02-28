import "@/styles/globals.css"
import { Inter } from 'next/font/google'
import { Poppins } from 'next/font/google'
import { IBM_Plex_Sans } from 'next/font/google'
import { IBM_Plex_Mono } from 'next/font/google'
import { JetBrains_Mono } from 'next/font/google'
import { Fira_Code } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: "--font-inter" })
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] })
const ibmPlexSans = IBM_Plex_Sans({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700'] })
const ibmPlexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700'] })
const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700'] })
const firaCode = Fira_Code({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${ibmPlexSans.className} min-h-screen`}>{children}</body>
    </html>
  )
}
