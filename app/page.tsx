import Heading from "@/components/Heading";
import TopThought from "@/components/TopThought";
import ClientCardContainer from "@/components/ClientCardContainer";
import { fetchTopThought } from "./lib/data";
import { Thought } from "@prisma/client";
import { formatLikes } from "./lib/actions";

export default async function Homepage() {
  const topThought:Thought|null = await fetchTopThought();
  return (
    <div className="relative">
      <Heading />
      {topThought && (
        <TopThought
          id={topThought.thoughtId}
          text={topThought.content}
          likes={formatLikes(topThought.likeCount)}
        />
      )}
      <ClientCardContainer />
    </div>
  );
}