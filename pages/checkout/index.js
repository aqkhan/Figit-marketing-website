/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Index = () => {
  return (
    <div className="xl:flex">
      <section className="xl:w-1/2 xl:py-16 pt-6 pb-12 px-4">
        <div className="xl:w-450 xl:mx-auto flex flex-col justify-start">
          {/* Figit Logo */}
          <div className="flex xl:flex-col flex-row justify-between xl:justify-start items-center xl:items-start">
            <Link href="/">
              <a className="text-2xl font-arvo font-bold cursor-pointer">
                <span className="text-gray-600">Fig</span>
                <span className="text-gray-900">it</span>
              </a>
            </Link>

            <Link href="/">
              <a className="text-sm xl:mt-9 plus-jakarta-sans cursor-pointer flex items-center justify-center xl:justify-start">
                <img
                  src="/svgs/backArrow.svg"
                  className="w-4 h-4 mr-3"
                  alt=""
                />
                <span className="text-gray-900">Back</span>
              </a>
            </Link>
          </div>

          {/* Main content */}
          <div className="mt-12 xl:mt-9">
            {/* Description */}
            <div>
              <h2 className="text-gray-900 text-2xl font-bold plus-jakarta-display">
                Checkout
              </h2>
              <p className="text-sm text-gray-700 mt-2 plus-jakarta-sans">
                Complete your purchase by providing your email and payment
                information
              </p>
            </div>

            {/* Pay Buttons */}
            <div className="mt-12 xl:w-421">
              <button
                className="flex items-center justify-center text-2xl font-semibold bg-black 
              py-2 px-4 w-full rounded-lg cursor-pointer outline-none"
              >
                <img src="/svgs/applePay.svg" alt="" />
              </button>

              <button
                className="flex items-center justify-center text-2xl font-semibold bg-paypal mt-3 
              py-2 px-4 w-full rounded-lg cursor-pointer outline-none"
              >
                <img src="/svgs/paypalPay.svg" alt="" />
              </button>
            </div>

            <div className="my-6">
              <img src="/svgs/payWithCard.svg" alt="" />
            </div>

            {/* Form */}

            {/* Email */}
            <form className="xl:w-421">
              <div>
                <label className="block text-sm text-gray-900 font-medium plus-jakarta-sans">
                  Email
                </label>
                <input
                  type="email"
                  className="bg-gray-100 rounded-md h-10 px-3 py-2 w-full outline-none border border-gray-200 mt-2"
                />
              </div>

              {/* Card details*/}
              <div className="mt-8">
                <label className="block text-sm text-gray-900 font-medium plus-jakarta-sans">
                  Card details
                </label>
                {/* Card number */}
                <div className="bg-gray-100 rounded-md w-full border border-gray-200 mt-2">
                  <div className="flex items-center justify-between px-3 py-2 h-10 border-b">
                    <input
                      type="text"
                      placeholder="1234 1234 1234 1234"
                      className=" outline-none bg-transparent w-full mr-2"
                    />
                    <img src="/svgs/cards.svg" alt="" />
                  </div>
                  {/* Month of Expiry and CVC */}
                  <div className="flex w-full h-10">
                    <div className="w-2/3 xl:w-1/2 border-r border-gray-200">
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className=" outline-none bg-transparent w-full px-3 py-2"
                      />
                    </div>
                    <div className="w-1/3 xl:w-1/2 flex items-center justify-between px-3 py-2">
                      <input
                        type="text"
                        placeholder="CVC"
                        className="outline-none bg-transparent w-full mr-2"
                      />
                      <img src="/svgs/cvcCard.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Name on card */}
              <div className="mt-8">
                <label className="block text-sm text-gray-900 font-medium plus-jakarta-sans">
                  Name on card
                </label>

                <input
                  type="text"
                  className="bg-gray-100 rounded-md h-10 px-3 py-2 w-full outline-none border border-gray-200 mt-2"
                />
              </div>

              {/* Country and region */}
              <div className="mt-8">
                <label className="block text-sm text-gray-900 font-medium plus-jakarta-sans">
                  Country or region
                </label>

                <div className="bg-gray-100 rounded-md w-full border border-gray-200 mt-2">
                  <div className="flex items-center justify-between px-3 py-2 h-10 border-b cursor-pointer">
                    <div className=" outline-none bg-transparent w-full mr-2"></div>
                    <img src="/svgs/downArrow2.svg" alt="" />
                  </div>

                  {/* ZIP */}
                  <div className="h-10">
                    <input
                      type="text"
                      placeholder="ZIP"
                      className=" outline-none bg-transparent px-3 py-2"
                    />
                  </div>
                </div>
              </div>

              {/* Submit button */}
              <div className="mt-8">
                <button
                  type="submit"
                  className="rounded-full w-full bg-purple-700 h-11 text-white text-sm font-bold plus-jakarta-sans"
                >
                  Pay $449
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="xl:w-1/2 pl-4 xl:pl-20 pt-6 xl:pt-24 bg-gray-50 border-l border-gray-200 relative overflow-hidden">
        <div
          className="hidden xl:block absolute bottom-0 -right-96"
          style={{
            transform: "rotate(90deg)",
          }}
        >
          <img src="/images/darkGradient.png" alt="" />
        </div>

        <div>
          <h2 className="font-bold text-xl plus-jakarta-sans bg-clip-text t-f-c bg-gradient-to-r from-purple-700 to-sky-500">
            Lifetime Access
          </h2>
        </div>

        <div className="mt-4">
          <h2 className="text-gray-900 text-3xl xl:text-4xl font-bold plus-jakarta-sans">
            $ 449.00
          </h2>
        </div>

        <div className="mt-12 mb-10">
          {/* <p className="text-gray-700 text-xl font-medium plus-jakarta-sans">
            Production ready 1000+ Figma auto-layout components, a unified
            design system, and countless blueprint patterns to supercharge your
            workflow
          </p> */}
          <ul className="text-gray-700 text-lg xl:text-xl font-medium plus-jakarta-sans list-disc list-inside">
            <li>1000+ Figma Components</li>
            <li className="mt-4">Production Ready</li>
            <li className="mt-4">Complete Auto-Layout</li>
            <li className="mt-4">Fully Responsive</li>
            <li className="mt-4">Unified Design System</li>
            <li className="mt-4">Blueprints for any pattern out there</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Index;
