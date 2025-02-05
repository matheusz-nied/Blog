
import { format, parseISO } from 'date-fns'
import { slug } from 'github-slugger'
import Link from 'next/link'
import React from 'react'

const BlogDetails = ({blog, slug: blogSlug}) => {
  return (
    <div className='px-10 text-dark dark:text-light py-2 justify-around flex flex-col lg:flex-row text-lg font-small mx-5 opacity-80'>
    <time className='md:m-3'>
        {format(parseISO(blog.publishedAt), "d LLLL, yyyy")}
    </time>
    <span className='md:m-3'>
        {blog.readingTime.text}
    </span>
    {/* <Link href={`/categories/${slug(blog.tags[0])}`} className='md:m-3'>
        #{slug(blog.tags[0])}
    </Link> */}
</div>

  )
}

export default BlogDetails