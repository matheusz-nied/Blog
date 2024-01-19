import { sortBlogs } from "@/utils";
import React from "react";
import BlogLayoutOne from "../Blog/BlogLayoutOne";
import BlogLayoutTwo from "../Blog/BlogLayoutTwo";
import Link from "next/link";
import BlogLayoutRecents from "../Blog/BlogLayoutRecents";

const RecentPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);

  return (
    <section className="w-full mt-32 px-32 flex flex-col items-center justify-center">
      <div className="flex w-full justify-between">
        <h2 className=" inline-block font-bold capitalize text-4xl">
          Posts Recents
        </h2>
        <Link
          href="categories/all"
          className="inline-block font-medium text-accent underline text-lg"
        >
          ver todos
        </Link>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 gap-16 mt-16">
        {sortedBlogs.slice(5, 11).map((blog, index) => {
          return (
            <article className="col-span-1 row-span-1 relative">
              <BlogLayoutRecents post={blog} />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default RecentPosts;
