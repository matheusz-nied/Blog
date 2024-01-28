"use client";
import React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import  Image  from "next/image";

const mdxComponents = {
  Image,
};

const RenderMdx = ({ post }) => {
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <div className="font-in prose prose-lg max-w-screen-lg
    prose-blockquote:bg-accent/20
    prose-blockquote:py-1
    prose-blockquote:px-6
    prose-blockquote:rounded
    prose-blockquote:border-accent
    prose-li:marker:text-accent

    "
    >
        <MDXContent components={mdxComponents} />
    </div>
  );
};

export default RenderMdx;
