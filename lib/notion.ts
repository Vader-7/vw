import { Client } from '@notionhq/client'
import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';

const notion = new Client({
  auth: process.env.NOTION_ACCESS_TOKEN,
})

export const getDatabase = async () => {
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

  const getPageMetaData = (post) => {
    const getTags = (tags) => {
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
      date: post.properties.Date.last_edited_time,
      slug: post.properties.Slug.formula.string,
      cover: post.cover.external.url
    };
  };

  const allPosts = posts.results;

  return allPosts.map((post) => {
    return getPageMetaData(post);
  });
};

export const getPage = async (pageId: any) => {
  const response = await notion.pages.retrieve({ page_id: pageId })
  return response
}

export const getBlocks = async (blockId: any) => {
  const blocks = []
  let cursor
  while (true) {
    const { results, next_cursor }: any = await notion.blocks.children.list({
      start_cursor: cursor,
      block_id: blockId,
    })
    blocks.push(...results)
    if (!next_cursor) {
      break
    }
    cursor = next_cursor
  }
  return blocks
}


