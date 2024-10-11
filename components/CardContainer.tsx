import Card from "./Card";
import { formatLikes } from "@/app/lib/actions";
import { fetchThoughts } from "@/app/lib/data";
import { Thought } from "@/app/lib/definitions";
const CardContainer = async () => {
  const thoughts: Thought[] | null = await fetchThoughts(1);
  return (
    <div className="w-full  flex flex-row justify-center">
      {/* column 1 */}
      <div className="w-1/2 flex flex-col gap-x-3 gap-y-14 items-center">
        {thoughts
          ? thoughts.map((card, index) =>
              index % 2 === 0 ? (
                <Card
                  key={card.thoughtId}
                  index={index}
                  id={card.thoughtId}
                  text={card.content}
                  likes={formatLikes(card.likeCount)}
                  picture={"/placeholder.jpg"}
                />
              ) : null
            )
          : null}
      </div>
      {/* column 2 */}
      <div className="w-1/2 flex flex-col gap-y-14 items-center flex-shrink-0 mt-12">
        {thoughts
          ? thoughts.map((card, index) =>
              index % 2 !== 0 ? (
                <Card
                  key={card.thoughtId}
                  index={index}
                  id={card.thoughtId}
                  text={card.content}
                  likes={formatLikes(card.likeCount)}
                  picture={"/placeholder.jpg"}
                />
              ) : null
            )
          : null}
      </div>
    </div>
  );
};

export default CardContainer;
