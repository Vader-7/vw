"use client"

import React, { FunctionComponent, useEffect, useState } from "react"
import Link from "next/link"
import dayjs from "dayjs"
import { motion } from "framer-motion"
import { ChevronLeft } from "lucide-react"
import { IoSparklesSharp } from "react-icons/io5"

const localizedFormat = require("dayjs/plugin/localizedFormat")

const staggerChildren = {
  hidden: {
    y: -10,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
}

export const ArticlesHeader: FunctionComponent<{ page: any }> = ({ page }) => {
  const [author, setAuthor] = useState<any>(
    page.properties.Author.people[0]?.name.split(" ")[0]
  )
  dayjs.extend(localizedFormat)

  const icon = <IoSparklesSharp className="text-black dark:text-white" />
  useEffect(() => {
    if (author === undefined || author === null) {
      setAuthor(<>Notion&nbsp;{icon}</>)
    } else {
      setAuthor(author)
    }
  }, [page.properties.Author.people])

  return (
    <motion.div variants={staggerChildren}>
      <div className="pb-[1rem]">
        <h4 className="text-base font-medium text-slate-900 dark:text-slate-50">
          {dayjs(page.last_edited_time).format("dddd D / MMM / YYYY")}
        </h4>
        <div className="flex gap-[0.5rem] items-center lg:px-2 px-1">
          <span className="text-md flex w-full justify-start items-center font-semibold">
            {author}
          </span>
          <Link
            href={`/${page.properties.Tags.multi_select[0].name
              .split(" ")[0]
              .toLowerCase()}`}
            className="text-sm font-semibold flex w-fit justify-end transition-colors duration-1000 hover:text-zinc-400 items-center gap-2 font-jetBrains z-50"
          >
            <ChevronLeft size={16} />
            {page.properties.Tags.multi_select[0].name.split(" ")[0]}
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
