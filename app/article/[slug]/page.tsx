import { fetchArticle } from "@/lib/fetchArticle";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Article({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await fetchArticle({ slug });

  const { title, featured_image, date, content, author } = data;
  return (
    <>
      <div className="max-w-5xl mx-auto bg-gray-50 py-10 mt-4 lg:py-20 space-y-8 px-4">
        <div>
          <div className="p-2 mb-4 rounded-md border bg-white hover:bg-gray-100 cursor-pointer w-fit">
            <Link href="/" className="w-full h-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                />
              </svg>
            </Link>
          </div>
          <h1 className="text-5xl font-bold text-gray-700">{title}</h1>
          <div className="mt-6 flex items-center">
            <div className="shrink-0">
              <img
                alt=""
                src={author.avatar_URL}
                className="size-10 rounded-full"
              />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">{author.name}</p>
              <div className="flex space-x-1 text-sm text-gray-500">
                <time dateTime={date}>
                  {" "}
                  {new Date(date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          {" "}
          <Image
            src={featured_image}
            width={1200}
            height={600}
            className="rounded-xl"
            alt={slug}
          />
        </div>

        <div
          className="prose max-w-none prose-headings:scroll-mt-20 prose-p:text-gray-700"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </>
  );
}
