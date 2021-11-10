import React from "react";
import PageFooter from "../ui/pageFooter";

const Footer = () => {
  return (
    <footer className=" font-plus-jakarta-sans pt-16 md:pt-24 px-4 md:px-70">
      <div className="flex items-center justify-center text-center flex-col xl:mb-36">
        <h2 className="font-extrabold text-28 xl:text-4xl text-center">
          Stay updated with your favourite
          <span className="block md:hidden bg-clip-text t-f-c bg-gradient-to-r from-purple-700 to-sky-500 pb-1">
            Figma plugin
          </span>
        </h2>
        <h2 className="hidden md:block font-extrabold text-3xl lg:text-4xl mt-2 bg-clip-text t-f-c bg-gradient-to-r from-purple-700 to-sky-500 pb-2">
          Figma plugin
        </h2>

        {/* Large Screen Input field */}
        <div className="hidden mt-7 w-445 border rounded-md border-gray-300 xl:flex items-center justify-between">
          <input
            type="text"
            className="borde outline-none shadow-none px-5 text-base h-full w-full"
            placeholder="Enter your email"
          />
          <button className="px-5 py-3 text-base font-medium text-purple-700 bg-purple-100 hover:bg-purple-700 hover:text-purple-100 rounded mr-2 my-2">
            Subscribe
          </button>
        </div>
      </div>

      {/* Small and Medium Screen Input field */}
      <div className="block w-343 md:w-445 xl:hidden mt-8 mx-auto mb-16 md:mb-24">
        <input
          type="text"
          className="outline-none shadow-none px-4 text-base h-12 rounded-md w-full border border-gray-300"
          placeholder="Enter your email"
        />
        <button className="px-5 py-3 w-full text-base font-medium transition duration-300 ease-linear text-purple-700 bg-purple-100 hover:bg-purple-700 hover:text-purple-100 rounded mt-3">
          Subscribe
        </button>
      </div>

      {/* <div className="flex items-center justify-center flex-col mx-auto mt-16 md:mt-24 2xl:mt-32 2xl:w-1427 2xl:mx-auto"> */}
      <PageFooter />
      {/* </div> */}
    </footer>
  );
};

export default Footer;
