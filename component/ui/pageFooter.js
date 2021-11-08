import React from "react";
import Link from "next/link";
import Image from "next/image";

const PageFooter = () => {
  return (
    <footer className="flex items-center justify-center flex-col mt-24 xl:mt-32 xl:w-1427 xl:mx-auto px-4">
      <div className="flex items-center justify-between flex-col xl:flex-row w-full border-t border-gray-200">
        {/* Logo */}
        <div className="mt-8 lg:my-14 text-center xl:text-left">
          {/* <Image src="/svgs/figit.svg" alt="" width={107} height={24} /> */}
          <Image src="/svgs/figit.svg" alt="" width={64} height={28} />
          <h4 className="font-medium text-base text-gray-600">
            howdy@figit.com
          </h4>
        </div>

        {/* Links */}
        <div className="flex items-center justify-center mt-8 xl:mt-0 text-center">
          <h5 className="text-gray-600 justify-around text-base font-medium cursor-pointer">
            Pricing
          </h5>
          <Link href="/faq">
            <a className="ml-8 md:ml-16 text-gray-600 justify-around text-base font-medium cursor-pointer">
              FAQ
            </a>
          </Link>
          <h5 className="ml-8 md:ml-16 text-gray-600 justify-around text-base font-medium cursor-pointer">
            Privacy Policy
          </h5>
          <h5 className="ml-8 md:ml-16 text-gray-600 justify-around text-base font-medium cursor-pointer">
            Login
          </h5>
        </div>

        {/* Discord icon */}
        <div className="my-8 md:mt-11 flex justify-center items-center">
          <div className="rounded-full border-2 p-4">
            <Image src="/svgs/twitter.svg" alt="" width={28} height={20} />
          </div>
          <div className="rounded-full border-2 p-4 ml-4">
            <Image src="/svgs/youtube.svg" alt="" width={30} height={26} />
          </div>
          <div className="rounded-full border-2 p-4 ml-4">
            <Image src="/svgs/discord.svg" alt="" width={28} height={20} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PageFooter;
