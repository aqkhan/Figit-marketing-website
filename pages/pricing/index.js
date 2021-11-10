/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Navbar from "../../component/navbar/navbar";
import PageFooter from "../../component/ui/pageFooter";
import Link from "next/link";

const Index = () => {
  const [Id, setId] = useState("");

  const showAnswer = id => setId(id);
  const hideAnswer = () => setId(" ");

  return (
    <section className="w-full h-full font-plus-jakarta-sans">
      <div className="border-b border-gray-200 h-588 xl:h-684 bg-gradient">
        {/* Navbar */}
        <Navbar />

        <div className="mt-20 md:mt-24 xl:mt-32 flex items-center justify-center flex-col w-full">
          <h1 className="font-extrabold text-32 md:text-5xl md:pb-2 xl:pb-3 xl:text-80 bg-clip-text t-f-c bg-gradient-to-r from-purple-700 to-sky-500">
            Pricing Plans
          </h1>

          <div className="relative w-11/12">
            <h2 className="text-base md:text-xl xl:text-xl text-gray-700 mt-7 xl:mt-8 flex justify-center flex-col items-center">
              <span>Subscription or lifetime license, we{"'"}ve got</span>
              <span className="">you covered</span>
            </h2>

            {/* Pricing xs top-40 md:top-44*/}
            <div className="w-full md:w-534 xl:w-1029 absolute md:left-1/2 transform md:-translate-x-1/2 top-30 md:top-36 xl:top- bg-white rounded shadow-md">
              <div className="block xl:flex">
                <div className="w-full xl:w-7/12 ">
                  {/* Box 1 */}
                  <div className="ml-3 mt-3 mb-3 mr-3 xl:mr-0 rounded-md">
                    <div className="w-full xl:w-auto bg-purple-50 py-6 md:py-10 px-4 md:px-5 xl:px-6 flex justify-between xl:items-center xl:ml- xl:mt- xl:mb-">
                      <div className="flex w-full items-start xl:items-center">
                        {/* Checkbox */}
                        <div className="mt-1.5">
                          <input
                            id="radio1"
                            type="radio"
                            name="radio"
                            className="hidden"
                          />
                          <label
                            htmlFor="radio1"
                            className="flex items-center cursor-pointer"
                          >
                            <span className="w-4 h-4 rounded-full flex-no-shrink"></span>
                          </label>
                        </div>

                        <div className="ml-3 xl:ml-4 w-full flex flex-col md:justify-between md:flex-row">
                          <div>
                            <h2 className="font-bold text-xl text-gray-900 m-0">
                              Monthly subscription
                            </h2>
                            <p className="text-sm text-gray-700 pt-3">
                              Pay $29 every month for access Figit
                            </p>
                          </div>

                          <div className="mt-4 md:mt-0">
                            <h2 className="text-gray-900 font-bold text-xl">
                              *$29
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Box 2 */}

                  <div className="border-t border-b border-gray-100">
                    <div className="pl-3 pr-3 xl:pr-0">
                      <div className=" xl:mt-0 py-9 md:py-10 px-4 md:px-5 xl:px-6 xl:ml-3 flex justify-between xl:items-center">
                        <div className="flex w-full items-start xl:items-center borde">
                          {/* Checkbox */}
                          <div className="mt-1.5">
                            <input
                              id="radio2"
                              type="radio"
                              name="radio"
                              className="hidden"
                            />
                            <label
                              htmlFor="radio2"
                              className="flex items-center cursor-pointer"
                            >
                              <span className="w-4 h-4 rounded-full flex-no-shrink"></span>
                            </label>
                          </div>

                          <div className="ml-3 xl:ml-4 w-full flex flex-col md:flex-row md:justify-between">
                            <div>
                              <h2 className="font-bold text-xl text-gray-900 m-0">
                                Lifetime access
                              </h2>
                              <p className="text-sm text-gray-700 pt-3">
                                One time payment that gives you lifetimes access
                                to blox
                              </p>
                            </div>

                            <div className="mt-4 md:mt-0">
                              <h2 className="text-gray-900 font-bold text-xl">
                                *$449
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="px-6 py-4 xl:py-6">
                    <button className="text-white font-bold text-sm bg-purple-600 hover:bg-purple-700 transition duration-300 rounded-3xl py-4 text-center w-full">
                      <Link href="/checkout"> Buy at $39/month</Link>
                    </button>
                  </div>
                </div>

                {/* Box 3 */}
                <div className="hidden xl:block w-5/12 borde my-3 mx-aut rounded-md priceCard mx-3">
                  <div className="pt-6 pb-9 ">
                    {/* p1 */}
                    <div className="flex w-80 mx-auto">
                      <div className=" rounded-md w-9 h-9 bg-purple-50 flex items-center justify-center">
                        <img src="/svgs/album.svg" alt="" />
                      </div>
                      <div className="ml-3 flex-1">
                        <h5 className="font-bold text-sm plus-jakarta-display">
                          Get access to beautifully crafted, accessible UI
                          libraries
                        </h5>
                        <h6 className="text-xs font-normal text-gray-700 plus-jakarta-display mt-2">
                          Browse from a variety of libraries including Web
                          Application, Marketing, and future realeases to
                        </h6>
                      </div>
                    </div>

                    {/* p2 */}
                    <div className="flex w-80 mx-auto mt-10">
                      <div className=" rounded-md w-9 h-9 bg-purple-50 flex items-center justify-center">
                        <img src="/svgs/album.svg" alt="" />
                      </div>
                      <div className="ml-3 flex-1">
                        <h5 className="font-bold text-sm plus-jakarta-display">
                          Get access to beautifully crafted, accessible UI
                          libraries
                        </h5>
                        <h6 className="text-xs font-normal text-gray-700 plus-jakarta-display mt-2">
                          Browse from a variety of libraries including Web
                          Application, Marketing, and future realeases to
                        </h6>
                      </div>
                    </div>

                    {/* p3 */}
                    <div className="flex w-80 mx-auto mt-10">
                      <div className=" rounded-md w-9 h-9 bg-purple-50 flex items-center justify-center">
                        <img src="/svgs/album.svg" alt="" />
                      </div>
                      <div className="ml-3 flex-1">
                        <h5 className="font-bold text-sm plus-jakarta-display">
                          Get access to beautifully crafted, accessible UI
                          libraries
                        </h5>
                        <h6 className="text-xs font-normal text-gray-700 plus-jakarta-display mt-2">
                          Browse from a variety of libraries including Web
                          Application, Marketing, and future realeases to
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Container */}
      <div className="bg-trueGray-50 h-full px-4">
        <div className="flex flex-col justify-center pt-56 md:pt-56 xl:pt-72 mb-12 md:mb-24">
          <div className="border border-gray-300 rounded-md p-5 xl:px-9 xl:py-6 w-full md:w-534 xl:w-1029 md:mx-auto">
            <h4 className="text-gray-900 font-medium text-base m-0">
              *Early access
            </h4>
            <p className="text-gray-700 text-sm plus-jakarta-display mt-3">
              Offered price is for early access, the price will be revised once
              Figit comes out of early access
            </p>
          </div>

          <div className="mt-12 md:mt-44 xl:mt-24 w-full xl:w-1029 xl:mx-auto">
            <h2 className="text-gray-900 text-3xl xl:text-4xl font-extrabold">
              Frequently asked questions
            </h2>
            {/* Questions */}
            <div className="mt-7 md:mt-12 xl:mt-16 w-full xl:w-1029">
              {/* Q1 */}
              <div>
                <div
                  className="flex items-center justify-between w-full cursor-pointer pb-8 border-b border-gray-200"
                  id="q1"
                >
                  <p className="text-gray-900 text-lg xl:text-xl font-medium">
                    Can I use a presentation template to make a marketing deck?
                  </p>
                  {Id === "q1" ? (
                    <img
                      src={"/svgs/minus.svg"}
                      alt=""
                      className="hidden md:block px-1 py-3"
                      onClick={hideAnswer}
                    />
                  ) : (
                    <img
                      src={"/svgs/plus.svg"}
                      alt=""
                      className="hidden md:block"
                      onClick={() => showAnswer("q1")}
                    />
                  )}
                </div>

                {/* Answer 1 */}
                <div
                  className={
                    "bg-gray-100 p-6 w-full " +
                    (Id === "q1" ? "block" : "hidden")
                  }
                >
                  <p className="text-gray-700 text-base xl:text-lg font-medium xl:w-711">
                    Savvy front-end developers Back-end developers who dislike
                    developing UIs Agencies using Tailwind CSS Startups
                    interested in rapid development Companies overhauling
                    existing websites/apps People who want to make great UIs
                    without spending a fortune
                  </p>
                </div>
              </div>

              {/* Q2 */}
              <div>
                <div
                  className="flex items-center justify-between w-full cursor-pointer border-b border-gray-200 py-8"
                  id="q2"
                >
                  <p className="text-gray-900 text-lg xl:text-xl font-medium">
                    Can I use a presentation template to make a marketing deck?
                  </p>
                  {Id === "q2" ? (
                    <img
                      src={"/svgs/minus.svg"}
                      alt=""
                      className="hidden md:block px-1 py-3"
                      onClick={hideAnswer}
                    />
                  ) : (
                    <img
                      src={"/svgs/plus.svg"}
                      alt=""
                      className="hidden md:block"
                      onClick={() => showAnswer("q2")}
                    />
                  )}
                </div>

                {/* Answer 2 */}
                <div
                  className={
                    "bg-gray-100 p-6 w-full " +
                    (Id === "q2" ? "block" : "hidden")
                  }
                >
                  <p className="text-gray-700 text-base xl:text-lg font-medium xl:w-711">
                    Savvy front-end developers Back-end developers who dislike
                    developing UIs Agencies using Tailwind CSS Startups
                    interested in rapid development Companies overhauling
                    existing websites/apps People who want to make great UIs
                    without spending a fortune
                  </p>
                </div>
              </div>

              {/* Q3 */}
              <div>
                <div
                  className="flex items-center justify-between w-full cursor-pointer border-b border-gray-200 py-8"
                  id="q3"
                >
                  <p className="text-gray-900 text-lg xl:text-xl font-medium">
                    Can I use a presentation template to make a marketing deck?
                  </p>
                  {Id === "q3" ? (
                    <img
                      src={"/svgs/minus.svg"}
                      alt=""
                      className="hidden md:block px-1 py-3"
                      onClick={hideAnswer}
                    />
                  ) : (
                    <img
                      src={"/svgs/plus.svg"}
                      alt=""
                      className="hidden md:block"
                      onClick={() => showAnswer("q3")}
                    />
                  )}
                </div>

                {/* Answer 3 */}
                <div
                  className={
                    "bg-gray-100 p-6 w-full " +
                    (Id === "q3" ? "block" : "hidden")
                  }
                >
                  <p className="text-gray-700 text-base xl:text-lg font-medium xl:w-711">
                    Savvy front-end developers Back-end developers who dislike
                    developing UIs Agencies using Tailwind CSS Startups
                    interested in rapid development Companies overhauling
                    existing websites/apps People who want to make great UIs
                    without spending a fortune
                  </p>
                </div>
              </div>

              {/* Q4 */}
              <div>
                <div
                  className="flex items-center justify-between w-full cursor-pointer border-b border-gray-200 py-7"
                  id="q4"
                >
                  <p className="text-gray-900 text-lg xl:text-xl font-medium">
                    Can I use a presentation template to make a marketing deck?
                  </p>
                  {Id === "q4" ? (
                    <img
                      src={"/svgs/minus.svg"}
                      alt=""
                      className="hidden md:block px-1 py-3"
                      onClick={hideAnswer}
                    />
                  ) : (
                    <img
                      src={"/svgs/plus.svg"}
                      alt=""
                      className="hidden md:block"
                      onClick={() => showAnswer("q4")}
                    />
                  )}
                </div>

                {/* Answer 4 */}
                <div
                  className={
                    "bg-gray-100 p-6 w-full " +
                    (Id === "q4" ? "block" : "hidden")
                  }
                >
                  <p className="text-gray-700 text-base xl:text-lg font-medium xl:w-711">
                    Savvy front-end developers Back-end developers who dislike
                    developing UIs Agencies using Tailwind CSS Startups
                    interested in rapid development Companies overhauling
                    existing websites/apps People who want to make great UIs
                    without spending a fortune
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PageFooter />
      </div>
    </section>
  );
};

export default Index;
