'use client';

import React, { useState } from 'react';
import PageHero from '@/components/common/PageHero';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Image from 'next/image';
import CompanyModal from '@/components/common/CompanyModal';
import { motion } from 'framer-motion';
import { TrendingUp, Target, Award, Users, DollarSign, BarChart3, Building2, Sparkles } from 'lucide-react';

const ExploreTheGroup = () => {
  const [selectedCompany, setSelectedCompany] = useState<any>(null);

  const companies = [
    {
      name: "Stanley Gibbons",
      sharesPercentage: "64.1%",
      portfolioPercentage: "0.2%",
      description: "Leading philatelic auctioneer and dealer, specializing in rare stamps and collectibles.",
      website: "https://www.stanleygibbons.com",
      logo: `${process.env.NODE_ENV === 'production' ? '/castelnau-website' : ''}/company-logos/stanley-gibbons.svg`,
      sector: "Collectibles & Auctions",
      founded: "1856",
      headquarters: "London, UK"
    },
    {
      name: "Hornby",
      sharesPercentage: "54.4%",
      portfolioPercentage: "5.0%",
      description: "Iconic British model railway and hobby products manufacturer.",
      website: "https://www.hornby.com",
      logo: `${process.env.NODE_ENV === 'production' ? '/castelnau-website' : ''}/company-logos/logo_hornby.png`,
      sector: "Consumer Products",
      founded: "1901",
      headquarters: "Kent, UK"
    },
    {
      name: "Dignity",
      sharesPercentage: "66.0%",
      portfolioPercentage: "83.2%",
      description: "Leading UK funeral services provider with a network of funeral homes and crematoria.",
      website: "https://www.dignityfunerals.co.uk",
      logo: `${process.env.NODE_ENV === 'production' ? '/castelnau-website' : ''}/company-logos/dignity.svg`,
      sector: "Essential Services",
      founded: "1994",
      headquarters: "Sutton Coldfield, UK"
    },
    {
      name: "Iona Star",
      sharesPercentage: "45.0%",
      portfolioPercentage: "0.1%",
      description: "Investment holding company with interests in technology and digital assets.",
      website: "https://ionastar.com",
      logo: `${process.env.NODE_ENV === 'production' ? '/castelnau-website' : ''}/company-logos/logo_iona_star.png`,
      sector: "Investment Holdings",
      founded: "2020",
      headquarters: "London, UK"
    },
    {
      name: "Rawnet",
      sharesPercentage: "100%",
      portfolioPercentage: "0.4%",
      description: "Digital agency specializing in web development and digital solutions.",
      website: "https://www.rawnet.com",
      logo: `${process.env.NODE_ENV === 'production' ? '/castelnau-website' : ''}/company-logos/logo_rawnet.png`,
      sector: "Digital Services",
      founded: "2001",
      headquarters: "Sutton Coldfield, UK"
    },
    {
      name: "Ocula",
      sharesPercentage: "41.2%",
      portfolioPercentage: "1.3%",
      description: "AI-powered healthcare technology company focusing on early disease detection.",
      website: "https://ocula.ai",
      logo: `${process.env.NODE_ENV === 'production' ? '/castelnau-website' : ''}/company-logos/logo_ocula.png`,
      sector: "Healthcare Technology",
      founded: "2018",
      headquarters: "London, UK"
    },
    {
      name: "Cambium",
      sharesPercentage: "90.3%",
      portfolioPercentage: "3.0%",
      description: "Sustainable materials technology company developing eco-friendly alternatives.",
      website: "https://cambium.com",
      logo: `${process.env.NODE_ENV === 'production' ? '/castelnau-website' : ''}/company-logos/logo_cambium.png`,
      sector: "Sustainable Technology",
      founded: "2019",
      headquarters: "Birmingham, UK"
    },
    {
      name: "Silverwood",
      sharesPercentage: "29.9%",
      portfolioPercentage: "1.3%",
      description: "Premium spirits and beverage company with a focus on craft production.",
      website: "https://silverwoodspirits.com",
      logo: `${process.env.NODE_ENV === 'production' ? '/castelnau-website' : ''}/company-logos/logo_silverwood.png`,
      sector: "Premium Beverages",
      founded: "2015",
      headquarters: "Scotland, UK"
    }
  ];

  const stats = [
    { icon: Building2, label: "Portfolio Companies", value: "8", description: "Active investments" },
    { icon: TrendingUp, label: "Total Portfolio Value", value: "£272M", description: "Market capitalization" },
    { icon: Target, label: "Strategic Focus", value: "100%", description: "Long-term value creation" },
    { icon: Award, label: "Years Experience", value: "25+", description: "Combined leadership" }
  ];

  const investmentPrinciples = [
    {
      icon: Sparkles,
      title: "Permanent Capital Mindset",
      description: "We invest for the long term, treating our portfolio companies as permanent family members rather than temporary investments."
    },
    {
      icon: Users,
      title: "Partnership Approach",
      description: "We work collaboratively with management teams, providing strategic guidance and operational support."
    },
    {
      icon: DollarSign,
      title: "Value Creation Focus",
      description: "Our patient capital allows us to make rational, long-term decisions that drive sustainable growth."
    },
    {
      icon: BarChart3,
      title: "Diversified Excellence",
      description: "Our portfolio spans multiple sectors, from traditional industries to cutting-edge technology."
    }
  ];

  return (
    <main className="bg-white">
      <PageHero 
        title="Explore the Group"
        description="Discover our portfolio of exceptional businesses built for the long term"
      />

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-castelnau-dark-green to-castelnau-green">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-white/20 p-4 rounded-full">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-white/80">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Philosophy Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-serif font-bold text-castelnau-dark-green mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Investment Philosophy
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Like a well-functioning family, our permanence allows us to be patient and make rational 
              long-term decisions about supporting and nurturing exceptional businesses.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {investmentPrinciples.map((principle, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-castelnau-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <principle.icon className="h-8 w-8 text-castelnau-green" />
                </div>
                <h3 className="text-xl font-bold text-castelnau-dark-green mb-4">{principle.title}</h3>
                <p className="text-gray-600 leading-relaxed">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Companies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-serif font-bold text-castelnau-dark-green mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Our Portfolio Family
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Meet the exceptional companies that form the heart of our investment strategy. 
              Each represents a unique opportunity for sustainable, long-term value creation.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companies.map((company, index) => (
              <motion.div 
                key={index} 
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                {/* Company Logo Section */}
                <div className="relative h-40 bg-gradient-to-br from-gray-50 to-gray-100 p-8 flex items-center justify-center group-hover:from-castelnau-green/5 group-hover:to-castelnau-light-green/5 transition-all duration-500">
                  <div className="relative w-full h-full">
                    <Image
                      src={company.logo}
                      alt={company.name}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index < 6}
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
                  <div className="absolute top-4 right-4">
                    <div className="bg-castelnau-gold text-white text-xs px-3 py-1 rounded-full font-medium">
                      {company.sector}
                    </div>
                  </div>
                </div>

                {/* Company Details */}
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-castelnau-dark-green group-hover:text-castelnau-green transition-colors duration-300">
                      {company.name}
                    </h3>
                    <div className="text-sm text-gray-500">
                      Est. {company.founded}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-castelnau-green">{company.sharesPercentage}</div>
                      <div className="text-xs text-gray-600">Equity Held</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-castelnau-green">{company.portfolioPercentage}</div>
                      <div className="text-xs text-gray-600">Portfolio Weight</div>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">{company.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <span>{company.headquarters}</span>
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-castelnau-green group-hover:text-white group-hover:border-castelnau-green transition-all duration-300"
                    onClick={() => setSelectedCompany(company)}
                  >
                    Learn More
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-castelnau-dark-green via-castelnau-green to-castelnau-light-green">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold text-white mb-6">
              Discover Our Investment Approach
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Learn more about our shareholder information and investment philosophy.
            </p>
            <Link href="/investor-relations">
              <Button className="bg-castelnau-gold text-white hover:bg-castelnau-gold/90 text-lg px-8 py-4 rounded-full">
                Investor Relations
              </Button>
            </Link>
          </motion.div>
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
