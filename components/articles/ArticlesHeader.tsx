"use client"

import React, { FunctionComponent, useEffect, useState } from "react"
import dayjs from "dayjs"
import { IoSparklesSharp } from "react-icons/io5"
import { motion } from "framer-motion"

const localizedFormat = require("dayjs/plugin/localizedFormat")

const staggerChildren = {
  hidden: {
    x: -10,
    opacity: 0,
  },
  visible: {
    x: 0,
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
      <h4 className="text-base font-medium text-slate-900 dark:text-slate-50 pb-[1rem]">
        {dayjs(page.last_edited_time).format("dddd D / MMM / YYYY")}
        <br />
        <span className="text-md flex items-center font-semibold">
          by&nbsp;{author}
        </span>
      </h4>
    </motion.div>
  )
}
