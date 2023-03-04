export const metadata = {
  title: "About",
}

interface AboutLayoutProps {
  children?: React.ReactNode
}

export default function AboutLayout({
  children,
}: {
  children: AboutLayoutProps
}) {
  return <> {children} </>
}
