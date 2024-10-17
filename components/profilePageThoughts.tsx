"use client";
import React from "react";
import Card from "@/components/Card";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Thought } from "@prisma/client";
import { formatLikes } from "@/app/lib/actions";
import { deleteThought } from "@/app/lib/data";
import { useRouter } from "next/navigation";
const ProfilePageThoughts = ({ thoughts }: { thoughts: Thought[] }) => {
  const router = useRouter();
  const DeleteThought = async (ThoughtId: number) => {
    const response = await deleteThought(ThoughtId);
    if (response === true) {
      router.refresh();
    }
  };
  console.log(thoughts);
  return (
    <div>
      <div className="w-[100vw] h-36 flex flex-col  items-center mb-1 ">
        {thoughts !== null
          ? thoughts.map((element: Thought, index) => (
              <div
                key={index}
                className="w-[100vw] pl-10 h-full flex flex-row flex-shrink-0 items-center justify-center ml-16 gap-x-20"
              >
                <Card
                  index={-1}
                  key={element.thoughtId}
                  id={element.thoughtId}
                  text={element.content}
                  likes={formatLikes(element.likeCount)}
                  picture="/placeholder.jpg"
                ></Card>
                <h1 className="gradient-text text-3xl p-2">24:09 left</h1>
                <MdOutlineDeleteOutline
                  onClick={() => DeleteThought(element.thoughtId)}
                  className="size-7 text-purple-900 hover:text-red-700"
                />
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default ProfilePageThoughts;
