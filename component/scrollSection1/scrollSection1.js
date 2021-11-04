/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Image from "next/image";

const ScrollSection1 = () => {
  const [item, setItem] = useState("p1");

  // useEffect(() => {
  //   document.onscroll = function () {
  //     console.log("scroll");

  //     let part1 = document.getElementById("p1");
  //     let part2 = document.getElementById("p2");

  //     isElementInViewport(part1);
  //     isElementInViewport(part2);
  //   };
  // });

  // function isElementInViewport(el) {
  //   var rect = el.getBoundingClientRect();
  //   if (
  //     rect.top >= 0 &&
  //     rect.left >= 0 &&
  //     rect.bottom <=
  //       (window.innerHeight || document.documentElement.clientHeight) &&
  //     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  //   ) {
  //     console.log(el.id);
  //     console.log(part1.clientHeight + " : " + el.id);
  //     console.log(part1.scrollHeight + " : " + el.id);
  //     setItem(el.id);
  //   }
  //   console.log(item);
  // }

  return (
    <section className="w-full relative pt-20 ">
      <div className="w-full">
        <div className="w-full xl:min-h-screen">
          {/* <div className="absolute -top-60 left-60">
            <Image
              src={darkGradient}
              width={1160}
              height={612}
              alt=""
              className="border"
            />
          </div> */}

          <div
            className="hidden xl:block absolute top-0 left-1/2"
            // xl:left-60 w-4/5 xl:w-2/5
            style={{
              transform: "translate(-50%, 0%)",
              width: "1167",
              height: "460",
            }}
          >
            <img
              src="/images/darkGradient.png"
              alt=""
              className="w-full h-full"
            />
          </div>

          <div className="w-full xl:w-1046 flex mx-auto flex-col">
            {/* Part 1 */}
            <div
              id="p1"
              className="flex items-center justify-center flex-col xl:flex-row mx-auto xl:mx-0 w-343 md:w-545 xl:w-408 xl:h-screen"
            >
              <div className="flex items-center flex-col">
                <div className="text-gray-900 font-plus-jakarta-sans w-full flex justify-center xl:flex-col text-center xl:text-left text-2xl md:text-4xl font-extrabold">
                  <span>Never start from</span>
                  <span className="ml-1 xl:ml-0">scratch</span>
                </div>
                <p className="text-gray-700 text-base text-center xl:text-left mx-4 xl:mx-auto font-normal xl:text-lg mt-4 xl:mt-5 font-plus-jakarta-sans">
                  Rapidly ideate on the canvas and get buy in from stakeholders
                  with ready-made blueprints of any UI pattern you can think off
                </p>
              </div>

              <div className="block md:hidden mt-7">
                <Image
                  src="/images/groupImgsSm.png"
                  alt=""
                  width={341}
                  height={333}
                />
              </div>

              <div className="hidden md:block xl:hidden mt-12">
                <Image
                  src="/images/groupImgsSm.png"
                  alt=""
                  width={545}
                  height={520}
                />
              </div>
            </div>

            {/* @Part 2 */}
            <div
              id="p2"
              className="flex items-center justify-center flex-col xl:flex-row mx-auto xl:mx-0 mt-20 w-343 md:w-545 xl:w-408 xl:h-screen"
            >
              <div>
                <h2 className="text-gray-900 w-full text-center xl:text-left xl:flex flex-col text-2xl md:text-4xl font-extrabold font-plus-jakarta-sans">
                  <span>Quickly</span>
                  <span className="ml-1 xl:ml-0">brainstorm ideas</span>
                </h2>
                <p className="text-gray-700 w-full  lg:w-full md:mx-auto lg:mx-0 text-base text-center xl:text-left mx-4 font-normal xl:text-lg mt-4 lg:mt-5 font-plus-jakarta-sans">
                  Rapidly ideate on the canvas and get buy in from stakeholders
                  with ready-made blueprints of any UI pattern you can think off
                </p>
              </div>

              {/* Small and medium screen */}
              <div className="w-342 md:w-586 xl:hidden h-262 md:h-449 mt-10 md:mt-16 relative px-4">
                {/* Image 1  */}
                <div className="absolute top-0 left-0 h-full">
                  <div className="h-20 w-20 md:h-36 md:w-40">
                    <img
                      className="w-full h-full"
                      src="/images/navigation2.png"
                      alt=""
                    />
                  </div>
                </div>

                {/* Image 2 */}
                <div className="absolute top-0 right-0">
                  <div className="h-20 w-20 md:h-36 md:w-40">
                    <img
                      className="w-full h-full"
                      src="/images/navigation4.png"
                      alt=""
                    />
                  </div>
                </div>

                {/* Image 3 */}
                <div className="absolute top-24 left-30 md:top-32 md:left-0 md:right-0 ">
                  <div className="h-20 w-20 md:h-36 md:w-40 mx-auto">
                    <img src="/images/navigation3.png" alt="" />
                  </div>
                </div>

                {/* Image 4 */}
                {/* <div className="absolute top-52 lg:top-80 left-0"> */}
                <div className="absolute bottom-0 left-0">
                  <div className="h-20 w-20 md:h-36 md:w-40">
                    <img src="/images/navigation1.png" alt="" />
                  </div>
                </div>

                {/* Image 5  */}
                {/* <div className="absolute top-52 lg:top-80 right-0"> */}
                <div className="absolute bottom-0 right-0">
                  <div className="h-20 w-20 md:h-36 md:w-40">
                    <img src="/images/navigation5.png" alt="" />
                  </div>
                </div>

                {/* Arrow 1 */}
                <div className="absolute top-24 left-10 md:top-40 md:left-20">
                  <div className="w-14 h-14 md:w-20 md:h-20">
                    <img src="/svgs/toptoleft1.svg" alt="" />
                  </div>
                </div>
                {/* Arrow  2  */}
                <div className="absolute top-24 right-10 md:top-40 md:right-20">
                  <div className="w-14 h-14 md:w-20 md:h-20">
                    <img
                      className="transform -rotate-90"
                      src="/svgs/toptoleft1.svg"
                      alt=""
                    />
                  </div>
                </div>
                {/* Arrow 3 */}
                <div className="absolute top-44 left-24 md:top-80 md:left-48">
                  <div className="w-14 h-14 md:w-20 md:h-20">
                    <img
                      className="transform -rotate-90"
                      src="/svgs/toptoleft1.svg"
                      alt=""
                    />
                  </div>
                </div>
                {/* Arrow 4 */}
                <div className="absolute top-44 right-30 md:top-80 md:right-48">
                  <div className="w-14 h-14 md:w-20 md:h-20">
                    <img src="/svgs/toptoleft1.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Large Screen Scroll */}
        <div className="xl:w-1/2 hidden xl:block h-full absolute top-0 right-0 max-w-7xl">
          <div className="w-full h-screen top-0 right-0 sticky">
            <div className="w-full h-full flex items-center">
              <div className="relative top-0 left-0">
                <div
                  className={
                    " xl:ml- relative top-0 left-0 borde transition duration-700 ease-in-out " +
                    (item === "p1" ? "xl:block opacity-100" : "opacity-0")
                  }
                >
                  <Image
                    src="/images/groupImgs.png"
                    alt=""
                    width={514}
                    height={501}
                  />
                </div>

                <div
                  className={
                    "lg:ml- absolute top-0 left-0 borde border-gray-900 w-full h-full transition duration-700 ease-in-out " +
                    (item === "p2" ? "xl:block opacity-100" : "opacity-0")
                  }
                >
                  <div className="w-32 md:w-586 h-96 md:h-449 mt-10 relative px-4 border border-pink-700">
                    {/* Image 1  */}
                    <div className="absolute top-0 left-0 h-full">
                      <div className="h-24 w-28 md:h-36 md:w-40">
                        <img
                          className="w-full h-full"
                          src="/images/navigation2.png"
                          alt=""
                        />
                      </div>
                    </div>

                    {/* Image 2 */}
                    <div className="absolute top-0 right-0">
                      <div className="h-24 w-28 md:h-36 md:w-40">
                        <img
                          className="w-full h-full"
                          src="/images/navigation4.png"
                          alt=""
                        />
                      </div>
                    </div>

                    {/* Image 3 */}
                    <div className="absolute top-24 left-30 md:top-32 md:left-0 md:right-0 ">
                      <div className="h-24 w-28 md:h-36 md:w-40 mx-auto">
                        <img src="/images/navigation3.png" alt="" />
                      </div>
                    </div>

                    {/* Image 4 */}
                    {/* <div className="absolute top-52 lg:top-80 left-0"> */}
                    <div className="absolute bottom-0 left-0">
                      <div className="h-24 w-28 md:h-36 md:w-40">
                        <img src="/images/navigation1.png" alt="" />
                      </div>
                    </div>

                    {/* Image 5  */}
                    {/* <div className="absolute top-52 lg:top-80 right-0"> */}
                    <div className="absolute bottom-0 right-0">
                      <div className="h-24 w-28 md:h-36 md:w-40">
                        <img
                          className=""
                          src="/images/navigation5.png"
                          alt=""
                        />
                      </div>
                    </div>
                    {/* Arrow 1 */}
                    <div className="absolute top-28 left-10 md:top-40 md:left-20">
                      <div className="w-11 h-11 md:w-20 md:h-20">
                        <img src="/svgs/toptoleft1.svg" alt="" />
                      </div>
                    </div>
                    {/* Arrow  2  */}
                    <div className="absolute top-28 right-10 md:top-40 md:right-20">
                      <div className="w-11 h-11 md:w-20 md:h-20">
                        <img
                          className="transform -rotate-90"
                          src="/svgs/toptoleft1.svg"
                          alt=""
                        />
                      </div>
                    </div>
                    {/* Arrow 3 */}
                    <div className="absolute top-52 left-30 md:top-80 md:left-48">
                      <div className="w-11 h-11 md:w-20 md:h-20">
                        <img
                          className="transform -rotate-90"
                          src="/svgs/toptoleft1.svg"
                          alt=""
                        />
                      </div>
                    </div>
                    {/* Arrow 4 */}
                    <div className="absolute top-52 right-30 md:top-80 md:right-48">
                      <div className="w-11 h-11 md:w-20 md:h-20">
                        <img src="/svgs/toptoleft1.svg" alt="" />
                      </div>
                    </div>
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

export default ScrollSection1;
