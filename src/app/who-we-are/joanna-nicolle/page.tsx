'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const JoannaNicollePage = () => {
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
                src="/team_images/joanna_nicolle.jpg"
                alt="Joanna Duquemin Nicolle"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="text-center md:text-left text-white">
              <div className="text-sm uppercase tracking-wide text-white/80 mb-2">Board of Directors</div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Joanna Duquemin Nicolle</h1>
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
                Joanna has over 30 years' experience working in the finance industry in Guernsey.
              </p>
              
              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Current Role</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Joanna is currently Chief Executive Officer of Elysium Fund Management Limited, having previously been a Director and the Company Secretary of Collins Stewart Fund Management Limited where she worked on, and led, numerous corporate finance assignments and stock exchange listings in addition to undertaking fund administration and company secretarial duties.
              </p>

              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Expertise</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Joanna has extensive experience in the provision of best practice corporate governance and company secretarial services to a diverse range of companies traded on the AIM market of the London Stock Exchange, listed on the Main Market of the London Stock Exchange, Euronext and The International Stock Exchange.
              </p>

              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Qualifications</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                Joanna qualified as an associate of The Chartered Institute of Secretaries and Administrators in 1994.
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

export default JoannaNicollePage; 