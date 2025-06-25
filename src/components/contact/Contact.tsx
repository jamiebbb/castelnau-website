'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    newsletter: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Enter First name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-castelnau-green focus:border-castelnau-green"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Enter Last name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-castelnau-green focus:border-castelnau-green"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter Email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-castelnau-green focus:border-castelnau-green"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter Phone Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-castelnau-green focus:border-castelnau-green"
                  />
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Enter Company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-castelnau-green focus:border-castelnau-green"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Input Text"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-castelnau-green focus:border-castelnau-green resize-none"
                  ></textarea>
                </div>

                {/* Newsletter Checkbox */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="newsletter"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-castelnau-green border-gray-300 rounded focus:ring-castelnau-green mt-1"
                  />
                  <label htmlFor="newsletter" className="text-sm text-gray-700">
                    I'm happy to receive exclusive news, offers and updates direct to my inbox
                  </label>
                </div>

                {/* reCAPTCHA placeholder */}
                <div className="bg-gray-100 p-4 rounded-lg border">
                  <div className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5" />
                    <span className="text-sm text-gray-700">I'm not a robot</span>
                    <div className="ml-auto">
                      <div className="text-xs text-gray-500">reCAPTCHA</div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-castelnau-green text-white px-6 py-4 rounded-lg hover:bg-castelnau-dark-green transition-colors font-medium text-lg"
                >
                  Send
                </button>
              </form>
            </div>

            {/* Company Information */}
            <div className="space-y-8">
              {/* Investment Manager */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-castelnau-dark-green mb-4">Investment Manager</h3>
                <div className="space-y-3 text-gray-700">
                  <p className="font-semibold">Phoenix Asset Management Partners</p>
                  <p>80-82 Glentham Road</p>
                  <p>London</p>
                  <p>SW13 9JJ</p>
                  <p>United Kingdom</p>
                </div>
                
                <div className="mt-6 space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-castelnau-green" />
                    <a href="tel:02088768100" className="text-castelnau-green hover:underline">
                      Tel: 0208 876 8100
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-castelnau-green" />
                    <a href="mailto:info@pamp.com" className="text-castelnau-green hover:underline">
                      Email: info@pamp.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Castelnau Group Limited */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-transparent rounded-lg flex items-center justify-center mr-4">
                    <img 
                      src="/brand/logos/logo-green-transparent.png" 
                      alt="Castelnau Group" 
                      className="w-10 h-10"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-castelnau-dark-green">Castelnau Group Limited</h3>
                </div>
                
                <div className="space-y-3 text-gray-700">
                  <p>Northern Trust International Fund Administration Services (Guernsey)</p>
                  <p>Les Banques, Trafalgar Court</p>
                  <p>St Peter Port</p>
                  <p>GY1 3QL</p>
                </div>

                <div className="mt-6 text-sm text-gray-600">
                  <p>The Investment manager is authorised and regulated by the Financial Conduct Authority under firm reference number <strong>(FRN): 18487</strong></p>
                </div>

                {/* Contact Links */}
                <div className="mt-8 space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-castelnau-green" />
                    <a href="tel:02088768100" className="text-castelnau-green hover:underline">
                      0208 876 8100
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-castelnau-green" />
                    <a href="mailto:info@castelnaugroup.com" className="text-castelnau-green hover:underline">
                      info@castelnaugroup.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="h-5 w-5 text-castelnau-green" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <a href="https://www.linkedin.com/company/castelnau-group-ltd" target="_blank" rel="noopener noreferrer" className="text-castelnau-green hover:underline">
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              {/* Graduate Programme */}
              <div className="bg-castelnau-green text-white p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Graduate Programme</h3>
                <p className="mb-4">
                  To see more information on our Graduate Program, <a href="/graduate-programme" className="underline hover:no-underline">click here</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 