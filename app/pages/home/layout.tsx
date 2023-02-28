interface BlogLayoutProps {
    children: React.ReactNode
}

export const metadata = {
    title: 'App',
    description: 'xd',
}

export default function BlogLayout({ children }: BlogLayoutProps) {
    return (
        <div className="container grid place-items-center h-screen">
            {children}
        </div>
    )
}
