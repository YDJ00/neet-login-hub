
import { ArrowRight, BookOpen, CheckCircle, Target } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-neet-dark">
        Free NEET Previous Year Questions & Study Material
      </h1>
      
      <p className="text-lg text-gray-600 max-w-2xl">
        Access our comprehensive collection of NEET Previous Year Questions (2010-2023) with detailed solutions for Biology, Physics, and Chemistry to boost your NEET preparation and increase your chances of success.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col items-center">
          <div className="h-12 w-12 rounded-full bg-neet-light flex items-center justify-center mb-4">
            <BookOpen className="h-6 w-6 text-neet-primary" />
          </div>
          <h3 className="font-medium text-lg mb-2">12+ Years PYQs</h3>
          <p className="text-gray-500 text-sm text-center">Access NEET questions from 2010-2023 with detailed solutions for all subjects</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col items-center">
          <div className="h-12 w-12 rounded-full bg-neet-light flex items-center justify-center mb-4">
            <CheckCircle className="h-6 w-6 text-neet-primary" />
          </div>
          <h3 className="font-medium text-lg mb-2">Subject-wise Notes</h3>
          <p className="text-gray-500 text-sm text-center">Download comprehensive subject notes for Biology, Physics, and Chemistry</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col items-center">
          <div className="h-12 w-12 rounded-full bg-neet-light flex items-center justify-center mb-4">
            <Target className="h-6 w-6 text-neet-primary" />
          </div>
          <h3 className="font-medium text-lg mb-2">Topic-wise Analysis</h3>
          <p className="text-gray-500 text-sm text-center">Focus on high-yield topics and improve weak areas with our topic-wise breakdown</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
