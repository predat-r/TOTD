'use client';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CardContainer from "@/components/CardContainer";

const queryClient = new QueryClient();

export default function ClientCardContainer() {
  return (
    <QueryClientProvider client={queryClient}>
      <CardContainer />
    </QueryClientProvider>
  );
}