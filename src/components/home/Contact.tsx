'use client';

import React from 'react';
import Link from 'next/link';

const Contact = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-castelnau-green mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            We'd love to hear from you. Contact us to learn more about our services or discuss your investment needs.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-castelnau-green text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact; 