/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Navbar from "../navbar/navbar";

const Faq = () => {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");

  const showAnswer = (id, value) => {
    if (id === value) {
      console.log(value, id, open);
      setId(value);
      setOpen(!open);
    }
    console.log(id);
  };

  // useEffect(() => {
  //   window.addEventListener("scroll", e => {
  //     if (window.scrollY > 400) {
  //       console.log("black " + window.scrollY);
  //     } else {
  //       console.log("white " + window.scrollY);
  //     }
  //   });
  // });

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
                  onClick={e => showAnswer(e.currentTarget.id, "q1")}
                >
                  <p className="text-gray-900 text-xl font-medium">
                    Can I use a presentation template to make a marketing deck?
                  </p>
                  <img
                    src={
                      "/svgs/" +
                      (open && id === "q1" ? "minus.svg" : "plus.svg")
                    }
                    alt=""
                  />
                </div>

                {/* Answer 1 */}
                <div
                  className={
                    "bg-gray-50 p-6 " +
                    (open && id === "q1" ? "block" : "hidden")
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
                  onClick={e => showAnswer(e.currentTarget.id, "q2")}
                >
                  <p className="text-gray-900 text-xl font-medium">
                    Can I use a presentation template to make a marketing deck?
                  </p>
                  <img
                    src={
                      "/svgs/" +
                      (open && id === "q2" ? "minus.svg" : "plus.svg")
                    }
                    alt=""
                  />
                </div>

                {/* Answer 2 */}
                <div
                  className={
                    "bg-gray-50 p-6 " +
                    (open && id === "q2" ? "block" : "hidden")
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
                  onClick={e => showAnswer(e.currentTarget.id, "q3")}
                >
                  <p className="text-gray-900 text-xl font-medium">
                    Can I use a presentation template to make a marketing deck?
                  </p>
                  <img
                    src={
                      "/svgs/" +
                      (open && id === "q3" ? "minus.svg" : "plus.svg")
                    }
                    alt=""
                  />
                </div>

                {/* Answer 1 */}
                <div
                  className={
                    "bg-gray-50 p-6 " +
                    (open && id === "q3" ? "block" : "hidden")
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
                  onClick={e => showAnswer(e.currentTarget.id, "q4")}
                >
                  <p className="text-gray-900 text-xl font-medium">
                    Can I use a presentation template to make a marketing deck?
                  </p>
                  <img
                    src={
                      "/svgs/" +
                      (open && id === "q4" ? "minus.svg" : "plus.svg")
                    }
                    alt=""
                  />
                </div>

                {/* Answer 1 */}
                <div
                  className={
                    "bg-gray-50 p-6 " +
                    (open && id === "q4" ? "block" : "hidden")
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
