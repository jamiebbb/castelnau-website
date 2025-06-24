'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Users, Target, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Description */}
          <div className="text-center mb-16">
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              We aim to do this by acquiring businesses with a competitive advantage at attractive prices. 
              Our structure helps us to clear away short-term pressures that inhibit value creation and 
              nurture rational long-term capital allocation frameworks.
            </p>
          </div>

          {/* Three Main Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* The Group */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl border border-green-200 hover:shadow-lg transition-all group">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-castelnau-green rounded-full flex items-center justify-center mr-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-castelnau-dark-green">The Group</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Take a look through our family of current holdings, all of which we consider permanent.
              </p>
              <Link 
                href="/explore-the-group"
                className="inline-flex items-center text-castelnau-green font-semibold hover:text-castelnau-dark-green transition-colors group-hover:translate-x-1 transform duration-200"
              >
                Explore Our Portfolio
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Who We Are */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl border border-green-200 hover:shadow-lg transition-all group">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-castelnau-green rounded-full flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-castelnau-dark-green">Who We Are</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Learn more about the team behind Castelnau Group; our mission, our transparent culture, 
                and importantly what our investors can expect from us.
              </p>
              <Link 
                href="/who-we-are"
                className="inline-flex items-center text-castelnau-green font-semibold hover:text-castelnau-dark-green transition-colors group-hover:translate-x-1 transform duration-200"
              >
                Read more
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* What We Do */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl border border-green-200 hover:shadow-lg transition-all group">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-castelnau-green rounded-full flex items-center justify-center mr-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-castelnau-dark-green">What We Do</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We exist to optimise shareholder value. We do this through our decisions when allocating 
                capital and optimising the capital structure.
              </p>
              <Link 
                href="/what-we-do"
                className="inline-flex items-center text-castelnau-green font-semibold hover:text-castelnau-dark-green transition-colors group-hover:translate-x-1 transform duration-200"
              >
                Read more
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Investor Relations Call-to-Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-castelnau-dark-green via-castelnau-green to-castelnau-light-green text-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Investor Relations</h3>
              <p className="text-lg mb-6 opacity-90">
                Discover more in our Shareholder information centre.
              </p>
              <Link 
                href="/investor-relations"
                className="inline-flex items-center bg-white text-castelnau-dark-green px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Click Here
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 