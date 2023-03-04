import React, { Fragment } from "react"
import { Metadata } from "next"

import { getBlocks, getDatabase, getPage } from "@/lib/notion"
import { ArticlesHeader } from "@/components/articles/ArticlesHeader"
import { renderBlock } from "@/components/articles/Types"

interface PageProps {
  params: {
    id: string[]
  }
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const data = await getDatabase()
  const page = data.find((page) => page.id === params.id)
  return {
    title: page?.title,
  }
}
export const revalidate = 60

export async function generateStaticParams(): Promise<PageProps["params"][]> {
  const pages = await getDatabase()
  const ids = pages.map((page) => page.id)
  return ids.map((id) => ({ id: id }))
}

export default async function PostPage({ params }: PageProps) {
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
