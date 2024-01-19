import Image from "next/image";
import Link from "next/link";
import React from "react";
import { format } from "date-fns";

const BlogLayoutRecents = ({post}) => {
  return (
    <div className="flex flex-col items-center text-dark hover:scale-105 transition-all ease duration-500">
    <Link
      href={post.url}
      className="col-span-4 h-full overflow-hidden rounded-lg"
    >
      <Image
        src={post.image.filePath.replace("../public", "")}
        placeholder="blur"
        blurDataURL={post.image.blurhashDataUrl}
        alt={post.title}
        width={post.image.width}
        height={post.image.height}
        className="aspect-[4/3] w-full h-full object-cover object-center "
      />
    </Link>

    <div className="flex flex-col w-full mt-4">
      <Link href={post.url} className="inline-block my-1">
        <h2 className="font-semibold capitalize text-lg">
          <span className="">{post.title}</span>
        </h2>
      </Link>
      <div>

      <span className="uppercase text-accent font-semibold text-xs">
        {post.tags[0]}
      </span>
      </div>
      
      <span className="capitalize text-gray font-semibold text-base">
        {format(new Date(post.publishedAt), "dd MMMM, yyyy")}
      </span>
    </div>
  </div>
  )
}

export default BlogLayoutRecents