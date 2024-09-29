import React from "react";
const Dropdown = () => {
  return (
    <div className="h-56 w-48 bg-[#AFAFFF] absolute right-0 rounded-md shadow-elevateLow top-20 flex flex-col justify-center items-center gap-y-10">
      <button className="bg-[#3E0A9E] hover:bg-[#5d1fcf] text-white font-bold py-2 px-4 w-24 md:w-32  rounded-lg">
        Log In
      </button>
      <button className="bg-[#3E0A9E] hover:bg-[#5d1fcf] text-white font-bold py-2 px-4 w-24 md:w-32  rounded-lg">
        Sign Up
      </button>
    </div>
  );
};

export default Dropdown;
