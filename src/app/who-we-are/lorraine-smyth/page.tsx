'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LorraineSmythPage = () => {
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
                src="/team_images/lorraine_smyth.jpg"
                alt="Lorraine Smyth"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="text-center md:text-left text-white">
              <div className="text-sm uppercase tracking-wide text-white/80 mb-2">Who We Are</div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Lorraine Smyth</h1>
              <p className="text-xl md:text-2xl text-white/90">Phoenix Partner, Chief of Staff</p>
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
                Lorraine joined Phoenix in early 2016 to head up the Fund Operations and Accounting team. In early 2020 she transitioned to the role of COO of Castelnau Group and is now Chief of Staff.
              </p>
              
              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Experience</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Lorraine has over twenty years' experience working in the finance industry. This includes working in the fund accounting and investment accounting sector for large banks in Dublin and London.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                She also worked as a client operations manager for a software vendor and has been involved in multiple accounting software implementation projects.
              </p>

              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Education</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Lorraine holds a Bachelor (Hons) degree in Economics, from University College Dublin.
              </p>

              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Personal</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                Away from work, Lorraine enjoys running, tag rugby, travelling and lots of coffee.
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

export default LorraineSmythPage; 