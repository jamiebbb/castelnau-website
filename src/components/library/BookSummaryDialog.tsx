import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Book } from '@/types/library';
import { User, BookOpen, Share2 } from "lucide-react";
import Image from 'next/image';

interface BookSummaryDialogProps {
  selectedBook: Book | null;
  dialogOpen: boolean;
  setDialogOpen: (open: boolean) => void;
}

const BookSummaryDialog = ({ selectedBook, dialogOpen, setDialogOpen }: BookSummaryDialogProps) => {
  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogContent className="max-w-4xl">
        {selectedBook && (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-serif text-castelnau-green">{selectedBook.title}</DialogTitle>
              <DialogDescription className="flex items-center gap-2 text-gray-600">
                <User className="h-4 w-4" /> {selectedBook.author}
              </DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative h-64 md:h-full">
                <Image
                  src={`${process.env.NODE_ENV === 'production' ? '/castelnau-website' : ''}${selectedBook.coverImg}`}
                  alt={selectedBook.title}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="md:w-2/3">
                <h4 className="text-lg font-medium text-castelnau-darkgreen mb-2">Book Summary</h4>
                <ScrollArea className="h-48 rounded-md border p-4">
                  <p className="text-gray-700 leading-relaxed">
                    {selectedBook.summary}
                  </p>
                </ScrollArea>
                <div className="mt-6">
                  <h4 className="text-lg font-medium text-castelnau-darkgreen mb-2">Overview</h4>
                  <p className="text-gray-700">{selectedBook.description}</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <div className="flex space-x-2">
                <Button variant="secondary" size="sm" className="gap-1">
                  <BookOpen className="h-4 w-4" />
                  Add to Reading List
                </Button>
                <Button variant="secondary" size="sm" className="gap-1">
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
              </div>
              <Button 
                variant="outline"
                onClick={() => setDialogOpen(false)}
              >
                Close
              </Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BookSummaryDialog;
