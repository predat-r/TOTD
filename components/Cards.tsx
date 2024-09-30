"use client";
import Card from "./Card";
import { formatLikes } from "@/app/lib/actions";
const Cards = () => {
  // JSON data with cards
  const cardsData = [
    {
      id: 1,
      text: "Vote for Trump.",
      likes: 1700,
      picture: "/path-to-image-1.jpg", 
    },
    {
      id: 2,
      text: "Support Climate Action.",
      likes: 1200,
      picture: "/path-to-image-2.jpg",
    },
    {
      id: 3,
      text: "Promote Peace.",
      likes: 950,
      picture: "/path-to-image-3.jpg",
    },
   
  ];

  return (
    <div className="flex flex-row gap-8 flex-wrap">
      {cardsData.map((card) => (
        <Card
          key={card.id}
          text={card.text}
          likes={formatLikes(card.likes)}
          picture={card.picture}
        />
      ))}
    </div>
  );
};

export default Cards;
