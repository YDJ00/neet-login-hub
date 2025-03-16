
import { ArrowRight, BookOpen, CheckCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-neet-dark">
        Master NEET with Previous Year Questions
      </h1>
      
      <p className="text-lg text-gray-600 max-w-2xl">
        Comprehensive collection of NEET Previous Year Questions with detailed solutions to boost your preparation and increase your chances of success.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col items-center">
          <div className="h-12 w-12 rounded-full bg-neet-light flex items-center justify-center mb-4">
            <BookOpen className="h-6 w-6 text-neet-primary" />
          </div>
          <h3 className="font-medium text-lg mb-2">10+ Years PYQs</h3>
          <p className="text-gray-500 text-sm text-center">Access questions from previous NEET exams with solutions</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col items-center">
          <div className="h-12 w-12 rounded-full bg-neet-light flex items-center justify-center mb-4">
            <CheckCircle className="h-6 w-6 text-neet-primary" />
          </div>
          <h3 className="font-medium text-lg mb-2">Detailed Solutions</h3>
          <p className="text-gray-500 text-sm text-center">Step-by-step explanations to understand concepts thoroughly</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col items-center">
          <div className="h-12 w-12 rounded-full bg-neet-light flex items-center justify-center mb-4">
            <ArrowRight className="h-6 w-6 text-neet-primary" />
          </div>
          <h3 className="font-medium text-lg mb-2">Topic-wise Analysis</h3>
          <p className="text-gray-500 text-sm text-center">Focus on high-yield topics and improve weak areas</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
