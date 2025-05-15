import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <nav className="flex items-center bg-white shadow-md border-b justify-between p-4 text-gray-700">
      <div>
        <h3 className="font-bold text-lg">
          <span>Next</span>
          <span className="text-indigo-600">Press</span>
        </h3>
      </div>

      <div className="font-semibold cursor-pointer py-1 px-2 border border-black hover:bg-black transition-all duration-300 text-black hover:text-white rounded ">
        <Link
          href="https://github.com/CodeStarGM/wordpress-headless-blog-nextjs"
          className="flex items-center space-x-1"
        >
          <p>Give a</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-5 text-yellow-400"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
              clipRule="evenodd"
            />
          </svg>
          <p>on Github</p>
        </Link>
      </div>
    </nav>
  );
}
