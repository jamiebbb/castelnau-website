'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AndrewGerriePage = () => {
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
                src="/team_images/andrew_gerrie.jpg"
                alt="Andrew Gerrie"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="text-center md:text-left text-white">
              <div className="text-sm uppercase tracking-wide text-white/80 mb-2">Who We Are</div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Andrew Gerrie</h1>
              <p className="text-xl md:text-2xl text-white/90">Entrepreneur in Residence</p>
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
                Andrew joined the Phoenix Board in 2020 as a Non-executive director.
              </p>
              
              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Lush Co-founder</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                In 1994 Andrew co-founded Lush and then co-managed the business alongside the other founders. Today Lush generates just under £1bn in retail sales from approx. 1,000 stores and online channels, supported by 8 manufacturing facilities across the globe.
              </p>

              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Current Roles</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Currently CEO of Silverwood Brands plc, which holds beauty brands including Balmonds, Nailberry, SteamCream, Cosmetics Science and Dr Baeltz.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Andrew was Non-Executive Chairman of Hotel Chocolat plc since 2015 to 2023.
              </p>

              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Education</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                Andrew holds a B.Com degree from Auckland University, New Zealand.
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

export default AndrewGerriePage; 