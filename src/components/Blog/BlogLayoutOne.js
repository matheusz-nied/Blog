import React from "react";
import Tag from "../Elements/Tag";
import Link from "next/link";
import Image from "next/image";

const BlogLayoutOne = ({ blog }) => {
  return (
    <div className="inline-block overflow-hidden rounded-xl">
      <div className="absolute top-0 bottom-0 left-0 right-0 h-full bg-gradient-to-b from-transparent from-50% to-dark/90 rounded-lg z-10"></div>
      <Image
        src={blog.image.filePath.replace("../public", "")}
        placeholder="blur"
        blurDataURL={blog.image.blurhashDataUrl}
        alt={blog.title}
        width={blog.image.width}
        height={blog.image.height}
        className="w-full h-full object-center object-cover rounded-lg -z-10"
      />
      <div className="absolute bottom-0 w-full p-10 z-20 ">
        <Tag link={`/categories/${blog.tags[0]}`} name={blog.tags[0]} className="px-6 text-sm py-2 !border" />
        <Link href={blog.url} className="mt-6">
          <h2 className="font-bold capitalize text-2xl text-light">
            <span className="">{blog.title}</span>
          </h2>
        </Link>
        <p className="inline-block mt-04 text-base font-in text-light opacity-70">{blog.description}</p>
      </div>
    </div>
  );
};

export default BlogLayoutOne;
