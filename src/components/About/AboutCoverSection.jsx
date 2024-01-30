import Image from 'next/image'
import React from 'react'
import astronautaCharacter from "public/astronauta.png"
import Link from 'next/link'

const AboutCoverSection = () => {
  return (
    <section className='w-full md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light'>

<div className='w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16'>
            <h2 className='font-bold capitalize text-4xl xs:text-5xl sxl:text-6xl  text-center lg:text-left'>
            Dream Big, Work Hard, Achieve More!
            </h2>
            <p className='font-medium capitalize mt-4 text-base'>
            This Mantra Drives My Work As A Passionate Freelancer. I Blend Innovative Technology With Timeless Design For Captivating Digital Experiences. Inspired By Nature And Literature, I'm A Perpetual Learner Embracing Challenges. With Each Project, I Aim To Leave A Lasting Impact—One Pixel At A Time.
            </p>
            <h3 className="mt-8 font-semibold text-lg md:text-2xl self-start mx-5 xs:mx-5 sm:mx-6 md:mx-8 lg:mx-12 text-dark dark:text-light dark:font-normal"> 
      Have a project in mind? Reach out to me 📞 from <Link href="/contact"  className="!underline underline-offset-2"   >here</Link> and let's make it happen.
      </h3>
        </div>
    </section>
  )
}

export default AboutCoverSection