
import React, { useEffect } from 'react';

interface GoogleAdProps {
  className?: string;
  enableAutoAds?: boolean;
}

const GoogleAd: React.FC<GoogleAdProps> = ({ 
  className,
  enableAutoAds = true
}) => {
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

  if (enableAutoAds) {
    // For Auto Ads, we only need to return a container div
    // The AdSense script in index.html will handle the ad placement
    return <div className={`ad-container ${className || ''}`}></div>;
  }

  return null;
};

export default GoogleAd;
