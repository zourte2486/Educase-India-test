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
      <label className="block text-[#6C25FF] text-sm font-normal mb-2">
        {label}{required && '*'}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 border border-[#E5E5E5] rounded-lg text-[#1D2226] placeholder-[#919191] focus:outline-none focus:border-[#6C25FF] transition-colors duration-200"
      />
    </div>
  );
};

export default Input;
