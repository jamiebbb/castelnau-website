
import React from 'react';
import PodcastCard from './PodcastCard';
import { Podcast } from '@/types/library';

interface PodcastsSectionProps {
  filteredPodcasts: Podcast[];
}

const PodcastsSection = ({ filteredPodcasts }: PodcastsSectionProps) => {
  return (
    <div className="animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        {filteredPodcasts.map((podcast) => (
          <PodcastCard key={podcast.id} podcast={podcast} />
        ))}
      </div>
      
      {filteredPodcasts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No podcasts found in this category.</p>
        </div>
      )}
      
      <div className="mt-16 bg-gradient-to-r from-castelnau-darkgreen/5 to-castelnau-green/5 p-8 rounded-lg border border-castelnau-green/10">
        <h5 className="text-2xl font-serif font-bold text-castelnau-green mb-4">Subscribe to Our Investment Insights</h5>
        <p className="text-gray-700 mb-6">
          Receive our latest podcasts, articles, and investment perspectives delivered directly to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="flex-grow px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-castelnau-green/50"
          />
          <button className="px-8 py-3 bg-gradient-to-r from-castelnau-darkgreen to-castelnau-green text-white rounded font-medium hover:shadow-md transition-all">
            Subscribe
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-3">
          By subscribing, you agree to receive marketing communications from Castelnau Group. You can unsubscribe at any time.
        </p>
      </div>
    </div>
  );
};

export default PodcastsSection;
