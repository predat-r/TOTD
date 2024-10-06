import Heading from "@/components/Heading";
import TopThought from "@/components/TopThought";
import React from "react";
import CardContainer from "@/components/CardContainer";
import { unstable_noStore as noStore } from "next/cache";

const Homepage = async () => {
  noStore();
  return (
    <div className="relative">
      <Heading />
      <TopThought
        text="top thought"
        likes={"1.2k"}
        picture="/placeholder.jpg"
      />
      <CardContainer />
    </div>
  );
};

export default Homepage;
