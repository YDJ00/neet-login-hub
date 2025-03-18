
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BookOpen, Download } from 'lucide-react';
import GoogleAd from '@/components/GoogleAd';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

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
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>NEET Study Materials</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <div className="flex flex-col items-center justify-center space-y-8">
          <h1 className="text-3xl font-bold text-neet-dark text-center">
            Download NEET Study Materials & Previous Year Questions
          </h1>
          
          <p className="text-gray-600 text-center max-w-2xl">
            You now have access to our comprehensive collection of NEET study materials including subject-wise notes, previous year questions (2010-2023), 
            and topic-wise practice tests for Biology, Physics, and Chemistry.
          </p>
          
          <GoogleAd className="w-full max-w-3xl my-8" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col items-center">
              <h2 className="font-semibold text-xl mb-4">Subject-wise Study Notes</h2>
              <p className="text-gray-600 mb-6 text-center">Download comprehensive study notes for Biology, Physics, and Chemistry to strengthen your concepts.</p>
              <Button 
                onClick={handleAccessNotes} 
                className="bg-neet-primary hover:bg-neet-dark text-white px-4 py-3 text-base w-full"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Download Study Notes
              </Button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col items-center">
              <h2 className="font-semibold text-xl mb-4">NEET Previous Year Questions</h2>
              <p className="text-gray-600 mb-6 text-center">Access NEET PYQs from 2010-2023 with detailed solutions to practice and improve your preparation.</p>
              <Button 
                onClick={handleAccessNotes} 
                className="bg-neet-primary hover:bg-neet-dark text-white px-4 py-3 text-base w-full"
              >
                <Download className="mr-2 h-5 w-5" />
                Download PYQ Papers
              </Button>
            </div>
          </div>
          
          <GoogleAd className="w-full max-w-3xl mt-8" />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AccessNotes;
