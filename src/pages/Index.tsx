
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import AdSpace from '@/components/AdSpace';
import AccessButton from '@/components/AccessButton';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <AdSpace className="w-full" />
      
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 w-full max-w-2xl flex flex-col items-center my-8">
            <h2 className="text-2xl font-bold text-neet-dark mb-6">
              Access NEET PYQs and Notes
            </h2>
            <AccessButton text="Click Here to Access PYQs and Notes" className="mx-auto" />
          </div>
          
          <HeroSection />
          
          <AdSpace className="w-full max-w-3xl my-8" />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
