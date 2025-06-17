import React from 'react';
import Image from 'next/image';
import { Video } from '@/types/library';
import { Play } from 'lucide-react';

interface VideoCardProps {
  video: Video;
  onPlay: (video: Video) => void;
}

const VideoCard = ({ video, onPlay }: VideoCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row hover:shadow-xl transition-shadow">
      <div className="relative md:w-2/5 h-48">
        <Image
          src={video.thumbnail}
          alt={video.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/20 transition-colors cursor-pointer" onClick={() => onPlay(video)}>
          <div className="h-16 w-16 rounded-full bg-castelnau-green/80 flex items-center justify-center transform transition-transform hover:scale-110">
            <Play className="h-8 w-8 text-white ml-1" />
          </div>
        </div>
      </div>
      <div className="p-6 flex-1">
        <span className="inline-block px-3 py-1 bg-castelnau-green/10 text-castelnau-green text-xs font-medium rounded-full mb-3">
          {video.category}
        </span>
        <h3 className="text-xl font-bold text-castelnau-darkgreen mb-2">{video.title}</h3>
        <p className="text-gray-600 mb-4">{video.description}</p>
        <div className="flex items-center text-sm text-gray-500">
          <span>{video.duration}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

