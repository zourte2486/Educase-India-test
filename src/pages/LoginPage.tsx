import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    console.log('Login attempt:', { email, password });
    navigate('/account-settings');
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center px-8">
        <h1 className="text-popx-dark font-medium text-3xl mb-4 text-center font-rubik">
          Signin to your PopX account
        </h1>
        <p className="text-popx-dark text-lg mb-12 text-center leading-relaxed font-rubik">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        
        {/* Form */}
        <div className="space-y-6">
          <Input
            label="Email Address"
            type="email"
            value={email}
            onChange={setEmail}
            placeholder="Enter email address"
          />

          <Input
            label="Password"
            type="password"
            value={password}
            onChange={setPassword}
            placeholder="Enter password"
          />

          <Button 
            onClick={handleLogin}
            variant="secondary"
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
