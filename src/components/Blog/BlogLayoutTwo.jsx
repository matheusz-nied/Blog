import Image from "next/image";
import Link from "next/link";
import React from "react";
import Tag from "../Elements/Tag";
import { format } from "date-fns";

const BlogLayoutTwo = ({ blog }) => {
  return (
    <div className="grid grid-cols-12 gap-4 items-center text-dark dark:text-light hover:scale-[102%] transition-all ease duration-500">
      <Link
        href={blog.url}
        className="col-span-12 lg:col-span-4 h-full overflow-hidden rounded-lg"
      >
        <Image
          src={blog.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          width={blog.image.width}
          height={blog.image.height}
          className="aspect-square w-full h-full object-cover object-center"
        />
      </Link>

      <div className="col-span-12 lg:col-span-8 w-full">
        <Link href={blog.url} className="inline-block my-1">
          <h2 className="font-semibold capitalize text-base sm:text-lg ">
            <span className="">{blog.title}</span>
          </h2>
        </Link>
        <div>
          <span className="uppercase text-accent font-semibold text-xs">
            {blog.tags[0]}
          </span>
        </div>

        <span className="capitalize text-gray dark:text-light/50 font-semibold text-sm sm:text-base">
          {format(new Date(blog.publishedAt), "dd MMMM, yyyy")}
        </span>
      </div>
    </div>
  );
};

export default BlogLayoutTwo;
