"use client";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Image from "next/image";

const Input = () => {
  return (
    <div className="flex flex-col items-center mb-6">
      <div className="flex items-center w-full max-w-lg mt-4 space-x-2">
        <div className="bg-[#f0f4ff] w-full p-2 rounded-2xl shadow-md flex items-center">
          <Image
            src="/path-to-avatar.jpg"
            alt="User avatar"
            width={48}
            height={48}
            className="rounded-full object-cover"
          />
          <input
            type="text"
            placeholder="type here.."
            className="ml-3 w-full bg-transparent outline-none text-gray-600"
          />
        </div>
        <button className="bg-[#f0f4ff] p-3 rounded-2xl shadow-md hover:bg-[#e0e4ff]">
          <IoMdCheckmarkCircleOutline
            size={45}
            className="text-gray-600 text-3xl hover:text-black"
          />
        </button>
      </div>
    </div>
  );
};

export default Input;
