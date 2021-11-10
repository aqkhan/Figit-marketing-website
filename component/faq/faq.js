/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Navbar from "../navbar/navbar";

const Faq = () => {
  const [Id, setId] = useState("");

  const showAnswer = id => setId(id);
  const hideAnswer = () => setId(" ");

  return (
    <section className="font-plus-jakarta-sans relative">
      {/* Navbar */}
      <Navbar />

      <div className="w-1029 mx-auto mt-72">
        <div className="absolut top-298 left-448">
          <h1 className="font-extrabold text-left text-80 bg-clip-text t-f-c bg-gradient-to-r from-purple-700 to-sky-500">
            Help Center
          </h1>
          <p className="text-gray-700 text-left text-xl mt-8">
            Everything you need to know about Figit.
            <br />
            Can’t find the answer that you’re looking for?
          </p>

          <p className="text-gray-700 text-xl underline mt-8">
            Hit us up with your query and we’ll get back to you right away{" "}
          </p>

          {/* questions */}

          <div className="xl:mt-72 mb-48">
            <div>
              <h2 className="text-gray-900 text-4xl font-extrabold">
                Frequently asked questions
              </h2>
            </div>

            {/*  */}
            <div className="mt-16">
              {/* Q1 */}
              <div>
                <div
                  className="flex items-center justify-between w-full cursor-pointer pb-8 border-b border-gray-200"
                  id="q1"
                >
                  <p className="text-gray-900 text-xl font-medium">
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
                    "bg-gray-50 p-6 " + (Id === "q1" ? "block" : "hidden")
                  }
                >
                  <p className="text-gray-700 text-lg font-medium w-711">
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
                  <p className="text-gray-900 text-xl font-medium">
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
                    "bg-gray-50 p-6 " + (Id === "q2" ? "block" : "hidden")
                  }
                >
                  <p className="text-gray-700 text-lg font-medium w-711">
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
                  <p className="text-gray-900 text-xl font-medium">
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

                {/* Answer 1 */}
                <div
                  className={
                    "bg-gray-50 p-6 " + (Id === "q3" ? "block" : "hidden")
                  }
                >
                  <p className="text-gray-700 text-lg font-medium w-711">
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
                  className="flex items-center justify-between w-full cursor-pointer border-b border-gray-200 py-8"
                  id="q4"
                >
                  <p className="text-gray-900 text-xl font-medium">
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

                {/* Answer 1 */}
                <div
                  className={
                    "bg-gray-50 p-6 " + (Id === "q4" ? "block" : "hidden")
                  }
                >
                  <p className="text-gray-700 text-lg font-medium w-711">
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
      </div>
    </section>
  );
};

export default Faq;
