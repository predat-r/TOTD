"use client";
import Dropdown from "./Dropdown";
import { useState } from "react";
import { TfiAlignLeft } from "react-icons/tfi";
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
      <nav className="flex items-center justify-between bg-[#5762DA] p-4  rounded-xl mb-20 shadow-elevateLow">
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
          <div>
            <button
              onClick={() => toggleDropdown()}
              className="bg-[#3E0A9E] hover:bg-[#5d1fcf] text-white font-bold py-2 px-4 w-24 md:w-32  rounded-lg"
            >
              Profile
            </button>
          </div>
        </SignedIn>
      </nav>
      {showdropdown ? <Dropdown /> : null}
    </>
  );
}

export default Navbar;
