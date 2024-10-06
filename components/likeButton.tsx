import { formatLikes } from "@/app/lib/actions";
import { SignInButton, useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";

const LikeButton = ({ id, likeCount }: { id: number; likeCount: string }) => {
  const { isSignedIn, user } = useUser();
  const [likedbyuser, setLikedbyuser] = useState(false);
  const [likecount, setLikeCount] = useState(parseInt(likeCount));
  useEffect(() => {
    const likedbyCurrentUser = async () => {
      if (isSignedIn) {
        const userId = user?.id;
        const response = await fetch(`/api/like/likedbyuser`, {
          method: "POST",
          body: JSON.stringify({ userId, thoughtId: id }),
        });
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
      setLikeCount((prev) => prev + 1);
      const userId = user?.id;
      await fetch(`/api/like`, {
        method: "POST",
        body: JSON.stringify({
          thoughtId,
          userId,
        }),
      });
    }
  };
  return (
    <div className="flex flex-row gap-x-2">
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
  );
};

export default LikeButton;
