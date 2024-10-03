import Heading from "@/components/Heading";
import TopThoughtSkeleton from "@/components/skeletons/TopThoughtSkeleton";
import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col space-y-4 p-4">
      <Heading />

      {/* Skeleton for the TopThought */}
      <TopThoughtSkeleton />
      {/* Skeleton for the CardContainer */}
      <div className="grid grid-cols-3 gap-2">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="bg-gray-300 p-4 rounded-2xl shadow-elevateLow animate-pulse flex items-center justify-between"
          >
            <div className="flex items-center">
              <div className="bg-gray-300 rounded-full w-12 h-12"></div>
              <div className="ml-4">
                <div className="bg-gray-300 h-4 w-3/4 rounded mb-1"></div>
                <div className="bg-gray-300 h-3 w-1/2 rounded"></div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-gray-300 w-6 h-6 rounded-full"></div>
              <div className="bg-gray-300 h-4 w-1/4 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
