import React from "react";

export default function Footer() {
  return (
    <footer className="flex items-center bg-white shadow-lg border-t text-sm justify-center p-2 text-gray-700">
      <div>
        <h3>
          Crafted with
          <span className=" font-semibold hover:bg-black hover:text-white p-1 rounded">
            Next.js
          </span>
          & fueled by
          <span className=" font-semibold hover:bg-indigo-600 hover:text-white p-1 rounded">
            Wordpress
          </span>
        </h3>
      </div>
    </footer>
  );
}
