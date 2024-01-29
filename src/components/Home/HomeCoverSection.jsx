import { sortBlogs } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Tag from "../Elements/Tag";
import { slug } from "github-slugger";

const HomeCoverSection = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  const blog = sortedBlogs[0];
  console.log(blog);
  return (
    <div className="w-full inline-block">
      <article className="flex flex-col items-start justify-end mx-24 relative h-[85vh]">
        <div className="absolute top-0 bottom-0 left-0 right-0 h-full bg-gradient-to-b from-transparent from-50% to-dark/90 rounded-lg z-0"></div>
        <Image
          src={blog.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          fill
          className="w-full h-full object-center object-cover rounded-lg -z-10"
        />
        <div className="w-3/4 p-16 flex flex-col items-start justify-center z-0 text-light">
          <Tag link={`/categories/${slug(blog.tags[0])}`} name={slug(blog.tags[0])} />
          <Link href={blog.url} className="mt-6">
            <h1 className="font-bold capitalize text-4xl">
                <span className="">

                {blog.title}
                </span>
                </h1>
          </Link>
          <p className="inline-block mt-04 text-xl font-in"
          >{blog.description}</p>
        </div>
      </article>
    </div>
  );
};

export default HomeCoverSection;
