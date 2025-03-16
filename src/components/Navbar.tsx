
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="w-full py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-2xl text-neet-primary">NEET PYQs</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
