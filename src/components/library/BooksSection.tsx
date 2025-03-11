
import React from 'react';
import BookCard from './BookCard';
import { Book } from '@/types/library';

interface BooksSectionProps {
  filteredBooks: Book[];
  flippedBookId: number | null;
  toggleFlip: (id: number) => void;
  openBookSummary: (book: Book, e: React.MouseEvent) => void;
}

const BooksSection = ({ 
  filteredBooks, 
  flippedBookId, 
  toggleFlip, 
  openBookSummary 
}: BooksSectionProps) => {
  return (
    <div className="mb-20 animate-fade-in">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
        {filteredBooks.map((book) => (
          <BookCard 
            key={book.id}
            book={book}
            flippedBookId={flippedBookId}
            toggleFlip={toggleFlip}
            openBookSummary={openBookSummary}
          />
        ))}
      </div>
      
      {filteredBooks.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No books found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default BooksSection;
