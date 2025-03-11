
import React, { useEffect } from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Check, Heart, HandHeart, Users } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const WhoWeAre = () => {
  const location = useLocation();

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

    // Small delay to ensure DOM is ready
    setTimeout(scrollToSection, 100);
  }, [location.hash]);

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/3503b171-9516-43a5-b44c-9af899c25e41.png" 
                  alt="Gary Channon" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">Gary Channon</h4>
                  <p className="text-castelnau-green font-medium mb-3">Chief Investment Officer</p>
                  <p className="text-gray-700">
                    With over 25 years of investment experience, Gary leads our investment strategy and portfolio 
                    management. His deep understanding of value investing principles has been instrumental in 
                    shaping our investment approach.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/d0c87d8a-b6c8-4b43-bc85-feec0bab9862.png" 
                  alt="Investment Team" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">Investment Team</h4>
                  <p className="text-castelnau-green font-medium mb-3">Portfolio Management</p>
                  <p className="text-gray-700">
                    Our experienced investment team combines diverse expertise in financial analysis, 
                    industry research, and portfolio management. Each member brings unique insights 
                    and perspectives to our investment process.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/0943dd4e-c9fa-42ff-ac4a-fc4435caa10e.png" 
                  alt="Operations Team" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">Operations Team</h4>
                  <p className="text-castelnau-green font-medium mb-3">Business Operations</p>
                  <p className="text-gray-700">
                    Our operations team ensures the smooth functioning of all business processes. 
                    Their dedication to operational excellence enables our investment professionals 
                    to focus on what they do best.
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
