export const metadata = {
  title: "Ty's Portfolio",
  description: "Works of Ty",
}

interface HomeLayoutProps {
  children?: React.ReactNode
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return <> {children} </>
}
