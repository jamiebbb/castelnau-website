import React from 'react';
import MainLayout from '@/layouts/MainLayout';

const ExploreTheGroup = () => {
  return (
    <div className="container mx-auto px-4 py-6 md:py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Explore The Group</h1>
      <p className="text-base md:text-lg mb-6 text-gray-700 max-w-3xl">
        Discover our group companies and how they contribute to our overall vision and strategy.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <div className="p-4 md:p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
          <h2 className="text-lg md:text-xl font-semibold mb-2">Company 1</h2>
          <p className="text-sm md:text-base text-gray-600">Description of the first company in the group.</p>
        </div>
        <div className="p-4 md:p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
          <h2 className="text-lg md:text-xl font-semibold mb-2">Company 2</h2>
          <p className="text-sm md:text-base text-gray-600">Description of the second company in the group.</p>
        </div>
        <div className="p-4 md:p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
          <h2 className="text-lg md:text-xl font-semibold mb-2">Company 3</h2>
          <p className="text-sm md:text-base text-gray-600">Description of the third company in the group.</p>
        </div>
      </div>
    </div>
  );
};

export default ExploreTheGroup;
