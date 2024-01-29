import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { FaInstagramSquare,FaLinkedin , FaGithubSquare} from "react-icons/fa";
import { DiAtom } from "react-icons/di";
import Image from "next/image";
import SunIcon from "/public/moon-filled-to-sunny-filled-loop-transition.svg"

const Header = () => {
  return (
    <header className="w-full p-4 px-10 flex items-center justify-between">
      <Logo />
      <div className="flex items-center">

      <nav className="w-max py-3 px-8 mr-6 border border-solid font-medium capitalize flex items-center bg-light/80 backdrop-blur-sm">
        <Link href="/" className="mr-2">
          Home
        </Link>
        <Link href="/about" className="mr-2">
          About
        </Link>
        <Link href="/contact" className="mr-2">
          Contact
        </Link>

        <button>        <Image src={SunIcon} alt='Nied Logo' className='w-full h-auto'/>
</button>
      </nav>
      <div>
      <a
          href="https://matheusznied.vercel.app/"
          className="inline-block"
        >
         <DiAtom className="hover:scale-110 transition-all ease duration-300 w-6 h-6 mr-2" />

        </a>
        <a
          href="https://www.linkedin.com/in/matheusz-nied/"
          className="inline-block"
        >
          <FaLinkedin  className="hover:scale-110 transition-all ease duration-300 w-6 h-6 mr-2"/>
        </a>
        <a
          href="https://www.instagram.com/matheusz.nied/"
          className="inline-block"
        >
          <FaInstagramSquare className="hover:scale-110 transition-all ease duration-300 w-6 h-6 mr-2" />
        </a>
        <a
          href="https://github.com/matheusz-nied"
          className="inline-block"
        >
          <FaGithubSquare className="hover:scale-110 transition-all ease duration-300 w-6 h-6 mr-2" />
        </a>
       
      </div>
      </div>

    </header>
  );
};

export default Header;
