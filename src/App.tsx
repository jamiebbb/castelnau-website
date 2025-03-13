'use client';

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";

export default function App() {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen">
          <AppRoutes />
          <Toaster position="bottom-right" />
        </div>
      </Router>
    </QueryClientProvider>
  );
}
