import { Post } from "@/lib/interfaces"
import { getAllPosts } from "@/lib/notion"


export default async function ThoughtsPage() {
    let posts = await getAllPosts()
    return (
        <div className="text-5xl">
            {posts.map((post: any) => (
                <div key={post.id}>{post.title}</div>
            ))}
        </div>
    )
}