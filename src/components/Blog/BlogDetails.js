
import { format, parseISO } from 'date-fns'
import Link from 'next/link'
import React from 'react'

const BlogDetails = ({blog, slug}) => {
  return (
    <div className='px-10 bg-accent text-light py-2 items-center justify-around flex-wrap text-lg font-medium mx-5 rounded-md'>
        <time className='m-3'>
            {format(parseISO(blog.publishedAt), "d LLLL, yyyy")}
        </time>
        <span className='m-3'>10 views</span>
        <span className='m-3'>
            {blog.readingTime.text}
        </span>
        <Link href={`/categories/${blog.tags[0]}`} className='m-3'>
            #{blog.tags[0]}
        </Link>
    </div>
  )
}

export default BlogDetails