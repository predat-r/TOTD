"use client";
import Dropdown from "./Dropdown";
import { useState } from "react";
import { TfiAlignLeft } from "react-icons/tfi";
import { IoMdNotificationsOutline } from "react-icons/io";
import Image from "next/image";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import React from "react";

function Navbar() {
  const [showdropdown, setShowdropdown] = useState(false);
  const toggleDropdown = () => {
    setShowdropdown(!showdropdown);
  };
  return (
    <>
      <nav className="flex items-center justify-between bg-[#5762DA] p-4 relative rounded-xl mb-20 shadow-elevateLow">
        <div className="text-white text-2xl">
          <TfiAlignLeft size={30} />
        </div>

        <div className="text-white font-semibold ml-10 sm:ml-20">
          <Image width={42} height={42} src="/icon.png" alt="logo" />
        </div>
        <SignedOut>
          <div>
            <button
              onClick={() => toggleDropdown()}
              className="bg-[#3E0A9E] hover:bg-[#5d1fcf] text-white font-bold py-2 px-4 w-24 md:w-32  rounded-lg"
            >
              Sign In
            </button>
          </div>
        </SignedOut>
        <SignedIn>
          <div className="flex flex-row justify-end items-center gap-x-6">
            <IoMdNotificationsOutline size={30}  />
            <div
              onClick={() => toggleDropdown()}
              className="bg-black w-12 h-12 rounded-full p-0 m-0 flex items-center justify-center overflow-hidden"
            >
              <Image
                className="m-0"
                height={40}
                width={50}
                src="/placeholder.jpg"
                alt="profile picture"
              ></Image>
            </div>
          </div>
        </SignedIn>
      </nav>
      {showdropdown ? <Dropdown /> : null}
    </>
  );
}

export default Navbar;
