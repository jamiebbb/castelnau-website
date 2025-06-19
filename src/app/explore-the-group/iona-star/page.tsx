'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const IonaStarPage = () => {
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
                src="/company-logos/logo_iona_star.png"
                alt="Iona Star"
                width={200}
                height={100}
                className="object-contain"
                priority
              />
            </div>
            <div className="text-center md:text-left text-white">
              <div className="text-sm uppercase tracking-wide text-white/80 mb-2">Portfolio Company</div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Iona Star</h1>
              <p className="text-xl md:text-2xl text-white/90 mb-4">Venture Capital</p>
              <div className="flex flex-col md:flex-row gap-4 text-white/80">
                <div>Founded: 2024</div>
                <div>•</div>
                <div>Invested since: 2024</div>
                <div>•</div>
                <div>Equity held: 45.0%</div>
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
                Iona Star LP, launched in 2024, is a venture capital fund focused on investing in and developing disruptive early-stage companies to accelerate technology innovation through artificial intelligence (AI) and data.
              </p>
              
              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Investment Focus</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The fund targets high-growth sectors such as financial services, cybersecurity, life sciences, industrial internet of things, telecom, and energy, seeking to capitalise on the transformative changes within these industries. Iona Star aims to drive innovation in these areas by identifying opportunities with the potential for rapid expansion and technological leadership.
              </p>

              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Proven Track Record</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The team at Iona Star have a track record of success, having delivered returns of &gt;3x on invested capital on their previous fund. This proven performance demonstrates their ability to identify and nurture high-potential technology companies.
              </p>

              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Investment Strategy</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                With a high-conviction investment strategy, Iona Star employs a thorough research process to carefully select companies that benefit from the latest advances in AI, machine learning, distributed ledger technology, tokenisation, streaming analytics and streaming data.
              </p>

              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Experienced Leadership</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The fund is led by a highly experienced team, including Gerry Buggy, Mike Powell, Graham Ferguson, and Kevin McGivern, who bring deep expertise as founders, C-suite executives, and senior leaders.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Their hands-on experience in building, scaling, and managing companies enables them to provide not just capital investment but also strategic guidance, networking support, and specialist industry insights to help portfolio companies scale effectively in competitive markets.
              </p>

              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Strategic Partnerships</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Castelnau Group have invested up to £10m in the fund, as have Frasers Group. Frasers Group are a key partner, with significant amounts of data that will facilitate the learnings of Iona Star portfolio companies.
              </p>

              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Value Creation</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                By fostering collaboration between early-stage tech investments and established brands within the portfolio, Iona Star can accelerate the adoption of AI-driven innovations across sectors, enhancing operational efficiency and expanding digital capabilities.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                As a standalone investment, we see strong potential for value creation in their investment strategy, reinforced by their track record of returns. Additionally, their involvement provides significant strategic benefits to Castelnau Group beyond financial performance.
              </p>

              <div className="bg-gray-50 rounded-xl p-6 mt-8">
                <h3 className="text-lg font-bold text-castelnau-dark-green mb-4">Investment Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-castelnau-green">45.0%</div>
                    <div className="text-sm text-gray-600">Equity Held</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-castelnau-green">0.1%</div>
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
              <a href="https://ionastar.com" target="_blank" rel="noopener noreferrer">
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

export default IonaStarPage; 