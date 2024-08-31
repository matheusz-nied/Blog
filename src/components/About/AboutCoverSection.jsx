import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const AboutCoverSection = () => {
  return (
    <section className='w-full md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light'>

<div className='w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16'>
<h2 className='font-bold  text-4xl xs:text-4xl sxl:text-4xl text-center lg:text-left'>
          Explore Tecnologias e Crie Soluções Impactantes
        </h2>
        <p className='font-medium mt-4 text-base'>
          Sou um Desenvolvedor de Software apaixonado por ciência e tecnologia, especializado no desenvolvimento de aplicações web e mobile. Minha experiência abrange uma variedade de tecnologias, incluindo Next.js, React, Node.js, TypeScript, Flutter, Python, e Django. Meu objetivo é unir habilidades técnicas e paixão para criar experiências digitais inovadoras e impactantes.
        </p>
        <h3 className="mt-8 font-semibold text-lg md:text-2xl self-start mx-5 xs:mx-5 sm:mx-6 md:mx-8 lg:mx-12 text-dark dark:text-light dark:font-normal">
          Tem um projeto em mente? Entre em contato 📞 <Link href="https://wa.me/5562994365965?text=Ol%C3%A1%2C%20tenho%20um%20projeto%20em%20mente!%20Bora%20come%C3%A7ar%3F" className="!underline underline-offset-2">aqui</Link> e vamos transformar sua ideia em realidade.
        </h3>
        </div>
    </section>
  )
}

export default AboutCoverSection