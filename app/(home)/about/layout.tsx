import { Footer } from "@/components/Footer"
import { NavBar } from "@/components/Navbar"

interface AboutLayoutProps {
    children: React.ReactNode
}

export const metadata = {
    title: 'About',
    description: 'About me',
}

export default function AboutLayout({ children }: AboutLayoutProps) {
    return (
        <div className="container py-[3rem]">
            <NavBar />
            <div className="py-[3rem]">
                {children}
            </div>
            <Footer />
        </div>
    )
}
