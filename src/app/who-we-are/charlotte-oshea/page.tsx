'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CharlotteOSheaPage = () => {
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
                src="/team_images/charlotte_oshea.jpg"
                alt="Charlotte O'Shea"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="text-center md:text-left text-white">
              <div className="text-sm uppercase tracking-wide text-white/80 mb-2">Who We Are</div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Charlotte O'Shea</h1>
              <p className="text-xl md:text-2xl text-white/90">Head of Innovation</p>
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
                Prior to her role as Head of Innovation at Castelnau Group Ltd since August 2022, Charlotte has made significant contributions to the wedding industry.
              </p>
              
              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Rock My Wedding</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                In 2009, she founded Rock My Wedding, a highly acclaimed community platform that garnered multiple awards. In 2019, Rock My Wedding became part of the Castelnau portfolio, showcasing Charlotte's entrepreneurial vision and leadership.
              </p>

              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Publications</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Charlotte's impact extends beyond digital platforms. In 2017, she authored 'Rock My Wedding: Your Day Your Way,' offering invaluable insights into crafting personalized wedding experiences.
              </p>

              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Sustainability Initiatives</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Recognizing the environmental challenges posed by the wedding industry, Charlotte pioneered 'Recycle My Wedding,' a resale platform aimed at reducing its carbon footprint.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                Launched in 2020, this innovative initiative underscores Charlotte's commitment to sustainability and forward-thinking solutions.
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

export default CharlotteOSheaPage; 