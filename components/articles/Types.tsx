import Image from "next/image"
import Link from "next/link"
import { Github } from "lucide-react"

import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"

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
          index: React.Key | null | undefined
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
                bold && "font-bold",
                italic && "italic",
                underline && "underline",
                strikethrough && "line-through",
                code && "font-mono",
                color && `text-${color}`
              )}
            >
              {text.link ? (
                <a
                  href={text.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {text.content}
                </a>
              ) : (
                text.content
              )}
            </span>
          )
        }
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

  const isNumberedList = value.children[0].type === "numbered_list_item"

  if (isNumberedList) {
    return (
      <ol className="my-6 ml-6 list-disc [&>li]:mt-2">
        {value.children.map((block: any) => renderBlock(block))}
      </ol>
    )
  }
  return (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
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
    case "paragraph":
      return (
        <p className="text-sm leading-5 md:text-base md:leading-7 [&:not(:first-child)]:mt-6">
          <Text text={value.rich_text} />
        </p>
      )
    case "heading_1":
      return (
        <h1 className="text-4xl font-medium tracking-tight drop-shadow-sm lg:text-5xl">
          <Text text={value.rich_text} />
        </h1>
      )
    case "heading_2":
      return (
        <h2 className="mt-10 scroll-m-20 border-b border-b-zinc-300 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 dark:border-b-zinc-600">
          <Text text={value.rich_text} />
        </h2>
      )
    case "heading_3":
      return (
        <h3 className="mt-8 text-2xl font-semibold tracking-tight drop-shadow-sm">
          <Text text={value.rich_text} />
        </h3>
      )
    case "heading_4":
      return (
        <h4 className="mt-8 text-xl font-semibold tracking-tight">
          <Text text={value.rich_text} />
        </h4>
      )
    case "bulleted_list_item":
    case "numbered_list_item":
      return (
        <li>
          <Text text={value.rich_text} />
        </li>
      )
    case "table_of_contents":
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
    case "LargeText":
      return (
        <div className="text-lg font-semibold text-slate-900 dark:text-slate-50">
          <Text text={value.rich_text} />
        </div>
      )
    case "SmallText":
      return (
        <div className="text-sm font-medium leading-none">
          <Text text={value.rich_text} />
        </div>
      )

    case "SubText":
      return (
        <div className="text-sm text-slate-500 dark:text-slate-400">
          <Text text={value.rich_text} />
        </div>
      )

    case "code":
      return (
        <pre className="p-4 shadow-lg text-sm drop-shadow-lg backdrop-blur-xl bg-zinc-50 dark:bg-zinc-900">
          <code className="text-black dark:text-white">
            <Text text={value.rich_text} />
          </code>
        </pre>
      )
    case "link_preview":
      return (
        <div className="flex w-full items-center justify-start py-5">
          <a
            href={value.url}
            target="_blank"
            className="text-md font-bold font-mono transition-colors duration-1000 hover:text-zinc-400 flex gap-2"
          >
            GitHub <Github size={20} />
          </a>
        </div>
      )
    case "bulleted_list":
    case "numbered_list":
      return renderNestedList(block)
    case "to_do":
      return (
        <div>
          <input type="checkbox" checked={value.checked} readOnly />
          <Text text={value.rich_text} />
        </div>
      )
    case "toggle":
      return (
        <details>
          <summary>
            <Text text={value?.rich_text} />
          </summary>
          {value?.children?.map((block: any) => renderBlock(block))}
        </details>
      )
    case "child_page":
      return (
        <div>
          <Link href={`/${value.title}`}> {value.title} </Link>
        </div>
      )
    case "image":
      const src =
        value.type === "external" ? value.external.url : value.file.url
      const caption = value.caption ? value.caption[0].plain_text : ""
      return (
        <figure className="py-5">
          <div className="shadow-3xl drop-shadow-2xl">
            <Image
              src={src}
              alt={caption}
              width={1000}
              height={1000}
              priority
              className="min-w-full"
            />
          </div>
          {caption && (
            <figcaption className="leading-sm p-2 text-sm font-medium">
              {caption}
            </figcaption>
          )}
        </figure>
      )
    case "video":
      const videoSrc =
        value.type === "external" ? value.external.url : value.file.url
      return (
        <div className="min-w-max">
          <video controls>
            <source src={videoSrc} />
          </video>
          <Text text={value.caption} />
        </div>
      )
    case "embed":
      return (
        <div>
          <iframe src={value.embed.url} width="100%" height="400px" />
          <Text text={value.caption} />
        </div>
      )
    case "quote":
      return (
        <blockquote className="mt-6 border-l-2 border-zinc-300 pl-6 italic dark:border-zinc-700">
          <Text text={value.rich_text} />
          <Text text={value.caption} />
        </blockquote>
      )
    case "callout":
      return (
        <div>
          <Text text={value.icon} />
          <Text text={value.rich_text} />
        </div>
      )
    case "divider":
      return <Separator />
    case "bookmark":
      return (
        <div>
          <Text text={value.caption} />
        </div>
      )
    case "equation":
      return (
        <div className="min-w-full">
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
