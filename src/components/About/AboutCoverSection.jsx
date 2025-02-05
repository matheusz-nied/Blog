import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const AboutCoverSection = () => {
  return (
    <section className='w-full md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row justify-center text-dark dark:text-light'>

<div className='w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16'>
<h2 className='font-bold  text-4xl xs:text-4xl sxl:text-4xl text-center lg:text-left'>
          Quem eu sou?
        </h2>
        <p className='font-medium mt-4 text-base'>
          Sou um Desenvolvedor de Software apaixonado por ciência e tecnologia com extremo interesse em Blockchain, especializado no desenvolvimento de aplicações web e mobile. Minha experiência abrange uma variedade de tecnologias, incluindo Next.js, React, Node.js, TypeScript, Flutter, Python, Django. Blockchain, Solidity e Smart Contracts. Meu objetivo é unir habilidades técnicas e paixão para criar experiências digitais inovadoras e impactantes.
        </p>
        </div>
    </section>
  )
}

export default AboutCoverSection