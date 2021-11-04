import React from "react";
import Image from "next/image";
import Navbar from "../navbar/navbar";

const Section1 = () => {
  return (
    <section className="relative h-screen">
      {/* Navbar */}
      <Navbar />

      <div
        className="absolute top-0 left-1/2" // xl:left-60 w-4/5 xl:w-2/5
        style={{ transform: "translate(-50%, 0%)" }}
      >
        <Image
          src="/images/darkGradient.png"
          alt=""
          className="w-full h-full"
          width={1167}
          height={460}
        />
      </div>

      {/* Main Content */}
      <div className="mx-auto flex items-center justify-center flex-col h-full  mt- xl:mt-0 xl:pt- xl:pb-">
        {/* Heading */}
        <div>
          <h1 className="font-bold text-3xl md:text-5xl xl:text-7xl text-center font-plus-jakarta-display">
            <p className="text-gray-900 m-0">Your design workflow.</p>
            <p className="bg-clip-text t-f-c mt-2 pb-3 bg-gradient-to-r from-purple-700 to-sky-500">
              Supercharged
            </p>
          </h1>
        </div>

        {/* Description */}
        <div className="mt-7 md:mt-8 lg:mt-9">
          <p className="w-343 md:w-534 text-center text-gray-700 font-medium text-base 2xl:text-xl font-plus-jakarta-sans">
            1000+ Figma auto-layout components, a unified design system, and
            countless wireframe patterns to supercharge your workflow
          </p>
        </div>

        {/* Button */}
        <div className="mt-7 md:mt-8 lg:mt-9">
          <button className="h-14 rounded-full hover:bg-purple-700 bg-purple-100 hover:text-purple-100 text-purple-700 px-8 flex items-center justify-center cursor-pointer">
            <Image src="/svgs/getFigmauto.svg" alt="" width={16} height={24} />
            <p className="font-medium text-lg ml-4 font-plus-jakarta-sans">
              GetFigmauto
            </p>
          </button>
        </div>

        {/* down arrow icon and Scroll for magic */}
        <div className="hidden lg:flex mt-20 justify-center flex-col items-center">
          <Image
            src="/svgs/animatedDownArrow.svg"
            alt=""
            width={24}
            height={24}
            className="animate-bounce"
          />
          <p className="mt-2.5 text-gray-600 text-base font-medium font-plus-jakarta-sans">
            SCROLL FOR MAGIC
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section1;
