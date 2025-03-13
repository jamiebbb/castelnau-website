'use client';

import React from "react";
import MainLayout from '@/layouts/MainLayout';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-6xl font-serif font-bold text-castelnau-green mb-4">404</h1>
        <h2 className="text-2xl font-serif text-gray-800 mb-6">Page Not Found</h2>
        <p className="text-gray-600 mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <Link 
          href="/" 
          className="inline-block bg-castelnau-green text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default function NotFoundPage() {
  return (
    <MainLayout>
      <NotFound />
    </MainLayout>
  );
}
