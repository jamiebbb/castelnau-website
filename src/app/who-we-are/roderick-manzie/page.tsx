'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const RoderickManziePage = () => {
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
                src="/team_images/roderick_manzie.jpg"
                alt="Roderick Manzie"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="text-center md:text-left text-white">
              <div className="text-sm uppercase tracking-wide text-white/80 mb-2">Who We Are</div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Roderick Manzie</h1>
              <p className="text-xl md:text-2xl text-white/90">Chief Operating Officer</p>
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
                Roddy is Chief Operating Officer at Castelnau Group.
              </p>
              
              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Background</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                An investor in Phoenix since 1998, he joined Castelnau in August 2021 having been COO of Ocula Technologies, a portfolio company. Roddy brings over 30 years experience as a founder and COO of SME's, taking them from inception to acquisition.
              </p>

              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Education & Career</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Holding a Bachelor's degree in Computer Studies, his technology career developed through the city's big bang and has also undertaken many roles as a global IT strategy and outsourcing consultant to large financial institutions.
              </p>

              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Role at Castelnau</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Roddy's backgrounds in technology, entrepreneurship and management consulting allow him to assist Castelnau Group and the portfolio companies across a wide range of their commercial and IT activities.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Roddy has represented the Investment manager on the Boards of Stanley Gibbons, Showpiece and Ocula, and has assisted as Interim head of IT at Dignity Funerals.
              </p>

              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Personal</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                Outside of work, Roddy's interests are photography, snowboarding and scuba diving.
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

export default RoderickManziePage; 