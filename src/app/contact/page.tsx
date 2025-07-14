'use client';

import React from 'react';
import PageHero from '@/components/common/PageHero';
import Contact from '@/components/contact/Contact';

const ContactPage = () => {
  return (
    <>
      <PageHero 
        title="Contact Us"
        description="Get in touch with our team for any inquiries or opportunities"
        waveColor="#f9fafb"
      />
      <Contact />
    </>
  );
};

export default ContactPage;
