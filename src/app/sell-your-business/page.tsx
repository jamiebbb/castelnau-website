'use client';

import React from 'react';
import PageHero from '@/components/common/PageHero';
import { Button } from "@/components/ui/button";
import { Mail, Target, Shield, Zap, TrendingUp, Users, CheckCircle } from 'lucide-react';
import Image from 'next/image';

const SellYourBusiness = () => {
  return (
    <main>
      <PageHero 
        title="Business Acquisition at Castelnau Group"
        description="Looking for a Long-Term Home for your Business?"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <Image
                  src={`${
                    process.env.NODE_ENV === "production" ? "/castelnau-website" : ""
                  }/brand/logos/castelnau-logo.png`}
                  alt="Castelnau Group"
                  width={200}
                  height={100}
                  className="h-16 w-auto"
                />
              </div>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
                At Castelnau Group, we look to acquire and invest in exciting businesses that we would hope to hold forever. 
                If you're seeking a partner that can provide permanent capital and work collaboratively with you to build 
                long-term success, we'd love to hear from you.
              </p>
              <div className="flex items-center justify-center space-x-2 text-castelnau-dark-green">
                <Mail className="h-6 w-6" />
                <a href="mailto:info@castelnaugroup.com" className="text-xl font-semibold hover:underline">
                  info@castelnaugroup.com
                </a>
              </div>
            </div>

            {/* Why Choose Castelnau Group */}
            <div className="mb-16">
              <h2 className="text-3xl font-serif text-castelnau-dark-green mb-12 text-center">Why Choose Castelnau Group?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-castelnau-green/5 to-castelnau-light-green/10 p-8 rounded-xl border border-castelnau-green/20 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <Shield className="h-8 w-8 text-castelnau-green mr-3" />
                    <h3 className="text-xl font-serif text-castelnau-dark-green">Permanent Capital</h3>
                  </div>
                  <p className="text-gray-700">
                    We have no exit investment horizon; our ideal investment would be permanently held. We think this makes us 
                    a great home for founders trying to find the appropriate custodian for businesses they have built.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-castelnau-green/5 to-castelnau-light-green/10 p-8 rounded-xl border border-castelnau-green/20 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <Users className="h-8 w-8 text-castelnau-green mr-3" />
                    <h3 className="text-xl font-serif text-castelnau-dark-green">Empowering Leadership</h3>
                  </div>
                  <p className="text-gray-700">
                    We look to empower rather than interfere with strong leadership teams.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-castelnau-green/5 to-castelnau-light-green/10 p-8 rounded-xl border border-castelnau-green/20 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <Zap className="h-8 w-8 text-castelnau-green mr-3" />
                    <h3 className="text-xl font-serif text-castelnau-dark-green">Flexibility and Speed</h3>
                  </div>
                  <p className="text-gray-700">
                    We can be flexible in terms of transaction structuring, adapting to what makes most sense for both parties. 
                    We are a non-bureaucratic organisation, meaning we can make decisions very quickly.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-castelnau-green/5 to-castelnau-light-green/10 p-8 rounded-xl border border-castelnau-green/20 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <TrendingUp className="h-8 w-8 text-castelnau-green mr-3" />
                    <h3 className="text-xl font-serif text-castelnau-dark-green">Strengthening Businesses</h3>
                  </div>
                  <p className="text-gray-700">
                    Beyond capital, we can offer strategic guidance, access to a valuable network of business expertise, 
                    and shared learnings from our other portfolio companies.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-castelnau-green/5 to-castelnau-light-green/10 p-8 rounded-xl border border-castelnau-green/20 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <Target className="h-8 w-8 text-castelnau-green mr-3" />
                    <h3 className="text-xl font-serif text-castelnau-dark-green">Respect for Culture</h3>
                  </div>
                  <p className="text-gray-700">
                    We value company culture, seeing it as fundamental to long-term success. In fact, companies with unique 
                    cultures that need preserving are just the kind we are looking for.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-castelnau-green/5 to-castelnau-light-green/10 p-8 rounded-xl border border-castelnau-green/20 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="h-8 w-8 text-castelnau-green mr-3" />
                    <h3 className="text-xl font-serif text-castelnau-dark-green">Proven Success</h3>
                  </div>
                  <p className="text-gray-700">
                    Backed by Phoenix Asset Management Partners, we have a track record of successful acquisitions and a 
                    reputation for fairness and integrity in all our business dealings.
                  </p>
                </div>
              </div>
            </div>

            {/* What Type of Business */}
            <div className="mb-16">
              <h2 className="text-3xl font-serif text-castelnau-dark-green mb-12 text-center">What Type of Business Are We Looking For?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-3 h-3 bg-castelnau-green rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-serif text-castelnau-dark-green mb-2">Clear Growth Potential</h4>
                      <p className="text-gray-700">
                        Scalable businesses that will benefit from strategic investment, operating in a market that provides 
                        significant headroom for growth.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-3 h-3 bg-castelnau-green rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-serif text-castelnau-dark-green mb-2">Competitive Advantage/Economic Moat</h4>
                      <p className="text-gray-700">
                        Businesses with strong market position, brand recognition, and customer loyalty. Long-term durability 
                        of the business model.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-3 h-3 bg-castelnau-green rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-serif text-castelnau-dark-green mb-2">Technological Adaptability</h4>
                      <p className="text-gray-700">
                        Opportunity to benefit from technological changes and innovation.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-3 h-3 bg-[#2D5A3D] rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-[#2D5A3D] mb-2">Demonstrated Earnings Power</h4>
                      <p className="text-gray-700">
                        Ideally businesses with a track record of profitability and cash generation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-3 h-3 bg-[#2D5A3D] rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-[#2D5A3D] mb-2">Strong Management Team</h4>
                      <p className="text-gray-700">
                        Experienced teams we can help super-charge.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study */}
            <div className="mb-16">
              <h2 className="text-3xl font-serif text-castelnau-dark-green mb-12 text-center">Case Studies</h2>
              
              <div className="bg-gradient-to-r from-castelnau-green/5 to-castelnau-light-green/10 border border-castelnau-green/20 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-castelnau-green rounded-full flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif text-castelnau-dark-green">Guy Stainthorpe, Co-founder of Corgi Model Club</h3>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">
                    In early 2024, our portfolio company Hornby Plc acquired The Corgi Model Club ("CMC"). The initial consideration 
                    was structured as a mix of cash, and an agreement to acquire CMC's outstanding inventory. A profit-based earnout 
                    was also introduced to reward the sellers based on CMC's future business performance. As part of the transaction, 
                    co-founder Guy Stainthorpe joined Hornby to lead the combined Corgi and CMC business, becoming the Brand Managing 
                    Director of Corgi.
                  </p>

                  <p className="mb-4">
                    Launched in 2021, CMC developed a successful subscription model offering reissues of classic Corgi models. 
                    The business brought over 6,000 active subscribers and £2 million in annual revenue at a 15% operating margin.
                  </p>

                  <p className="mb-6">
                    The acquisition gave Hornby full ownership of the CMC customer base, product rights, and subscription infrastructure – 
                    supporting its direct-to-consumer strategy and future brand growth.
                  </p>

                  <div className="bg-white p-6 rounded-lg border border-castelnau-green/30">
                    <p className="text-sm italic text-gray-600 mb-4">
                      Watch Guy reflect on the journey from launching Corgi Model Club to joining the Hornby Group and how Castelnau 
                      supported a smooth transition.
                    </p>
                    <div className="aspect-video relative rounded-lg overflow-hidden shadow-lg">
                      <video
                        className="w-full h-full object-cover"
                        controls
                        poster="/images/video-poster.jpg"
                      >
                        <source src="/videos/Guy for Investors.MP4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-castelnau-dark-green via-castelnau-green to-castelnau-light-green text-white p-12 rounded-xl shadow-xl">
                <h2 className="text-3xl font-serif mb-6">Let's Start the Conversation</h2>
                <p className="text-xl mb-8 opacity-90">
                  If you are thinking about selling all or part of your business, or are seeking a long-term partner to drive 
                  its future growth, we'd love to hear from you.
                </p>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
                  <div className="flex items-center justify-center space-x-3 text-white">
                    <Mail className="h-6 w-6" />
                    <span className="text-lg">📩 All enquiries will receive a reply.</span>
                  </div>
                  <a 
                    href="mailto:info@castelnaugroup.com" 
                    className="text-2xl font-bold hover:underline block mt-3"
                  >
                    info@castelnaugroup.com
                  </a>
                </div>

                <Button 
                  asChild
                  className="bg-white text-castelnau-dark-green hover:bg-gray-100 font-semibold text-lg px-8 py-3"
                >
                  <a href="mailto:info@castelnaugroup.com">
                    Contact Us Today
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SellYourBusiness; 