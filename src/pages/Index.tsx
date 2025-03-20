import { BookOpen, FileText, ClipboardCheck } from 'lucide-react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AccessButton from '@/components/AccessButton';
import Footer from '@/components/Footer';
import GoogleAd from '@/components/GoogleAd';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        
        <section className="bg-white py-12 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Prepare for NEET Success</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow border border-gray-100">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Previous Year Questions</h3>
                <p className="text-gray-600 mb-4">Access complete NEET PYQs from 2020-2023 with detailed solutions.</p>
                <AccessButton text="Access PYQs" />
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow border border-gray-100">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Subject Notes</h3>
                <p className="text-gray-600 mb-4">Download chapter-wise study notes for Biology, Physics, and Chemistry.</p>
                <AccessButton text="Get Notes" />
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow border border-gray-100">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <ClipboardCheck className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Mock Tests</h3>
                <p className="text-gray-600 mb-4">Practice with NEET-pattern mock tests and assess your preparation.</p>
                <a href="/mock-test">
                  <Button className="w-full">Try Mock Test</Button>
                </a>
              </div>
            </div>
          </div>
        </section>
        
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Ad Space
            </h2>
            <p className="text-gray-600 text-center">
              This is an ad space. We can put some ads here.
            </p>
          </div>
        </section>
        
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Why Choose NEET PYQ Hub?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-yellow-100 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Comprehensive PYQ Collection</h3>
                <p className="text-gray-500">Access a vast collection of NEET Previous Year Questions from the last decade.</p>
              </div>
              
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Detailed Explanations</h3>
                <p className="text-gray-500">Understand the concepts better with detailed, step-by-step explanations for every question.</p>
              </div>
              
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-indigo-100 flex items-center justify-center mx-auto mb-4">
                  <ClipboardCheck className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Subject-Wise Analysis</h3>
                <p className="text-gray-500">Get subject-wise analysis of your performance to identify your strengths and weaknesses.</p>
              </div>
              
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-4">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-8 h-8 text-teal-600" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">Free and Open Access</h3>
                <p className="text-gray-500">Enjoy free and open access to all our resources. No hidden charges or subscriptions required.</p>
              </div>
            </div>
          </div>
        </section>
        
        <GoogleAd className="py-6" />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
