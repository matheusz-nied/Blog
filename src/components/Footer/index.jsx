"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { FaInstagramSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { DiAtom } from "react-icons/di";
import Link from "next/link";
import { db } from "../../utils/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      console.log("db:" ,  db);
      const docRef = await addDoc(collection(db, "subscribers"), {
        email: data.email,
        subscribedAt: new Date()
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
    console.log(errors);

  return (
    <footer className="mt-10  bg-dark flex flex-col items-center text-light">
      <h3 className="mt-10 font-medium dark:font-bold text-center capitalize text-2xl sm:text-3xl lg:text-4xl px-4">
        Interesting Stories | Updates | Guides
      </h3>
      <p className="mt-5 px-4 text-center w-full sm:w-3/5 font-light dark:font-medium text-sm sm:text-base">
        Subscribe to learn about new technology and updates. Join over 5000+
        members community to stay up to date with latest news.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6  mb-10 w-fit sm:min-w-[384px] flex items-stretch bg-dark p-1 sm:p-2 rounded mx04"
      >
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email", { required: true, maxLength: 80 })}
          className="w-full bg-[#121214] p-2 mr-2 text-light border- border-solid-1 focus:border-green-500 rounded-sm"
        />

        <button
          type="submit"
          className="bg-green-500 text-dark cursor-pointer font-medium rounded-sm px-3 sm:px-5 py-1 hover:scale-105 transition-all ease duration-300"
        >Subscribe</button>
      </form>

<hr className="w-4/5 border-t border-solid border-light"/>
      <div className="w-full relative font-medium  py-4 px-8 flex  flex-col gap-4 items-center justify-between">

        <div className="flex items-center">
          <a href="https://matheusznied.vercel.app/" className="inline-block">
            <DiAtom className="hover:scale-110 transition-all ease duration-300 w-6 h-6 mr-2" />
          </a>
          <a
            href="https://www.linkedin.com/in/matheusz-nied/"
            className="inline-block"
          >
            <FaLinkedin className="hover:scale-110 transition-all ease duration-300 w-6 h-6 mr-2" />
          </a>
          <a
            href="https://www.instagram.com/matheusz.nied/"
            className="inline-block"
          >
            <FaInstagramSquare className="hover:scale-110 transition-all ease duration-300 w-6 h-6 mr-2" />
          </a>
          <a href="https://github.com/matheusz-nied" className="inline-block">
            <FaGithubSquare className="hover:scale-110 transition-all ease duration-300 w-6 h-6 mr-2" />
          </a>
        </div>
      <span className="text-center">
          &copy;2024 Matheuz.nied. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
