import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Header = ({ name, pages }) => {
  return (
    <header className="flex flex-col relative bg-linear-557AFF w-full h-48">
      <div className="bg-header flex flex-col justify-around h-full px-6 z-10">
        <nav className="text-right flex flex-row gap-6 self-end">
          {pages.map((page) => {
            return (
              <Link
                aria-label={page.label}
                key={page.id}
                href={page.link}
                className="mt-2 px-6 py-2 min-w-100 bg-lilacmid rounded-lg shadow-lg  hover:bg-lilaclight hover:text-lilacnormal transition ease-in-out duration-500 font-display uppercase tracking-wide"
              >
                {" "}
                {page.label}{" "}
              </Link>
            );
          })}
        </nav>
        <h1 className="text-light uppercase"> {name}</h1>
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
