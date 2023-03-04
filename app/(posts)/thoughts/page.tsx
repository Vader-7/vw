import { getPostsByTag } from "@/lib/notion"
import { PostCard } from "@/components/articles/PostCard"

export const metadata = {
  title: "Thoughts",
}

export const revalidate = 60

export default async function ThoughtsPage() {
  const database = await getPostsByTag("Thoughts")

  return (
    <div className="grid grid-cols-1 gap-7 lg:grid-cols-2 2xl:gap-12 ">
      {database.map((page) => (
        <PostCard post={page} key={page.id} />
      ))}
    </div>
  )
}
