import React from 'react';

interface RadioButtonProps {
  name: string;
  value: string;
  label: string;
  checked: boolean;
  onChange: (value: string) => void;
  className?: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  name,
  value,
  label,
  checked,
  onChange,
  className = ''
}) => {
  return (
    <label className={`flex items-center cursor-pointer ${className}`}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={(e) => onChange(e.target.value)}
        className="w-4 h-4 text-popx-purple bg-gray-100 border-gray-300 focus:ring-popx-purple focus:ring-2"
      />
      <span className="ml-2 text-popx-dark text-sm font-normal">{label}</span>
    </label>
  );
};

export default RadioButton;
