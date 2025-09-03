import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';
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
        <h1 className="text-popx-dark font-medium text-3xl mb-4 text-center font-rubik">
          Create your PopX account
        </h1>
        
        {/* Form */}
        <div className="space-y-6 mt-8">
          <Input
            label="Full Name"
            type="text"
            value={formData.fullName}
            onChange={(value) => handleInputChange('fullName', value)}
            placeholder="Marry Doe"
            required
          />

          <Input
            label="Phone number"
            type="tel"
            value={formData.phoneNumber}
            onChange={(value) => handleInputChange('phoneNumber', value)}
            placeholder="Marry Doe"
            required
          />

          <Input
            label="Email address"
            type="email"
            value={formData.email}
            onChange={(value) => handleInputChange('email', value)}
            placeholder="Marry Doe"
            required
          />

          <Input
            label="Password"
            type="password"
            value={formData.password}
            onChange={(value) => handleInputChange('password', value)}
            placeholder="Marry Doe"
            required
          />

          <Input
            label="Company name"
            type="text"
            value={formData.companyName}
            onChange={(value) => handleInputChange('companyName', value)}
            placeholder="Marry Doe"
          />

          {/* Agency Question */}
          <div>
            <label className="block text-popx-dark text-sm font-normal mb-3 font-rubik">
              Are you an Agency?*
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

          <Button 
            onClick={handleSubmit}
            variant="primary"
            className="mt-8"
          >
            Create Account
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountPage;
