import React from "react";
import Image from "next/image";
import Figma from "../../public/images/figma.png";

const WireFrame = () => {
  return (
    <section className="hidden xl:block bg-gray-900 px-20 pt-24 pb-14 w-full h-full">
      <div>
        <h2 className="text-gray-100 text-4xl font-medium font-plus-jakarta-display">
          WireFrame
        </h2>
        <p className="text-gray-400 text-base font-normal mt-3 font-plus-jakarta-sans">
          Rapidly ideate and sketch wireframes
          <br />
          from a library of over 400 patterns
        </p>
      </div>

      {/* Image */}
      <div className="mt-8 relative">
        <Image src={Figma} alt="Picture of the Figma" />
      </div>
    </section>
  );
};

export default WireFrame;
