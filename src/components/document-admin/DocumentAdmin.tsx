'use client';

import React, { useState } from 'react';
import PageHero from '@/components/common/PageHero';

interface Document {
  id: string;
  title: string;
  category: string;
  date: string;
  fileUrl: string;
}

const DocumentAdmin = () => {
  const [documents, setDocuments] = useState<Document[]>([
    {
      id: '1',
      title: 'Annual Report 2023',
      category: 'Financial Reports',
      date: '2024-03-15',
      fileUrl: '/documents/annual-report-2023.pdf'
    },
    {
      id: '2',
      title: 'Q1 2024 Market Update',
      category: 'Market Updates',
      date: '2024-03-10',
      fileUrl: '/documents/q1-2024-market-update.pdf'
    }
  ]);

  const [newDocument, setNewDocument] = useState<Partial<Document>>({
    title: '',
    category: '',
    date: '',
    fileUrl: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add document logic here
    console.log('New document:', newDocument);
  };

  const handleDelete = (id: string) => {
    // Delete document logic here
    console.log('Delete document:', id);
  };

  return (
    <>
      <PageHero 
        title="Document Administration"
        description="Manage and organize your documents"
      />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Document List */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-castelnau-green mb-8">
                Documents
              </h2>
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Title
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Category
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {documents.map((doc) => (
                      <tr key={doc.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{doc.title}</div>
                          <div className="text-sm text-gray-500">{doc.fileUrl}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{doc.category}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{doc.date}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button
                            onClick={() => handleDelete(doc.id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Add New Document Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-castelnau-green mb-8">
                Add New Document
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    value={newDocument.title}
                    onChange={(e) => setNewDocument({ ...newDocument, title: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-castelnau-green focus:border-castelnau-green"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <input
                    type="text"
                    id="category"
                    value={newDocument.category}
                    onChange={(e) => setNewDocument({ ...newDocument, category: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-castelnau-green focus:border-castelnau-green"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    value={newDocument.date}
                    onChange={(e) => setNewDocument({ ...newDocument, date: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-castelnau-green focus:border-castelnau-green"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="fileUrl" className="block text-sm font-medium text-gray-700 mb-1">
                    File URL
                  </label>
                  <input
                    type="text"
                    id="fileUrl"
                    value={newDocument.fileUrl}
                    onChange={(e) => setNewDocument({ ...newDocument, fileUrl: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-castelnau-green focus:border-castelnau-green"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-castelnau-green text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors"
                >
                  Add Document
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DocumentAdmin; 