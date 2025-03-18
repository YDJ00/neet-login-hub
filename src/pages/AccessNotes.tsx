
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BookOpen } from 'lucide-react';
import GoogleAd from '@/components/GoogleAd';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AccessNotes = () => {
  const navigate = useNavigate();

  const handleAccessNotes = () => {
    window.open("https://drive.google.com/drive/folders/1LTElLgckPqzsQlDgvEztGmpsEEM3RDM4?usp=sharing", "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <GoogleAd className="w-full" />
      
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center space-y-8">
          <h1 className="text-3xl font-bold text-neet-dark text-center">
            Thank You for Registering!
          </h1>
          
          <p className="text-gray-600 text-center max-w-2xl">
            You now have access to our collection of NEET PYQs and study materials. 
            Click the button below to download subject-wise notes.
          </p>
          
          <GoogleAd className="w-full max-w-3xl my-8" />
          
          <Button 
            onClick={handleAccessNotes} 
            className="bg-neet-primary hover:bg-neet-dark text-white px-4 py-4 md:px-8 md:py-6 text-base md:text-xl w-auto"
            size="lg"
          >
            <BookOpen className="mr-2 h-5 w-5 md:h-6 md:w-6" />
            Click Here to Get Subject-wise Notes
          </Button>
          
          <GoogleAd className="w-full max-w-3xl mt-8" />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AccessNotes;
