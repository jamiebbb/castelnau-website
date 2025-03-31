import React from 'react';
import StockPriceDisplay from '@/components/StockPriceDisplay';
import FinancialMetrics from '@/components/investor/FinancialMetrics';
import DocumentList from '@/components/investor/DocumentList';

export default function InvestorRelationsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Investor Relations</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <StockPriceDisplay />
        <FinancialMetrics />
      </div>

      <div className="space-y-8">
        <DocumentList />
      </div>
    </div>
  );
}
