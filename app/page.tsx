'use client'

import Heading from "@/components/Heading";
import TopThought from "@/components/TopThought";
import CardContainer from "@/components/CardContainer";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { useState } from "react";

const Homepage = () => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <div className="relative">
      <Heading />
      <TopThought
        id={99}
        text="top thought"
        likes={"1.2k"}
        picture="/placeholder.jpg"
      />
      <QueryClientProvider client={queryClient}>
        <CardContainer />
      </QueryClientProvider>
    </div>
  );
};

export default Homepage;
