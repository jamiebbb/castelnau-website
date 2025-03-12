
'use client';

import { usePathname } from 'next/navigation';
import Index from "@/pages/Index";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";

const queryClient = new QueryClient();

function App() {
  const pathname = usePathname();

  return (
    <QueryClientProvider client={queryClient}>
      {pathname === '/' && <Index />}
      <Toaster position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
