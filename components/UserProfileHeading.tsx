'use client'
import React from "react";
import { useParams } from "next/navigation";

const UserProfileHeading = () => {
  const { username } = useParams();
  return <h1 className="text-3xl font-bold text-black">{username}</h1>;
};

export default UserProfileHeading;
