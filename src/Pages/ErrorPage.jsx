import React from 'react';
import { TbError404 } from "react-icons/tb";
import { Link } from 'react-router';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="max-w-md w-full text-center">
        <div className="flex justify-center mb-8">
          <div className="p-6 bg-[#244D3F]/10 rounded-full">
            <TbError404 className="text-8xl text-[#244D3F]" />
          </div>
        </div>

        <h1 className="text-5xl font-bold text-[#1F2937] mb-4">
          Oops! Lost your way?
        </h1>
        
        <p className="text-lg text-[#64748B] mb-10 leading-relaxed">
          The page you are looking for might have been removed, 
          had its name changed, or is temporarily unavailable.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => window.history.back()}
            className="px-8 py-3 border-2 border-[#244D3F] text-[#244D3F] font-semibold rounded-lg hover:bg-[#244D3F] hover:text-white transition-all duration-300"
          >
            Go Back
          </button>
          
          <Link 
            to="/" 
            className="px-8 py-3 bg-[#244D3F] text-white font-semibold rounded-lg shadow-lg hover:opacity-90 transition-all duration-300"
          >
            Return Home
          </Link>
        </div>

        <p className="mt-12 text-sm text-[#64748B]">
          Need help? <span className="text-[#244D3F] font-medium cursor-pointer underline">Contact Support</span>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;