
import React from 'react';
import MainLayout from '@/layouts/MainLayout';

const ExploreTheGroup = () => {
  return (
    <MainLayout>
      <section className="page-hero bg-gradient-to-r from-castelnau-darkgreen to-castelnau-green">
        <div className="container mx-auto px-4">
          <h1 className="page-title">Explore The Group</h1>
          <div className="h-1 bg-white w-36"></div>
        </div>
        
        <div className="absolute bottom-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150" className="w-full">
            <path 
              fill="#FFFFFF" 
              fillOpacity="1" 
              d="M0,96L80,85.3C160,75,320,53,480,64C640,75,800,117,960,122.7C1120,128,1280,96,1360,80L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>
      
      <section className="page-content">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-serif font-bold text-castelnau-green mb-6">Our Portfolio Companies</h2>
            <p className="text-lg text-gray-700">
              Castelnau Group is proud to be partnered with a diverse portfolio of exceptional businesses. 
              Each company brings unique value and expertise to our group, contributing to our long-term vision 
              of sustainable growth and innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
              <div className="mb-6">
                <h3 className="text-2xl font-serif font-bold text-castelnau-green mb-2">Stanley Gibbons</h3>
                <p className="text-sm text-gray-500 uppercase font-medium">Stamp Collecting & Philately</p>
              </div>
              <p className="text-gray-700 mb-6">
                The world's longest established rare stamp merchant, offering authentication services, retail sales, 
                auctions, and investment products since 1856.
              </p>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Ownership Stake</p>
                  <p className="font-bold text-castelnau-green">58.1%</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
              <div className="mb-6">
                <h3 className="text-2xl font-serif font-bold text-castelnau-green mb-2">Hornby</h3>
                <p className="text-sm text-gray-500 uppercase font-medium">Model Railways & Collectibles</p>
              </div>
              <p className="text-gray-700 mb-6">
                A leading international hobby products group, specializing in model railways, model cars, and iconic 
                brands including Scalextric, Airfix, and Corgi.
              </p>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Ownership Stake</p>
                  <p className="font-bold text-castelnau-green">42.9%</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
              <div className="mb-6">
                <h3 className="text-2xl font-serif font-bold text-castelnau-green mb-2">Dignity</h3>
                <p className="text-sm text-gray-500 uppercase font-medium">Funeral Services</p>
              </div>
              <p className="text-gray-700 mb-6">
                One of the UK's leading providers of funeral-related services, offering caring and professional 
                funeral services across the country.
              </p>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Ownership Stake</p>
                  <p className="font-bold text-castelnau-green">29.3%</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
              <div className="mb-6">
                <h3 className="text-2xl font-serif font-bold text-castelnau-green mb-2">Rawnet</h3>
                <p className="text-sm text-gray-500 uppercase font-medium">Digital Agency</p>
              </div>
              <p className="text-gray-700 mb-6">
                A strategic digital agency delivering innovative web solutions and digital transformation for 
                ambitious organizations.
              </p>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Strategic Partnership</p>
                  <p className="font-bold text-castelnau-green">Key Partner</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
              <div className="mb-6">
                <h3 className="text-2xl font-serif font-bold text-castelnau-green mb-2">Ocula</h3>
                <p className="text-sm text-gray-500 uppercase font-medium">Technology Solutions</p>
              </div>
              <p className="text-gray-700 mb-6">
                Innovative technology solutions provider specializing in digital transformation and software 
                development services.
              </p>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Investment Type</p>
                  <p className="font-bold text-castelnau-green">Strategic Investment</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
              <div className="mb-6">
                <h3 className="text-2xl font-serif font-bold text-castelnau-green mb-2">Cambium</h3>
                <p className="text-sm text-gray-500 uppercase font-medium">Asset Management</p>
              </div>
              <p className="text-gray-700 mb-6">
                Specialized asset management firm focusing on sustainable and long-term investment strategies.
              </p>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Partnership Status</p>
                  <p className="font-bold text-castelnau-green">Strategic Alliance</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
              <div className="mb-6">
                <h3 className="text-2xl font-serif font-bold text-castelnau-green mb-2">Iona Star</h3>
                <p className="text-sm text-gray-500 uppercase font-medium">Maritime Services</p>
              </div>
              <p className="text-gray-700 mb-6">
                Maritime services provider specializing in offshore support and specialized vessel operations.
              </p>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Investment Type</p>
                  <p className="font-bold text-castelnau-green">Strategic Partner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ExploreTheGroup;
