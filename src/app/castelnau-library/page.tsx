'use client';

import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import CastelnauLibrary from '@/components/castelnau-library/CastelnauLibrary';

const CastelnauLibraryPage = () => {
  return (
    <MainLayout>
      <CastelnauLibrary />
    </MainLayout>
  );
};

export default CastelnauLibraryPage;
