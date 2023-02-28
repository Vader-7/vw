import { Key, ReactNode } from "react";

export interface Post {
  properties: any;
  id: Key | null | undefined;
  title: ReactNode;
  PageId: string;
  Title: string;
  Slug: string;
  Date: string;
  Tags: SelectProperty[];
  Excerpt: string;
  FeaturedImage: string | null;
  Rank: number;
}

export interface SelectProperty {
  id: string;
  name: string;
  color: string;
}
