import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center px-8">
        <h1 className="text-popx-dark font-medium text-3xl mb-4 text-center">
          Welcome to PopX
        </h1>
        <p className="text-popx-dark text-lg mb-12 text-center leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        
        {/* Buttons */}
        <div className="space-y-4">
          <button 
            onClick={() => navigate('/create-account')}
            className="w-full bg-popx-purple text-white font-medium py-4 rounded-lg text-base"
          >
            Create Account
          </button>
          <button 
            onClick={() => navigate('/login')}
            className="w-full bg-popx-light-gray text-popx-dark font-medium py-4 rounded-lg text-base"
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
