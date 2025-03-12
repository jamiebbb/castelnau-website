
import Index from "@/pages/Index";
import WhoWeAre from "@/pages/WhoWeAre";
import WhatWeDo from "@/pages/WhatWeDo";
import ExploreTheGroup from "@/pages/ExploreTheGroup";
import GraduateProgramme from "@/pages/GraduateProgramme";
import Contact from "@/pages/Contact";
import News from "@/pages/News";
import InvestorRelations from "@/pages/InvestorRelations";
import CastelnauLibrary from "@/pages/CastelnauLibrary";
import NotFound from "@/pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import DocumentAdmin from "@/pages/DocumentAdmin";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/explore-the-group" element={<ExploreTheGroup />} />
          <Route path="/graduate-programme" element={<GraduateProgramme />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/investor-relations" element={<InvestorRelations />} />
          <Route path="/castelnau-library" element={<CastelnauLibrary />} />
          <Route path="/document-admin" element={<DocumentAdmin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster position="bottom-right" />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
