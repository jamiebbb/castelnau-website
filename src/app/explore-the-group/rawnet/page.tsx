'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const RawnetPage = () => {
  return (
    <main className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <Link href="/explore-the-group" className="flex items-center text-castelnau-green hover:text-castelnau-dark-green transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Portfolio
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-castelnau-dark-green via-castelnau-green to-castelnau-light-green py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-48 h-48 bg-white rounded-xl p-8 shadow-xl flex items-center justify-center">
              <Image
                src="/company-logos/logo_rawnet.png"
                alt="Rawnet"
                width={200}
                height={100}
                className="object-contain"
                priority
              />
            </div>
            <div className="text-center md:text-left text-white">
              <div className="text-sm uppercase tracking-wide text-white/80 mb-2">Portfolio Company</div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Rawnet</h1>
              <p className="text-xl md:text-2xl text-white/90 mb-4">Digital Marketing</p>
              <div className="flex flex-col md:flex-row gap-4 text-white/80">
                <div>Founded: 1998</div>
                <div>•</div>
                <div>Invested since: 2020</div>
                <div>•</div>
                <div>Equity held: 100%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Rawnet is a digital marketing and software development agency founded in 1998, focused on delivering long-term digital growth for its clients through a wide range of services.
              </p>
              
              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Comprehensive Services</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Rawnet offers a comprehensive suite of digital services including consulting, brand development, product design, website creation, and traffic generation. Their approach ensures that clients receive end-to-end digital solutions tailored to their specific business objectives.
              </p>

              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Partnership Approach</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Rawnet has a partnership-driven approach, where they collaborate closely with businesses to achieve their specific digital goals. They offer tailored solutions that encompass consulting, product design, customer acquisition, brand strategy, and technology, ensuring each client's unique needs are met.
              </p>

              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Strategic Integration</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                In 2020, Castelnau Group acquired Rawnet as part of its broader strategy to integrate modern technology across its portfolio. Rawnet contributes to the digital growth of traditional businesses within the group, supporting them in enhancing their online presence and customer experiences.
              </p>

              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Strategic Focus</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                Rawnet's strategic focus is increasingly on strategic consultancy advice, helping businesses navigate the complex digital landscape and implement sustainable growth strategies that deliver long-term value.
              </p>

              <div className="bg-gray-50 rounded-xl p-6 mt-8">
                <h3 className="text-lg font-bold text-castelnau-dark-green mb-4">Investment Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-castelnau-green">100%</div>
                    <div className="text-sm text-gray-600">Equity Held</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-castelnau-green">0.4%</div>
                    <div className="text-sm text-gray-600">Portfolio Weight</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row gap-4">
              <Link href="/explore-the-group">
                <Button className="bg-castelnau-green text-white hover:bg-castelnau-dark-green">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Portfolio
                </Button>
              </Link>
              <a href="https://www.rawnet.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="hover:bg-castelnau-green hover:text-white">
                  Visit Website
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RawnetPage; 