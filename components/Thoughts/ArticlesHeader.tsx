"use client";

import dayjs from "dayjs";
import React, { FunctionComponent, useEffect, useState } from "react";
import { IoSparklesSharp } from "react-icons/io5";

const localizedFormat = require("dayjs/plugin/localizedFormat");

export const ArticlesHeader: FunctionComponent<{ page: any }> = ({ page }) => {
  const [author, setAuthor] = useState<any>(
    page.properties.Author.people[0]?.name.split(" ")[0]
  );
  dayjs.extend(localizedFormat);

  const icon = <IoSparklesSharp className="text-black dark:text-white" />;
  useEffect(() => {
    if (author === undefined || author === null) {
      setAuthor(<>Notion&nbsp;{icon}</>);
    } else {
      setAuthor(author);
    }
  }, [page.properties.Author.people]);

  return (
    <h4 className="text-base font-medium text-slate-900 dark:text-slate-50 pb-[1rem]">
      {dayjs(page.last_edited_time).format("dddd D / MMM / YYYY")}
      <br />
      <span className="text-md flex items-center font-semibold">
        by&nbsp;{author}
      </span>
    </h4>
  );
};
