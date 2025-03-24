'use client';

import React from 'react';

const GraduateProgramme = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-castelnau-green mb-8">
            Launch Your Career with Castelnau
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Our graduate programme offers exceptional opportunities for talented individuals to develop their careers in investment management. Join us and be part of a team that's shaping the future of the industry.
          </p>

          {/* Programme Overview */}
          <div className="mb-12">
            <h3 className="text-2xl font-serif font-bold text-castelnau-green mb-4">
              Programme Overview
            </h3>
            <p className="text-gray-700 mb-4">
              Our two-year graduate programme provides comprehensive training and development opportunities across various aspects of investment management. You'll work alongside experienced professionals and gain hands-on experience in:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Investment analysis and portfolio management</li>
              <li>Market research and due diligence</li>
              <li>Risk management and compliance</li>
              <li>Client relationship management</li>
              <li>Business development and strategy</li>
            </ul>
          </div>

          {/* Requirements */}
          <div className="mb-12">
            <h3 className="text-2xl font-serif font-bold text-castelnau-green mb-4">
              Requirements
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>2:1 or above in a relevant degree (Finance, Economics, Mathematics, or related field)</li>
              <li>Strong analytical and problem-solving skills</li>
              <li>Excellent communication and interpersonal abilities</li>
              <li>Passion for investment management and financial markets</li>
              <li>Ability to work effectively in a team environment</li>
            </ul>
          </div>

          {/* Application Process */}
          <div className="mb-12">
            <h3 className="text-2xl font-serif font-bold text-castelnau-green mb-4">
              Application Process
            </h3>
            <p className="text-gray-700 mb-4">
              The application process consists of several stages:
            </p>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              <li>Online application form and CV submission</li>
              <li>Initial screening and aptitude tests</li>
              <li>First-round interview</li>
              <li>Assessment day</li>
              <li>Final interview with senior management</li>
            </ol>
          </div>

          {/* Apply Now Button */}
          <div className="text-center">
            <a
              href="mailto:careers@castelnau.com"
              className="inline-block bg-castelnau-green text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GraduateProgramme; 