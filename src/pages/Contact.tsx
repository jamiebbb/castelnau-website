
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Mail, Phone } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <MainLayout>
      <div className="page-hero">
        <div className="container mx-auto px-4">
          <h1 className="page-title">Contact Us</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Get in touch with our team to learn more about Castelnau Group and our investment opportunities.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-32 pb-20">
        <div className="grid gap-8 lg:grid-cols-3">
          <Card className="bg-white p-6 shadow-lg lg:col-span-2">
            <h2 className="text-2xl font-serif font-semibold mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <Input placeholder="Enter your first name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <Input placeholder="Enter your last name" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="Enter your email" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea 
                  placeholder="How can we help you?" 
                  className="min-h-[150px]"
                />
              </div>
              <Button type="submit" variant="castelnau" size="lg" className="w-full md:w-auto">
                Send Message
              </Button>
            </form>
          </Card>

          <Card className="bg-white p-6 shadow-lg">
            <h2 className="text-2xl font-serif font-semibold mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-castelnau-green shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Address</h3>
                  <p className="text-gray-600">
                    123 Financial District<br />
                    London, EC4M 7AU<br />
                    United Kingdom
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-castelnau-green shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Phone</h3>
                  <p className="text-gray-600">+44 (0) 20 7123 4567</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-castelnau-green shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <p className="text-gray-600">info@castelnaugroup.com</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
