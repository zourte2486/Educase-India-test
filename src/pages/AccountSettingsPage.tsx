import React from 'react';

const AccountSettingsPage: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Main Content */}
      <div className="flex-1 px-8 py-8">
        <h1 className="text-popx-dark font-medium text-3xl mb-8 text-center">
          Account Settings
        </h1>
        
        {/* Profile Section */}
        <div className="flex items-center mb-8">
          <div className="relative">
            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-popx-dark font-medium text-lg">MD</span>
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-popx-purple rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <div className="ml-4">
            <h2 className="text-popx-dark font-medium text-lg">Marry Doe</h2>
            <p className="text-popx-gray text-sm">Marry@Gmail.Com</p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <p className="text-popx-dark text-sm leading-relaxed">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountSettingsPage;
