
import React, { useEffect, useRef } from 'react';

interface GoogleAdProps {
  className?: string;
  adSlot?: string;
  adFormat?: string;
  adLayoutKey?: string;
}

const GoogleAd: React.FC<GoogleAdProps> = ({ 
  className, 
  adSlot = "9935583816", 
  adFormat = "fluid",
  adLayoutKey = "-ef+6k-30-ac+ty"
}) => {
  // We need to remove the ref entirely since it's causing type issues
  // and it's not necessary for the AdSense functionality

  useEffect(() => {
    try {
      // Check if adsbygoogle is defined
      if (window.adsbygoogle) {
        // Push the ad when component mounts
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } else {
        console.log("AdSense not loaded yet");
      }
    } catch (error) {
      console.error("Error loading AdSense ads:", error);
    }
  }, []);

  return (
    <div className={`ad-container ${className || ''}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-7246515111116443"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-ad-layout-key={adLayoutKey}
      />
    </div>
  );
};

export default GoogleAd;
