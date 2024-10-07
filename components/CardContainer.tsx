import Card from "./Card";
import { formatLikes } from "@/app/lib/actions";
import { fetchThoughts } from "@/app/lib/data";
import { Thought } from "@/app/lib/definitions";
const CardContainer = async () => {
  let thoughts: Thought[] | null = await fetchThoughts(1);
  return (
    <div className="grid grid-cols-3 gap-2">
      {thoughts
        ? thoughts.map((card) => (
            <Card
              key={card.thoughtId}
              id={card.thoughtId}
              text={card.content}
              likes={formatLikes(card.likeCount)}
              picture={"/placeholder.jpg"}
            />
          ))
        : null}
    </div>
  );
};

export default CardContainer;
