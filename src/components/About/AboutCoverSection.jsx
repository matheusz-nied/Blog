import Image from 'next/image'
import React from 'react'
import astronautaCharacter from "public/astronauta.png"
import Link from 'next/link'

const AboutCoverSection = () => {
  return (
    <section className='w-full md:h-[75vh] border-b-2 border-solid border-dar flex flex-col md:flex-row items-center justify-center text-dark'>
        <div className='w-full md:w-1/2 h-full border-r-2 border-solid border-dar flex justify-center items-center'> 
            <Image src={astronautaCharacter} alt="CodeBucks" 
            className='w-4/5  xs:w-3/4 md:w-full h-3/4 object-contain object-center'
            priority
            sizes="(max-width: 768px) 100vw,(max-width: 1180px) 50vw, 50vw"
            />
        </div>

        <div className='w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16'>
            <h2 className='font-bold capitalize text-4xl xs:text-5xl sxl:text-6xl  text-center lg:text-left'>
            Dream Big, Work Hard, Achieve More!
            </h2>
            <p className='font-medium capitalize mt-4 text-base'>
            This Mantra Drives My Work As A Passionate Freelancer. I Blend Innovative Technology With Timeless Design For Captivating Digital Experiences. Inspired By Nature And Literature, I'm A Perpetual Learner Embracing Challenges. With Each Project, I Aim To Leave A Lasting Impact—One Pixel At A Time.
            </p>
            <div>
            <h2 className="mt-14 font-semibold text-lg md:text-2xl self-start  text-dark"> 
      Have a project in mind? Reach out to me 📞 from <Link href="/contact"  className="!underline underline-offset-2"   >here</Link> and let's make it happen.
      </h2>
            </div>
        </div>
    </section>
  )
}

export default AboutCoverSection