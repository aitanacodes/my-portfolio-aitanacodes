import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Header = ({ name, pages }) => {
  return (
    <header className="flex flex-col relative bg-linear-557AFF w-full h-48">
      <div className="flex flex-col justify-around h-full sm:px-6 px:1 bg-header z-10">
        <nav className="">
          {pages.map((page) => {
            return (
              <Link
                aria-label={page.label}
                key={page.id}
                href={page.link}
                className=""
              >
                {" "}
                {page.label}{" "}
              </Link>
            );
          })}
        </nav>
        <h1 className=""> {name}</h1>
      </div>
      <Image
        priority
        height={400}
        width={2000}
        className=""
        src="/images/header-pic.jpg"
        alt={`Image of ${name}`}
        aria-label={`Image of ${name}`}
      />
    </header>
  );
};
