import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log('Form data:', formData);
    navigate('/account-settings');
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Main Content */}
      <div className="flex-1 px-8 py-8 overflow-y-auto">
        <h1 className="text-popx-dark font-medium text-3xl mb-4 text-center">
          Create your PopX account
        </h1>
        
        {/* Form */}
        <div className="space-y-6 mt-8">
          {/* Full Name */}
          <div>
            <label className="block text-popx-dark text-sm font-normal mb-2">
              Full Name*
            </label>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
              placeholder="Marry Doe"
              className="w-full px-4 py-3 border border-popx-light-gray rounded-lg text-popx-dark placeholder-popx-gray focus:outline-none focus:border-popx-purple"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-popx-dark text-sm font-normal mb-2">
              Phone number*
            </label>
            <input
              type="tel"
              value={formData.phoneNumber}
              onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
              placeholder="Marry Doe"
              className="w-full px-4 py-3 border border-popx-light-gray rounded-lg text-popx-dark placeholder-popx-gray focus:outline-none focus:border-popx-purple"
            />
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-popx-dark text-sm font-normal mb-2">
              Email address*
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="Marry Doe"
              className="w-full px-4 py-3 border border-popx-light-gray rounded-lg text-popx-dark placeholder-popx-gray focus:outline-none focus:border-popx-purple"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-popx-dark text-sm font-normal mb-2">
              Password*
            </label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              placeholder="Marry Doe"
              className="w-full px-4 py-3 border border-popx-light-gray rounded-lg text-popx-dark placeholder-popx-gray focus:outline-none focus:border-popx-purple"
            />
          </div>

          {/* Company Name */}
          <div>
            <label className="block text-popx-dark text-sm font-normal mb-2">
              Company name
            </label>
            <input
              type="text"
              value={formData.companyName}
              onChange={(e) => handleInputChange('companyName', e.target.value)}
              placeholder="Marry Doe"
              className="w-full px-4 py-3 border border-popx-light-gray rounded-lg text-popx-dark placeholder-popx-gray focus:outline-none focus:border-popx-purple"
            />
          </div>

          {/* Agency Question */}
          <div>
            <label className="block text-popx-dark text-sm font-normal mb-3">
              Are you an Agency?*
            </label>
            <div className="flex space-x-6">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="isAgency"
                  value="yes"
                  checked={formData.isAgency === 'yes'}
                  onChange={(e) => handleInputChange('isAgency', e.target.value)}
                  className="w-4 h-4 text-popx-purple bg-gray-100 border-gray-300 focus:ring-popx-purple"
                />
                <span className="ml-2 text-popx-dark text-sm">Yes</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="isAgency"
                  value="no"
                  checked={formData.isAgency === 'no'}
                  onChange={(e) => handleInputChange('isAgency', e.target.value)}
                  className="w-4 h-4 text-popx-purple bg-gray-100 border-gray-300 focus:ring-popx-purple"
                />
                <span className="ml-2 text-popx-dark text-sm">No</span>
              </label>
            </div>
          </div>

          {/* Create Account Button */}
          <button 
            onClick={handleSubmit}
            className="w-full bg-popx-purple text-white font-medium py-4 rounded-lg text-base mt-8"
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountPage;
