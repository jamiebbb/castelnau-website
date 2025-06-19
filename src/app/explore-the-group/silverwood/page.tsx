'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SilverwoodPage = () => {
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
                src="/company-logos/logo_silverwood.png"
                alt="Silverwood"
                width={200}
                height={100}
                className="object-contain"
                priority
              />
            </div>
            <div className="text-center md:text-left text-white">
              <div className="text-sm uppercase tracking-wide text-white/80 mb-2">Portfolio Company</div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Silverwood</h1>
              <p className="text-xl md:text-2xl text-white/90 mb-4">Premium Beauty</p>
              <div className="flex flex-col md:flex-row gap-4 text-white/80">
                <div>Founded: 2021</div>
                <div>•</div>
                <div>Invested since: 2021</div>
                <div>•</div>
                <div>Equity held: 29.9%</div>
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
                Founded in 2021 by Lush co-founder Andrew Gerrie, Silverwood is listed on the AQSE stock exchange (ticker: SLWD).
              </p>
              
              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Strategic Approach</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The company's strategy centres on acquiring and scaling high-potential premium brands, leveraging the extensive experience of its leadership team in the consumer goods sector. Through careful capital allocation, Silverwood supports its brands in expanding their market presence and maximising growth opportunities.
              </p>

              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Premium Beauty Portfolio</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Silverwood is home to a growing portfolio of premium consumer brands with a strong focus on the beauty sector. Balmond's is known for its natural, plant-based skincare products, designed specifically for sensitive skin and conditions like eczema.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Nailberry offers eco-friendly, breathable nail polishes that are both non-toxic and sustainable. Steamcream offers lightweight, multi-purpose creams that use innovative steam technology to deliver deep hydration, while Cigarro is a self-care brand that focuses on high-end cosmetic products tailored to men.
              </p>

              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Leadership & Experience</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                With Andrew Gerrie's proven track record as co-founder of Lush, Silverwood benefits from deep industry expertise and understanding of the premium consumer goods market. This leadership experience provides valuable insight into brand building, product development, and market expansion strategies.
              </p>

              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Long-term Vision</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Silverwood's long-term vision is to continue building a portfolio of valuable premium consumer brands. Backed by Castelnau Group, which has been invested since 2021, Silverwood benefits from access to a wider network and industry expertise.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                This support enables its brands to remain competitive and well-positioned for growth, not only in the beauty sector but also across a range of premium consumer markets.
              </p>

              <div className="bg-gray-50 rounded-xl p-6 mt-8">
                <h3 className="text-lg font-bold text-castelnau-dark-green mb-4">Investment Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-castelnau-green">29.9%</div>
                    <div className="text-sm text-gray-600">Equity Held</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-castelnau-green">1.3%</div>
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
              <a href="https://silverwoodspirits.com" target="_blank" rel="noopener noreferrer">
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

export default SilverwoodPage; 