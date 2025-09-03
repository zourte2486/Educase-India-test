import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage: React.FC = () => {
  const navigate = useNavigate();

    return (
    <div className="flex flex-col h-full bg-white">
      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center px-8">
        <h1 className="text-[#1D2226] font-medium text-[30px] mb-4 text-center font-rubik leading-[36px]">
          Welcome to PopX
        </h1>
        <p className="text-[#1D2226] text-[18px] mb-12 text-center leading-[28px] font-rubik">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        
        {/* Buttons */}
        <div className="space-y-4">
          <button 
            onClick={() => navigate('/create-account')}
            className="w-full bg-[#6C25FF] text-white font-medium py-4 rounded-lg text-base transition-colors duration-200 hover:bg-opacity-90"
          >
            Create Account
          </button>
          <button 
            onClick={() => navigate('/login')}
            className="w-full bg-[#E5E5E5] text-[#1D2226] font-medium py-4 rounded-lg text-base transition-colors duration-200 hover:bg-opacity-80"
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
