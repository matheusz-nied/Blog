import React from "react";
import Tag from "../Elements/Tag";
import Link from "next/link";
import Image from "next/image";
import { slug } from "github-slugger";

const BlogLayoutOne = ({ blog }) => {
  return (
    <div className="groupinline-block overflow-hidden rounded-sm">
      <div className="absolute top-0 bottom-0 left-0 right-0 h-full bg-gradient-to-b from-transparent from-50% to-dark/90 rounded-lg "></div>
      <Link
        href={blog.url}
        className="col-span-4 h-full overflow-hidden rounded-lg"
      >
        <Image
          src={blog.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          width={blog.image.width}
          height={blog.image.height}
          className="w-full h-full object-center object-cover rounded-md group-hover:scale-105 transition-all ease duration-300"
          sizes="(max-width: 1180px) 100vw, 50vw"
        />
      </Link>

      <div className="absolute bottom-0 p-4 xs:p-6 sm:p-10 w-full">
        <Tag
          link={`/categories/${slug(blog.tags[0])}`}
          name={slug(blog.tags[0])}
          className="px-6 text-xs sm:text-sm py-1 sm:py-2 !border"
        />
        <Link href={blog.url} className="mt-6">
          <h2 className="font-bold capitalize text-base xs:text-base sm:text-xl md:text-2xl text-light mt-2 sm:mt-4">
            <span className="">{blog.title}</span>
          </h2>
        </Link>
        <p className="inline-block mt-04 text-base font-in text-light opacity-70">
          {blog.description}
        </p>
      </div>
    </div>
  );
};

export default BlogLayoutOne;
