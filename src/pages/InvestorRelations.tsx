
import React, { useEffect } from 'react';
import MainLayout from '@/layouts/MainLayout';
import { useQuery } from '@tanstack/react-query';
import { Document, fetchDocuments } from '@/utils/documentUtils';
import PageHero from '@/components/investor/PageHero';
import FinancialMetrics from '@/components/investor/FinancialMetrics';
import DocumentList from '@/components/investor/DocumentList';
import InvestorSidebar from '@/components/investor/InvestorSidebar';

const InvestorRelations = () => {
  const { data: documents = [], isLoading } = useQuery({
    queryKey: ['documents'],
    queryFn: fetchDocuments
  });

  useEffect(() => {
    // Handle hash navigation when page loads
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  const getDocumentsByCategory = (category: Document['category']) => {
    return documents.filter(doc => doc.category === category);
  };

  return (
    <MainLayout>
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
    </MainLayout>
  );
};

export default InvestorRelations;
