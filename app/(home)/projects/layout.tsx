import { Footer } from "@/components/Footer"
import { NavBar } from "@/components/Navbar"

interface ProjectsLayoutProps {
    children: React.ReactNode
}

export const metadata = {
    title: 'Projects',
    description: 'Some of the projects I have worked on',
}

export default function ProjectsLayout({ children }: ProjectsLayoutProps) {
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