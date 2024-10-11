import React from "react";
import Card from "@/components/Card";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { fetchUserThoughts } from "@/app/lib/data";
import { Thought } from "@prisma/client";
import { formatLikes } from "@/app/lib/actions";
const ProfilePageThoughts = async ({username}:{username:string}) => {
  const thoughts: Thought[] | null = await fetchUserThoughts(username);
  console.log(thoughts);
  return (
    <div>
      <div className="w-[100vw] h-36 flex flex-col  items-center mb-1 ">
        {thoughts !== null
          ? thoughts.map((element: Thought ,index) => (
              <div key={index} className="w-[100vw] pl-10 h-full flex flex-row flex-shrink-0 items-center justify-center ml-16 gap-x-20">
                <MdOutlineDeleteOutline className="size-7 text-purple-900 hover:text-red-700" />
                <Card
                  index={-1}
                  key={element.thoughtId}
                  id={element.thoughtId}
                  text={element.content}
                  likes={formatLikes(element.likeCount)}
                  picture="/placeholder.jpg"
                ></Card>
                <h1 className="gradient-text text-3xl p-2">24:09 left</h1>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default ProfilePageThoughts;
