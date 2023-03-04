import { getPostsByTag } from "@/lib/notion"
import { ProjectCard } from "@/components/articles/ProjectCard"

export const metadata = {
  title: "Projects",
}
export const revalidate = 60

export default async function ProjectsPage() {
  const posts = await getPostsByTag("Projects")
  return (
    <div>
      {posts.map((page) => (
        <ProjectCard post={page} key={page.id} />
      ))}
    </div>
  )
}
