import React from "react";
import Image from "next/image";

export const ProjectCard = ({ data }) => {
  const { title, description, githubLink, websiteLink } = data;
  return (
    <div>
      <Image
        priority={false}
        width={500}
        height={250}
        aria-label={`Image of ${title}`}
        alt={"dog-3277416_640"}
        src={"/images/dog-3277416_640.jpg"}
      />
      <div>
        <h3 className="text-lg font-medium">Project Title</h3>
        <p className="text-sm mt-2 min-h-50">Project description 1</p>
        <p className="text-sm mt-2 min-h-50">Project description 2</p>
        <div className="flex flex-row mt-4 justify-between">
          <a href={" "} className="flex items-center">
            Github
            <span className="text-black">Link 1</span>
          </a>
          <a href={" "} className="flex items-center">
            Website Icon
            <span className="text-black">Link 1</span>
          </a>
        </div>
      </div>
    </div>
  );
};
