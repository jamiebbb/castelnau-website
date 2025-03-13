
'use client';

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import MainLayout from "@/layouts/MainLayout";

interface AppProps {
  children: React.ReactNode;
}

function App({ children }: AppProps) {
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
