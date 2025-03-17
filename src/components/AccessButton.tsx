
import React from 'react';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface AccessButtonProps {
  text: string;
  className?: string;
}

const AccessButton: React.FC<AccessButtonProps> = ({ text, className }) => {
  const navigate = useNavigate();

  return (
    <Button 
      onClick={() => navigate('/login')} 
      className={`bg-neet-primary hover:bg-neet-dark text-white px-4 py-4 md:px-6 md:py-6 text-base md:text-lg inline-flex w-auto ${className}`}
      size="lg"
    >
      <FileText className="mr-2 h-5 w-5" />
      {text}
    </Button>
  );
};

export default AccessButton;
