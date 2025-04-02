import React from 'react';
import Image from 'next/image';
import { BookOpen } from "lucide-react";
import { Book } from '@/types/library';

interface BookCardProps {
  book: Book;
  flippedBookId: number | null;
  toggleFlip: (id: number) => void;
  openBookSummary: (book: Book, e: React.MouseEvent) => void;
}

const BookCard = ({ book, flippedBookId, toggleFlip, openBookSummary }: BookCardProps) => {
  return (
    <div 
      className="perspective-1000 cursor-pointer group h-96"
      onClick={() => toggleFlip(book.id)}
      onMouseEnter={() => toggleFlip(book.id)}
      onMouseLeave={() => flippedBookId === book.id && toggleFlip(book.id)}
    >
      <div className={`relative w-full h-full transition-all duration-500 transform-style-3d hover:shadow-xl ${flippedBookId === book.id ? 'rotate-y-180' : 'group-hover:animate-book-bounce'}`}>
        {/* Front of book (cover) */}
        <div className="absolute w-full h-full backface-hidden shadow-lg rounded-md overflow-hidden">
          <div className="relative h-48">
            <Image
              src={`${process.env.NODE_ENV === 'production' ? '/castelnau-website' : ''}${book.coverImg}`}
              alt={book.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <h4 className="text-white font-bold">{book.title}</h4>
            <p className="text-white/80 text-sm">{book.author}</p>
          </div>
        </div>
        
        {/* Back of book (description) */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-gradient-to-b from-castelnau-cream to-white p-6 rounded-md shadow-lg flex flex-col">
          <h4 className="text-xl font-bold text-castelnau-green mb-2">{book.title}</h4>
          <p className="text-gray-600 mb-2">by {book.author}</p>
          <span className="inline-block px-3 py-1 bg-castelnau-green/10 text-castelnau-green text-xs font-medium rounded-full mb-4">
            {book.category}
          </span>
          <p className="text-gray-700 flex-grow overflow-y-auto">{book.description}</p>
          <button 
            className="mt-4 text-sm bg-castelnau-green text-white py-2 px-4 rounded hover:bg-castelnau-green/90 transition-colors flex items-center justify-center gap-2"
            onClick={(e) => openBookSummary(book, e)}
          >
            <BookOpen className="h-4 w-4" />
            Read Summary
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
