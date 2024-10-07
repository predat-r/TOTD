"use client";

import { formatLikes } from "@/app/lib/actions";
import { SignInButton, useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { likeThought, likedByUser } from "@/app/lib/data";

const LikeButton = ({
  id,
  likeCount: initialLikeCount,
}: {
  id: number;
  likeCount: string;
}) => {
  const { isSignedIn, user } = useUser();
  const [likedByCurrentUser, setLikedByCurrentUser] = useState(false);
  const [likeCount, setLikeCount] = useState(parseInt(initialLikeCount));

  //will run once on mount
  useEffect(() => {
    const checkLikedByCurrentUser = async () => {
      if (isSignedIn && user?.id) {
        try {
          const response = await likedByUser(user.id, id);
          setLikedByCurrentUser(response);
        } catch (error) {
          console.error("Error checking if liked by user:", error);
        }
      }
    };
    checkLikedByCurrentUser();
  }, [isSignedIn, user, id]);

  const likeThoughtWithServerAction = async () => {
    if (user?.id) {
      setLikedByCurrentUser(true);
      setLikeCount((prev) => prev + 1);
      try {
        await likeThought(user.id, id);
      } catch (error) {
        console.error("Error liking thought:", error);
        setLikedByCurrentUser(false);
        setLikeCount((prev) => prev - 1);
      }
    }
  };

  return (
    <div className="flex flex-row gap-x-2">
      {isSignedIn ? (
        likedByCurrentUser ? (
          <FaHeart className="text-2xl text-red-500 cursor-pointer" />
        ) : (
          <FaHeart
            onClick={likeThoughtWithServerAction}
            className="text-gray-400 text-2xl hover:text-red-500 cursor-pointer"
          />
        )
      ) : (
        <SignInButton>
          <FaHeart className="text-gray-400 text-2xl hover:text-red-500 cursor-pointer" />
        </SignInButton>
      )}
      <p className="text-gray-500">{formatLikes(likeCount)}</p>
    </div>
  );
};

export default LikeButton;
