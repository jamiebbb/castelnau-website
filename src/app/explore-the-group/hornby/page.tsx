'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HornbyPage = () => {
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
                src="/company-logos/logo_hornby.png"
                alt="Hornby"
                width={200}
                height={100}
                className="object-contain"
                priority
              />
            </div>
            <div className="text-center md:text-left text-white">
              <div className="text-sm uppercase tracking-wide text-white/80 mb-2">Portfolio Company</div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Hornby</h1>
              <p className="text-xl md:text-2xl text-white/90 mb-4">Consumer Products</p>
              <div className="flex flex-col md:flex-row gap-4 text-white/80">
                <div>Founded: 1901</div>
                <div>•</div>
                <div>Invested since: 2017</div>
                <div>•</div>
                <div>Equity held: 54.4%</div>
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
                With a history dating back to 1901 when Hornby was founded, the company's first model railways, launched in 1920, quickly became iconic.
              </p>
              
              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Investment Opportunity</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Despite Hornby's rich heritage and strong brand recognition, the market has undervalued its potential, partly due to the business not executing as well as it could have on key opportunities. As a listed company on AIM (ticker: HRN), this underperformance created an attractive investment opportunity.
              </p>

              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Brand Portfolio</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Hornby is a portfolio of heritage toy and collectible brands, each catering to different aspects of the hobbyist market. Hornby specialises in model railways, while Airfix focuses on plastic model kits of aircraft, ships, and military vehicles. Corgi produces die-cast models of cars and buses.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Scalextric is known for its slot car racing sets, and Pocher offers large-scale car model kits. Humbrol provides paints and tools for model builders complementing the entire range. The portfolio continues to grow with the acquisitions of Warlord Games, a leader in tabletop wargaming, and the Corgi Model Club, a subscription service for Corgi's range.
              </p>

              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Strategic Approach</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                To maintain the relevance of each brand, Hornby's long-term strategy involves a team of passionate brand managing directors, to ensure focused leadership that lives and breathes their respective brands. Additionally, the company has expanded its direct-to-consumer website offerings, enhancing customer access to its diverse range of products.
              </p>

              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Customer Psychology</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Hornby's products naturally align with Maslow's Hierarchy of Needs, particularly in addressing higher-level psychological desires such as esteem and self-actualisation. Customers find fulfilment through hobbies that provide a sense of accomplishment, recognition, and creativity.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                By offering products that engage individuals in their passions, Hornby allows customers to experience personal growth and satisfaction through their collections and mastery of skills.
              </p>

              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Innovation & Tradition</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The brands continue to embrace both tradition and modern technology, providing collectors with immersive experiences through a blend of digital and physical offerings. With a diverse portfolio, Hornby remains committed to delivering quality products and experiences that resonate with enthusiasts all around the world.
              </p>

              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Value Creation Strategy</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                Hornby's value creation opportunity lies in its ability to leverage its established heritage brands while modernising its offerings through digital transformation and targeted market expansion. By improving its direct-to-consumer platforms, investing in new technologies, expanding its global customer base and addressable markets, Hornby is strategically placed to drive future growth.
              </p>

              <div className="bg-gray-50 rounded-xl p-6 mt-8">
                <h3 className="text-lg font-bold text-castelnau-dark-green mb-4">Investment Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-castelnau-green">54.4%</div>
                    <div className="text-sm text-gray-600">Equity Held</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-castelnau-green">5.0%</div>
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
              <a href="https://www.hornby.com" target="_blank" rel="noopener noreferrer">
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

export default HornbyPage; 