'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AndrewWhittakerPage = () => {
  return (
    <main className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <Link href="/who-we-are" className="flex items-center text-castelnau-green hover:text-castelnau-dark-green transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Team
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-castelnau-dark-green via-castelnau-green to-castelnau-light-green py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-xl">
              <Image
                src="/team_images/andrew_whittaker.jpg"
                alt="Andrew Whittaker"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="text-center md:text-left text-white">
              <div className="text-sm uppercase tracking-wide text-white/80 mb-2">Board of Directors</div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Andrew Whittaker</h1>
              <p className="text-xl md:text-2xl text-white/90">Non-executive director (Independent)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Andrew is an experienced director and currently sits on several investment manager and investment fund boards specialising in debt, venture, renewables and buyouts.
              </p>
              
              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Experience</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Andrew has over 20 years' experience in the investment sector and the funds industry. Andrew is currently Managing Director of Aver Partners, having previously been Managing Director at Ipes (Barings/Apex) and preceding that, Managing Director at Capita (Sinclair Henderson/Link).
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                He has held senior management roles at Moscow Narodny (VTB Capital), DML (Hallibuton) and qualified whilst at Midland (HSBC/Montagu).
              </p>

              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Education & Qualifications</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Andrew graduated from Cardiff University and Aix-Marseille Université. He is a Chartered Management Accountant and is a Member of the Chartered Institute for Securities and Investment (CISI).
              </p>

              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Industry Leadership</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Andrew is currently Chair of the British Venture Capital Association (BVCA) Channel Islands Working Group and a member of the Association of Investment Companies' (AIC) Technical Committee.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                He is a previous Chair of the Guernsey Investment Fund Association (GIFA), Council member of Guernsey International Business Association (GIBA), member of the Association of Real Estate Funds (AREF) Regulatory Committee and of Invest Europe's (formally European Venture Capital Association's (EVCA)) Technical Group.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link href="/who-we-are">
                <Button className="bg-castelnau-green text-white hover:bg-castelnau-dark-green">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AndrewWhittakerPage; 