'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DavidStevensonPage = () => {
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
                src="/team_images/david_stevenson.jpg"
                alt="David Stevenson"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="text-center md:text-left text-white">
              <div className="text-sm uppercase tracking-wide text-white/80 mb-2">Board of Directors</div>
              <h1 className="text-4xl md:text-5xl font-serif mb-4">David Stevenson</h1>
              <p className="text-xl md:text-2xl text-white/90">Non-executive director (Non-independent)</p>
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
                David Stevenson is a columnist for the Financial Times, Citywire and Money Week and author of a number of books on investment matters.
              </p>
              
              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Career Background</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                He was the founding director of Rocket Science Group.
              </p>

              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Current Directorships</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                Currently he is a director of SQN Secured Income Fund Plc, Gresham House Energy Storage Fund Plc, AltFi Limited and Brismo Limited and a strategy consultant to a number of asset management firms and investment banks.
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

export default DavidStevensonPage; 