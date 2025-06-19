'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DignityPage = () => {
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
                src="/company-logos/dignity.svg"
                alt="Dignity"
                width={200}
                height={100}
                className="object-contain"
                priority
              />
            </div>
            <div className="text-center md:text-left text-white">
              <div className="text-sm uppercase tracking-wide text-white/80 mb-2">Portfolio Company</div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Dignity</h1>
              <p className="text-xl md:text-2xl text-white/90 mb-4">Essential Services</p>
              <div className="flex flex-col md:flex-row gap-4 text-white/80">
                <div>Founded: 1994</div>
                <div>•</div>
                <div>Invested since: 2018</div>
                <div>•</div>
                <div>Equity held: 66.0%</div>
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
                Dignity is a leading end-of-life service provider in the UK, known for its range of end-of-life services that support individuals and families through all aspects of funeral planning and bereavement care.
              </p>
              
              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Services & Operations</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                With an extensive network of funeral homes and crematoria nationwide, Dignity offers personalised, compassionate services tailored to the unique needs of each family, ensuring empathy and respect throughout the entire process.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Their award-winning funeral plan business offers financial security and peace of mind, allowing people to plan their funerals in advance. To further broaden its offerings and meet the evolving needs of customers, Dignity has acquired Farewill, a digital-first provider of wills and probate, enhancing its ability to deliver accessible and innovative end-of-life solutions.
              </p>

              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Company Values</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Dignity is committed to maintaining the highest standards of care, ethics, and professionalism, offering services that respect and celebrate life, while meeting the diverse needs of communities.
              </p>

              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Investment Background</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Before Castelnau's ownership, Dignity was a listed business, mismanaged during its time on the LSE, operating with a short-term mindset that exploited customer goodwill by raising prices faster than it lost volume, ultimately this led to a decline in competitiveness and market share.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                The result was that the share price of Dignity was well below what we deemed the intrinsic value to be. In May 2023, Castelnau Group alongside SPWOne formed a joint venture, Valderrama, which completed the acquisition of Dignity and subsequently delisted it from the London Stock Exchange.
              </p>

              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Value Creation Strategy</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                There is substantial potential for value creation at Dignity, driven by its core business components: At-Need Funerals, Cremations, Legal Services, and Funeral Plans.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                Key drivers that we believe will lead to value being generated include competitive pricing, investment in the estate, strengthening local branding, expanding funeral plan penetration, leveraging technological advancements, and boosting memorialisation sales.
              </p>

              <div className="bg-gray-50 rounded-xl p-6 mt-8">
                <h3 className="text-lg font-bold text-castelnau-dark-green mb-4">Investment Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-castelnau-green">66.0%</div>
                    <div className="text-sm text-gray-600">Equity Held</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-castelnau-green">83.2%</div>
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
              <a href="https://www.dignityfunerals.co.uk" target="_blank" rel="noopener noreferrer">
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

export default DignityPage; 