
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { useQuery } from '@tanstack/react-query';
import { fetchDocuments } from '@/utils/documentUtils';
import DocumentAdminPanel from '@/components/admin/DocumentAdminPanel';

const DocumentAdmin = () => {
  const { data: documents = [], isLoading, refetch } = useQuery({
    queryKey: ['documents'],
    queryFn: fetchDocuments
  });

  return (
    <MainLayout>
      <section className="page-content">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <h1 className="text-3xl font-serif font-bold text-castelnau-green">Document Administration</h1>
          </div>
          
          <DocumentAdminPanel 
            documents={documents} 
            refetchDocuments={() => refetch()}
          />
        </div>
      </section>
    </MainLayout>
  );
};

export default DocumentAdmin;
