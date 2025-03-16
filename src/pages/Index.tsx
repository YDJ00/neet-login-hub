
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import LoginForm from '@/components/LoginForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <HeroSection />
          
          <div className="flex justify-center">
            <LoginForm />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
