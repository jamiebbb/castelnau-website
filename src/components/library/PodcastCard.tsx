import React from 'react';
import Image from 'next/image';
import { Podcast } from '@/types/library';

interface PodcastCardProps {
  podcast: Podcast;
}

const PodcastCard = ({ podcast }: PodcastCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-xl transition-shadow">
      <div className="relative h-48">
        <Image
          src={`${process.env.NODE_ENV === 'production' ? '/castelnau-website' : ''}${podcast.thumbnail}`}
          alt={podcast.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-4">
          <span className="inline-block px-3 py-1 bg-castelnau-gold/80 text-white text-xs font-medium rounded-full mb-2">
            {podcast.category}
          </span>
          <h5 className="text-xl font-bold text-white">{podcast.title}</h5>
          <p className="text-white/80">Hosted by {podcast.host}</p>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-4">{podcast.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex space-x-3">
            <button className="p-3 rounded-full bg-castelnau-green text-white hover:bg-castelnau-green/90 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="p-3 rounded-full bg-castelnau-gold/80 text-white hover:bg-castelnau-gold transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>
          </div>
          <span className="text-sm px-3 py-1 rounded-full bg-gray-100 text-gray-600">{podcast.duration}</span>
        </div>
      </div>
    </div>
  );
};

export default PodcastCard;
