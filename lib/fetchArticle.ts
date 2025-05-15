import { ArticleProps } from "../types/articles";

export async function fetchArticle({
  slug,
}: {
  slug: string;
}): Promise<ArticleProps> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/posts/slug:${slug}`
  );

  if (!res.ok) {
    throw new Error("Unable to fetch articles!!!");
  }

  const data = await res.json();

  return data;
}
