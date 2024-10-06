"use client";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";
import { useSession, useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { formatLikes } from "@/app/lib/actions";
import { SignInButton } from "@clerk/nextjs";

type CardProps = {
  id: number;
  text: string;
  likes: string;
  picture: string;
};

const Card = ({ id, text, likes, picture }: CardProps) => {
  const { isSignedIn, user } = useUser();
  const [likedbyuser, setLikedbyuser] = useState(false);
  const [likecount, setLikeCount] = useState(parseInt(likes));
  useEffect(() => {
    const likedbyCurrentUser = async () => {
      if (isSignedIn) {
        const userId = user?.id;
        const response = await fetch(
          "http://localhost:3000/api/like/likedbyuser",
          {
            method: "POST",
            body: JSON.stringify({ userId, thoughtId: id }),
          }
        );
        const data = await response.json();
        if (data === true) {
          setLikedbyuser(true);
        }
      }
    };
    likedbyCurrentUser();
  }, [isSignedIn, user, id]);

  const likeThought = async (thoughtId: number) => {
    if (user !== null) {
      setLikedbyuser(true);
      const userId = user?.id;
      await fetch("http://localhost:3000/api/like", {
        method: "POST",
        body: JSON.stringify({
          thoughtId,
          userId,
        }),
      });
      setLikeCount((prev) => prev + 1); // Increment the like count
    }
  };

  return (
    <div className="bg-[#f0f4ff] max-w-lg p-4 rounded-2xl shadow-elevateLow flex items-center justify-between">
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
        {isSignedIn ? (
          likedbyuser ? (
            <FaHeart className="text-2xl text-red-500 cursor-pointer" />
          ) : (
            <FaHeart
              onClick={() => likeThought(id)}
              className="text-gray-400 text-2xl hover:text-red-500 cursor-pointer"
            />
          )
        ) : (
          <SignInButton>
            <FaHeart
              onClick={() => likeThought(id)}
              className="text-gray-400 text-2xl hover:text-red-500 cursor-pointer"
            />
          </SignInButton>
        )}
        <p className="text-gray-500">{formatLikes(likecount)}</p>{" "}
      </div>
    </div>
  );
};

export default Card;
