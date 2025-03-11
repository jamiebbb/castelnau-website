
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

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
    }
  ];

  return (
    <MainLayout>
      <div className="page-hero">
        <div className="container mx-auto px-4">
          <h1 className="page-title">Latest News</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Stay up to date with the latest announcements, insights, and updates from Castelnau Group.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-32 pb-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item, index) => (
            <Card key={index} className="bg-white p-6 shadow-lg card-hover">
              <p className="text-sm text-castelnau-green font-medium mb-2">{item.date}</p>
              <h3 className="text-xl font-serif font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.excerpt}</p>
              <Button variant="soft" className="w-full justify-between">
                Read More <ArrowRight className="h-4 w-4" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default News;
