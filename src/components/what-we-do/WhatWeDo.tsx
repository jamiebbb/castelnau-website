'use client';

import React from 'react';
import { Target, TrendingUp, Users, Handshake, Globe, Award, Shield, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const WhatWeDo = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-castelnau-green to-green-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              What We Do
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8">
              Building a decentralised conglomerate of permanent holdings to compound shareholders' capital at high rates of return
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="text-white border-white bg-white/10 backdrop-blur-sm">
                Long-term Focus
              </Badge>
              <Badge variant="outline" className="text-white border-white bg-white/10 backdrop-blur-sm">
                15%+ Returns
              </Badge>
              <Badge variant="outline" className="text-white border-white bg-white/10 backdrop-blur-sm">
                Economic Moats
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <Target className="h-8 w-8 text-castelnau-green mr-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                At Castelnau Group we strive to compound shareholders' capital at high rates of return. The higher the better.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We aim to do this by collecting businesses which possess a competitive advantage, at attractive prices.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our structure helps us clear away short-term pressures that inhibit value creation and nurture rational long-term capital allocation frameworks in our holdings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capital Allocation - New Companies */}
      <section id="new-companies" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <TrendingUp className="h-8 w-8 text-castelnau-green mr-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Capital Allocation: New Companies</h2>
            </div>
            
            <p className="text-lg text-gray-700 mb-8">
              We are always on the lookout for wonderful businesses that fit our criteria, which can be summarised as follows:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="border-l-4 border-l-castelnau-green">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-castelnau-green/10 p-3 rounded-full">
                      <Award className="h-6 w-6 text-castelnau-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">High Returns on Capital</h3>
                      <p className="text-gray-600">
                        A demonstrable track record of high and enduring returns on capital employed. Our definition of "high" is an unlevered average of <strong>15% after tax</strong> over a full economic cycle.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-50 p-3 rounded-full">
                      <Shield className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Economic Moat</h3>
                      <p className="text-gray-600">
                        An "economic moat" surrounding the business to protect those returns on capital and ensure they stay high.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-50 p-3 rounded-full">
                      <Target className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Attractive Pricing</h3>
                      <p className="text-gray-600">
                        We are able to buy into the business at an attractive price that offers us a large margin of safety.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-50 p-3 rounded-full">
                      <Users className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Aligned Management</h3>
                      <p className="text-gray-600">
                        Our ideal businesses come with a management and a culture who think and act in the same way we do about capital allocation. However, we have experience of providing the right people if needed.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                This brief list is only a guide to what we look for. It summarises an in-depth research process developed over <strong>23 years</strong> by the investment manager. If you think your business fits the criteria, please give us a call.
              </p>
              <p className="text-gray-700 mb-4">
                Whilst we think deeply about decisions and are meticulous with our research, we pride ourselves on our nimbleness. We have a single point of decision making and can transact very quickly for the right opportunities.
              </p>
              <p className="font-semibold text-castelnau-green">
                All enquiries will receive a reply.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capital Allocation - Portfolio Businesses */}
      <section id="portfolio-businesses" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <Globe className="h-8 w-8 text-castelnau-green mr-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Capital Allocation: Portfolio Businesses</h2>
            </div>

            <div className="bg-castelnau-green/5 border-l-4 border-castelnau-green p-6 rounded-r-lg mb-8">
              <p className="text-xl font-semibold text-gray-900 mb-2">
                Our ideal situation with our businesses is delegation just short of abdication.
              </p>
            </div>

            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-lg text-gray-700">
                We want the best managers in their field to run our businesses. We also want them to share our passion for long-term thinking and rational capital allocation frameworks.
              </p>
              
              <p className="text-lg text-gray-700">
                If this is the case it is likely that a potential business can move into our ownership and there would be no changes at all with very little ongoing oversight.
              </p>
              
              <p className="text-lg text-gray-700">
                Unfortunately, these "home-runs" are rare. As a result, we have developed a framework for helping our businesses protect their competitive positions and maximise shareholder value creation.
              </p>
              
              <p className="text-lg text-gray-700">
                Most of the time, Castelnau Group helps the holdings by clearing away short-term pressures and allowing the business to focus on the long-term.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Capital Investment</h3>
                  <p className="text-gray-700">
                    We have provided capital with a long-term (but large) payback to improve the customer proposition when lenders and other shareholders were not prepared to do so.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Technical Resources</h3>
                  <p className="text-gray-700">
                    We have shared technical resource from other portfolio companies to modernise the infrastructure of acquired businesses.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <p className="text-lg text-gray-700">
                Ultimately, Castelnau Group strives to be a <strong>decentralised holding company</strong> and help investments realise their full potential. We do that by investing resources, both human and financial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investors Section */}
      <section id="investors" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <Handshake className="h-8 w-8 text-castelnau-green mr-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Investors: What To Expect</h2>
            </div>

            <div className="bg-castelnau-green text-white p-6 rounded-lg mb-8">
              <p className="text-xl font-semibold mb-2">We treat our shareholders as partners.</p>
              <p className="text-green-100">Shareholders should expect transparency and alignment.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Transparency & Communication</h3>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    We write a detailed account to shareholders in the annual report and include a section on the progress of each holding.
                  </p>
                  <p className="text-gray-700">
                    We strive to treat both our mistakes and successes with humility and shareholders should expect to read about both.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Fee Structure & Alignment</h3>
                <div className="space-y-4">
                  <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                    <p className="text-gray-700 mb-2">
                      The investment manager is paid a <strong>performance fee in shares</strong>. There is no ongoing "management fee" for sitting still.
                    </p>
                    <p className="text-gray-700">
                      Unless the per share performance of Castelnau Group exceeds the <strong>FTSE All Share Total Return</strong>, then no performance fee is paid.
                    </p>
                  </div>
                  <p className="font-semibold text-castelnau-green">
                    Shareholders don't incur fees if we don't outperform. We think that is fair.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Unconventional Approach</h3>
              <div className="space-y-3">
                <p className="text-gray-700">
                  <strong>This is not a traditional Private Equity fund. This is not a traditional institutional fund.</strong> Shareholders should be prepared for an unconventional approach.
                </p>
                <p className="text-gray-700">
                  We like to think as objectively and rationally as our human condition permits. We have found this can often lead us into contrarian actions and unconventional structures.
                </p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-lg text-gray-700">
                We are collectors of businesses and investment opportunities that we believe are likely to help us compound shareholders' capital at high rates of return. Our strategy is not to sell or "realise" investments or shuffle around weightings of listed investments based on short-term expectations.
              </p>
              
              <p className="text-lg text-gray-700">
                We think that Castelnau Group will optimise shareholder value over the long term by building a <strong>decentralised conglomerate of permanent holdings</strong>. Shareholders should expect holdings to come from a variety of sectors with no particular bias to size.
              </p>
              
              <p className="text-lg text-gray-700">
                We strive to be professional opportunists and so do not restrict ourselves to one of public or private markets. We will also consider every part of the capital structure of an opportunity when making an investment.
              </p>
              
              <p className="text-lg text-gray-700 font-semibold">
                Ultimately, we will aim to allocate capital in a rational long-term manner and shareholders should expect a transparent and aligned partnership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section id="community" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <Heart className="h-8 w-8 text-castelnau-green mr-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Community Involvement</h2>
            </div>

            <div className="bg-gradient-to-r from-castelnau-green to-green-600 text-white rounded-lg p-8 mb-8">
              <div className="flex items-start space-x-6">
                <div className="bg-white/20 p-4 rounded-full">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Partnership with Future First</h3>
                  <p className="text-green-100 text-lg leading-relaxed">
                    Castelnau Group Services Limited (CGSL) is proud to partner with Future First, a renowned volunteering hub dedicated to advancing national social mobility.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-l-4 border-l-castelnau-green">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Community Impact</h3>
                  <p className="text-gray-700">
                    By collaborating with schools of all sizes, Future First fosters contributions that make a significant impact in local communities.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Our Commitment</h3>
                  <p className="text-gray-700">
                    As a partner of Future First, CGSL is committed to supporting local schools. This partnership underscores CGSL's dedication to social responsibility and community support.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo; 