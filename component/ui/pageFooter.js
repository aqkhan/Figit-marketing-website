import React from "react";
import Link from "next/link";
import Image from "next/image";

const PageFooter = () => {
  return (
    <footer className="flex items-center justify-center flex-col mt-24 xl:mt-32 lg:w-1427 lg:mx-auto">
      <div className="flex items-center justify-between flex-col lg:flex-row w-full border-t border-gray-200">
        {/* Logo */}
        <div className="mt-7 md:mt-6 lg:my-14 text-left">
          <Image src="/svgs/figmauto.svg" alt="" width={107} height={24} />
          <h4 className="font-medium text-base text-gray-600">
            howdy@figit.com
          </h4>
        </div>

        {/* Links */}
        <div className="flex items-center justify-center mt-8 md:mt-9 text-center">
          <h5 className="text-gray-600 justify-around text-base font-medium">
            Pricing
          </h5>
          <Link href="/faq">
            <a className="ml-8 md:ml-16 text-gray-600 justify-around text-base font-medium">
              FAQ
            </a>
          </Link>
          <h5 className="ml-8 md:ml-16 text-gray-600 justify-around text-base font-medium">
            Privacy Policy
          </h5>
          <h5 className="ml-8 md:ml-16 text-gray-600 justify-around text-base font-medium">
            Login
          </h5>
        </div>

        {/* Discord icon */}
        <div className="my-8 md:mt-11 flex justify-center">
          <div className="rounded-full border-2 p-4">
            <Image src="/svgs/discord.svg" alt="" width={28} height={20} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PageFooter;
