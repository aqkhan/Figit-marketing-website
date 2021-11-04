/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../component/navbar/navbar";
import PageFooter from "../component/ui/pageFooter";

const Pricing = () => {
  const [open, setOpen] = useState(false);
  const [Id, setId] = useState("");

  const showAnswer = (Id, value) => {
    console.log(Id);
    if (open === false) {
      console.log("false");
      setId(value);
      setOpen(true);
      // console.log(value, Id, open);
    } else if (open === true) {
      console.log("true");
      setOpen(false);
      setId("");
      // console.log(value, Id, open);
    }
  };

  return (
    <section className="w-full h-full font-plus-jakarta-sans">
      <div className=" border-b border-gray-200 h-684 bg-gradient">
        {/* Navbar */}
        <Navbar />

        <div className="mt-32 flex items-center justify-center flex-col relative">
          <h2 className="font-extrabold text-80 bg-clip-text t-f-c bg-gradient-to-r from-purple-700 to-sky-500">
            Pricing Plans
          </h2>
          <h6 className="text-xl text-gray-700 mt-6 flex justify-center flex-col items-center">
            <span>Subscription or lifetime license, we{"'"}ve got</span>
            <span className="">you covered</span>
          </h6>

          {/* Pricing */}
          <section className="w-1029 absolute top-60 bg-white rounded shadow-md">
            <div className="flex">
              <div className="w-586">
                {/* Box 1 */}
                <div className="w-auto bg-purple-50 rounded-md px-6 flex justify-between items-center ml-3 mt-3 mb-3">
                  <div className="flex items-center">
                    {/* Checkbox */}
                    <div>
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
                    <div className="ml-4">
                      <h2 className="font-bold text-xl text-gray-900 m-0 pt-10">
                        Monthly subscription
                      </h2>
                      <p className="text-sm text-gray-700 mt-3 pb-10">
                        Pay $29 every month for access Figit
                      </p>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-gray-900 font-bold text-xl">*$29</h2>
                  </div>
                </div>

                {/* Box 2 */}
                <div className="border-t border-b border-gray-100 px-6 flex justify-between items-center">
                  <div className="flex items-center">
                    {/* Checkbox */}
                    <div>
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
                    <div className="ml-4">
                      <h2 className="font-bold text-xl text-gray-900 m-0 pt-10">
                        Lifetime access
                      </h2>
                      <p className="text-sm text-gray-700 mt-3 pb-10">
                        One time payment that gives you lifetimes access to blox
                      </p>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-gray-900 font-bold text-xl">*$449</h2>
                  </div>
                </div>

                {/* Button */}
                <div className="px-6 py-6">
                  <button className="text-white font-bold text-sm bg-purple-700 rounded-3xl py-4 text-center w-full">
                    Buy at $39/month
                  </button>
                </div>
              </div>

              {/* Box 3 */}
              <div className="w-408 my-3 mx-auto h-auto rounded-md bg-purple-gradient">
                <div className="flex w-80 mx-auto mt-9">
                  <div className=" rounded-md w-10 h-9 bg-purple-50 flex items-center justify-center">
                    <img src="/svgs/album.svg" alt="" />
                  </div>
                  <div className="ml-3 flex-1">
                    <h5 className="font-medium text-sm">
                      Get access to beautifully crafted, accessible UI libraries
                    </h5>
                    <h6 className="text-xs font-normal plus-jakarta-display mt-2">
                      Browse from a variety of libraries including Web
                      Application, Marketing, and future realeases to create
                      amazing interfaces
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Second Container */}
      <section className="bg-trueGray-50 h-full">
        <div className="flex flex-col justify-center pt-60 w-1029 mx-auto">
          {/* C1 */}
          <div className="border border-gray-300 rounded-md bg-whit px-9 py-6">
            <h4 className="text-gray-900 font-medium text-base m-0">
              *Early access
            </h4>
            <p className="text-gray-700 text-sm plus-jakarta-display mt-3">
              Offered price is for early access, the price will be revised once
              Figit comes out of early access
            </p>
          </div>

          {/* C2 */}
          <div className="mt-24">
            <h2 className="text-gray-900 text-4xl font-extrabold">
              Frequently asked questions
            </h2>
            {/* Questions */}
            <div className="mt-16 w-1029">
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
                    src={"/svgs/" + (Id === "q1" ? "minus.svg" : "plus.svg")}
                    alt=""
                  />
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
                  onClick={e => showAnswer(e.currentTarget.id, "q2")}
                >
                  <p className="text-gray-900 text-xl font-medium">
                    Can I use a presentation template to make a marketing deck?
                  </p>
                  <img
                    src={"/svgs/" + (Id === "q2" ? "minus.svg" : "plus.svg")}
                    alt=""
                  />
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
                  onClick={e => showAnswer(e.currentTarget.id, "q3")}
                >
                  <p className="text-gray-900 text-xl font-medium">
                    Can I use a presentation template to make a marketing deck?
                  </p>
                  <img
                    src={"/svgs/" + (Id === "q3" ? "minus.svg" : "plus.svg")}
                    alt=""
                  />
                </div>

                {/* Answer 1 */}
                <div
                  className={
                    "bg-gray-700 p-6 " + (Id === "q3" ? "block" : "hidden")
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
                    src={"/svgs/" + (Id === "q4" ? "minus.svg" : "plus.svg")}
                    alt=""
                  />
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

        {/* Footer */}
        <PageFooter />
      </section>
    </section>
  );
};

export default Pricing;
