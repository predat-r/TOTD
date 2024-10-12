'use client'
// app/page.tsx (or any root component)
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import TestingPage from './container'; // Your infinite query component

const App = () => {
  // Create a query client instance
  const [queryClient] = useState(() => new QueryClient());

  return (
    // Wrap the app with QueryClientProvider
    <QueryClientProvider client={queryClient}>
      <TestingPage />
    </QueryClientProvider>
  );
};

export default App;
