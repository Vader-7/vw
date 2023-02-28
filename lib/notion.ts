import { Client } from "@notionhq/client";
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import { Post } from "./interfaces";


const notion = new Client({
  auth: process.env.NOTION_ACCESS_TOKEN,
});


export const getAllPosts = async () => {
  const posts: QueryDatabaseResponse = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    page_size: 100,
    filter: {
      property: "Published",
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: "Date",
        direction: "descending",
      },
    ],
  });

  const allPosts = posts.results;

  return allPosts.map((post) => {
    return getPageMetaData(post as unknown as Post);
  });
};

const getPageMetaData = (post: Post) => {
  const getTags = (tags: { name: any; }[]) => {
    const allTags = tags.map((tag: { name: any; }) => {
      return tag.name;
    });

    return allTags;
  };

  return {
    id: post.id,
    title: post.properties.Name.title[0].plain_text,
    tags: getTags(post.properties.Tags.multi_select),
    description: post.properties.Description.rich_text[0]?.plain_text || "",
    date: getToday(post.properties.Date.last_edited_time),
    slug: post.properties.Slug.formula.string,
  };
};

const getToday = (datestring: string) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let date = new Date();

  if (datestring) {
    date = new Date(datestring);
  }

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  let today = `${month} ${day}, ${year}`;

  return today; //今日の日付を返す
};
