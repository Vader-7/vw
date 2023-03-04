export const metadata = {
  title: "Projects",
}

interface ProjectsLayoutProps {
  children?: React.ReactNode
}

export default function ProjectsLayout({ children }: ProjectsLayoutProps) {
  return <> {children} </>
}
