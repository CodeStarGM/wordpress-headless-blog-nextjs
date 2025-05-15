export type ArticleProps = {
  ID: number;
  author: {
    name: string;
    avatar_URL?: string;
  };
  featured_image: string;
  title: string;
  slug: string;
  date: string; // or Date if you parse it
  content: string;
  tags?: string[];
};
