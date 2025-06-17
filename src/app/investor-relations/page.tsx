'use client';

import React from 'react';
import PageHero from '@/components/common/PageHero';
import StockPriceDisplay from '@/components/StockPriceDisplay';
import DocumentList from '@/components/investor/DocumentList';
import { SharePriceGraph } from '@/components/investor/SharePriceGraph';
import { RegulatoryDocuments } from '@/components/investor/RegulatoryDocuments';
import { Factsheets } from '@/components/investor/Factsheets';
import { RNSFeed } from '@/components/investor/RNSFeed';

export default function InvestorRelationsPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        title="Investor Relations"
        description="Access key information, financial reports, and updates for Castelnau Group Limited shareholders."
      />

      <div className="container mx-auto px-4 py-12">
        {/* Share Price Section */}
        <div id="share-price" className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-8">
            <div className="bg-gray-900 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Current Share Price</h2>
              <StockPriceDisplay />
            </div>
            <SharePriceGraph />
          </div>
          <div className="space-y-8">
            <DocumentList />
          </div>
        </div>

        {/* Regulatory Documents and Factsheets */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div id="regulatory-documents">
            <RegulatoryDocuments />
          </div>
          <div id="factsheets">
            <Factsheets />
          </div>
        </div>

        {/* RNS Feed */}
        <div id="rns" className="mb-12">
          <RNSFeed />
        </div>
      </div>
    </div>
  );
}
