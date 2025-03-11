
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WhoWeAre from "./pages/WhoWeAre";
import WhatWeDo from "./pages/WhatWeDo";
import ExploreTheGroup from "./pages/ExploreTheGroup";
import InvestorRelations from "./pages/InvestorRelations";
import GraduateProgramme from "./pages/GraduateProgramme";
import CastelnauLibrary from "./pages/CastelnauLibrary";
import News from "./pages/News";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/explore-the-group" element={<ExploreTheGroup />} />
          <Route path="/investor-relations" element={<InvestorRelations />} />
          <Route path="/graduate-programme" element={<GraduateProgramme />} />
          <Route path="/castelnau-library" element={<CastelnauLibrary />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
