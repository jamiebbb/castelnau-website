'use client';

import React, { useState } from 'react';
import PageHero from '@/components/common/PageHero';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  coverImage: string;
  category: string;
  publishDate: string;
  shortDescription: string;
}

const CastelnauLibrary = () => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const books: Book[] = [
    {
      id: '1',
      title: 'The Psychology of Money',
      author: 'Morgan Housel',
      description: 'Timeless lessons on wealth, greed, and happiness. The Psychology of Money explores the complex relationship between money and human behavior, offering insights into how we think about and handle financial decisions.',
      coverImage: '/books/psychology-of-money.jpg',
      category: 'Personal Finance',
      publishDate: '2020',
      shortDescription: 'Timeless lessons on wealth, greed, and happiness'
    },
    {
      id: '2',
      title: 'Thinking in Bets',
      author: 'Annie Duke',
      description: 'Making Smarter Decisions When You Don\'t Have All the Facts. A former World Series of Poker champion turns decision-making into a science, showing how to embrace uncertainty and make better choices.',
      coverImage: '/books/thinking-in-bets.jpg',
      category: 'Decision Making',
      publishDate: '2018',
      shortDescription: 'Making Smarter Decisions When You Don\'t Have All the Facts'
    },
    // Add more books here
  ];

  return (
    <>
      <PageHero 
        title="Castelnau Library"
        description="Explore our curated collection of books and resources that have shaped our investment philosophy"
      />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-castelnau-green mb-8">
                Our Library Collection
              </h2>
              <p className="text-gray-700 mb-8">
                Discover our carefully curated collection of books that have influenced our investment philosophy and approach.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {books.map((book) => (
                  <div 
                    key={book.id}
                    className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                    onClick={() => setSelectedBook(book)}
                  >
                    <div className="aspect-[3/4] relative overflow-hidden">
                      <img 
                        src={book.coverImage} 
                        alt={book.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-serif font-bold text-castelnau-green mb-2">
                        {book.title}
                      </h3>
                      <p className="text-gray-600 mb-2">{book.author}</p>
                      <p className="text-sm text-gray-500 mb-2">{book.category}</p>
                      <p className="text-sm text-gray-700 line-clamp-2">
                        {book.shortDescription}
                      </p>
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-castelnau-green mb-8">
                Stay Updated
              </h2>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-serif font-bold text-castelnau-green mb-4">
                  Subscribe to Our Newsletter
                </h3>
                <p className="text-gray-700 mb-6">
                  Receive regular updates on our latest research, insights, and market analysis directly in your inbox.
                </p>
                <form className="flex gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-castelnau-green focus:border-castelnau-green"
                  />
                  <button
                    type="submit"
                    className="bg-castelnau-green text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={!!selectedBook} onOpenChange={() => setSelectedBook(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-serif font-bold text-castelnau-green">
              {selectedBook?.title}
            </DialogTitle>
          </DialogHeader>
          {selectedBook && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="aspect-[3/4] relative">
                <img 
                  src={selectedBook.coverImage} 
                  alt={selectedBook.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div>
                <p className="text-xl text-gray-600 mb-4">{selectedBook.author}</p>
                <p className="text-sm text-gray-500 mb-4">{selectedBook.category} • {selectedBook.publishDate}</p>
                <p className="text-gray-700">{selectedBook.description}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CastelnauLibrary; 