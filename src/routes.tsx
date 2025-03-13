import { Routes, Route } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import Index from '@/pages/Index';
import WhoWeAre from '@/pages/WhoWeAre';
import WhatWeDo from '@/pages/WhatWeDo';
import News from '@/pages/News';
import InvestorRelations from '@/pages/InvestorRelations';
import Contact from '@/pages/Contact';
import CastelnauLibrary from '@/pages/CastelnauLibrary';
import GraduateProgramme from '@/pages/GraduateProgramme';
import ExploreTheGroup from '@/pages/ExploreTheGroup';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout><Index /></MainLayout>} />
      <Route path="/who-we-are" element={<MainLayout><WhoWeAre /></MainLayout>} />
      <Route path="/what-we-do" element={<MainLayout><WhatWeDo /></MainLayout>} />
      <Route path="/news" element={<MainLayout><News /></MainLayout>} />
      <Route path="/investor-relations" element={<MainLayout><InvestorRelations /></MainLayout>} />
      <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
      <Route path="/castelnau-library" element={<MainLayout><CastelnauLibrary /></MainLayout>} />
      <Route path="/graduate-programme" element={<MainLayout><GraduateProgramme /></MainLayout>} />
      <Route path="/explore-the-group" element={<MainLayout><ExploreTheGroup /></MainLayout>} />
    </Routes>
  );
} 