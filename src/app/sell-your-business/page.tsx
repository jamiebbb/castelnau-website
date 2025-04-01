'use client';

import React from 'react';
import PageHero from '@/components/common/PageHero';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

const SellYourBusiness = () => {
  return (
    <main>
      <PageHero 
        title="Looking to Sell your Business?"
        description="Join our family of businesses and benefit from our long-term, patient approach to investment"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video relative mb-12 rounded-lg overflow-hidden shadow-xl">
              <video
                className="w-full h-full object-cover"
                controls
                poster="/images/video-poster.jpg"
              >
                <source src="/videos/Guy for Investors.MP4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-castelnau-dark-green mb-6">Why Choose Castelnau Group?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-castelnau-light-green p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-castelnau-dark-green mb-4">Long-term Partnership</h3>
                  <p className="text-gray-700">
                    We view our investments as permanent holdings, allowing us to take a patient, long-term approach to supporting and nurturing businesses. This means we're committed to your success for the long haul.
                  </p>
                </div>

                <div className="bg-castelnau-light-green p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-castelnau-dark-green mb-4">Patient Capital</h3>
                  <p className="text-gray-700">
                    Unlike traditional private equity firms, we don't operate on a fixed timeline. We provide patient capital that allows businesses to grow naturally without pressure for short-term returns.
                  </p>
                </div>

                <div className="bg-castelnau-light-green p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-castelnau-dark-green mb-4">Operational Support</h3>
                  <p className="text-gray-700">
                    We offer strategic guidance and support while respecting your operational autonomy. Our experienced team can help with growth strategies, operational improvements, and market expansion.
                  </p>
                </div>

                <div className="bg-castelnau-light-green p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-castelnau-dark-green mb-4">Family Values</h3>
                  <p className="text-gray-700">
                    We treat our portfolio companies like family members, with a focus on mutual respect, trust, and long-term relationships. This approach creates a supportive environment for sustainable growth.
                  </p>
                </div>
              </div>

              <div className="bg-castelnau-dark-green text-white p-8 rounded-lg mb-12">
                <h3 className="text-2xl font-bold mb-4">Success Stories</h3>
                <p className="mb-6">
                  Our portfolio companies have thrived under our ownership, benefiting from our patient approach and long-term commitment. We're proud to have helped numerous businesses achieve sustainable growth while maintaining their core values and culture.
                </p>
                <Link href="/explore-the-group">
                  <Button variant="outline" className="text-white border-white hover:bg-white hover:text-castelnau-dark-green">
                    Explore Our Portfolio
                  </Button>
                </Link>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-castelnau-dark-green mb-6">Ready to Start the Conversation?</h3>
                <p className="text-xl text-gray-700 mb-8">
                  If you're considering selling your business and would like to learn more about how we could be the right partner for you, we'd love to hear from you.
                </p>
                <Link href="/contact">
                  <Button className="bg-castelnau-dark-green text-white hover:bg-castelnau-green">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SellYourBusiness; 