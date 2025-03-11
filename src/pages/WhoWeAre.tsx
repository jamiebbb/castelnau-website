
import React, { useEffect, useRef } from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Check, Heart, HandHeart, Users } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const WhoWeAre = () => {
  const location = useLocation();
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const scrollToSection = () => {
      if (location.hash) {
        const targetId = location.hash.substring(1);
        const element = document.getElementById(targetId);
        
        if (element) {
          const navHeight = 120; // Height of fixed navbar
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      } else {
        window.scrollTo(0, 0);
      }
    };

    // Clear any existing timeout to prevent multiple scrolls
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    // Small delay to ensure DOM is ready
    scrollTimeoutRef.current = setTimeout(scrollToSection, 100);

    // Cleanup on unmount
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [location]); // Changed from location.hash to location to detect all changes

  return (
    <MainLayout>
      <section className="page-hero">
        <div className="container mx-auto px-4">
          <h1 className="page-title">Who We Are</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mb-8">
            We are value investors focused on long-term growth through careful analysis and active engagement with exceptional businesses.
          </p>
          <div className="h-1 bg-gradient-to-r from-white/40 via-white to-white/40 w-36"></div>
        </div>
        
        <div className="absolute bottom-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150" className="w-full">
            <path 
              fill="#FFFFFF" 
              fillOpacity="1" 
              d="M0,96L80,85.3C160,75,320,53,480,64C640,75,800,117,960,122.7C1120,128,1280,96,1360,80L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>
      
      <section className="page-content">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-3xl font-serif font-bold text-castelnau-green mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                Founded with a vision to transform value investing for the modern era, Castelnau Group Limited 
                represents a new chapter in investment management. Our approach combines time-tested value investing 
                principles with contemporary market insights and technologies.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We believe that successful investing requires both patience and precision. Our investment philosophy 
                is rooted in detailed analysis, careful consideration, and a long-term perspective that allows us 
                to see opportunities where others might not.
              </p>
              <p className="text-lg text-gray-700">
                Through our unique position in the market and our deep understanding of value creation, we work to 
                generate sustainable returns for our investors while contributing to the growth and development of 
                the companies in our portfolio.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-serif font-bold text-castelnau-green mb-6">Investment Philosophy</h3>
              <p className="text-lg text-gray-700 mb-6">
                At Castelnau, we follow a disciplined investment approach that emphasizes fundamental analysis and 
                value creation. We focus on identifying companies with strong underlying business models, capable 
                management teams, and significant potential for long-term growth.
              </p>
              <p className="text-lg text-gray-700">
                Our investment strategy is characterized by:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 mt-4 space-y-3">
                <li>Deep fundamental analysis</li>
                <li>Long-term investment horizon</li>
                <li>Focus on intrinsic value</li>
                <li>Active engagement with portfolio companies</li>
              </ul>
            </div>
          </div>

          <div id="our-values" className="mb-20 scroll-mt-24">
            <h2 className="text-3xl font-serif font-bold text-castelnau-green mb-10 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
                <div className="bg-castelnau-green h-16 w-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-center mb-4">Integrity</h4>
                <p className="text-gray-700 text-center">
                  We maintain the highest standards of professional conduct and always put our investors' interests first.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
                <div className="bg-castelnau-green h-16 w-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <HandHeart className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-center mb-4">Partnership</h4>
                <p className="text-gray-700 text-center">
                  We build lasting relationships with our portfolio companies, working together to create sustainable value.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
                <div className="bg-castelnau-green h-16 w-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Check className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-center mb-4">Excellence</h4>
                <p className="text-gray-700 text-center">
                  We strive for excellence in everything we do, from research and analysis to portfolio management.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
                <div className="bg-castelnau-green h-16 w-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-center mb-4">Collaboration</h4>
                <p className="text-gray-700 text-center">
                  We believe in the power of teamwork and diverse perspectives to achieve exceptional results.
                </p>
              </div>
            </div>
          </div>

          <div id="our-team" className="scroll-mt-24">
            <h2 className="text-3xl font-serif font-bold text-castelnau-green mb-10 text-center">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {/* Gary Channon */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-102 transition-all duration-300 group">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/3503b171-9516-43a5-b44c-9af899c25e41.png" 
                    alt="Gary Channon" 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 bg-gradient-to-br from-white to-gray-50">
                  <h4 className="text-xl font-bold mb-2 text-castelnau-darkgreen">Gary Channon</h4>
                  <p className="text-castelnau-green font-medium mb-3">Chief Investment Officer</p>
                  <p className="text-gray-700">
                    Gary joined Phoenix in 1998, having previously worked at Nikko Securities Europe and Goldman Sachs International. He leads Phoenix's investment approach, combining deep fundamental research with a behavioural and statistical framework to identify value.
                  </p>
                </div>
              </div>

              {/* Tristan Chapple */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-102 transition-all duration-300 group">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/0943dd4e-c9fa-42ff-ac4a-fc4435caa10e.png" 
                    alt="Tristan Chapple" 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 bg-gradient-to-br from-white to-gray-50">
                  <h4 className="text-xl font-bold mb-2 text-castelnau-darkgreen">Tristan Chapple</h4>
                  <p className="text-castelnau-green font-medium mb-3">Director</p>
                  <p className="text-gray-700">
                    Tristan joined Phoenix in 2017 from Barclays Investment Bank, bringing experience in capital markets. As Director, he focuses on private and listed small cap investments. He holds a BSc in Natural Sciences from Durham University and an MBA from London Business School.
                  </p>
                </div>
              </div>

              {/* Charlotte Maby */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-102 transition-all duration-300 group">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/d0c87d8a-b6c8-4b43-bc85-feec0bab9862.png" 
                    alt="Charlotte Maby" 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 bg-gradient-to-br from-white to-gray-50">
                  <h4 className="text-xl font-bold mb-2 text-castelnau-darkgreen">Charlotte Maby</h4>
                  <p className="text-castelnau-green font-medium mb-3">Investment Team</p>
                  <p className="text-gray-700">
                    Charlotte joined Phoenix in 2018 after graduating from Oxford University with a BA in Philosophy, Politics and Economics. At Phoenix, she is responsible for identifying and analysing investment opportunities as well as for portfolio management.
                  </p>
                </div>
              </div>

              {/* James Wilson */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-102 transition-all duration-300 group">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/3503b171-9516-43a5-b44c-9af899c25e41.png" 
                    alt="James Wilson" 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 bg-gradient-to-br from-white to-gray-50">
                  <h4 className="text-xl font-bold mb-2 text-castelnau-darkgreen">James Wilson</h4>
                  <p className="text-castelnau-green font-medium mb-3">Investment Team</p>
                  <p className="text-gray-700">
                    James joined Phoenix in 2020 from private equity firm Bain Capital, where he evaluated investments across multiple sectors. Prior to this, he was at Goldman Sachs in their Investment Banking Division. He holds a BSc in Economics from the University of Warwick.
                  </p>
                </div>
              </div>

              {/* Steve Tatters */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-102 transition-all duration-300 group">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/0943dd4e-c9fa-42ff-ac4a-fc4435caa10e.png" 
                    alt="Steve Tatters" 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 bg-gradient-to-br from-white to-gray-50">
                  <h4 className="text-xl font-bold mb-2 text-castelnau-darkgreen">Steve Tatters</h4>
                  <p className="text-castelnau-green font-medium mb-3">Chief Operating Officer</p>
                  <p className="text-gray-700">
                    Steve joined Phoenix in 2016 as Chief Operating Officer and oversees the group's operations, risk management and compliance functions. Before Phoenix, he spent 15 years at J.P. Morgan Asset Management in senior operational roles. He is a chartered management accountant.
                  </p>
                </div>
              </div>

              {/* Miles Staude */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-102 transition-all duration-300 group">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/3503b171-9516-43a5-b44c-9af899c25e41.png" 
                    alt="Miles Staude" 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 bg-gradient-to-br from-white to-gray-50">
                  <h4 className="text-xl font-bold mb-2 text-castelnau-darkgreen">Miles Staude</h4>
                  <p className="text-castelnau-green font-medium mb-3">Non-Executive Director</p>
                  <p className="text-gray-700">
                    Miles has over 20 years of experience in financial markets and investment management. He manages the Global Value Fund and serves as director of Staude Capital. Previously, he worked at Metage Capital and was a member of the investment team responsible for global equities at Merrill Lynch.
                  </p>
                </div>
              </div>

              {/* Graham Shircore */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-102 transition-all duration-300 group">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/0943dd4e-c9fa-42ff-ac4a-fc4435caa10e.png" 
                    alt="Graham Shircore" 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 bg-gradient-to-br from-white to-gray-50">
                  <h4 className="text-xl font-bold mb-2 text-castelnau-darkgreen">Graham Shircore</h4>
                  <p className="text-castelnau-green font-medium mb-3">Non-Executive Director</p>
                  <p className="text-gray-700">
                    Graham is CEO of Gresham House Strategic plc and a Fund Manager at Gresham House Asset Management. He previously spent nine years at Aviva Investors, held roles at Rothschild and was appointed CEO of Stanley Gibbons in 2018. He has a first-class economics degree from Durham University.
                  </p>
                </div>
              </div>

              {/* Christopher Mills */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-102 transition-all duration-300 group">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/3503b171-9516-43a5-b44c-9af899c25e41.png" 
                    alt="Christopher Mills" 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 bg-gradient-to-br from-white to-gray-50">
                  <h4 className="text-xl font-bold mb-2 text-castelnau-darkgreen">Christopher Mills</h4>
                  <p className="text-castelnau-green font-medium mb-3">Non-Executive Director</p>
                  <p className="text-gray-700">
                    Christopher founded Harwood Capital Management in 2011, previously serving as CIO of J.O. Hambro and CEO of North Atlantic Smaller Companies. He manages North Atlantic Smaller Companies Investment Trust and is a multi-award winning fund manager with over 40 years of experience.
                  </p>
                </div>
              </div>

              {/* Andrew Whittaker */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-102 transition-all duration-300 group">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/0943dd4e-c9fa-42ff-ac4a-fc4435caa10e.png" 
                    alt="Andrew Whittaker" 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 bg-gradient-to-br from-white to-gray-50">
                  <h4 className="text-xl font-bold mb-2 text-castelnau-darkgreen">Andrew Whittaker</h4>
                  <p className="text-castelnau-green font-medium mb-3">Chairman</p>
                  <p className="text-gray-700">
                    Andrew has been Chairman of CGL since its IPO in 2021. With over 30 years in financial services, he was previously a Partner at James Capel and Managing Director at UBS. He's a Non-Executive Director on several boards, including Jupiter UK Growth Investment Trust and Merian Chrysalis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default WhoWeAre;
