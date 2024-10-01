"use client";
import Card from "./Card";
import { formatLikes } from "@/app/lib/actions";
const CardContainer = () => {
  // JSON data with cards
  const cardsData = [
    {
      id: 1,
      text: "Vote for Trump.",
      likes: 1700,
      picture: "/placeholder.jpg", 
    },
    {
      id: 2,
      text: "Support Climate Action.",
      likes: 1200,
      picture: "/placeholder.jpg",
    },
    {
      id: 3,
      text: "Promote Peace.",
      likes: 950,
      picture: "/placeholder.jpg",
    },
    {
      id: 1,
      text: "Vote for Trump.",
      likes: 1700,
      picture: "/placeholder.jpg", 
    },
    {
      id: 2,
      text: "Support Climate Action.",
      likes: 1200,
      picture: "/placeholder.jpg",
    },
    {
      id: 3,
      text: "Promote Peace.",
      likes: 950,
      picture: "/placeholder.jpg",
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

export default CardContainer;
