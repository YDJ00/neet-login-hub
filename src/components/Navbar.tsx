
import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-2xl text-neet-primary">NEET PYQs</span>
        </div>
        
        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-gray-600 hover:text-neet-primary transition-colors">Home</a>
          <a href="#" className="text-gray-600 hover:text-neet-primary transition-colors">Features</a>
          <a href="#" className="text-gray-600 hover:text-neet-primary transition-colors">About</a>
          <a href="#" className="text-gray-600 hover:text-neet-primary transition-colors">Contact</a>
          <Button className="bg-neet-primary hover:bg-neet-dark text-white">Get Started</Button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white shadow-md py-4 px-4 md:hidden z-50">
            <div className="flex flex-col space-y-3">
              <a href="#" className="text-gray-600 hover:text-neet-primary transition-colors py-2">Home</a>
              <a href="#" className="text-gray-600 hover:text-neet-primary transition-colors py-2">Features</a>
              <a href="#" className="text-gray-600 hover:text-neet-primary transition-colors py-2">About</a>
              <a href="#" className="text-gray-600 hover:text-neet-primary transition-colors py-2">Contact</a>
              <Button className="bg-neet-primary hover:bg-neet-dark text-white w-full">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
