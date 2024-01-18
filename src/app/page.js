import FeaturedPosts from '@/components/Home/FeaturedPosts'
import HomeCoverSection from '@/components/Home/HomeCoverSection'
import {allBlogs} from 'contentlayer/generated'
import Image from 'next/image'

export default function Home() {
  
  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCoverSection blogs={allBlogs}/>
      <FeaturedPosts blogs={allBlogs}/>
    </main>
  )
}
