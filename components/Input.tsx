"use client";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Image from "next/image";

const Input = () => {
  return (
    <div className="flex w-full flex-col items-center mb-6 ">
      <div className="flex items-center h-[15vh] w-full max-w-lg mt-4 space-x-2">
        <div className="bg-[#f0f4ff] h-[10vh] w-full p-3 rounded-2xl shadow-elevateLow flex items-center">
          <div className="w-12 h-12 box-border rounded-full overflow-hidden">
            <Image
              src="/placeholder.jpg"
              alt="User avatar"
              width={48}
              height={48}
            />
          </div>
          <input
            type="text"
            placeholder="type here.."
            className="ml-3 w-full bg-transparent outline-none text-gray-600"
          />
        </div>
        <button className="bg-[#f0f4ff] h-[10vh] w-[7vw] p-3 rounded-2xl flex flex-row items-center justify-center  hover:bg-[#e0e4ff] shadow-elevateLow">
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
