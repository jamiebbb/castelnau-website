'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const StanleyGibbonsBaldwinsPage = () => {
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
                src="/company-logos/stanley-gibbons.svg"
                alt="Stanley Gibbons Baldwins"
                width={200}
                height={100}
                className="object-contain"
                priority
              />
            </div>
            <div className="text-center md:text-left text-white">
              <div className="text-sm uppercase tracking-wide text-white/80 mb-2">Portfolio Company</div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Stanley Gibbons Baldwins</h1>
              <p className="text-xl md:text-2xl text-white/90 mb-4">Collectibles & Auctions</p>
              <div className="flex flex-col md:flex-row gap-4 text-white/80">
                <div>Founded: 1856</div>
                <div>•</div>
                <div>Invested since: 2016</div>
                <div>•</div>
                <div>Equity held: 64.1%</div>
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
                Stanley Gibbons Baldwins ("SGB") encompasses two heritage brands in the collectibles industry.
              </p>
              
              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Stanley Gibbons Heritage</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Stanley Gibbons, established in 1856, is a global leader in philately, offering an extensive range of stamps and expert knowledge. In recognition of its exceptional service and quality, Stanley Gibbons holds a Royal Warrant for philately, which was renewed in December 2024 and has been held continuously since 1914.
              </p>

              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Baldwins Expertise</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Baldwins, a renowned name in numismatics since 1872, are experts in rare coins and medals. In 2024, the group further expanded its portfolio by founding Baldwin's Bullion, a modern venture catering to collectors and investors in gold.
              </p>

              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Unified Vision</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                These two brands have been united, not only as the company name, but as the multi category auction house which, alongside stamps, coins, medals and militaria will look to expand into other collectible categories.
              </p>

              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Digital Transformation</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The vision for SGB is to evolve and modernise its businesses to attract new customers globally. A key part of this strategy is the creation of a digital platform, which will not only facilitate international expansion but also improve accessibility for a wider range of ages.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                This digital approach will broaden the appeal of collectibles, making them easier to discover and acquire worldwide, especially for those who value convenience and prefer modern interfaces.
              </p>

              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Customer Psychology</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                By addressing different levels of Maslow's Hierarchy of Needs, SGB meets more than just the material desires of its customers. For many, the collectibles offered by Stanley Gibbons and Baldwins fulfil esteem needs by providing a sense of achievement, status, and recognition within their respective communities.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                The pursuit of rare and valuable items helps satisfy self-actualisation, allowing customers to engage deeply with their passions for history, art, and craftsmanship. As the group looks to the future, businesses like Baldwin's Bullion, with its emphasis on precious metals, also appeal to customers' needs for financial security, offering stability in uncertain times.
              </p>

              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Value Creation Opportunity</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                SGB offers a value creation opportunity through its rich heritage and deep expertise in collectibles. As a long-established business, SGB is well-positioned to leverage its prestigious brand and market presence, in both stamps and coins but also other collectible categories.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                The bullion business that started in early 2024 continues to grow rapidly, and the opportunity to expand SGBs potential customer base geographically and internationally via the digitalisation of its platform presents significant potential upside.
              </p>

              <div className="bg-gray-50 rounded-xl p-6 mt-8">
                <h3 className="text-lg font-bold text-castelnau-dark-green mb-4">Investment Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-castelnau-green">64.1%</div>
                    <div className="text-sm text-gray-600">Equity Held</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-castelnau-green">0.2%</div>
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
              <a href="https://www.stanleygibbons.com" target="_blank" rel="noopener noreferrer">
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

export default StanleyGibbonsBaldwinsPage; 