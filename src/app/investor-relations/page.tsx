'use client';

import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Document, fetchDocuments } from '@/utils/documentUtils';
import PageHero from '@/components/common/PageHero';
import FinancialMetrics from '@/components/investor/FinancialMetrics';
import DocumentList from '@/components/investor/DocumentList';
import useScrollToSection from '@/hooks/useScrollToSection';

export default function InvestorRelationsPage() {
  const { data: documents = [], isLoading } = useQuery({
    queryKey: ['documents'],
    queryFn: fetchDocuments
  });
  
  const { scrollToElement } = useScrollToSection({ offset: 120 });

  useEffect(() => {
    // Handle hash navigation when page loads or hash changes
    if (window.location.hash) {
      const targetId = window.location.hash.substring(1);
      scrollToElement(targetId);
    }
  }, [scrollToElement]);

  const getDocumentsByCategory = (category: Document['category']) => {
    return documents.filter(doc => doc.category === category);
  };

  return (
    <>
      <PageHero 
        title="Investor Relations"
        description="Access financial information, regulatory documents, and stay updated with our latest news"
      />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FinancialMetrics />
            <DocumentList 
              documents={getDocumentsByCategory('regulatory')} 
              title="Regulatory Documents" 
              id="regulatory-documents"
            />
            <DocumentList 
              documents={getDocumentsByCategory('factsheet')} 
              title="Factsheets" 
              id="factsheets"
            />
            <DocumentList 
              documents={getDocumentsByCategory('rns')} 
              title="RNS Announcements" 
              id="rns"
            />
          </div>
        </div>
      </section>
    </>
  );
}
