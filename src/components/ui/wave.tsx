import React from 'react';

interface WaveProps {
  className?: string;
  fillColor?: string;
  height?: number;
  viewBox?: string;
  path?: string;
}

const Wave: React.FC<WaveProps> = ({
  className = '',
  fillColor = '#FFFFFF',
  height = 150,
  viewBox = '0 0 1440 150',
  path = 'M0,96L80,85.3C160,75,320,53,480,64C640,75,800,117,960,122.7C1120,128,1280,96,1360,80L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'
}) => {
  return (
    <div className={`absolute bottom-0 w-full ${className}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox} className="w-full">
        <path
          fill={fillColor}
          fillOpacity="1"
          d={path}
        />
      </svg>
    </div>
  );
};

export default Wave; 