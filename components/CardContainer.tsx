/* eslint-disable @typescript-eslint/no-unused-vars */
import Card from "./Card";
import { formatLikes } from "@/app/lib/actions";
import { fetchThoughts } from "@/app/lib/data";
import { Thought } from "@/app/lib/definitions";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import { useIntersection } from "@mantine/hooks";

// Skeleton component for loading state
const ThoughtSkeleton = () => {
  return (
    <div className="bg-[#f0f4ff] max-w-lg flex-shrink-0 p-4 rounded-2xl shadow-elevateLow flex items-center justify-between animate-pulse">
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
        <div className="ml-4">
          <div className="h-4 bg-gray-300 rounded w-24 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-16"></div>
        </div>
      </div>
      <div className="w-8 h-4 bg-gray-300 rounded"></div>
    </div>
  );
};

const fetchThoughtsPage = async (page: number) => {
  const thoughts: Thought[] | null = await fetchThoughts(page);
  return thoughts;
};

const CardContainer = () => {
  const { data, fetchNextPage, isFetchingNextPage, isLoading } = useInfiniteQuery({
    queryKey: ["thoughts"],
    queryFn: async ({ pageParam = 1 }) => {
      const response = await fetchThoughtsPage(pageParam);
      return response;
    },
    getNextPageParam: (_, pages) => pages.length + 1,
    initialPageParam: 1,
  });

  const lastCardRef = useRef<HTMLDivElement>(null);
  const { ref, entry } = useIntersection({
    root: null,
    threshold: 1,
  });

  useEffect(() => {
    if (entry?.isIntersecting) {
      fetchNextPage();
    }
  }, [entry, fetchNextPage]);

  const thoughts = data?.pages.flatMap((page) => page?.filter(Boolean)) || [];

  return (
    <div className="grid grid-cols-3 gap-2">
      {isLoading ? (
        <>
          <ThoughtSkeleton />
          <ThoughtSkeleton />
          <ThoughtSkeleton />
        </>
      ) : thoughts.length > 0 ? (
        thoughts.map((thought, index) => {
          const isLastCard = index === thoughts.length - 1;

          if (!thought) return null;

          return (
            <Card
              key={thought.thoughtId}
              id={thought.thoughtId}
              text={thought.content}
              likes={formatLikes(thought.likeCount)}
              picture={"/placeholder.jpg"}
              ref={isLastCard ? ref : null} // Attach the ref only to the last card for intersection observer
            />
          );
        })
      ) : (
        <div>No thoughts available</div>
      )}

      {isFetchingNextPage && (
        <>
          <ThoughtSkeleton />
          <ThoughtSkeleton />
          <ThoughtSkeleton />
        </>
      )}

      <button
        onClick={() => fetchNextPage()}
        disabled={isFetchingNextPage}
        className="btn"
      >
      </button>
    </div>
  );
};

export default CardContainer;
