/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const ScrollSection2 = () => {
  const [item, setItem] = useState("p3");
  const router = useRouter();

  useEffect(() => {
    document.onscroll = function () {
      let part3 = document.getElementById("p3");
      let part4 = document.getElementById("p4");
      let part5 = document.getElementById("p5");
      if (router.pathname === "/") {
        isElementInViewport(part3);
        isElementInViewport(part4);
        isElementInViewport(part5);
      }
    };
  });

  function isElementInViewport(el) {
    if (el === null) return null;
    else {
      let rect = el.getBoundingClientRect();
      if (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      ) {
        setItem(el.id);
      }
    }
  }

  return (
    <section className="bg-primary font-plus-jakarta-sans relative">
      <div className="px-4 pt-16 pb-16 md:pb-32 xl:pb-0">
        <div className="w-full">
          <div className="xl:w-1046 mx-auto flex flex-col">
            {/* Part 1 */}
            <div
              className="flex items-center mx-auto xl:mx-0 justify-start flex-col xl:flex-row text-left 
              md:text-center xl:text-left xl:h-740 w-343 md:w-584 xl:w-408 mb-20 md:mb-32 xl:mb-0"
              id="p3"
            >
              <div className="w-full">
                <h1 className="text-white xl:flex xl:flex-col text-28 md:text-4xl font-extrabold">
                  <span>Design</span>
                  <span className="ml-2 xl:ml-0">Landing pages</span>
                </h1>
                <p className="text-gray-400 text-base md:text-lg xl:text-xl mt-4 xl:mt-5 ">
                  Rapidly ideate on the canvas and get buy in from stakeholders
                  with ready-made blueprints of any UI pattern you can think off
                </p>
              </div>

              {/* w-343 md:w-584 */}
              <div className="mt-10 md:mt-12 xl:hidden">
                <img src="/images/lp2group1.png" alt="" />
              </div>
            </div>

            {/* Part 2 */}
            <div
              className="flex items-center justify-start flex-col mx-auto xl:mx-0 xl:flex-row text-left md:text-center 
              xl:text-left xl:h-740 w-343 md:w-584 xl:w-408 mb-20 md:mb-32 xl:mb-0"
              id="p4"
            >
              <div className="w-full">
                <h1 className="text-white xl:flex xl:flex-col text-28 md:text-4xl font-extrabold">
                  <span>Design</span>
                  <span className="ml-2 xl:ml-0">Dashboards</span>
                </h1>
                <p className="text-gray-400 text-base md:text-lg xl:text-xl mt-4 xl:mt-5 ">
                  Rapidly ideate on the canvas and get buy in from stakeholders
                  with ready-made blueprints of any UI pattern you can think off
                </p>
              </div>

              <div className="mt-10 md:mt-12 xl:hidden">
                <img src="/images/lp2group2.png" alt="" />
              </div>
            </div>

            {/* Part 3 */}
            <div
              className="flex items-center justify-start flex-col mx-auto xl:mx-0 xl:flex-row text-left 
              md:text-center xl:text-left xl:h-740 w-343 md:w-584 xl:w-408"
              id="p5"
            >
              <div className="w-full">
                <h1 className="text-white xl:flex xl:flex-col text-28 md:text-4xl font-extrabold">
                  <span>Design</span>
                  <span className="ml-2 xl:ml-0">Stores</span>
                </h1>
                <p className="text-gray-400 text-base md:text-lg xl:text-xl mt-4 xl:mt-5">
                  Rapidly ideate on the canvas and get buy in from stakeholders
                  with ready-made blueprints of any UI pattern you can think off
                </p>
              </div>

              <div className="mt-10 md:mt-12 xl:hidden">
                <img src="/images/lp2group3.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="xl:w-1/2 xl:block hidden h-full xl:absolute top-0 right-0 max-w-7xl">
          {/* H-Screen */}
          <div className="h-740 top-0 right-0 sticky">
            <div className="w-full h-full flex items-center">
              <div className="relative top-0 left-0">
                {/* Part 1 */}
                <div
                  className={
                    "relative top-0 left-0 w-full h-full transition duration-500 ease-in-out " +
                    (item === "p3" ? "xl:block opacity-100" : "opacity-0")
                  }
                >
                  <div className="w-80 mt-10 xl:ml-20">
                    <img src="/images/lp2group1.png" alt="" />
                  </div>
                </div>

                {/* Part 2 */}
                <div
                  className={
                    "xl:ml- absolute top-0 left-0 w-full h-full transition duration-500 ease-in-out " +
                    (item === "p4" ? "xl:block opacity-100" : " opacity-0")
                  }
                >
                  <div className="w-80 mt-10 xl:ml-20">
                    <img src="/images/lp2group2.png" alt="" />
                  </div>
                </div>

                {/* Part 3 */}
                <div
                  className={
                    "xl:ml- absolute top-0 left-0 w-full h-full transition duration-500 ease-in-out " +
                    (item === "p5" ? "xl:block opacity-100" : " opacity-0")
                  }
                >
                  <div className="w-80 mt-10 xl:ml-20">
                    <img src="/images/lp2group3.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollSection2;
