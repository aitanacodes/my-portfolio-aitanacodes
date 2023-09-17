import React from "react";
import { Github, Linkedin } from "../icons";
import { contactMeLinks } from "../data/data";

type FooterProps = {
  contactMeLinks: string[];
};

export const Footer = ({ contactMeLinks }: FooterProps) => {
  return (
    <footer className="w-full mt-12 py-4 bottom-0">
      <div className="flex items-center justify-center flex-col">
        <p className="text-center text-lilacdarker mb-3">
          Made with ❤️ by Aitana Hernández © 2023
        </p>

        {/* <div className="flex gap-3">
          <a href={contactMeLinks[0]} aria-label="GitHub">
            <Github className="icons_contactme" />
          </a>
          <a href={contactMeLinks[1]} aria-label="LinkedIn">
            <Linkedin className="icons_contactme" />
          </a>
        </div> */}
      </div>
    </footer>
  );
};
