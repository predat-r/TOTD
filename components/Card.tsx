"use client";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";

type CardProps = {
  text: string;
  likes: string;
  picture: string;
};

const Card = ({ text, likes, picture }: CardProps) => {
  return (
    <div className="bg-[#f0f4ff]  max-w-lg p-4 rounded-2xl shadow-elevateLow flex items-center justify-between">
      <div className="flex items-center">
        <div className="w-12 h-12 overflow-hidden rounded-full">
          <Image
            src={picture}
            alt="Profile"
            width={48}
            height={48}
            className="rounded-full object-cover"
          />
        </div>
        <p className="ml-4 text-lg font-semibold text-gray-700">{text}</p>
      </div>

      <div className="flex items-center space-x-2">
        <FaHeart className="text-gray-400 text-2xl hover:text-red-500 cursor-pointer" />
        <p className="text-gray-500">{likes}</p>
      </div>
    </div>
  );
};

export default Card;
