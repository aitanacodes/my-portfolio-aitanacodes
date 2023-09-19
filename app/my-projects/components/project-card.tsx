import Image from "next/image";
import React from "react";
import { Github, Linkedin } from "../../icons";

type ProjectCardProps = {
  data: {
    title: string;
    body1: string;
    body2: string;
    image: string;
    links: {
      text: string;
      url: string;
    }[];
  };
};

export const ProjectCard = ({ data }: ProjectCardProps) => {
  const { title, body1, body2, image, links } = data;
  return (
    <div className="bg-lilaclight rounded-lg shadow-lg bg-grey-light w-full sm:w-1/3-g md:w-1/2 lg:w-1/3 xl:w-1/4">
      <Image
        aria-label={`Image of ${title}`}
        src={`/images/monstera.jpg`}
        alt=" "
        className="object-cover w-full h-48"
        priority={false}
        width={500}
        height={250}
      />
      <div className="p-4">
        <h3 className="text-lg font-medium tracking-wider">{title}</h3>
        <p className="text-base mt-2 min-h-50">{body1}</p>
        <p className="text-sm mt-2 min-h-50"> {body2}</p>
        <div className="flex flex-row mt-4 justify-between">
          <a href={links[0].url} className="flex items-center gap-2">
            <Github className="icons_contactme" />
            <span className="text-black"> {links[0].text}</span>
          </a>

          <a href={links[1].url} className="flex items-center gap-2">
            <Linkedin className="icons_contactme" />
            <span className="text-black"> {links[1].text}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
