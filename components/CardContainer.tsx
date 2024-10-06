import { unstable_noStore as noStore } from "next/cache";
import Card from "./Card";
import { formatLikes } from "@/app/lib/actions";
import { Thought } from "@/app/lib/definitions";
import { fetchThoughts } from "@/app/lib/data";
const CardContainer = async () => {
  noStore();
  const thoughts: Thought[] | null = await fetchThoughts(1);
  
  return (
    <div className="grid grid-cols-3 gap-2">
      {thoughts?thoughts.map((card) => (
        <Card
          key={card.thoughtId}
          id={card.thoughtId}
          text={card.content}
          likes={formatLikes(card.likeCount)}
          picture={"/placeholder.jpg"}
        />
      )):null}
    </div>
  );
};

export default CardContainer;
