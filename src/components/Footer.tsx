
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-bold text-xl text-neet-primary mb-4">NEET PYQs</h3>
            <p className="text-gray-600 mb-4 max-w-md">
              Your ultimate resource for NEET previous year questions, detailed solutions, and comprehensive study materials.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-neet-primary">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-neet-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-neet-primary">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-neet-primary">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-neet-primary">Features</a></li>
              <li><a href="#" className="text-gray-600 hover:text-neet-primary">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-neet-primary">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-neet-primary">Biology PYQs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-neet-primary">Physics PYQs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-neet-primary">Chemistry PYQs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-neet-primary">Study Material</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} NEET PYQs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
