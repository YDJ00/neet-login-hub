
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
      className={`bg-neet-primary hover:bg-neet-dark text-white px-3 py-2 md:px-4 md:py-4 text-sm md:text-base inline-flex items-center justify-center w-auto max-w-full break-words ${className}`}
      size="lg"
    >
      <FileText className="mr-2 h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
      <span className="text-wrap">{text}</span>
    </Button>
  );
};

export default AccessButton;
