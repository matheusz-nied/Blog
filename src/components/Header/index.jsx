"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { FaInstagramSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { DiAtom } from "react-icons/di";
import Image from "next/image";
import SunIcon from "/public/moon-filled-to-sunny-filled-loop-transition.svg";
import MoonIcon from "/public/sunny-filled-loop-to-moon-filled-loop-transition.svg";
import { useThemeSwitch } from "../Hooks/useThemeSwitch";
import { cx } from "@/utils";

const Header = () => {
  const [mode, setMode] = useThemeSwitch();
  const [click, setClick] = useState(false);

  const toggle = () => {
    setClick(!click);
  };

  return (
    <header className="w-full px-2 py-2 mb-6 flex items-center justify-between shadow-md dark:border-b dark:border-green-500	relative		">
      <Logo />

     
      <div className="flex items-center">
        {/* Nav celular */}
        <nav className=" w-max py-3 px-6 sm:px-8 border border-solid border-dark rounded-sm font-medium capitalize  items-center flex  sm:hidden
        fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50
        transition-all ease duration-300
        "
        style={{
          top: click ? "1rem" : "-5rem"
         }}
        
        >
            <Link href="/" className="mr-2">Home</Link>
            <Link href="/categories/all" className="mx-2">Articles</Link>
            <Link href="/about" className="mx-2">About</Link>
            <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={cx(
              "w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1 bg-light"
            )}
            aria-label="theme-switcher"
          >
            {mode === "light" ? (
              <Image
                src={MoonIcon}
                alt="Theme Logo"
                className="w-full h-auto fill-dark"
              />
            ) : (
              <Image
                src={SunIcon}
                alt="Theme Logo"
                className="w-full h-auto fill-dark"
              />
            )}
          </button>
        </nav>


        {/* Nav Desktop */} 
        <nav
          className="w-max py-3 px-8 mr-6 border-b border-solid dark:border-none font-medium capitalize  items-center
        hidden sm:flex dark:text-light  backdrop-blur-sm gap-8 absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2"
        >
          <Link href="/" className="mr-2 hover:underline underline-offset-4 transition-all ease duration-300 hover:translate-y-[-1px]">
            Home
          </Link>
          <Link href="/categories/all"  className="mr-2 hover:underline underline-offset-4 transition-all ease duration-300 hover:translate-y-[-1px]">
          Articles
          </Link>
          <Link href="/about" className="mr-2 hover:underline underline-offset-4 transition-all ease duration-300 hover:translate-y-[-1px]">
            About
          </Link>

        </nav>
         
        
      </div>
      <div className="w-24 flex justify-end pr-4">
      <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={cx(
              "w-6 h-6 ease ml-2  hidden sm:flex items-center justify-center rounded-full p-1 bg-light"
            )}
            aria-label="theme-switcher"
          >
            {mode === "light" ? (
              <Image
                src={MoonIcon}
                alt="Theme Logo"
                className="w-full h-auto fill-dark"
              />
            ) : (
              <Image
                src={SunIcon}
                alt="Theme Logo"
                className="w-full h-auto fill-dark"
              />
            )}
          </button>
      </div>
      <button
        className="flex justify-end sm:hidden z-50 w-full mr-3"
        onClick={toggle}
        aria-label="Hamburger Menu"
      >
        <div className="w-6 cursor-pointer transition-all ease duration-300">
          <div className="relative flex justify-start">
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click
                  ? "rotate(-45deg) translateY(0)"
                  : "rotate(0deg) translateY(6px)",
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                opacity: click ? 0 : 1,
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click
                  ? "rotate(45deg) translateY(0)"
                  : "rotate(0deg) translateY(-6px)",
              }}
            >
              &nbsp;
            </span>
          </div>
        </div>
      </button>
    </header>
  );
};

export default Header;
