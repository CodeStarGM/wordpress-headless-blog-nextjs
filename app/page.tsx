import { fetchBlogPosts } from "../lib/fetchBlogPosts";
import Blogs from "../components/Blogs";

export default async function Home() {
  const posts = await fetchBlogPosts();

  return (
    <>
      <div className="lg:px-8 mx-auto bg-gray-50">
        <Blogs posts={posts} />
      </div>
    </>
  );
}
