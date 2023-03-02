import { BlogCard } from "@/components/Thoughts/BlogCard"
import { getDatabase } from "@/lib/notion"


export default async function ThoughtsPage() {
    const database = await getDatabase()
    return (
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-2 2xl:gap-12 ">
            {
                database.map((page) => (
                    <BlogCard post={page} key={page.id} />
                ))
            }
        </div>
    )
}