'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GaryChannonPage = () => {
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
                src="/team_images/gary_channon.jpg"
                alt="Gary Channon"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="text-center md:text-left text-white">
              <div className="text-sm uppercase tracking-wide text-white/80 mb-2">Who We Are</div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Gary Channon</h1>
              <p className="text-xl md:text-2xl text-white/90">Chief Investment Officer</p>
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
                Gary co-founded Phoenix Asset Management Partners Ltd in 1998 and has been the Chief Investment Officer since inception.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Using the same strategy applied to the flagship Phoenix UK Fund, Gary also manages additional segregated accounts for institutional clients.
              </p>

              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Experience</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Gary brings over 33 years of business and financial services experience. His career began in Fixed Income Trading at Nikko Securities Europe in 1987. He joined Goldman Sachs in 1989, working in Global Equity Derivative Products Trading.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                In 1992, Gary joined Nomura International PLC as Head of Equity Derivative Trading. He remained at Nomura International as Co-Head of Equity and Equity Derivatives Trading until moving on to co-found Phoenix.
              </p>

              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Investment Philosophy</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Gary's investment approach at Phoenix is long-term, value-based and focused. He looks out for businesses run by competent, honest managers, who act in the interest of shareholders. Ideal companies have strong pricing power to generate an enduring high return on capital.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Gary identifies great companies with good management, and waits for the opportunity to invest in them at attractive prices.
              </p>

              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Personal</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                He lives and works in Barnes, South West London.
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

export default GaryChannonPage; 