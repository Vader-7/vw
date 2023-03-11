export const metadata = {
  title: "Ty's Portfolio",
  description: "Some of my projects",
}

interface HomeLayoutProps {
  children?: React.ReactNode
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return <> {children} </>
}
