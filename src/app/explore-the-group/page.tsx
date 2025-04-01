'use client';

import React, { useState } from 'react';
import PageHero from '@/components/common/PageHero';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Image from 'next/image';
import CompanyModal from '@/components/common/CompanyModal';

const ExploreTheGroup = () => {
  const [selectedCompany, setSelectedCompany] = useState<any>(null);

  const companies = [
    {
      name: "Stanley Gibbons",
      sharesPercentage: "64.1%",
      portfolioPercentage: "0.2%",
      description: "Leading philatelic auctioneer and dealer, specializing in rare stamps and collectibles.",
      website: "https://www.stanleygibbons.com",
      logo: "/companies/stanley-gibbons.svg"
    },
    {
      name: "Hornby",
      sharesPercentage: "54.4%",
      portfolioPercentage: "5.0%",
      description: "Iconic British model railway and hobby products manufacturer.",
      website: "https://www.hornby.com",
      logo: "/companies/hornby.svg"
    },
    {
      name: "Dignity",
      sharesPercentage: "66.0%",
      portfolioPercentage: "83.2%",
      description: "Leading UK funeral services provider with a network of funeral homes and crematoria.",
      website: "https://www.dignityfunerals.co.uk",
      logo: "/companies/dignity.svg"
    },
    {
      name: "Iona Star",
      sharesPercentage: "45.0%",
      portfolioPercentage: "0.1%",
      description: "Investment holding company with interests in technology and digital assets.",
      website: "https://ionastar.com",
      logo: "/companies/iona-star.svg"
    },
    {
      name: "Rawnet",
      sharesPercentage: "100%",
      portfolioPercentage: "0.4%",
      description: "Digital agency specializing in web development and digital solutions.",
      website: "https://www.rawnet.com",
      logo: "/companies/rawnet.svg"
    },
    {
      name: "Ocula",
      sharesPercentage: "41.2%",
      portfolioPercentage: "1.3%",
      description: "AI-powered healthcare technology company focusing on early disease detection.",
      website: "https://ocula.ai",
      logo: "/companies/ocula.svg"
    },
    {
      name: "Cambium",
      sharesPercentage: "90.3%",
      portfolioPercentage: "3.0%",
      description: "Sustainable materials technology company developing eco-friendly alternatives.",
      website: "https://cambium.com",
      logo: "/companies/cambium.svg"
    },
    {
      name: "Silverwood",
      sharesPercentage: "29.9%",
      portfolioPercentage: "1.3%",
      description: "Premium spirits and beverage company with a focus on craft production.",
      website: "https://silverwoodspirits.com",
      logo: "/companies/silverwood.svg"
    }
  ];

  return (
    <main>
      <PageHero 
        title="Explore the Group"
        description="Discover our portfolio of businesses"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-castelnau-dark-green mb-6">Our Portfolio</h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-castelnau-green mb-6">Our Family of Businesses</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Just like a family considers its members to be permanent, Castelnau Group considers most of their holdings as permanent too. Like a well-functioning family, this permanence allows us to be patient and make rational long-term decisions about supporting and nurturing the businesses. We would like to introduce you to our family members here:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companies.map((company, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-32 bg-white p-6 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <Image
                      src={company.logo}
                      alt={company.name}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index < 4}
                      quality={100}
                      style={{
                        maxWidth: company.name === "Iona Star" ? '140px' : 
                                 company.name === "Ocula" ? '160px' : 
                                 company.name === "Silverwood" ? '150px' : 
                                 company.name === "Stanley Gibbons" ? '160px' : '180px',
                        maxHeight: company.name === "Iona Star" ? '60px' : 
                                  company.name === "Ocula" ? '70px' : 
                                  company.name === "Silverwood" ? '65px' : 
                                  company.name === "Stanley Gibbons" ? '70px' : '80px',
                        margin: 'auto'
                      }}
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-castelnau-dark-green mb-2">{company.name}</h3>
                  <div className="flex justify-between text-sm text-gray-600 mb-4">
                    <span>Company Shares Held: {company.sharesPercentage}</span>
                    <span>Investment Portfolio: {company.portfolioPercentage}</span>
                  </div>
                  <p className="text-gray-700 mb-4">{company.description}</p>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => setSelectedCompany(company)}
                  >
                    Read more
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-castelnau-light-green">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-castelnau-dark-green mb-6">Investor Relations</h2>
          <p className="text-xl text-gray-700 mb-8">Discover more in our Shareholder information centre.</p>
          <Link href="/investor-relations">
            <Button className="bg-castelnau-dark-green text-white hover:bg-castelnau-green">
              Click Here
            </Button>
          </Link>
        </div>
      </section>

      <CompanyModal 
        company={selectedCompany}
        isOpen={!!selectedCompany}
        onClose={() => setSelectedCompany(null)}
      />
    </main>
  );
};

export default ExploreTheGroup;
