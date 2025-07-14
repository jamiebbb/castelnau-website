'use client';

import React from 'react';
import PageHero from '@/components/common/PageHero';
import StockPriceDisplay from '@/components/StockPriceDisplay';
import DocumentList from '@/components/investor/DocumentList';
import { SharePriceGraph } from '@/components/investor/SharePriceGraph';
import { RegulatoryDocuments } from '@/components/investor/RegulatoryDocuments';
import { Factsheets } from '@/components/investor/Factsheets';
import { RNSFeed } from '@/components/investor/RNSFeed';
import { TrendingUp, FileText, Bell, BarChart3 } from 'lucide-react';

export default function InvestorRelationsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        title="Investor Relations"
        description="Access key information, financial reports, and updates for Castelnau Group Limited shareholders and investors."
      />

      <div className="container mx-auto px-4 py-8">
        {/* Key Metrics Banner */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gradient-to-br from-castelnau-green to-castelnau-light-green text-white rounded-lg p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-white/80">Current Share Price</p>
                <p className="text-2xl font-bold text-white">82.00p</p>
                <p className="text-sm text-white/80 flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +2.5%
                </p>
              </div>
              <BarChart3 className="h-8 w-8 text-castelnau-gold" />
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-castelnau-green to-castelnau-light-green text-white rounded-lg p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-white/80">Market Cap</p>
                <p className="text-2xl font-bold text-white">£272M</p>
                <p className="text-sm text-white/70 mt-1">332.45M shares</p>
              </div>
              <TrendingUp className="h-8 w-8 text-castelnau-gold" />
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-castelnau-green to-castelnau-light-green text-white rounded-lg p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-white/80">NAV per Share</p>
                <p className="text-2xl font-bold text-white">£1.00</p>
                <p className="text-sm text-white/80 mt-1">As of 31/05/2025</p>
              </div>
              <FileText className="h-8 w-8 text-castelnau-gold" />
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-castelnau-green to-castelnau-light-green text-white rounded-lg p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-white/80">Latest RNS</p>
                <p className="text-lg font-semibold text-white">AGM Notice</p>
                <p className="text-sm text-white/70 mt-1">2 days ago</p>
              </div>
              <Bell className="h-8 w-8 text-castelnau-gold" />
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Share Price Chart - Takes 2 columns */}
          <div className="lg:col-span-2">
            <SharePriceGraph />
          </div>
          
          {/* Recent Documents - Takes 1 column */}
          <div>
            <DocumentList />
          </div>
        </div>

        {/* Reports and Factsheets Section */}
        <div id="reports-factsheets" className="bg-white rounded-lg shadow-sm border mb-8">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Reports and Factsheets</h2>
            <p className="text-sm text-gray-600 mt-1">Annual reports, interim results, and quarterly/monthly factsheets</p>
          </div>
          <div className="p-6">
            <Factsheets />
          </div>
        </div>

        {/* RNS Feed Section */}
        <div id="rns-feed" className="bg-white rounded-lg shadow-sm border mb-8 p-6">
          <RNSFeed />
        </div>

        {/* Regulatory Documents Section */}
        <div id="regulatory-documents" className="bg-white rounded-lg shadow-sm border p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Regulatory Documents</h2>
            <p className="text-sm text-gray-600 mt-1">Additional regulatory filings and compliance documents</p>
          </div>
          <RegulatoryDocuments />
        </div>
      </div>
    </div>
  );
}
