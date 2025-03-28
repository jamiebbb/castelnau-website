import React from 'react';
import { motion } from 'framer-motion';

interface BookCoverProps {
  title: string;
  author: string;
  category: string;
  className?: string;
}

const BookCover: React.FC<BookCoverProps> = ({ title, author, category, className = '' }) => {
  return (
    <motion.div 
      className={`relative bg-gradient-to-br from-castelnau-dark-green to-castelnau-green rounded-lg shadow-xl ${className}`}
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-white font-serif font-bold text-lg mb-2 line-clamp-3">
            {title}
          </h3>
          <p className="text-white/80 text-sm mb-1">
            {author}
          </p>
        </div>
        <div className="text-white/60 text-xs">
          {category}
        </div>
      </div>
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      <div className="absolute inset-0 border border-white/10 rounded-lg" />
    </motion.div>
  );
};

export default BookCover; 