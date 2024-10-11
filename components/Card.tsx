"use client";

import Image from "next/image";
import LikeButton from "./likeButton";

type CardProps = {
  id: number;
  text: string;
  likes: string;
  picture: string;
  index: number;
};

const Card = ({ id, text, likes, picture, index }: CardProps) => {
  return (
    <div className= {`bg-[#f0f4ff] max-w-xl h-24 w-full min-w-lg p-4 rounded-2xl shadow-elevateLow flex items-center justify-between ${index!==0&&index%3===0?"ml-20":"ml-0"}  ${index%4===0?"mr-20":"mr-0"}`}>
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
      <LikeButton id={id} likeCount={likes}></LikeButton>
    </div>
  );
};

export default Card;
