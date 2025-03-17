
import { Button } from '@/components/ui/button';
import { LogIn } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="w-full py-4 bg-white shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-2xl text-neet-primary">NEET PYQs</span>
        </div>
        
        <Button 
          onClick={() => navigate('/login')} 
          variant="outline" 
          className="border-neet-primary text-neet-primary hover:bg-neet-light"
        >
          <LogIn className="mr-2 h-4 w-4" />
          Login
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
