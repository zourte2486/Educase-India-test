import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{email?: string; password?: string}>({});

  const validateForm = () => {
    const newErrors: {email?: string; password?: string} = {};
    
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!password.trim()) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = () => {
    if (validateForm()) {
      // Handle login logic here
      console.log('Login attempt:', { email, password });
      navigate('/account-settings');
    }
  };

  const isFormValid = email.trim() && password.trim() && Object.keys(errors).length === 0;

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center px-8">
        <h1 className="text-[#1D2226] font-medium text-[30px] mb-4 text-center font-rubik leading-[36px]">
          Signin to your PopX account
        </h1>
        <p className="text-[#1D2226] text-[18px] mb-12 text-center leading-[28px] font-rubik">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        
        {/* Form */}
        <div className="space-y-6">
          <div>
            <label className="block text-[#6C25FF] text-sm font-normal mb-2">
              Email Address *
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) {
                  setErrors(prev => ({ ...prev, email: undefined }));
                }
              }}
              placeholder="Enter email address"
              className={`w-full px-4 py-3 border rounded-lg text-[#1D2226] placeholder-[#919191] focus:outline-none transition-colors duration-200 ${
                errors.email 
                  ? 'border-red-500 focus:border-red-500' 
                  : email.trim() 
                    ? 'border-[#6C25FF] focus:border-[#6C25FF]' 
                    : 'border-[#E5E5E5] focus:border-[#6C25FF]'
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-[#6C25FF] text-sm font-normal mb-2">
              Password *
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (errors.password) {
                  setErrors(prev => ({ ...prev, password: undefined }));
                }
              }}
              placeholder="Enter password"
              className={`w-full px-4 py-3 border rounded-lg text-[#1D2226] placeholder-[#919191] focus:outline-none transition-colors duration-200 ${
                errors.password 
                  ? 'border-red-500 focus:border-red-500' 
                  : password.trim() 
                    ? 'border-[#6C25FF] focus:border-[#6C25FF]' 
                    : 'border-[#E5E5E5] focus:border-[#6C25FF]'
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          <button 
            onClick={handleLogin}
            className={`w-full font-medium py-4 rounded-lg text-base transition-all duration-200 ${
              isFormValid
                ? 'bg-[#6C25FF] text-white hover:bg-opacity-90 active:scale-95 shadow-lg'
                : 'bg-[#E5E5E5] text-[#919191] cursor-not-allowed'
            }`}
            disabled={!isFormValid}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
