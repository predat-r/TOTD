import { unstable_noStore as noStore} from "next/cache";
import Card from "./Card";
import { formatLikes } from "@/app/lib/actions";
import { Thought } from "@/app/lib/definitions";
import { fetchThoughts } from "@/app/lib/actions";
const CardContainer = async () => {
  noStore()
  const thoughts: Thought[] = await fetchThoughts();

  return (
    <div className="grid grid-cols-3 gap-2">
      {thoughts.map((card) => (
        <Card
          key={card.thoughtId}
          id={card.thoughtId}
          text={card.content}
          likes={formatLikes(card.likeCount)}
          picture={"/placeholder.jpg"}
        />
      ))}
    </div>
  );
};

export default CardContainer;
