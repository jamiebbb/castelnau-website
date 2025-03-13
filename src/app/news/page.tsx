'use client';

import React from "react";
import MainLayout from '@/layouts/MainLayout';
import News from '@/components/news/News';

export default function NewsPage() {
  return (
    <MainLayout>
      <News />
    </MainLayout>
  );
}
