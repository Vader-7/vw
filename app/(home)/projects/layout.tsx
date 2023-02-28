interface ProjectsLayoutProps {
    children: React.ReactNode
}

export const metadata = {
    title: 'Projects',
    description: 'Some of the projects I have worked on.',
}

export default function BlogLayout({ children }: ProjectsLayoutProps) {
    return (
        <div className="h-screen flex items-center justify-center ">
            {children}
        </div>
    )
}