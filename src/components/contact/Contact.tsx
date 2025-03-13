'use client';

import React from 'react';
import PageHero from '@/components/common/PageHero';

const Contact = () => {
  return (
    <>
      <PageHero 
        title="Contact Us"
        description="Get in touch with our team"
      />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-castelnau-green mb-8">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              We'd love to hear from you. Please fill out the form below and we'll get back to you as soon as possible.
            </p>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-castelnau-green focus:border-castelnau-green"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-castelnau-green focus:border-castelnau-green"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-castelnau-green focus:border-castelnau-green"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-castelnau-green text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact; 