import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
        <h1 className="text-popx-dark font-medium text-3xl mb-4 text-center">
          Signin to your PopX account
        </h1>
        <p className="text-popx-dark text-lg mb-12 text-center leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        
        {/* Form */}
        <div className="space-y-6">
          {/* Email Field */}
          <div>
            <label className="block text-popx-purple text-sm font-normal mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
              className="w-full px-4 py-3 border border-popx-light-gray rounded-lg text-popx-dark placeholder-popx-gray focus:outline-none focus:border-popx-purple"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-popx-purple text-sm font-normal mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full px-4 py-3 border border-popx-light-gray rounded-lg text-popx-dark placeholder-popx-gray focus:outline-none focus:border-popx-purple"
            />
          </div>

          {/* Login Button */}
          <button 
            onClick={handleLogin}
            className="w-full bg-popx-light-gray text-white font-medium py-4 rounded-lg text-base"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
