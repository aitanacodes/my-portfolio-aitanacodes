import Image from "next/image";
import React from "react";
import { aboutMeData } from "./data/data";

const AboutMePage = () => {
  return (
    <main className="flex flex-col items-center m-32">
      <section className="flex sm:flex-row w-10/12 mt-10 mb-6 items-center flex-col">
        <div className="sm:w-1/3 w-full">
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
        <div className="ml-20 sm:w-2/3 w-full">
          <h2 className="">{aboutMeData.title}</h2>
          <p className="text-base">{aboutMeData.body}</p>
        </div>
      </section>
      <section className="w-full my-8 bg-lilaclight p-10 h-full">
        <p>{aboutMeData.highlightedBody}</p>
      </section>
      <section className="flex flex-row w-10/12 mt-10 items-center">
        <div className="flex flex-col w-7/12">
          <p>{aboutMeData.body2}</p>
        </div>
        <div className="w-5/12 ml-10">
          <Image
            priority={false}
            width={500}
            height={250}
            aria-label={"dog-3277416_640"}
            alt={"dog-3277416_640"}
            src={"/images/dog-3277416_640.jpg"}
            className="body2_image"
          />
        </div>
      </section>
    </main>
  );
};

export default AboutMePage;
