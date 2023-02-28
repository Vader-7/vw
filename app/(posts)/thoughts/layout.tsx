interface ThoughtsLayoutProps {
    children: React.ReactNode
}

export const metadata = {
    title: 'Thoughts',
    description: 'Some of the thoughts I have had.',
}

export default function ThoughtsLayout({ children }: ThoughtsLayoutProps) {
    return (
        <div className="h-screen flex items-center justify-center ">
            {children}
        </div>
    )
}