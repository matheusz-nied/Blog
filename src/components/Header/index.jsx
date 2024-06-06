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
    <header className="w-full p-2 sm:p-2 sm:mb-1 flex items-center justify-between">
      <Logo />

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
            <Link href="/about" className="mx-2">About</Link>
            <Link href="/contact" className="mx-2">Contact</Link>
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
                alt="Nied Logo"
                className="w-full h-auto fill-dark"
              />
            ) : (
              <Image
                src={SunIcon}
                alt="Nied Logo"
                className="w-full h-auto fill-dark"
              />
            )}
          </button>
        </nav>

        <nav
          className="w-max py-3 px-8 mr-6 border border-solid font-medium capitalize  items-center
        hidden sm:flex bg-light/80 backdrop-blur-sm"
        >
          <Link href="/" className="mr-2">
            Home
          </Link>
          <Link href="/about" className="mr-2">
            About
          </Link>
          <Link href="/contact" className="mr-2">
            Contact
          </Link>

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
                alt="Nied Logo"
                className="w-full h-auto fill-dark"
              />
            ) : (
              <Image
                src={SunIcon}
                alt="Nied Logo"
                className="w-full h-auto fill-dark"
              />
            )}
          </button>
        </nav>
        <div className=" hidden sm:flex items-center">
          <a href="https://matheusznied.vercel.app/" className="inline-block">
            <DiAtom className="hover:scale-110 transition-all ease duration-300 w-6 h-6 mr-2 dark:fill-light" />
          </a>
          <a
            href="https://www.linkedin.com/in/matheusz-nied/"
            className="inline-block"
          >
            <FaLinkedin className="hover:scale-110 transition-all ease duration-300 w-6 h-6 mr-2 dark:fill-light" />
          </a>
          <a
            href="https://www.instagram.com/matheusz.nied/"
            className="inline-block"
          >
            <FaInstagramSquare className="hover:scale-110 transition-all ease duration-300 w-6 h-6 mr-2 dark:fill-light" />
          </a>
          <a href="https://github.com/matheusz-nied" className="inline-block">
            <FaGithubSquare className="hover:scale-110 transition-all ease duration-300 w-6 h-6 mr-2 dark:fill-light" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
