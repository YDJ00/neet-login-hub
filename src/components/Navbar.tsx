
import { Button } from '@/components/ui/button';
import { LogIn } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  return (
    <nav className="w-full py-4 bg-white shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-xl md:text-2xl text-neet-primary">NEET PYQs</span>
        </div>
        
        <Button 
          onClick={() => navigate('/login')} 
          variant="outline" 
          className="border-neet-primary text-neet-primary hover:bg-neet-light text-xs md:text-sm"
        >
          <LogIn className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
          {isMobile ? 'Log In' : 'Login'}
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
