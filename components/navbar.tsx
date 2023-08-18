"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = React.useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      {/* xl: 1200+*/}
      <div className="w-full h-[66px] flex justify-between items-center text-secondary-noneselected">
        <Link href={"/"}>
          <Image src="/EndUserX_Logo.png" alt="logo" width={254} height={70} />
        </Link>
        <div className="w-[560px] h-[25px]">
          <ul className="hidden sm:flex justify-between">
            <li className="text-lg font-bold text-primary-selected">
              <Link href="#">item1</Link>
            </li>
            <li className="text-lg font-semibold">
              <Link href="#">item2</Link>
            </li>
            <li className="text-lg font-semibold">
              <Link href="#">item3</Link>
            </li>
            <li className="text-lg font-semibold">
              <Link href="#">item4</Link>
            </li>
            <li>
              <Link href="#">
                <Image
                  src={"/Facebook.svg"}
                  width={30.1}
                  height={25}
                  alt={"discord"}
                />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image
                  src={"/Discord.svg"}
                  width={33.8}
                  height={25}
                  alt={"discord"}
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          <Image src="/Menu.svg" width={24} height={16.75} alt={"/"} />
          {/* {nav ? (
            <Image src="/Menu.svg" width={24} height={16.75} alt={"/"} />
          ) : (
            <Image src="/cancel1.svg" width={24} height={16.75} alt={"/"} />
          )} */}
        </div>
        {/* Mobile Menu */}
        <div
          className="sm:hidden absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-center items-center gap-[30px]"
          // className={
          //   nav
          //     ? "sm:hidden absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          //     : "sm:hidden absolute top-0 right-0 bottom-0 left-[-100%] flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          // }
        >
          <ul>
            <div className="w-[300px] h-[1px] bg-[#007D8E]" />
            {/* <li style={{ fontSize: "28px", color: "#007D8E" }}>Home</li> */}
            <li
              className="p-4 text-4xl hover:text-gray-500"
              style={{ fontSize: "28px", color: "#007D8E" }}
            >
              <Link href="#">Home</Link>
            </li>
            <div className="w-[300px] h-[1px] bg-[#007D8E]" />
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="#">item1</Link>
            </li>

            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="#">item2</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="#">item3</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="#">item4</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
