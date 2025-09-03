import React from 'react';

interface InputProps {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  required = false,
  className = ''
}) => {
  return (
    <div className={className}>
      <label className="block text-popx-purple text-sm font-normal mb-2">
        {label}{required && '*'}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 border border-popx-light-gray rounded-lg text-popx-dark placeholder-popx-gray focus:outline-none focus:border-popx-purple transition-colors duration-200"
      />
    </div>
  );
};

export default Input;
