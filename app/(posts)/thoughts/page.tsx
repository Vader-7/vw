import { getDatabase } from "@/lib/notion"
import { BlogCard } from "@/components/articles/BlogCard"

export const metadata = {
  title: "Thoughts",
}

export default async function ThoughtsPage() {
  const [staticData, dynamicData] = await Promise.all([
    getDatabase(),
    {
      next: {
        revalidate: 10,
      }
    },
  ])

  return (
    <div className="grid grid-cols-1 gap-7 lg:grid-cols-2 2xl:gap-12 ">
      {staticData.map((page) => (
        <BlogCard post={page} key={page.id} />
      ))}
    </div>
  )
}
