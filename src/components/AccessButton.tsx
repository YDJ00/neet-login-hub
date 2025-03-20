
import React from 'react';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getAuthState, redirectToLoginIfNeeded } from '@/utils/authUtils';
import { useToast } from '@/hooks/use-toast';

interface AccessButtonProps {
  text: string;
  className?: string;
  destination?: string;
}

const AccessButton: React.FC<AccessButtonProps> = ({ text, className, destination = '/access-notes' }) => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default to avoid refresh issues
    
    const isAuthenticated = getAuthState();
    
    if (isAuthenticated) {
      navigate(destination);
    } else {
      const loggedIn = await redirectToLoginIfNeeded(navigate);
      // This is now handled in redirectToLoginIfNeeded
    }
  };

  return (
    <Button 
      onClick={handleClick} 
      className={`bg-neet-primary hover:bg-neet-dark text-white px-3 py-2 md:px-4 md:py-4 text-sm md:text-base inline-flex items-center justify-center w-auto max-w-full break-words ${className}`}
      size="lg"
    >
      <FileText className="mr-2 h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
      <span className="text-wrap">{text}</span>
    </Button>
  );
};

export default AccessButton;
