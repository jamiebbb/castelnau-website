
import React from 'react';
import { Button } from "@/components/ui/button";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const CategoryFilter = ({ categories, selectedCategory, setSelectedCategory }: CategoryFilterProps) => {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {categories.map((category) => (
        <Button
          key={category}
          onClick={() => setSelectedCategory(category)}
          variant={selectedCategory === category ? "castelnau" : "soft"}
          size="sm"
          className={`rounded-full transition-all ${
            selectedCategory === category
              ? 'shadow-md'
              : 'hover:text-castelnau-green'
          }`}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;
