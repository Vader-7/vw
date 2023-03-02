import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { Fragment } from 'react'

import { getBlocks, getDatabase, getPage } from '@/lib//notion'
import { cn } from '@/lib/utils'
import { GetStaticPropsResult } from 'next'


interface TextProps {
  text: any
}

export const Text: React.FC<TextProps> = ({ text }) => {
  if (!text) {
    return null
  }
  return (
    <>
      {text.map(
        (
          value: {
            annotations: {
              bold: any
              code: any
              color: any
              italic: any
              strikethrough: any
              underline: any
            }
            text: any
          },
          index: React.Key | null | undefined,
        ) => {
          const {
            annotations: {
              bold,
              code,
              color,
              italic,
              strikethrough,
              underline,
            },
            text,
          } = value
          return (
            <span
              key={index}
              className={cn(
                bold && 'font-bold',
                italic && 'italic',
                underline && 'underline',
                strikethrough && 'line-through',
                code && 'font-mono',
                color && `text-${color}`,
              )}
            >
              {text.link ? (
                <a
                  href={text.link.url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {text.content}
                </a>
              ) : (
                text.content
              )}
            </span>
          )
        },
      )}
    </>
  )
}

export const renderNestedList = (block: any) => {
  const { type } = block
  const value = block[type]
  if (!value) {
    return null
  }

  const isNumberedList = value.children[0].type === 'numbered_list_item'

  if (isNumberedList) {
    return (
      <ol className='my-6 ml-6 list-disc [&>li]:mt-2'>
        {value.children.map((block: any) => renderBlock(block))}
      </ol>
    )
  }
  return (
    <ul className='my-6 ml-6 list-disc [&>li]:mt-2'>
      {value.children.map((block: any) => renderBlock(block))}
    </ul>
  )
}

export const renderBlock = (block: any) => {
  const { type } = block
  const value = block[type]
  if (!value) {
    return null
  }

  switch (type) {
    case 'paragraph':
      return (
        <p className='text-sm leading-5 md:text-base md:leading-7 [&:not(:first-child)]:mt-6'>
          <Text text={value.text} />
        </p>
      )
    case 'heading_1':
      return (
        <h1 className='scroll-m-20 text-4xl font-medium tracking-tight drop-shadow-sm lg:text-5xl'>
          <Text text={value.text} />
        </h1>
      )
    case 'heading_2':
      return (
        <h2 className='mt-10 scroll-m-20 border-b-[2px] border-zinc-800 pb-2 text-3xl font-semibold tracking-tight drop-shadow-sm transition-colors first:mt-0 dark:border-b-zinc-200'>
          <Text text={value.text} />
        </h2>
      )
    case 'heading_3':
      return (
        <h3 className='mt-8 scroll-m-20 text-2xl font-semibold tracking-tight drop-shadow-sm'>
          <Text text={value.text} />
        </h3>
      )
    case 'heading_4':
      return (
        <h4 className='mt-8 scroll-m-20 text-xl font-semibold tracking-tight'>
          <Text text={value.text} />
        </h4>
      )
    case 'bulleted_list_item':
    case 'numbered_list_item':
      return (
        <li>
          <Text text={value.text} />
        </li>
      )
    case 'table_of_contents':
      return (
        <div>
          <Text text={value.title} />
          <ul>
            {value.items.map((item: any) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
      )
    case 'LargeText':
      return (
        <div className='text-lg font-semibold text-slate-900 dark:text-slate-50'>
          <Text text={value.text} />
        </div>
      )
    case 'SmallText':
      return (
        <div className='text-sm font-medium leading-none'>
          <Text text={value.text} />
        </div>
      )

    case 'SubText':
      return (
        <div className='text-sm text-slate-500 dark:text-slate-400'>
          <Text text={value.text} />
        </div>
      )

    case 'bulleted_list':
    case 'numbered_list':
      return renderNestedList(block)
    case 'to_do':
      return (
        <div>
          <input type='checkbox' checked={value.checked} readOnly />
          <Text text={value.text} />
        </div>
      )
    case 'toggle':
      return (
        <details>
          <summary>
            <Text text={value?.text} />
          </summary>
          {value?.children?.map((block: any) => renderBlock(block))}
        </details>
      )
    case 'child_page':
      return (
        <div>
          <Link href={`/${value.title}`}> {value.title} </Link>
        </div>
      )
    case 'image':
      const src =
        value.type === 'external' ? value.external.url : value.file.url
      const caption = value.caption ? value.caption[0].plain_text : ''
      return (
        <figure className='py-8'>
          <div className='shadow-3xl drop-shadow-2xl'>
            <Image
              src={src}
              alt={caption}
              width={2000}
              height={2000}
              priority
              className='min-w-full'
            />
          </div>
          {caption && (
            <figcaption className='leading-sm p-2 text-sm font-medium'>
              {caption}
            </figcaption>
          )}
        </figure>
      )
    case 'video':
      const videoSrc =
        value.type === 'external' ? value.external.url : value.file.url
      return (
        <div className='min-w-max'>
          <video controls>
            <source src={videoSrc} />
          </video>
          <Text text={value.caption} />
        </div>
      )
    case 'embed':
      return (
        <div>
          <iframe src={value.embed.url} width='100%' height='400px' />
          <Text text={value.caption} />
        </div>
      )
    case 'quote':
      return (
        <blockquote className='mt-6 border-l-2 border-slate-300 pl-6 italic text-slate-800 dark:border-slate-600 dark:text-slate-200'>
          <Text text={value.text} />
          <Text text={value.caption} />
        </blockquote>
      )
    case 'callout':
      return (
        <div>
          <Text text={value.icon} />
          <Text text={value.text} />
        </div>
      )
    case 'divider':
      return <hr />
    case 'bookmark':
      return (
        <div>
          <Text text={value.caption} />
        </div>
      )
    case 'equation':
      return (
        <div className='min-w-full'>
          <Image
            src={value.url}
            alt={value.expression}
            width={500}
            height={500}
          />
          <Text text={value.expression} />
        </div>
      )
    default:
      return (
        <div>
          <pre>{JSON.stringify(block, null, 2)}</pre>
        </div>
      )
  }
}

interface PageProps {
  params: {
    id: any[]
  }
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
  const pages = await getDatabase()
  console.log(pages.map((page) => page.id))
  const ids = pages.map((page) => page.id)
  return ids.map((id) => ({ id: id }))
}


export default async function PostPage({ params }: PageProps) {
  const id = params.id
  console.log(id)
  const page = await getPage(id)
  const blocks = await getBlocks(page.id)
  console.log(page)
  return (
    <div className='prose dark:prose-dark'>
      <h1 className='text-4xl font-bold'>xd</h1>
    </div>
  )
}