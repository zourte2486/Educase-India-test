import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '', 
  disabled = false 
}) => {
  const baseClasses = 'w-full font-medium py-4 rounded-lg text-base transition-colors duration-200';
  
  const variantClasses = {
    primary: 'bg-popx-purple text-white hover:bg-opacity-90 active:bg-opacity-80',
    secondary: 'bg-popx-light-gray text-popx-dark hover:bg-opacity-80 active:bg-opacity-70'
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${disabledClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
