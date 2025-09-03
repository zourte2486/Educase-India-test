import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const WelcomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center px-8">
        <h1 className="text-popx-dark font-medium text-3xl mb-4 text-center font-rubik">
          Welcome to PopX
        </h1>
        <p className="text-popx-dark text-lg mb-12 text-center leading-relaxed font-rubik">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        
        {/* Buttons */}
        <div className="space-y-4">
          <Button 
            onClick={() => navigate('/create-account')}
            variant="primary"
          >
            Create Account
          </Button>
          <Button 
            onClick={() => navigate('/login')}
            variant="secondary"
          >
            Already Registered? Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
