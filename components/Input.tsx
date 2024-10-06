"use client";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";


const Input = () => {
  const [input, setInput] = useState("");
  function handleChange(s: string) {
    setInput(s);
  }
  const { user } = useUser();
  async function handleCreate() {
    //getting user id to create the thought with
    if (user) {
      const content = input;
      const authorId = user.id;
      //sending api call to create thought
      const response = await fetch(
        "http://localhost:3000/api/thoughts?pageNumber=1",
        {
          method: "POST",
          body: JSON.stringify({ content, authorId }),
          "cache":"no-store",
        }
      );

      if (!response.ok) {
        console.error("Failed to create thought");
      } else {
        console.log("created thought successfully");
      }
    }
 

  }
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
            onChange={(e) => handleChange(e.target.value)}
            type="text"
            placeholder="type here.."
            className="ml-3 w-full bg-transparent outline-none text-gray-600"
          />
        </div>
        <button className="bg-[#f0f4ff] h-[10vh] w-[7vw] p-3 rounded-2xl flex flex-row items-center justify-center  hover:bg-[#e0e4ff] shadow-elevateLow">
          <IoMdCheckmarkCircleOutline
            size={45}
            onClick={() => handleCreate()}
            className="text-gray-600 text-3xl hover:text-black"
          />
        </button>
      </div>
    </div>
  );
};

export default Input;
