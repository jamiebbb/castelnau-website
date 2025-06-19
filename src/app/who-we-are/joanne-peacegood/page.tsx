'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const JoannePeacegoodPage = () => {
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
                src="/team_images/joanne_peacegood.jpg"
                alt="Joanne Peacegood"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="text-center md:text-left text-white">
              <div className="text-sm uppercase tracking-wide text-white/80 mb-2">Board of Directors</div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Joanne Peacegood</h1>
              <p className="text-xl md:text-2xl text-white/90">Non-executive Chair (Independent)</p>
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
                Joanne has over 20 years of experience in the asset management sector across a range of asset classes and including listed and private entities.
              </p>
              
              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">PwC Experience</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Prior to becoming a non-executive director, Joanne worked for PwC in the Channel Islands, UK and Canada and was responsible for leading teams to deliver both audit and controls engagements to hundreds of reputable clients.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Joanne specialised in alternative assets and has significant experience in auditing complex valuations. Joanne also has 10 years' experience in risk and quality, focusing on how businesses respond to the ever-changing regulatory requirements, risk assessments and assessing the internal control environment.
              </p>

              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Qualifications & Education</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Joanne is an FCA with the ICAEW, graduating with an Honours degree in Accounting and holds the IOD Diploma.
              </p>

              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Industry Leadership</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Joanne is the Chair of the Guernsey Investment & Fund Association Executive Committee and also sits on the Guernsey International Business Association Council.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                Joanne resides in Guernsey.
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

export default JoannePeacegoodPage; 