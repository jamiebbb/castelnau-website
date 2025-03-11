
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import WavyDivider from '@/components/WavyDivider';

const News = () => {
  const newsItems = [
    {
      title: "Castelnau Group Announces Q4 2024 Results",
      date: "March 15, 2024",
      excerpt: "Strong performance across portfolio companies with sustained growth in key metrics.",
      link: "#"
    },
    {
      title: "New Strategic Investment in Tech Sector",
      date: "March 1, 2024",
      excerpt: "Castelnau Group expands portfolio with significant investment in emerging technology company.",
      link: "#"
    },
    {
      title: "Annual Investor Conference Announcement",
      date: "February 20, 2024",
      excerpt: "Join us for our annual investor conference, featuring insights from industry leaders and portfolio companies.",
      link: "#"
    },
    {
      title: "Castelnau Group Leadership Speaks at Financial Summit",
      date: "February 5, 2024",
      excerpt: "Our executive team shared insights on long-term investment strategies at the Global Financial Summit.",
      link: "#"
    },
    {
      title: "Portfolio Company Spotlight: Growth Milestones",
      date: "January 22, 2024",
      excerpt: "Highlighting exceptional performance and key achievements across our portfolio companies.",
      link: "#"
    },
    {
      title: "Castelnau Group Annual Report Published",
      date: "January 10, 2024",
      excerpt: "Our comprehensive annual report details performance metrics, strategic initiatives, and future outlook.",
      link: "#"
    }
  ];

  return (
    <MainLayout>
      <section className="bg-gradient-to-r from-castelnau-darkgreen via-castelnau-green to-castelnau-lightgreen text-white pt-24 pb-48 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold max-w-4xl leading-tight mb-10">
            Latest News
          </h1>
          <p className="text-xl max-w-3xl text-white/90 mb-8 font-serif">
            Stay up to date with the latest announcements, insights, and updates from Castelnau Group.
          </p>
          <div className="h-1 bg-gradient-to-r from-castelnau-gold/70 to-castelnau-gold w-36"></div>
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
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {newsItems.map((item, index) => (
              <Card key={index} className="bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardContent className="p-6">
                  <p className="text-sm text-castelnau-green font-medium mb-2">{item.date}</p>
                  <h3 className="text-xl font-serif font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                  <Button variant="soft" className="w-full justify-between">
                    Read More <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default News;
