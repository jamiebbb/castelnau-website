'use client';

import React from "react";
import PageHero from '@/components/common/PageHero';
import About from '@/components/home/About';
import News from '@/components/home/News';
import Contact from '@/components/home/Contact';

const Index = () => {
  return (
    <>
      <PageHero 
        title="Creating Value with Permanence and Vision"
        description="A leading investment management company focused on delivering exceptional results through disciplined investment."
        showButtons={true}
      />
      <About />
      <News />
      <Contact />
    </>
  );
};

export default function Home() {
  return <Index />;
}
