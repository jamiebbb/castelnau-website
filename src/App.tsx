
'use client';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import React from "react";

const queryClient = new QueryClient();

interface AppProps {
  children: React.ReactNode;
}

function App({ children }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <Toaster position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
