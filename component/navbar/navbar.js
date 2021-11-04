import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between px-4 py-4 xl:px-20 xl:py-10 z-50">
      <div>
        <Link href="/">
          <a className="text-2xl font-arvo font-bold cursor-pointer">
            <span className="text-gray-600">Fig</span>
            <span className="text-gray-900">it</span>
          </a>
        </Link>
      </div>

      {/* hamburger */}
      <div className="block lg:hidden cursor-pointer">
        <Image src="/svgs/hamburger.svg" alt="" width={40} height={40} />
      </div>

      {/* Linear gradient */}
      <div className="hidden lg:flex items-center">
        <Link href="/pricing">
          <a className="text-black font-medium text-base mr-9 cursor-pointer font-plus-jakarta-sans">
            Pricing
          </a>
        </Link>
        <Link href="/faq">
          <a className="text-black font-medium text-base mr-9 cursor-pointer font-plus-jakarta-sans">
            FAQ
          </a>
        </Link>
        <p className="text-white bg-black py-3 px-5 rounded-md font-medium text-base cursor-pointer font-plus-jakarta-sans">
          Login
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
