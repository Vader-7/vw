interface AboutLayoutProps {
    children: React.ReactNode
}

export const metadata = {
    title: 'About',
    description: 'About me.',
}

export default function AboutLayout({ children }: AboutLayoutProps) {
    return (
        <>
            <div className="container min-h-screen pt-[5rem]">
                {children}
            </div>
        </>
    )
}
