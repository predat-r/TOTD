import React from "react";
import Image from "next/image";
import Input from "@/components/Input";
import Card from "@/components/Card";
import UserProfileHeading from "@/components/UserProfileHeading";

const ProfilePage = () => {
  return (
    <div className=" flex flex-col overflow-scroll items-center w-full h-full">
      <UserProfileHeading></UserProfileHeading>
      <div className="flex flex-row justify-center items-center rounded-full w-60 h-60 overflow-hidden mt-5">
        <Image
          src={"/placeholder.jpg"}
          width={300}
          height={300}
          alt="profile image"
        ></Image>
      </div>
      <h1 className="mt-10 text-2xl text-black font-semibold">
        Release your <span className="text-blue-600">controversial</span>,
        <span className="text-purple-600"> political</span> or{" "}
        <span className="text-cyan-600">random</span> thoughts to the world.
        Uncensored.
      </h1>
      <Input></Input>
      <div className="mt-5 w-full bg-blue flex flex-col gap-y-10 items-center">
        <h1 className="gradient-text text-5xl p-2">Live Thoughts</h1>
        <div className="w-full flex flex-row items-center  justify-center">
          <Card
            id={1}
            text="hey this is your live thought yummy"
            likes="50"
            picture="/placeholder.jpg"
          ></Card>
          <h1 className="gradient-text text-3xl p-2">24:09 left</h1>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
