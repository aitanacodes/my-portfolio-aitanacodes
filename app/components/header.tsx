import React from "react";
import Image from "next/image";
import Link from "next/link";

type HeaderProps = {
  name: string;
  pages: {
    id: number;
    label: string;
    link: string;
  }[];
};

export const Header = ({ name, pages }: HeaderProps) => {
  return (
    <header className="relative w-full sm:h-20 bg-linear-557AFF">
      <div className="bg-header backdrop-blur-sm flex flex-col sm:fixed sm:top-0 sm:left-0 sm:w-full sm:h-20 px-6 z-10">
        <div className="flex justify-between items-center sm:h-full">
          <h1 className="text-light mr-1.5"> {name}</h1>
          <nav className="text-center sm:text-right flex flex-col sm:flex-row sm:gap-6 sm:mb-5 gap-2 mb-2 self-end">
            {pages.map((page) => {
              return (
                <Link
                  aria-label={page.label}
                  key={page.id}
                  href={page.link}
                  className="mt-2 px-6 py-2 min-w-100 bg-lilacmid rounded-lg shadow-lg hover:bg-lilaclight hover:text-lilacnormal transition ease-in-out duration-500 font-display uppercase tracking-wide"
                >
                  {page.label}
                </Link>
              );
            })}
          </nav>
          {/* <h1 className="text-light uppercase mb-7"> {name}</h1> */}
        </div>
      </div>
      {/* <Image
        priority
        height={400}
        width={2000}
        className="w-full h-60 sm:h-20 object-cover absolute top-0 left-0 right-0 z-0"
        src="/images/header-pic.jpg"
        alt={`Image of ${name}`}
        aria-label={`Image of ${name}`}
        style={{ top: "auto", bottom: 0 }}
      /> */}
    </header>
  );
};
