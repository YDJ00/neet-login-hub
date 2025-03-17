
import React from 'react';

interface AdSpaceProps {
  className?: string;
}

const AdSpace: React.FC<AdSpaceProps> = ({ className }) => {
  return (
    <div className={`w-full p-4 bg-gray-100 border border-dashed border-gray-300 flex items-center justify-center ${className}`}>
      <p className="text-gray-500 text-sm">Advertisement Space</p>
    </div>
  );
};

export default AdSpace;
