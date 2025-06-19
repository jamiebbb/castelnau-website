'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CambiumPage = () => {
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
                src="/company-logos/logo_cambium.png"
                alt="Cambium"
                width={200}
                height={100}
                className="object-contain"
                priority
              />
            </div>
            <div className="text-center md:text-left text-white">
              <div className="text-sm uppercase tracking-wide text-white/80 mb-2">Portfolio Company</div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Cambium</h1>
              <p className="text-xl md:text-2xl text-white/90 mb-4">Wedding & Lifestyle</p>
              <div className="flex flex-col md:flex-row gap-4 text-white/80">
                <div>Founded: 2002</div>
                <div>•</div>
                <div>Invested since: 2002</div>
                <div>•</div>
                <div>Equity held: 90.3%</div>
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
                The Cambium Group oversees a portfolio of leading wedding gift list brands, offering extensive product selections and personalised services through both luxurious showrooms and user-friendly digital platforms.
              </p>
              
              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Brand Portfolio</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Cambium's portfolio includes several market-leading brands: The Wedding Shop, The Wedding Present Company, and Prezola. These brands offer extensive product selections and personalised services, both through luxurious showrooms and user-friendly digital platforms.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                In addition, Cambium owns Rock My Wedding, a popular wedding planning platform, and LittleList, a growing baby gift registry, allowing the company to diversify beyond wedding gift lists and capture new market segments.
              </p>

              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Strategic Growth</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Cambium has historically expanded its presence through strategic acquisitions and mergers, allowing it to broaden its offerings and integrate with key competitors. Since joining Castelnau in 2019, Cambium has solidified its position as the leading player in the UK wedding list market.
              </p>

              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Customer-Centric Approach</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                A core focus on customer service and personalisation has enabled Cambium to grow in a competitive landscape. The addition of Rock My Wedding and the launch of LittleList have allowed Cambium to diversify beyond wedding gift lists, capturing new market segments and increasing market share.
              </p>

              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Technology Innovation</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The company's investment in technology, including advanced digital platforms, logistics optimisation, and the internal development of an AI-powered chatbot has enhanced customer experiences and driven revenue growth.
              </p>

              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Future Outlook</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                Looking ahead, Cambium is positioned for continued growth, driven by the strength of its diverse brand portfolio and a commitment to operational efficiency. With an ongoing focus on enhancing its product offerings, improving customer experiences, and expanding into new markets such as baby gift registries.
              </p>

              <div className="bg-gray-50 rounded-xl p-6 mt-8">
                <h3 className="text-lg font-bold text-castelnau-dark-green mb-4">Investment Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-castelnau-green">90.3%</div>
                    <div className="text-sm text-gray-600">Equity Held</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-castelnau-green">3.0%</div>
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
              <a href="https://cambium.com" target="_blank" rel="noopener noreferrer">
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

export default CambiumPage; 