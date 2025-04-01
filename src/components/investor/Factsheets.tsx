import React from 'react';

const factsheets = [
  {
    title: 'March 2024 Factsheet',
    date: '2024-03-31',
    type: 'PDF',
    size: '1.2 MB',
    url: '#',
  },
  {
    title: 'February 2024 Factsheet',
    date: '2024-02-29',
    type: 'PDF',
    size: '1.1 MB',
    url: '#',
  },
  {
    title: 'January 2024 Factsheet',
    date: '2024-01-31',
    type: 'PDF',
    size: '1.1 MB',
    url: '#',
  },
];

export const Factsheets = () => {
  return (
    <div className="bg-gray-900 rounded-lg p-6">
      <h2 className="text-xl font-semibold text-white mb-6">Factsheets</h2>
      <div className="space-y-4">
        {factsheets.map((sheet, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-lg">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-medium">{sheet.title}</h3>
                <p className="text-sm text-gray-400">{sheet.date}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400">{sheet.type}</span>
              <span className="text-sm text-gray-400">{sheet.size}</span>
              <a href={sheet.url} className="text-castelnau-green hover:text-green-400">
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