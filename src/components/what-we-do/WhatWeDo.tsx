'use client';

import React from 'react';
import { Target, TrendingUp, Users, Handshake, Globe, Award, Shield, Heart, ArrowRight, CheckCircle, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const WhatWeDo = () => {
  const investmentCriteria = [
    {
      icon: Award,
      title: "High Returns",
      description: "15%+ after-tax returns over full economic cycles",
      highlight: "15%+"
    },
    {
      icon: Shield,
      title: "Economic Moat",
      description: "Protective competitive advantages that sustain performance",
      highlight: "Protected"
    },
    {
      icon: Target,
      title: "Attractive Pricing",
      description: "Significant margin of safety in our acquisition price",
      highlight: "Safe Margin"
    },
    {
      icon: Users,
      title: "Aligned Management",
      description: "Leadership teams who think long-term like we do",
      highlight: "Aligned"
    }
  ];

  const ourApproach = [
    {
      icon: Globe,
      title: "Permanent Capital",
      description: "We're collectors, not traders. We hold businesses forever when possible."
    },
    {
      icon: TrendingUp,
      title: "Value Creation",
      description: "We provide resources and remove short-term pressures to unlock potential."
    },
    {
      icon: Handshake,
      title: "Partnership",
      description: "We delegate to the best managers while providing strategic support."
    }
  ];

  const whyChooseUs = [
    {
      title: "Performance-Based Fees",
      description: "We only get paid when we outperform the FTSE All Share",
      icon: "💰"
    },
    {
      title: "Full Transparency",
      description: "Detailed reporting on every holding, successes and failures",
      icon: "📊"
    },
    {
      title: "Unconventional Thinking",
      description: "23 years of contrarian, rational decision-making",
      icon: "🧠"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Mission Section */}
      <section className="pt-0 pb-20 bg-white text-castelnau-dark-green">
        <div className="container mx-auto px-4 pt-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-castelnau-green/10 border border-castelnau-green/20 rounded-full px-6 py-3 mb-8">
              <Target className="h-6 w-6 mr-3 text-castelnau-green" />
              <span className="font-medium text-castelnau-green">Our Mission</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
              Compound Capital at High Returns
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
              We collect exceptional businesses with competitive advantages at attractive prices, 
              then nurture them for permanent value creation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-castelnau-green text-white rounded-lg p-6 text-center shadow-lg">
                <div className="text-3xl font-bold">23+</div>
                <div className="text-white/90">Years Experience</div>
              </div>
              <div className="bg-castelnau-green text-white rounded-lg p-6 text-center shadow-lg">
                <div className="text-3xl font-bold">15%+</div>
                <div className="text-white/90">Target Returns</div>
              </div>
              <div className="bg-castelnau-green text-white rounded-lg p-6 text-center shadow-lg">
                <div className="text-3xl font-bold">∞</div>
                <div className="text-white/90">Holding Period</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Criteria */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-castelnau-dark-green mb-6">
                What We Look For
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our rigorous criteria have been refined over decades to identify truly exceptional businesses
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {investmentCriteria.map((criterion, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-castelnau-green/30">
                  <CardContent className="p-8 text-center">
                    <div className="bg-castelnau-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-castelnau-green group-hover:scale-110 transition-all duration-300">
                      <criterion.icon className="h-8 w-8 text-castelnau-green group-hover:text-white" />
                    </div>
                    <div className="bg-castelnau-green text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                      {criterion.highlight}
                    </div>
                    <h3 className="text-xl font-serif text-castelnau-dark-green mb-4">
                      {criterion.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {criterion.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <div className="bg-castelnau-green/5 border border-castelnau-green/20 rounded-xl p-8 max-w-4xl mx-auto">
                <p className="text-lg text-gray-700 mb-4">
                  <strong>Ready to discuss your business?</strong> Our team can transact quickly for the right opportunities.
                </p>
                <p className="text-castelnau-green font-semibold">
                  All enquiries receive a reply within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-castelnau-dark-green mb-6">
                Our Approach
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're not traditional fund managers. We're business builders focused on permanent value creation.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {ourApproach.map((approach, index) => (
                <Card key={index} className="bg-white hover:shadow-lg transition-all duration-300 border-l-4 border-castelnau-green">
                  <CardContent className="p-8">
                    <div className="bg-castelnau-green/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                      <approach.icon className="h-6 w-6 text-castelnau-green" />
                    </div>
                    <h3 className="text-xl font-serif text-castelnau-dark-green mb-4">
                      {approach.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {approach.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gradient-to-r from-castelnau-green to-castelnau-light-green text-white rounded-2xl p-8 md:p-12">
              <div className="max-w-3xl">
                <h3 className="text-2xl md:text-3xl font-serif mb-6">
                  "Delegation just short of abdication"
                </h3>
                <p className="text-xl text-white/90 leading-relaxed">
                  We provide capital, clear away short-term pressures, and let exceptional managers 
                  do what they do best - build sustainable, profitable businesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-castelnau-dark-green mb-6">
                Why Partner With Us
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We treat shareholders as partners, with complete transparency and aligned incentives
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {whyChooseUs.map((reason, index) => (
                <div key={index} className="text-center group">
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {reason.icon}
                  </div>
                  <h3 className="text-xl font-serif text-castelnau-dark-green mb-4">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-castelnau-dark-green text-white rounded-2xl p-8 md:p-12 text-center">
              <h3 className="text-3xl font-serif mb-6">
                Building a Decentralised Conglomerate
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
                Our goal is simple: compound shareholder capital through rational, long-term 
                decision-making across diverse, high-quality businesses.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center bg-white/20 rounded-full px-6 py-3">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span>No Traditional PE Timelines</span>
                </div>
                <div className="flex items-center bg-white/20 rounded-full px-6 py-3">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span>Sector Agnostic</span>
                </div>
                <div className="flex items-center bg-white/20 rounded-full px-6 py-3">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span>Public & Private Markets</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-castelnau-green/10 rounded-full px-6 py-3 mb-8">
              <Heart className="h-6 w-6 mr-3 text-castelnau-green" />
              <span className="font-medium text-castelnau-green">Community Impact</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-castelnau-dark-green mb-8">
              Supporting Future First
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Through our partnership with Future First, we're advancing social mobility by connecting 
              our expertise with local schools and communities.
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="text-xl font-serif text-castelnau-dark-green mb-4">
                    Community Impact
                  </h3>
                  <p className="text-gray-600">
                    Meaningful contributions to schools of all sizes, fostering positive change in local communities.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-serif text-castelnau-dark-green mb-4">
                    Our Commitment
                  </h3>
                  <p className="text-gray-600">
                    Active support for local education, reflecting our dedication to social responsibility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo; 