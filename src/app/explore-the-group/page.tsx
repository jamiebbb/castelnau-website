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
      name: "Stanley Gibbons Baldwin's",
      sharesHeld: "64.1%",
      investmentPortfolio: "0.2%",
      listed: false,
      description: "Stanley Gibbons Baldwin's combines two heritage brands: Stanley Gibbons, a philatelic leader since 1856, and Baldwin's, experts in coins and medals since 1872, united as a multi-category auction house.",
      image: "/companies/stanley-gibbons.png",
      website: "https://www.stanleygibbons.com"
    },
    {
      name: "Hornby PLC",
      sharesHeld: "54.4%",
      investmentPortfolio: "5.0%",
      listed: true,
      description: "Hornby is the name of the largest brand within the company, but actually Hornby is a portfolio of heritage toy and collectible brands that many generations have fond memories of.",
      image: "/companies/hornby.png",
      website: "https://www.hornby.com"
    },
    {
      name: "Dignity",
      sharesHeld: "66.0%",
      investmentPortfolio: "83.2%",
      listed: false,
      description: "Established in 1812, Dignity is the only nationwide, vertically integrated end-of-life business. It currently has c.800 branches across the country, 500 trading names and 46 crematoria.",
      image: "/companies/dignity.png",
      website: "https://www.dignityfunerals.co.uk"
    },
    {
      name: "Rawnet",
      sharesHeld: "100%",
      investmentPortfolio: "0.4%",
      listed: false,
      description: "Rawnet is a digital marketing and software development agency that works with its partners to create a long-term positive impact. Rawnet like to immerse themselves in their clients' businesses to understand the end objective, thinking strategically & commercially to produce meaningful outcomes.",
      image: "/companies/rawnet.png",
      website: "https://www.rawnet.com"
    },
    {
      name: "The Cambium Group",
      sharesHeld: "90.3%",
      investmentPortfolio: "3.0%",
      listed: false,
      description: "Cambium is the home of three leading UK wedding gift list brands: The Wedding Shop (TWS), The Wedding Present Company (WPC) and Prezola. Each brand helps engaged couples build a list of gifts that they would like to receive for their wedding.",
      image: "/companies/cambium.png",
      website: "https://www.cambiumgroup.co.uk"
    },
    {
      name: "Ocula Technologies Ltd",
      sharesHeld: "41.2%",
      investmentPortfolio: "1.3%",
      listed: false,
      description: "Ocula Technologies Ltd is a start-up that is building a data and analytics tool which will provide insights for companies to grow sales and profitability.",
      image: "/companies/ocula.png",
      website: "https://www.ocula.ai"
    },
    {
      name: "Showpiece Technologies Ltd",
      sharesHeld: "80%",
      investmentPortfolio: "0%",
      listed: false,
      description: "Showpiece Technologies Ltd is a fractional ownership platform, created to make ownership of the world's most famous and valuable items available to everyone. Showpiece was incorporated in August 2021 and, as of November 2021, is 80% owned by Castelnau Group and 20% owned by Stanley Gibbons.",
      image: "/companies/showpiece.png",
      website: "https://www.showpiece.com"
    },
    {
      name: "Silverwood Brands",
      sharesHeld: "29.9%",
      investmentPortfolio: "1.3%",
      listed: true,
      description: "Silverwood Brands is an investment vehicle focused on premium consumer brands which has an existing presence in the beauty sector.",
      image: "/companies/silverwood.png",
      website: "https://www.silverwoodbrands.com"
    },
    {
      name: "Iona Star",
      sharesHeld: "45.0%",
      investmentPortfolio: "0.1%",
      listed: false,
      description: "Iona Star is a venture capital fund focused on investing in early-stage tech companies, leveraging AI and data to drive innovation and growth.",
      image: "/companies/iona-star.png",
      website: "https://www.ionastar.com"
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
                <div className="relative h-48">
                  <Image
                    src={company.image}
                    alt={company.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-castelnau-dark-green mb-2">{company.name}</h3>
                  <div className="flex justify-between text-sm text-gray-600 mb-4">
                    <span>Shares held: {company.sharesHeld}</span>
                    <span>Investment Portfolio: {company.investmentPortfolio}</span>
                    <span className={company.listed ? "text-green-600" : "text-gray-600"}>
                      {company.listed ? "Listed" : "Not Listed"}
                    </span>
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
