import Image from "next/image";
import React from "react";
import { aboutMeData, projects, moreAbout } from "./data/data";
import JS from "./icons/js";
import TS from "./icons/ts";
import IconReact from "./icons/react";
import IconHtml from "./icons/iconHtml";
import IconCSS from "./icons/iconCSS";
import ProjectCard from "./my-projects/components/project-card";
import useScrollToAnchor from "./hooks/useScrollToAnchor";

const AboutMePage = () => {
  return (
    <div id="about-me" className="flex flex-col items-center ">
      <section
        className="sm:w-full sm:max-w-screen-xl w-11/12 mx-auto bg-lilaclight pb-5 sm:pb-12 shadow-lg rounded-lg mt-5
       flex flex-col sm:flex-row"
      >
        <div className="sm:w-1/3 w-full flex justify-center sm:mt-12 sm:ml-10 mt-5">
          <Image
            priority={false}
            width={640}
            height={960}
            aria-label={"dog-3277416_640"}
            alt={"dog-3277416_640"}
            src={"/images/dog-3277416_640.jpg"}
            className="profileImage"
          />
        </div>
        <div className="sm:flex-row">
          <div className="sm:w-2/3 w-full mt-5 ml-0 p-5">
            <h2 className="text-center sm:text-left">{aboutMeData.title}</h2>
            <p className="text-base text-center sm:text-justify">
              {aboutMeData.body}
            </p>
          </div>
          <div className="sm:flex-row w-full">
            {moreAbout.soft.map((skill, index) => (
              <p
                className="sm:inline-block bg-lilacnormal p-2 rounded-md text-light m-2 sm:mb-0.5 sm:ml-3"
                key={index}
              >
                <span role="img" aria-label="icon">
                  {skill.icon}
                </span>
                {skill.text}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-lilaclight p-10 mx-auto">
        <h1 className="text-lilacdarker sm:mr-1.5 text-center">
          {aboutMeData.titleStack}
        </h1>
        <p className="text-center font-bold mt-5">{aboutMeData.myStack}</p>
        <div className="flex justify-center sm:gap-6 mt-8">
          <JS />
          <TS />
          <IconReact />
          <IconHtml />
          <IconCSS />
        </div>
      </section>

      <section
        id="my-projects"
        className="sm:w-full sm:max-w-screen-xl w-11/12 mx-auto bg-gradient-to-r from-lilacdarker p-4 shadow-lg rounded-lg mt-1"
      >
        <div className="w-12/12 m-auto mt-5">
          <h2 className="text-2xlz mb-8 text-center px-6 py-2 min-w-100 bg-lilacmid rounded-lg shadow-lg font-display uppercase tracking-wide">
            Mis proyectos
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {projects.map((project) => {
              return <ProjectCard data={project} key={project.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMePage;
