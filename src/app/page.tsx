'use client';

import React from "react";
import MainLayout from '@/layouts/MainLayout';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import News from '@/components/home/News';
import Contact from '@/components/home/Contact';

const Index = () => {
  return (
    <>
      <Hero />
      <About />
      <News />
      <Contact />
    </>
  );
};

export default function Home() {
  return (
    <MainLayout>
      <Index />
    </MainLayout>
  );
}
