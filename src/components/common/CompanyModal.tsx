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
    sharesHeld: string;
    investmentPortfolio: string;
    listed: boolean;
    description: string;
    image: string;
    website?: string;
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
          <div className="relative h-64">
            <Image
              src={company.image}
              alt={company.name}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="space-y-4">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Shares held: {company.sharesHeld}</span>
              <span>Investment Portfolio: {company.investmentPortfolio}</span>
              <span className={company.listed ? "text-green-600" : "text-gray-600"}>
                {company.listed ? "Listed" : "Not Listed"}
              </span>
            </div>
            <p className="text-gray-700">{company.description}</p>
            {company.website && (
              <Link href={company.website} target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-castelnau-dark-green text-white hover:bg-castelnau-green">
                  Visit Website
                </Button>
              </Link>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CompanyModal; 