'use client';

import React, { useState } from 'react';
import { Play, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HomeVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Discover Castelnau Group
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Watch our story unfold as we build lasting value through strategic investments 
            and operational excellence across our diverse portfolio.
          </p>
          
          <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl">
            {!isPlaying ? (
              // Video Thumbnail/Placeholder
              <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <div className="absolute inset-0 bg-black/20" />
                <div className="text-center z-10">
                  <Button
                    onClick={handlePlayVideo}
                    className="bg-castelnau-green hover:bg-castelnau-green/90 text-black rounded-full p-6 transition-all duration-300 hover:scale-105"
                    size="lg"
                  >
                    <Play className="h-8 w-8 fill-current" />
                  </Button>
                  <p className="text-white mt-4 text-lg font-medium">
                    Watch Our Story
                  </p>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-8 left-8 text-white/30">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
              </div>
            ) : (
              // Actual Video
              <div className="relative aspect-video">
                <iframe
                  title="Castelnau Group Introduction"
                  src="https://player.vimeo.com/video/600364216?badge=0&autopause=0&player_id=0&app_id=58479&h=9ea18e8372&autoplay=1"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allowFullScreen
                  className="w-full h-full"
                />
                
                {/* Video Controls Overlay */}
                <div className="absolute bottom-4 right-4 flex space-x-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMuted(!isMuted)}
                    className="bg-black/50 hover:bg-black/70 text-white rounded-full"
                  >
                    {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
            )}
          </div>
          
          {/* Video Description */}
          <div className="mt-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Investment Philosophy</h3>
                <p className="text-gray-600 text-sm">
                  Learn about our disciplined approach to value creation and long-term growth.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Portfolio Excellence</h3>
                <p className="text-gray-600 text-sm">
                  Discover how we support our portfolio companies in achieving their potential.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Strategic Vision</h3>
                <p className="text-gray-600 text-sm">
                  Understand our commitment to building sustainable value for all stakeholders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeVideo; 