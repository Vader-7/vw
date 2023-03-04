export const metadata = {
  title: "Ty's Portfolio",
}

interface HomeLayoutProps {
  children?: React.ReactNode
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return <> {children} </>
}
