import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BookOpen, BookText, FileText, ArrowLeft } from 'lucide-react';
import AdSpace from '@/components/AdSpace';

const Dashboard = () => {
  const navigate = useNavigate();

  // This is a placeholder for authentication check
  useEffect(() => {
    // In a real application, you would check for authentication here
    // If not authenticated, redirect to login page
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <AdSpace className="w-full" />
      
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-neet-dark">NEET PYQs Dashboard</h1>
          <Button variant="outline" onClick={() => navigate('/')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow p-8 mb-8">
          <h2 className="text-xl font-semibold mb-4">Welcome to your NEET PYQs Dashboard!</h2>
          <p className="text-gray-600 mb-6">
            You have successfully logged in. Here you can access all the previous year questions and study materials for NEET preparation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow border border-gray-100">
            <div className="h-12 w-12 rounded-full bg-neet-light flex items-center justify-center mb-4">
              <BookOpen className="h-6 w-6 text-neet-primary" />
            </div>
            <h3 className="font-medium text-lg mb-2">Biology PYQs</h3>
            <p className="text-gray-500 mb-4">Access all biology previous year questions with detailed solutions.</p>
            <Button variant="outline" className="w-full text-neet-primary hover:bg-neet-light">
              Explore Biology
            </Button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow border border-gray-100">
            <div className="h-12 w-12 rounded-full bg-neet-light flex items-center justify-center mb-4">
              <FileText className="h-6 w-6 text-neet-primary" />
            </div>
            <h3 className="font-medium text-lg mb-2">Physics PYQs</h3>
            <p className="text-gray-500 mb-4">Master physics concepts with previous year questions and explanations.</p>
            <Button variant="outline" className="w-full text-neet-primary hover:bg-neet-light">
              Explore Physics
            </Button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow border border-gray-100">
            <div className="h-12 w-12 rounded-full bg-neet-light flex items-center justify-center mb-4">
              <BookText className="h-6 w-6 text-neet-primary" />
            </div>
            <h3 className="font-medium text-lg mb-2">Chemistry PYQs</h3>
            <p className="text-gray-500 mb-4">Practice chemistry previous year questions with step-by-step solutions.</p>
            <Button variant="outline" className="w-full text-neet-primary hover:bg-neet-light">
              Explore Chemistry
            </Button>
          </div>
        </div>
        
        <AdSpace className="w-full mb-8" />
      </main>
    </div>
  );
};

export default Dashboard;
