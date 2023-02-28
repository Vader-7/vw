interface AboutLayoutProps {
    children: React.ReactNode
}

export const metadata = {
    title: 'About',
    description: 'About me.',
}

export default function BlogLayout({ children }: AboutLayoutProps) {
    return (
        <div className="flex items-center justify-center h-screen ">
            {children}
        </div>
    )
}
