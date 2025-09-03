import React from 'react';
import ProfilePicture from '../components/ProfilePicture';

const AccountSettingsPage: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Main Content */}
      <div className="flex-1 px-8 py-8">
        <h1 className="text-[#1D2226] font-medium text-[30px] mb-8 text-center font-rubik leading-[36px]">
          Account Settings
        </h1>
        
        {/* Profile Section */}
        <ProfilePicture
          name="Marry Doe"
          email="Marry@Gmail.Com"
          size="md"
          showEditIcon={true}
          className="mb-8"
        />

        {/* Content */}
        <div className="space-y-4">
          <p className="text-[#1D2226] text-sm leading-relaxed font-rubik">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountSettingsPage;
