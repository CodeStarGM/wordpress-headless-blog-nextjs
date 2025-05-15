// lib/fetchBlogPosts.ts
import { BlogsContent } from "../types/Blogs";

const API_URL = `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/posts`;

export async function fetchBlogPosts(): Promise<BlogsContent[]> {
  const res = await fetch(API_URL);

  if (!res.ok) {
    throw new Error("Failed to fetch blog posts");
  }

  const data = await res.json();

  const posts = data.posts.map((post: any) => ({
    ID: post.ID,
    title: post.title,
    featured_image: post.featured_image,
    date: post.date,
    content: post.content,
    slug: post.slug,
    author: {
      name: post.author.name,
      avatar_URL: post.author.avatar_URL,
    },
    tags: post.tags ? Object.values(post.tags).map((tag: any) => tag.name) : [],
  }));

  return posts;
}
