import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RadioButton from '../components/RadioButton';

const CreateAccountPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: 'yes'
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phoneNumber.replace(/\D/g, ''))) {
      newErrors.phoneNumber = 'Please enter a valid 10-digit phone number';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Handle form submission here
      console.log('Form data:', formData);
      navigate('/account-settings');
    }
  };

  const isFormValid = Object.values(formData).every(value => value.trim()) && Object.keys(errors).length === 0;

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Main Content */}
      <div className="flex-1 px-8 py-6 overflow-hidden">
        <h1 className="text-[#1D2226] font-medium text-[30px] mb-3 text-center font-rubik leading-[36px]">
          Create your PopX account
        </h1>
        
        {/* Form */}
        <div className="space-y-4 mt-4">
          <div>
            <label className="block text-[#6C25FF] text-sm font-normal mb-2">
              Full Name *
            </label>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
              placeholder="Marry Doe"
              className={`w-full px-4 py-3 border rounded-lg text-[#1D2226] placeholder-[#919191] focus:outline-none transition-colors duration-200 ${
                errors.fullName 
                  ? 'border-red-500 focus:border-red-500' 
                  : formData.fullName.trim() 
                    ? 'border-[#6C25FF] focus:border-[#6C25FF]' 
                    : 'border-[#E5E5E5] focus:border-[#6C25FF]'
              }`}
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
            )}
          </div>

          <div>
            <label className="block text-[#6C25FF] text-sm font-normal mb-2">
              Phone number *
            </label>
            <input
              type="tel"
              value={formData.phoneNumber}
              onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
              placeholder="1234567890"
              className={`w-full px-4 py-3 border rounded-lg text-[#1D2226] placeholder-[#919191] focus:outline-none transition-colors duration-200 ${
                errors.phoneNumber 
                  ? 'border-red-500 focus:border-red-500' 
                  : formData.phoneNumber.trim() 
                    ? 'border-[#6C25FF] focus:border-[#6C25FF]' 
                    : 'border-[#E5E5E5] focus:border-[#6C25FF]'
              }`}
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>
            )}
          </div>

          <div>
            <label className="block text-[#6C25FF] text-sm font-normal mb-2">
              Email address *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="marry@example.com"
              className={`w-full px-4 py-3 border rounded-lg text-[#1D2226] placeholder-[#919191] focus:outline-none transition-colors duration-200 ${
                errors.email 
                  ? 'border-red-500 focus:border-red-500' 
                  : formData.email.trim() 
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
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              placeholder="Enter password"
              className={`w-full px-4 py-3 border rounded-lg text-[#1D2226] placeholder-[#919191] focus:outline-none transition-colors duration-200 ${
                errors.password 
                  ? 'border-red-500 focus:border-red-500' 
                  : formData.password.trim() 
                    ? 'border-[#6C25FF] focus:border-[#6C25FF]' 
                    : 'border-[#E5E5E5] focus:border-[#6C25FF]'
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          <div>
            <label className="block text-[#6C25FF] text-sm font-normal mb-2">
              Company name *
            </label>
            <input
              type="text"
              value={formData.companyName}
              onChange={(e) => handleInputChange('companyName', e.target.value)}
              placeholder="Your Company"
              className={`w-full px-4 py-3 border rounded-lg text-[#1D2226] placeholder-[#919191] focus:outline-none transition-colors duration-200 ${
                errors.companyName 
                  ? 'border-red-500 focus:border-red-500' 
                  : formData.companyName.trim() 
                    ? 'border-[#6C25FF] focus:border-[#6C25FF]' 
                    : 'border-[#E5E5E5] focus:border-[#6C25FF]'
              }`}
            />
            {errors.companyName && (
              <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>
            )}
          </div>

          {/* Agency Question */}
          <div>
            <label className="block text-[#1D2226] text-sm font-normal mb-3 font-rubik">
              Are you an Agency? *
            </label>
            <div className="flex space-x-6">
              <RadioButton
                name="isAgency"
                value="yes"
                label="Yes"
                checked={formData.isAgency === 'yes'}
                onChange={(value) => handleInputChange('isAgency', value)}
              />
              <RadioButton
                name="isAgency"
                value="no"
                label="No"
                checked={formData.isAgency === 'no'}
                onChange={(value) => handleInputChange('isAgency', value)}
              />
            </div>
          </div>

          <button 
            onClick={handleSubmit}
            className={`w-full font-medium py-4 rounded-lg text-base transition-all duration-200 mt-4 ${
              isFormValid
                ? 'bg-[#6C25FF] text-white hover:bg-opacity-90 active:scale-95 shadow-lg'
                : 'bg-[#E5E5E5] text-[#919191] cursor-not-allowed'
            }`}
            disabled={!isFormValid}
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountPage;
