import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import niedLogo from "/public/nied-logo.png"
const Logo = () => {
  return (
    <Link href="/" className='flex items-center text-dark'>
    <div className='w-16 overflow-hidden  mr-3'>
        <Image src={niedLogo} alt='Nied Logo' className='w-full h-auto'/>
    </div>
    <span className='font-bold text-2xl'>Nied Blog</span>
    </Link>
  )
}

export default Logo