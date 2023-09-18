import Image from "next/image";
import React from "react";
import { aboutMeData } from "./data/data";
import JS from "./icons/js";
import TS from "./icons/ts";
import IconReact from "./icons/react";
import IconHtml from "./icons/iconHtml";
import IconCSS from "./icons/iconCSS";

const AboutMePage = () => {
  return (
    <div className="flex flex-col items-center ">
      <section
        className="sm:w-full sm:max-w-screen-xl w-11/12 mx-auto bg-lilaclight pb-12 shadow-lg rounded-lg mt-5
       flex flex-col sm:flex-row"
      >
        <div className="sm:w-1/3 w-full flex justify-center mt-12">
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
        <div className="sm:w-2/3 w-full mt-6 ml-0 p-10">
          <h2 className="">{aboutMeData.title}</h2>
          <p className="text-base">{aboutMeData.body}</p>
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

      <section className="sm:w-full sm:max-w-screen-xl w-11/12 mx-auto bg-lilaclight p-4 shadow-lg rounded-lg mt-4">
        <div className="flex flex-col w-full sm:w-7/12 mb-10 sm:mb-0">
          <p>{aboutMeData.body2}</p>
        </div>
        <div className="sm:w-5/12 sm:ml-10 w-full ml-0">
          <Image
            priority={false}
            width={500}
            height={250}
            aria-label={"dog-3277416_640"}
            alt={"dog-3277416_640"}
            src={"/images/dog-3277416_640.jpg"}
            className="body_image"
          />
        </div>
      </section>
      <section></section>
    </div>
  );
};

export default AboutMePage;
