"use client";
import Card from "./Card";
import { formatLikes } from "@/app/lib/actions";
import { Thought } from "@/app/lib/definitions";
interface CardContainerProps {
  thoughts: Thought[];
}
const CardContainer = ({ thoughts }: CardContainerProps) => {

  return (
    <div className="grid grid-cols-3 gap-2">
      
      {thoughts.map((card) => (
        <Card
          key={card.thoughtId}
          text={card.content}
          likes={formatLikes(card.likeCount)}
          picture={"/placeholder.jpg"}
        />
      ))}
    </div>
  );
};

export default CardContainer;
