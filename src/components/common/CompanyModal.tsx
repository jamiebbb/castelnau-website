"use client";

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import Link from 'next/link';

interface CompanyModalProps {
  company: {
    name: string;
    sharesPercentage: string;
    portfolioPercentage: string;
    description: string;
    website: string;
    logo: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

const CompanyModal: React.FC<CompanyModalProps> = ({ company, isOpen, onClose }) => {
  if (!company) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-castelnau-dark-green">{company.name}</DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-48 bg-white p-6 flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src={company.logo}
                alt={company.name}
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-castelnau-dark-green">Company Shares Held</h3>
                <p className="text-gray-700">{company.sharesPercentage}</p>
              </div>
              <div>
                <h3 className="font-semibold text-castelnau-dark-green">Investment Portfolio</h3>
                <p className="text-gray-700">{company.portfolioPercentage}</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-castelnau-dark-green">Description</h3>
              <p className="text-gray-700">{company.description}</p>
            </div>
            
            {company.website && (
              <div className="pt-4">
                <Link href={company.website} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-castelnau-dark-green text-white hover:bg-castelnau-green">
                    Visit Website
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CompanyModal; 