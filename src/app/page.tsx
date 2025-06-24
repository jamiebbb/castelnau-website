'use client';

import React from "react";
import PageHero from '@/components/common/PageHero';
import About from '@/components/home/About';
import HomeVideo from '@/components/home/HomeVideo';
import News from '@/components/home/News';
import Contact from '@/components/home/Contact';

const Index = () => {
  return (
    <>
      <PageHero 
        title="We compound shareholders' capital at high rates of return."
        description="Creating value with permanence and vision"
        showButtons={true}
      />
      <About />
      <HomeVideo />
      <News />
      <Contact />
    </>
  );
};

export default function Home() {
  return <Index />;
}
