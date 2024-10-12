/* eslint-disable @typescript-eslint/no-unused-vars */
import Card from "./Card";
import { formatLikes } from "@/app/lib/actions";
import { fetchThoughts } from "@/app/lib/data";
import { Thought } from "@/app/lib/definitions";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import { useIntersection } from "@mantine/hooks";

// Skeleton component for loading state
const ThoughtSkeleton = ({ index }: { index: number }) => {
  return (
    <div
      className={`bg-[#f0f4ff] max-w-xl h-24 w-full min-w-lg p-4 rounded-2xl shadow-elevateLow flex items-center justify-between animate-pulse
      ${index % 2 === 0 ? "ml-0" : "ml-20"} ${index >= 2 ? "mt-12" : "mt-0"}`}
    >
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

// Fetch thought pages from your API
const fetchThoughtsPage = async (page: number) => {
  const thoughts: Thought[] | null = await fetchThoughts(page);
  return thoughts;
};

const CardContainer = () => {
  // Infinite query to fetch paginated thoughts
  const { data, fetchNextPage, isFetchingNextPage, isLoading, hasNextPage } = useInfiniteQuery({
    queryKey: ["thoughts"],
    queryFn: async ({ pageParam = 1 }) => {
      const response = await fetchThoughtsPage(pageParam);
      return response;
    },
    getNextPageParam: (lastPage, allPages) => {
      return allPages.length + 1; // Assuming API pagination uses page number
    },
    initialPageParam: 1,
  });

  const lastCardRef = useRef<HTMLDivElement>(null);
  const { ref, entry } = useIntersection({
    root: null,
    threshold: 0.1, // Trigger when 10% of the last card is visible
  });

  // Effect to fetch next page when the last card is visible
  useEffect(() => {
    if (entry?.isIntersecting && hasNextPage) {
      fetchNextPage();
    }
  }, [entry, fetchNextPage, hasNextPage]);

  // Use a Set to keep track of unique thought IDs
  const uniqueThoughts = new Set<number>();

  // Flatten the pages to get all thoughts in one array
  const thoughts = data?.pages.flatMap((page) =>
    page?.filter((thought) => {
      if (!thought) return false;
      if (uniqueThoughts.has(thought.thoughtId)) return false; // Check for uniqueness
      uniqueThoughts.add(thought.thoughtId); // Add thought ID to the set
      return true; // Include this thought
    }) || []
  ) || [];

  return (
    <div className="w-full flex flex-col justify-center">
      {/* column 1 */}
      <div className="w-full flex flex-row justify-center">
        <div className="w-1/2 flex flex-col gap-x-3 gap-y-14 items-center">
          {isLoading ? (
            <>
              <ThoughtSkeleton index={thoughts.length} />
              <ThoughtSkeleton index={thoughts.length + 2} />
              <ThoughtSkeleton index={thoughts.length + 4} />
            </>
          ) : thoughts.length > 0 ? (
            thoughts.map((thought, index) =>
              thought ? ( // Safely check if thought is defined before rendering the Card
                index % 2 === 0 ? (
                  <Card
                    key={thought.thoughtId}
                    index={index}
                    id={thought.thoughtId}
                    text={thought.content}
                    likes={formatLikes(thought.likeCount)}
                    picture={"/placeholder.jpg"}
                    ref={index === thoughts.length - 1 ? ref : null} // Attach ref to the last card
                  />
                ) : null
              ) : null
            )
          ) : (
            <div>No thoughts available</div>
          )}
        </div>

        {/* column 2 */}
        <div className="w-1/2 flex flex-col gap-y-14 items-center flex-shrink-0 mt-12">
          {isLoading ? (
            <>
              <ThoughtSkeleton index={thoughts.length + 1} />
              <ThoughtSkeleton index={thoughts.length + 3} />
              <ThoughtSkeleton index={thoughts.length + 5} />
            </>
          ) : thoughts.length > 0 ? (
            thoughts.map((thought, index) =>
              thought ? ( // Safely check if thought is defined before rendering the Card
                index % 2 !== 0 ? (
                  <Card
                    key={thought.thoughtId}
                    index={index}
                    id={thought.thoughtId}
                    text={thought.content}
                    likes={formatLikes(thought.likeCount)}
                    picture={"/placeholder.jpg"}
                    ref={index === thoughts.length - 1 ? ref : null} // Attach ref to the last card
                  />
                ) : null
              ) : null
            )
          ) : (
            <div>No thoughts available</div>
          )}
        </div>
      </div>


      {/* Show skeleton loader while fetching more data */}
      {isFetchingNextPage && (
        <div className="w-full flex flex-row justify-center">
          <div className="w-1/2 flex flex-col gap-x-3 gap-y-14 items-center">
            {
              <>
                <ThoughtSkeleton index={thoughts.length} />
                <ThoughtSkeleton index={thoughts.length + 2} />
              </>
            }
          </div>

          {/* column 2 */}
          <div className="w-1/2 flex flex-col gap-y-14 items-center flex-shrink-0 mt-12">
            {
              <>
                <ThoughtSkeleton index={thoughts.length + 1} />
                <ThoughtSkeleton index={thoughts.length + 3} />
              </>
            }
          </div>
        </div>
      )}
    </div>
  );
};

export default CardContainer;
