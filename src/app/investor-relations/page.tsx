'use client';

import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Document, fetchDocuments } from '@/utils/documentUtils';
import PageHero from '@/components/investor/PageHero';
import FinancialMetrics from '@/components/investor/FinancialMetrics';
import DocumentList from '@/components/investor/DocumentList';
import InvestorSidebar from '@/components/investor/InvestorSidebar';
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
      <PageHero />
      
      <section className="page-content">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-serif font-bold text-castelnau-green mb-8">Financial Information</h2>
              
              <FinancialMetrics />
              
              <DocumentList 
                title="Regulatory Documents" 
                documents={getDocumentsByCategory('regulatory')} 
                id="regulatory-documents" 
              />
              
              <DocumentList 
                title="Factsheets" 
                documents={getDocumentsByCategory('factsheet')} 
                id="factsheets" 
              />
              
              <DocumentList 
                title="Regulatory News Service (RNS)" 
                documents={getDocumentsByCategory('rns')} 
                id="rns" 
              />
              
              <DocumentList 
                title="Reports & Presentations" 
                documents={getDocumentsByCategory('report')} 
                id="reports" 
              />
            </div>
            
            <InvestorSidebar />
          </div>
        </div>
      </section>
    </>
  );
}
