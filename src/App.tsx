
'use client';

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import React from "react";
import MainLayout from "@/layouts/MainLayout";

interface AppProps {
  children: React.ReactNode;
}

function App({ children }: AppProps) {
  // Create a client instance that persists across renders
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <MainLayout>
        {children}
      </MainLayout>
      <Toaster position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
