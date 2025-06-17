import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Headphones } from 'lucide-react';

interface PodcastCoverProps {
  title: string;
  host: string;
  category: string;
  className?: string;
  coverImage?: string;
  duration?: string;
}

const PodcastCover: React.FC<PodcastCoverProps> = ({ 
  title, 
  host, 
  category, 
  className = '',
  coverImage,
  duration = '30 min'
}) => {
  return (
    <motion.div 
      className={`relative bg-gradient-to-br from-castelnau-dark-green to-castelnau-green rounded-lg shadow-xl overflow-hidden ${className}`}
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {coverImage ? (
        <Image
          src={coverImage}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          unoptimized
          quality={100}
        />
      ) : (
        <div className="absolute inset-0 p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Headphones className="w-5 h-5 text-white" />
              <span className="text-white/80 text-xs">{duration}</span>
            </div>
            <h3 className="text-white font-serif font-bold text-lg mb-2 line-clamp-3">
              {title}
            </h3>
            <p className="text-white/80 text-sm mb-1">
              {host}
            </p>
          </div>
          <div className="text-white/60 text-xs">
            {category}
          </div>
        </div>
      )}
      
      {/* Overlay for image-based covers */}
      {coverImage && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end">
          <div className="flex items-center gap-2 mb-3">
            <Headphones className="w-5 h-5 text-white" />
            <span className="text-white/80 text-xs">{duration}</span>
          </div>
          <h3 className="text-white font-serif font-bold text-lg mb-2 line-clamp-3">
            {title}
          </h3>
          <p className="text-white/80 text-sm mb-1">
            {host}
          </p>
          <div className="text-white/60 text-xs">
            {category}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default PodcastCover; 