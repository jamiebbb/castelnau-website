import React from 'react';

const documents = [
  {
    title: 'Annual Report 2023',
    date: '2024-03-15',
    type: 'PDF',
    size: '2.4 MB',
    url: '#',
  },
  {
    title: 'Interim Results 2023',
    date: '2023-09-20',
    type: 'PDF',
    size: '1.8 MB',
    url: '#',
  },
  {
    title: 'Notice of AGM 2024',
    date: '2024-02-28',
    type: 'PDF',
    size: '1.2 MB',
    url: '#',
  },
];

export const RegulatoryDocuments = () => {
  return (
    <div className="bg-gray-900 rounded-lg p-6">
      <h2 className="text-xl font-semibold text-white mb-6">Regulatory Documents</h2>
      <div className="space-y-4">
        {documents.map((doc, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-lg">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-medium">{doc.title}</h3>
                <p className="text-sm text-gray-400">{doc.date}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400">{doc.type}</span>
              <span className="text-sm text-gray-400">{doc.size}</span>
              <a href={doc.url} className="text-castelnau-green hover:text-green-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 