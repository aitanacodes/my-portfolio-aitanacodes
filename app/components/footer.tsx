import React from "react";
import { Github, Linkedin } from "../icons";
import { contactMeLinks } from "../data/data";

type FooterProps = {
  contactMeLinks: string[];
};

export const Footer = ({ contactMeLinks }: FooterProps) => {
  return (
    <footer className="w-full bg-lilaclight shadow-footer mt-12 py-4 fixed bottom-0">
      <div className="flex items-center justify-center gap-3">
        <p className="text-center text-lilacdarker mb-3">
          Made with ❤️ by Aitana Hernández
        </p>
        <a href={contactMeLinks[0]} aria-label="GitHub">
          <Github className="icons_contactme" />
        </a>
        <a href={contactMeLinks[1]} aria-label="LinkedIn">
          <Linkedin className="icons_contactme" />
        </a>
      </div>
    </footer>
  );
};
