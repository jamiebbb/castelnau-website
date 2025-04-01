import React from 'react';
import VideoCard from './VideoCard';
import { Video } from '@/types/library';

interface VideosSectionProps {
  filteredVideos: Video[];
}

const VideosSection = ({ filteredVideos }: VideosSectionProps) => {
  const handlePlay = (video: Video) => {
    // TODO: Implement video playback functionality
    console.log('Playing video:', video.title);
  };

  return (
    <div className="mb-20 animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        {filteredVideos.map((video) => (
          <VideoCard key={video.id} video={video} onPlay={handlePlay} />
        ))}
      </div>
      
      {filteredVideos.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No videos found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default VideosSection;
