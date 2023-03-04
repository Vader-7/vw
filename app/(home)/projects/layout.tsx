export const metadata = {
  title: "Projects",
}

interface ProjectsLayoutProps {
  children?: React.ReactNode
}

export default function AboutLayout({
  children,
}: {
  children: ProjectsLayoutProps
}) {
  return <> {children} </>
}
