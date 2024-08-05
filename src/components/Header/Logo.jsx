import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import niedLogo from "/public/nied.png"
const Logo = () => {
  return (
    <Link href="/" className='flex items-center text-dark dark:text-light'>
    <div className='w-24 overflow-hidden  mr-3'>
        <Image src={niedLogo} alt='Nied Logo' className='w-auto h-full'/>
    </div>
    <span className='font-aw font-normal text-2xl md:text-3xl whitespace-nowrap'>Nied Blog</span>
    </Link>
  )
}

export default Logo