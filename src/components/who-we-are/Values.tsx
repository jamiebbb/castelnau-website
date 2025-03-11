
import React from 'react';
import { Check, Heart, HandHeart, Users } from 'lucide-react';

const Values = () => {
  return (
    <div id="our-values" className="mb-20 scroll-mt-32">
      <h2 className="text-3xl font-serif font-bold text-castelnau-green mb-10 text-center">Our Core Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <ValueCard
          icon={<Heart className="h-8 w-8 text-white" />}
          title="Integrity"
          description="We maintain the highest standards of professional conduct and always put our investors' interests first."
        />
        <ValueCard
          icon={<HandHeart className="h-8 w-8 text-white" />}
          title="Partnership"
          description="We build lasting relationships with our portfolio companies, working together to create sustainable value."
        />
        <ValueCard
          icon={<Check className="h-8 w-8 text-white" />}
          title="Excellence"
          description="We strive for excellence in everything we do, from research and analysis to portfolio management."
        />
        <ValueCard
          icon={<Users className="h-8 w-8 text-white" />}
          title="Collaboration"
          description="We believe in the power of teamwork and diverse perspectives to achieve exceptional results."
        />
      </div>
    </div>
  );
};

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard = ({ icon, title, description }: ValueCardProps) => (
  <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
    <div className="bg-castelnau-green h-16 w-16 rounded-full flex items-center justify-center mb-6 mx-auto">
      {icon}
    </div>
    <h4 className="text-xl font-bold text-center mb-4">{title}</h4>
    <p className="text-gray-700 text-center">{description}</p>
  </div>
);

export default Values;
