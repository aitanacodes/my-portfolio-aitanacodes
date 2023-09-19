"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin } from "../icons";
import { contactMeLinks } from "../data/data";
import useScrollToAnchor from "../hooks/useScrollToAnchor";

type HeaderProps = {
  name: string;
  contactMeLinks: string[];
  pages: {
    id: number;
    label: string;
    link: string;
  }[];
};

export const Header = ({ name, pages, contactMeLinks }: HeaderProps) => {
  const scrollToAnchor = useScrollToAnchor(80);

  const setActive = (link: string) => {
    scrollToAnchor(link);
  };

  return (
    <header className="relative w-full sm:h-20 bg-linear-557AFF">
      <div className="bg-header backdrop-blur-sm flex flex-col sm:fixed sm:top-0 sm:left-0 sm:w-full sm:h-20 px-6 z-10">
        <div className="flex items-center justify-between gap-3 h-full">
          <nav className="text-center sm:text-right flex flex-col sm:flex-row sm:gap-6 sm:mb-5 gap-2 mb-2 self-end">
            {pages.map((page) => {
              return (
                // <Link
                //   aria-label={page.label}
                //   key={page.id}
                //   onClick={() => setActive(page.link)}
                //   href={`#${page.id}`}
                //   className="mt-2 px-6 py-2 min-w-100 bg-lilacmid rounded-lg shadow-lg hover:bg-lilaclight hover:text-lilacnormal transition ease-in-out duration-500 font-display uppercase tracking-wide"
                // >
                //   {page.label}
                // </Link>
                <button
                  aria-label={page.label}
                  key={page.id}
                  onClick={() => setActive(page.link)}
                  className="mt-2 px-6 py-2 min-w-100 bg-lilacmid rounded-lg shadow-lg hover:bg-lilaclight hover:text-lilacnormal transition ease-in-out duration-500 font-display uppercase tracking-wide"
                >
                  {page.label}
                </button>
              );
            })}
          </nav>
          <div className="flex gap-4 mr-5 px-6 py-2 min-w-100 bg-lilacdarker rounded-lg shadow-lg">
            <a href={contactMeLinks[0]} aria-label="GitHub">
              <Github className="icons_contactme" />
            </a>
            <a href={contactMeLinks[1]} aria-label="LinkedIn">
              <Linkedin className="icons_contactme" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
