import React from "react";
import Image from "next/image";
import { Github } from "@/app/icons";

export const ProjectCard = ({ data }) => {
  const { title, body1, body2, image, links } = data;
  return (
    <div>
      <Image
        priority={false}
        width={500}
        height={250}
        aria-label={`Image of ${title}`}
        alt={"dog-3277416_640"}
        className="object-cover w-full h-48"
        src={"/images/dog-3277416_640.jpg"}
      />
      <div>
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-sm mt-2 min-h-50">{body1}</p>
        <p className="text-sm mt-2 min-h-50">{body2}</p>
        <div className="flex flex-row mt-4 justify-between">
          <a href={links[0].url} className="flex items-center">
            <Github className="icons_contactme" />
            <span className="text-black">{links[0].text}</span>
          </a>
          <a href={links[1].url} className="flex items-center">
            Website Icon
            <span className="text-black">{links[1].text}</span>
          </a>
        </div>
      </div>
    </div>
  );
};