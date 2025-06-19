'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TayraErbesPage = () => {
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
                src="/team_images/tayra_erbes.jpeg"
                alt="Tayra Erbes"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="text-center md:text-left text-white">
              <div className="text-sm uppercase tracking-wide text-white/80 mb-2">Who We Are</div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Tayra Erbes</h1>
              <p className="text-xl md:text-2xl text-white/90">Marketing Associate</p>
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
                Tayra joined Castelnau Group in early 2024 as an intern, and after completing her internship, she transitioned into the Graduate Program as a Marketing Associate.
              </p>
              
              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Role at Castelnau</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                In this role, she collaborates closely with the Head of Innovation and Chief of Staff on various strategic projects across the company's portfolio.
              </p>

              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Education</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Tayra holds a Bachelor's degree in Economics and Management from Bocconi University and a Master's in Strategic Marketing from Maastricht University.
              </p>

              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Personal</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                Outside of work, Tayra enjoys capturing moments with her film camera, exploring new destinations, and spending time with her sister.
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

export default TayraErbesPage; 