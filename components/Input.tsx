"use client";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { jelly } from "ldrs";

const Input = () => {
  const router = useRouter();
  jelly.register();
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  function handleChange(s: string) {
    setInput(s);
  }
  const { user } = useUser();
  async function handleCreate() {
    setLoading(true);
    if (user) {
      if (input !== "") {
        const content = input;
        const authorId = user.id;
        //sending api call to create thought
        const response = await fetch(`/api/thoughts?pageNumber=1`, {
          method: "POST",
          body: JSON.stringify({ content, authorId }),
          cache: "no-store",
        });
        if (!response.ok) {
          console.error("Failed to create thought");
        } else {
          router.refresh();
          console.log("created thought successfully");
        }
      } else {
        alert("cannot create empty thought");
        console.log("cannot create empty thought");
      }
    }
    setLoading(false);
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
            value={input}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleCreate();
                setInput(" ");
              }
            }}
            onChange={(e) => handleChange(e.target.value)}
            type="text"
            placeholder="type here.."
            className="ml-3 w-full bg-transparent outline-none text-gray-600"
          />
        </div>
        <button className="bg-[#f0f4ff] h-[10vh] w-[7vw] p-3 rounded-2xl flex flex-row items-center justify-center  hover:bg-[#e0e4ff] shadow-elevateLow">
          {loading ? (
            <l-jelly size="40" speed="0.9" color="#5762DA"></l-jelly>
          ) : (
            <IoMdCheckmarkCircleOutline
              size={45}
              onClick={() => {
                handleCreate();
                setInput(" ");
              }}
              className="text-gray-600 text-3xl mr-1 hover:text-black"
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default Input;
