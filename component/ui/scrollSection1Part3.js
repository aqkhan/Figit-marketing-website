import React from "react";
import Image from "next/image";

const ScrollSection1Part3 = () => {
  return (
    <div className="flex items-center justify-center xl:justify-end flex-col xl:h-screen w-343 md:w-545 xl:w-1046 mx-auto mt-32 xl:mt-0 mb-20 md:mb-20 xl:mb-64">
      <div className="flex flex-col items-center justify-center xl:flex-row">
        <h1 className="text-gray-900 flex flex-col md:flex-row xl:flex-col text-center xl:text-left text-2xl md:text-4xl font-extrabold font-plus-jakarta-sans lg:w-full">
          <span>More designing.</span>
          <span>Less resizing.</span>
        </h1>
        <p className="text-gray-700 text-base mt-4 text-center xl:text-left w-full font-plus-jakarta-sans">
          With fully responsive, drop-in ready component designs, you’ll never
          need to design for different breakpoints, all of that is taken care of
        </p>
      </div>

      {/* Small Screen */}
      <div className="block md:hidden mt-8">
        <Image
          src="/images/moreDesigningSm.png"
          alt=""
          height={527}
          width={400}
        />
      </div>

      {/* Medium Screen */}
      <div className="hidden md:block md:mt-20 xl:hidden">
        <Image
          className="mx-auto"
          src="/images/moreDesigning.png"
          alt=""
          width={768}
          height={632}
        />
        <div className="flex mt-12">
          <Image
            src="/images/moreDesigningMd.png"
            alt=""
            height={385}
            width={450}
          />
          <Image
            src="/images/moreDesigningSm.png"
            alt=""
            height={493}
            width={300}
          />
        </div>
      </div>

      {/* Large Screen */}
      <div className="hidden xl:block mt-20">
        <Image
          src="/images/moreDesigning.png"
          alt=""
          width={1046}
          height={632}
        />
      </div>
    </div>
  );
};

export default ScrollSection1Part3;
