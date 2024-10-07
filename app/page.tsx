import Heading from "@/components/Heading";
import TopThought from "@/components/TopThought";
import React from "react";
import CardContainer from "@/components/CardContainer";


const Homepage = async () => {
  
  return (
    <div className="relative">
      <Heading />
      <TopThought
        id={99}
        text="top thought"
        likes={"1.2k"}
        picture="/placeholder.jpg"
      />
      <CardContainer  />
    </div>
  );
};

export default Homepage;
