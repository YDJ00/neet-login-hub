
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GoogleAd from '@/components/GoogleAd';
import LoginForm from '@/components/LoginForm';

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <GoogleAd className="w-full" />
      
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center my-8">
          <h1 className="text-3xl font-bold text-neet-dark mb-6 text-center">
            Login to Access NEET PYQs and Study Materials
          </h1>
          
          <div className="w-full max-w-md">
            <LoginForm />
          </div>
          
          <GoogleAd className="w-full max-w-3xl mt-12" />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
