import { Fragment } from "react"
import { Metadata } from "next"

import { getBlocks, getDatabase, getPage } from "@/lib/notion"
import { ArticlesHeader } from "@/components/articles/ArticlesHeader"
import { renderBlock } from "@/components/articles/Types"

interface ProjectProps {
  params: {
    id: string[]
  }
}

export async function generateMetadata({
  params,
}: ProjectProps): Promise<Metadata> {
  const data = await getDatabase()
  const page = data.find((page) => page.id === params.id)
  return {
    title: page?.title,
  }
}

export async function generateStaticParams(): Promise<
  ProjectProps["params"][]
> {
  const pages = await getDatabase()
  const ids = pages.map((page) => page.id)
  return ids.map((id) => ({ id: id }))
}
export const revalidate = 60

export default async function ProjectPage({ params }: ProjectProps) {
  const { id } = params
  const page = await getPage(id)
  const blocks = await getBlocks(page.id)
  return (
    <>
      <ArticlesHeader page={page} />
      <article>
        {blocks.map((block: any) => (
          <Fragment key={block.id}>{renderBlock(block)}</Fragment>
        ))}
      </article>
    </>
  )
}
