'use client';

import React from 'react';
import PageHero from '@/components/common/PageHero';

interface LibraryItem {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  link: string;
}

const CastelnauLibrary = () => {
  const libraryItems: LibraryItem[] = [
    {
      id: '1',
      title: 'Investment Philosophy',
      description: 'Learn about our approach to investment management and value creation.',
      category: 'Investment Strategy',
      date: '2024-03-15',
      link: '/library/investment-philosophy'
    },
    {
      id: '2',
      title: 'Market Research Reports',
      description: 'Access our latest market research and analysis reports.',
      category: 'Research',
      date: '2024-03-10',
      link: '/library/market-research'
    },
    {
      id: '3',
      title: 'Case Studies',
      description: 'Explore detailed case studies of our investment successes.',
      category: 'Case Studies',
      date: '2024-03-05',
      link: '/library/case-studies'
    },
    {
      id: '4',
      title: 'Thought Leadership',
      description: 'Read our insights and perspectives on key market trends.',
      category: 'Insights',
      date: '2024-03-01',
      link: '/library/thought-leadership'
    }
  ];

  return (
    <>
      <PageHero 
        title="Castelnau Library"
        description="Access our comprehensive collection of resources and insights"
      />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Library Categories */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-castelnau-green mb-8">
                Library Categories
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {libraryItems.map((item) => (
                  <div key={item.id} className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-serif font-bold text-castelnau-green mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 mb-4">
                      {item.description}
                    </p>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>{item.category}</span>
                      <span>{item.date}</span>
                    </div>
                    <a
                      href={item.link}
                      className="mt-4 inline-block text-castelnau-green hover:text-opacity-80 transition-colors"
                    >
                      Explore →
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Content */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-castelnau-green mb-8">
                Featured Content
              </h2>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-serif font-bold text-castelnau-green mb-4">
                  Latest Market Insights
                </h3>
                <p className="text-gray-700 mb-6">
                  Stay informed with our latest market analysis and investment perspectives. Our team of experts provides regular updates on market trends, opportunities, and risks.
                </p>
                <a
                  href="/library/market-insights"
                  className="inline-block bg-castelnau-green text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors"
                >
                  View Latest Insights
                </a>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-castelnau-green mb-8">
                Stay Updated
              </h2>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-serif font-bold text-castelnau-green mb-4">
                  Subscribe to Our Newsletter
                </h3>
                <p className="text-gray-700 mb-6">
                  Receive regular updates on our latest research, insights, and market analysis directly in your inbox.
                </p>
                <form className="flex gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-castelnau-green focus:border-castelnau-green"
                  />
                  <button
                    type="submit"
                    className="bg-castelnau-green text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CastelnauLibrary; 