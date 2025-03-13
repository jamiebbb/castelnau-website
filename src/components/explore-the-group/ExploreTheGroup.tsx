
import React from 'react';
import MainLayout from '@/layouts/MainLayout';

const ExploreTheGroup = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Explore The Group</h1>
      <p className="mb-4">
        Discover our group companies and how they contribute to our overall vision and strategy.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Content will be added here */}
        <div className="p-4 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Company 1</h2>
          <p>Description of the first company in the group.</p>
        </div>
        <div className="p-4 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Company 2</h2>
          <p>Description of the second company in the group.</p>
        </div>
        <div className="p-4 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Company 3</h2>
          <p>Description of the third company in the group.</p>
        </div>
      </div>
    </div>
  );
};

export default ExploreTheGroup;
