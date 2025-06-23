'use client';

import React, { useState } from 'react';
import PageHero from '@/components/common/PageHero';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { TrendingUp, Target, Award, Users, DollarSign, BarChart3, Building2, Sparkles } from 'lucide-react';

const ExploreTheGroup = () => {

  const companies = [
    {
      name: "Dignity",
      sharesPercentage: "66.0%",
      portfolioPercentage: "83.2%",
      description: "Leading UK end-of-life service provider with extensive funeral homes and crematoria network, offering personalised funeral planning, bereavement care, and innovative digital solutions through Farewill acquisition.",
      website: "https://www.dignityfunerals.co.uk",
      logo: `${process.env.NODE_ENV === 'production' ? '/castelnau-website' : ''}/company-logos/dignity.svg`,
      sector: "Essential Services",
      investedSince: "2018",
      slug: "dignity"
    },
    {
      name: "Hornby",
      sharesPercentage: "54.4%",
      portfolioPercentage: "5.0%",
      description: "Portfolio of heritage toy and collectible brands including Hornby model railways, Airfix plastic models, Scalextric slot cars, Corgi die-cast models, and Warlord Games tabletop gaming.",
      website: "https://www.hornby.com",
      logo: `${process.env.NODE_ENV === 'production' ? '/castelnau-website' : ''}/company-logos/logo_hornby.png`,
      sector: "Consumer Products",
      investedSince: "2017",
      slug: "hornby"
    },
    {
      name: "Cambium",
      sharesPercentage: "90.3%",
      portfolioPercentage: "3.0%",
      description: "Leading UK wedding gift list provider with brands including The Wedding Shop, Prezola, Rock My Wedding platform, and expanding into baby registries with LittleList.",
      website: "https://cambium.com",
      logo: `${process.env.NODE_ENV === 'production' ? '/castelnau-website' : ''}/company-logos/logo_cambium.png`,
      sector: "Wedding & Lifestyle",
      investedSince: "2002",
      slug: "cambium"
    },
    {
      name: "Ocula",
      sharesPercentage: "41.2%",
      portfolioPercentage: "1.3%",
      description: "AI-powered SaaS platform providing data analytics and growth insights for e-commerce businesses, serving clients including AO.com, Kansas City Chiefs, and Boots with AI-driven solutions.",
      website: "https://ocula.ai",
      logo: `${process.env.NODE_ENV === 'production' ? '/castelnau-website' : ''}/company-logos/logo_ocula.png`,
      sector: "AI & Technology",
      investedSince: "2021",
      slug: "ocula-technologies"
    },
    {
      name: "Silverwood",
      sharesPercentage: "29.9%",
      portfolioPercentage: "1.3%",
      description: "Premium consumer brand portfolio focused on beauty sector, featuring Balmond's natural skincare, Nailberry eco-friendly nail polish, Steamcream hydration products, and Cigarro men's cosmetics.",
      website: "https://silverwoodspirits.com",
      logo: `${process.env.NODE_ENV === 'production' ? '/castelnau-website' : ''}/company-logos/logo_silverwood.png`,
      sector: "Premium Beauty",
      investedSince: "2021",
      slug: "silverwood"
    },
    {
      name: "Rawnet",
      sharesPercentage: "100%",
      portfolioPercentage: "0.4%",
      description: "Digital marketing and software development agency providing strategic consultancy, brand development, product design, and traffic generation for long-term digital growth.",
      website: "https://www.rawnet.com",
      logo: `${process.env.NODE_ENV === 'production' ? '/castelnau-website' : ''}/company-logos/logo_rawnet.png`,
      sector: "Digital Services",
      investedSince: "2020",
      slug: "rawnet"
    },
    {
      name: "Stanley Gibbons",
      sharesPercentage: "64.1%",
      portfolioPercentage: "0.2%",
      description: "Heritage collectibles house encompassing Stanley Gibbons philately (Royal Warrant holder since 1914), Baldwins numismatics, and Baldwin's Bullion, expanding into multi-category auctions.",
      website: "https://www.stanleygibbons.com",
      logo: `${process.env.NODE_ENV === 'production' ? '/castelnau-website' : ''}/company-logos/stanley-gibbons.svg`,
      sector: "Collectibles & Heritage",
      investedSince: "2016",
      slug: "stanley-gibbons-baldwins"
    },
    {
      name: "Iona Star",
      sharesPercentage: "45.0%",
      portfolioPercentage: "0.1%",
      description: "Venture capital fund investing in disruptive early-stage AI and data companies across financial services, cybersecurity, life sciences, IoT, telecom, and energy sectors.",
      website: "https://ionastar.com",
      logo: `${process.env.NODE_ENV === 'production' ? '/castelnau-website' : ''}/company-logos/logo_iona_star.png`,
      sector: "Venture Capital",
      investedSince: "2024",
      slug: "iona-star"
    }
  ];

  const stats = [
    { icon: Building2, label: "Portfolio Companies", value: "8", description: "Active investments" },
    { icon: TrendingUp, label: "Total Portfolio Value", value: "£272M", description: "Market capitalization" },
    { icon: Users, label: "Employees", value: "> 3,500", description: "Across portfolio companies" },
    { icon: Award, label: "Upside to Intrinsic Value", value: "390%", description: "Based on £4.02 NAV" }
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
      <section className="py-16 bg-gradient-to-r from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center text-castelnau-dark-green"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-castelnau-green/20 p-4 rounded-full">
                    <stat.icon className="h-8 w-8 text-castelnau-green" />
                  </div>
                </div>
                <div className="text-3xl font-bold mb-2 text-castelnau-green">{stat.value}</div>
                <div className="text-lg font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
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
                      Invested since {company.investedSince}
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
                    <span>Invested since {company.investedSince}</span>
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-castelnau-green group-hover:text-white group-hover:border-castelnau-green transition-all duration-300"
                    onClick={() => window.location.href = `/explore-the-group/${company.slug}`}
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


    </main>
  );
};

export default ExploreTheGroup;

