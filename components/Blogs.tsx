import Link from "next/link";
import { BlogsContent } from "../types/Blogs";
import Image from "next/image";

type BlogsProps = {
  posts: BlogsContent[];
};

export default function Blogs({ posts }: BlogsProps) {
  return (
    <div className="relative bg-gray-50 px-6 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
      <div className="absolute inset-0">
        <div className="h-1/3  sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            A Headless Blog with Next.js + WordPress
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text text-gray-500 sm:mt-4">
            NextPress is a blog application built entirely with Next.js 14,
            where blog posts are fetched from a WordPress site via its REST API.
            WordPress is used only as a headless CMS to manage and publish
            content, while the frontend handles fetching and rendering,{" "}
            <span className="text-gray-700">
              giving you speed, flexibility, and modern developer tooling.
            </span>
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.title}
              href={`/article/${post.slug}`}
              className="mt-2 block group"
            >
              <div className="flex flex-col overflow-hidden rounded-xl shadow-md py-2.5 px-2 bg-white">
                <div className="shrink-0 overflow-hidden rounded-xl">
                  <Image
                    alt=""
                    src={post.featured_image}
                    width={600}
                    height={200}
                    className="h-48 w-full rounded-xl object-cover group-hover:scale-110 transition-all duration-300"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-3">
                  <div className="flex-1">
                    <p className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </p>
                  </div>
                  <div className="mt-3 flex items-center">
                    <div className="shrink-0">
                      <img
                        alt=""
                        src={post.author.avatar_URL}
                        className="size-10 rounded-full"
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        {post.author.name}
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={post.date}>
                          {" "}
                          {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </time>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
