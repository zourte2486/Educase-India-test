import React from 'react';

interface ProfilePictureProps {
  name: string;
  email: string;
  size?: 'sm' | 'md' | 'lg';
  showEditIcon?: boolean;
  className?: string;
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({
  name,
  email,
  size = 'md',
  showEditIcon = true,
  className = ''
}) => {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const sizeClasses = {
    sm: 'w-12 h-12 text-sm',
    md: 'w-16 h-16 text-lg',
    lg: 'w-20 h-20 text-xl'
  };

  const iconSizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative">
        <div className={`${sizeClasses[size]} bg-gray-300 rounded-full flex items-center justify-center`}>
          <span className="text-popx-dark font-medium">{getInitials(name)}</span>
        </div>
        {showEditIcon && (
          <div className={`absolute -bottom-1 -right-1 ${iconSizeClasses[size]} bg-popx-purple rounded-full flex items-center justify-center`}>
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
          </div>
        )}
      </div>
      <div className="ml-4">
        <h2 className="text-popx-dark font-medium text-lg">{name}</h2>
        <p className="text-popx-gray text-sm">{email}</p>
      </div>
    </div>
  );
};

export default ProfilePicture;
