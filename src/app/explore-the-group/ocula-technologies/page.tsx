'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const OculaTechnologiesPage = () => {
  return (
    <main className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <Link href="/explore-the-group" className="flex items-center text-castelnau-green hover:text-castelnau-dark-green transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Portfolio
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-castelnau-dark-green via-castelnau-green to-castelnau-light-green py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-48 h-48 bg-white rounded-xl p-8 shadow-xl flex items-center justify-center">
              <Image
                src="/company-logos/logo_ocula.png"
                alt="Ocula Technologies"
                width={200}
                height={100}
                className="object-contain"
                priority
              />
            </div>
            <div className="text-center md:text-left text-white">
              <div className="text-sm uppercase tracking-wide text-white/80 mb-2">Portfolio Company</div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Ocula Technologies</h1>
              <p className="text-xl md:text-2xl text-white/90 mb-4">AI & Data Analytics</p>
              <div className="flex flex-col md:flex-row gap-4 text-white/80">
                <div>Founded: 2021</div>
                <div>•</div>
                <div>Invested since: 2021</div>
                <div>•</div>
                <div>Equity held: 41.2%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Ocula Technologies is a Software as a Service (SaaS) company that provides data and analytics tools to help businesses grow sales and profitability through AI-driven insights into their e-commerce sites.
              </p>
              
              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Founding & Growth</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Launched in 2021 with Castelnau Group as a founding shareholder, Ocula has quickly established itself as a key player in the AI and data analytics space. The company leverages its expertise in data science and generative AI to deliver innovative solutions in a rapidly evolving market.
              </p>

              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Strategic Partnerships</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Ocula works closely with portfolio companies such as Cambium and Hornby, as well as high-profile clients such as AO.com, Kansas City Chiefs, and Boots. As a digital enabler, Ocula empowers these businesses to leverage AI-driven solutions that transform their operations and decision-making processes.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                By collaborating with these brands, Ocula continuously refined its platform through real-world case studies, offering tailored AI-driven solutions that help businesses optimise their strategies and decision-making.
              </p>

              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Series A Funding</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                In 2024, Ocula completed its Series A capital raise, securing £4 million in funding. This investment enabled the company to expand its sales and technology teams, develop new AI-driven features, and scale its operations across the UK and US markets.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                This funding round underscores investor confidence in Ocula's vision and its ability to deliver innovative solutions in a rapidly evolving market.
              </p>

              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Core Product & Growth</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Their core product Ocula Boost is growing revenues quickly, and their ability to add new clients and grow ARR (Annual Recurring Revenue) is key to value creation. As the demand for advanced data insights grows, Ocula has the potential to play an important role in transforming how businesses utilise data for success.
              </p>

              <h2 className="text-2xl font-bold text-castelnau-dark-green mt-8 mb-4">Future Value Creation</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                Building on the success of Ocula Boost, delivering new products would further enhance shareholder value. Ocula is well-positioned to deliver value to both existing and new clients as businesses increasingly seek advanced AI-driven data insights.
              </p>

              <div className="bg-gray-50 rounded-xl p-6 mt-8">
                <h3 className="text-lg font-bold text-castelnau-dark-green mb-4">Investment Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-castelnau-green">41.2%</div>
                    <div className="text-sm text-gray-600">Equity Held</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-castelnau-green">1.3%</div>
                    <div className="text-sm text-gray-600">Portfolio Weight</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row gap-4">
              <Link href="/explore-the-group">
                <Button className="bg-castelnau-green text-white hover:bg-castelnau-dark-green">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Portfolio
                </Button>
              </Link>
              <a href="https://ocula.ai" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="hover:bg-castelnau-green hover:text-white">
                  Visit Website
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OculaTechnologiesPage; 