
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
      onClick={() => navigate('/')} 
      className={`bg-neet-primary hover:bg-neet-dark text-white px-6 py-6 text-lg ${className}`}
      size="lg"
    >
      <FileText className="mr-2 h-5 w-5" />
      {text}
    </Button>
  );
};

export default AccessButton;
