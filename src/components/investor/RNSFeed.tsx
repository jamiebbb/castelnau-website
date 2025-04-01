import React from 'react';

const announcements = [
  {
    title: 'Final Results for the year ended 31 December 2023',
    date: '2024-03-15',
    time: '07:00',
    type: 'Final Results',
    url: '#',
  },
  {
    title: 'Trading Update',
    date: '2024-02-28',
    time: '07:00',
    type: 'Trading Update',
    url: '#',
  },
  {
    title: 'Notice of AGM',
    date: '2024-02-15',
    time: '07:00',
    type: 'AGM',
    url: '#',
  },
];

export const RNSFeed = () => {
  return (
    <div className="bg-gray-900 rounded-lg p-6">
      <h2 className="text-xl font-semibold text-white mb-6">Regulatory News Service</h2>
      <div className="space-y-4">
        {announcements.map((announcement, index) => (
          <div key={index} className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-white font-medium mb-1">{announcement.title}</h3>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <span>{announcement.date}</span>
                  <span>{announcement.time}</span>
                  <span className="px-2 py-1 bg-gray-700 rounded-full">{announcement.type}</span>
                </div>
              </div>
              <a href={announcement.url} className="text-castelnau-green hover:text-green-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 