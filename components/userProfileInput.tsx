"use client";
import React from "react";
import Input from "./Input";
import { useParams } from "next/navigation";
import { useUser } from "@clerk/nextjs";

const UserProfileInput = () => {
  const { username } = useParams();
  const { user, isSignedIn } = useUser();

  return isSignedIn ? (
    user.username === username ? (
      <div>
        <h1 className="mt-10 text-2xl text-black font-semibold">
          Release your <span className="text-blue-600">controversial</span>,
          <span className="text-purple-600"> political</span> or{" "}
          <span className="text-cyan-600">random</span> thoughts to the world.
          Uncensored.
        </h1>
        <Input></Input>
      </div>
    ) : null
  ) : null;
};

export default UserProfileInput;
