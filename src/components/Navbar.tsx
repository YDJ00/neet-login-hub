
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { LogIn, LogOut, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { isLoggedIn, setAuthState } from '@/utils/authUtils';
import { useToast } from '@/hooks/use-toast';

const Navbar = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const { toast } = useToast();
  const [authenticated, setAuthenticated] = useState(false);
  
  useEffect(() => {
    const checkAuth = async () => {
      const loggedIn = await isLoggedIn();
      setAuthenticated(loggedIn);
      setAuthState(loggedIn);
    };
    
    checkAuth();
  }, []);
  
  const handleLogin = () => {
    navigate('/login');
  };
  
  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem('neet_user_mobile');
    localStorage.removeItem('neet_user_name');
    
    // Update auth states
    setAuthenticated(false);
    setAuthState(false);
    
    // Show toast notification
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
    });
    
    navigate('/');
  };

  return (
    <nav className="w-full py-4 bg-white shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-xl md:text-2xl text-neet-primary cursor-pointer" onClick={() => navigate('/')}>NEET PYQs</span>
        </div>
        
        <div className="flex space-x-3">
          {authenticated ? (
            <>
              <Button 
                onClick={() => navigate('/dashboard')} 
                variant="ghost" 
                className="text-neet-primary hover:bg-neet-light text-xs md:text-sm"
              >
                <User className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
                {isMobile ? 'Dashboard' : 'My Dashboard'}
              </Button>
              
              <Button 
                onClick={handleLogout} 
                variant="outline" 
                className="border-neet-primary text-neet-primary hover:bg-neet-light text-xs md:text-sm"
              >
                <LogOut className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
                {isMobile ? 'Log Out' : 'Logout'}
              </Button>
            </>
          ) : (
            <Button 
              onClick={handleLogin} 
              variant="outline" 
              className="border-neet-primary text-neet-primary hover:bg-neet-light text-xs md:text-sm"
            >
              <LogIn className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
              {isMobile ? 'Log In' : 'Login'}
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
