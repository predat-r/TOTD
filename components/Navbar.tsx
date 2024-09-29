import React from "react";
import { TfiAlignLeft } from "react-icons/tfi";

function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between bg-[#5762DA] p-4  rounded-xl mb-20 shadow-elevateLow">
        <div className="text-white text-2xl">
          <TfiAlignLeft size={30}/>
        </div>

        <div className="text-white font-semibold ml-10 sm:ml-20"><img className="size-12" src="icon.png" alt="logo" /></div>

        <div>
          <button className="bg-[#3E0A9E] hover:bg-[#5d1fcf] text-white font-bold py-2 px-4 w-24 md:w-32  rounded-lg">
            Sign In
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
