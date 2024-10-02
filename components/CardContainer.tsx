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
      text: "Promote Peace and yes this is random text.",
      likes: 950,
      picture: "/placeholder.jpg",
    },
    {
      id: 4,
      text: "Vote for Trump.",
      likes: 1700,
      picture: "/placeholder.jpg", 
    },
    
    {
      id: 9,
      text: "Promote Peace and yes this is random text.",
      likes: 950,
      picture: "/placeholder.jpg",
    },
    {
      id: 8,
      text: "Support Climate Action.",
      likes: 1200,
      picture: "/placeholder.jpg",
    },
    {
      id: 10,
      text: "Vote for Trump.",
      likes: 1700,
      picture: "/placeholder.jpg", 
    },
    
   
  ];

  return (
    
    <div className="grid grid-cols-3 gap-2">
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
