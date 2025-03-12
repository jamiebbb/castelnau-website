
'use client';

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
import DocumentAdmin from "@/pages/DocumentAdmin";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
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
  );
}

export default App;
