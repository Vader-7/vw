import { BlogCard } from "@/components/BlogCard"
import { getDatabase } from "@/lib/notion"
import Link from "next/link"


export const metadata = {
    title: 'Thoughts',
    description: 'Some of the thoughts I have had.',
}


export default async function ThoughtsPage() {
    const database = await getDatabase()
    console.log(database.map((page) => page.slug))
    return (
        <div className="text-5xl">
            {database.map((page) => (
                <BlogCard post={page} key={page.id} />
            ))}
        </div>
    )
}