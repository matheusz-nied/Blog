import { cx } from "@/utils";
import Link from "next/link";
import React from "react";

const Category = ({ link = "#", name, active, ...props }) => {
  return (
    <Link
      href={link}
      className={cx(
        "inline-block py-1.5 px-5 bg-accent text-light rounded-sm capitalize border border-solid border-dark hover:scale-105 transition-all ease duration-700 m-2",
        props.className,
        active ? "bg-accent text-light font-bold	" : "bg-light text-zinc-950"
      )}
    >
      #{name}
    </Link>
  );
};

export default Category;
