import React from 'react';

interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  text?: string;
  description?: string;
  error?: string;
  width?: string;
  height?: string;
}

function Input({
  text,
  description,
  error,
  width,
  height,
  placeholder,
  value,
  disabled,
  type = 'text',
}: InputProps) {
  return (
    <>
      <div className="flex justify-start items-center w-fit">
        {text && <span className="block text-sm font-bold ml-2">{text}</span>}
        {description && (
          <span className="block text-xs text-gray-400 font-bold ml-2">
            {description}
          </span>
        )}
      </div>
      <input
        className={`text-base font-medium ${width} ${height} px-3 border ${error ? 'border-red-300' : 'border-violet-200'} rounded-xl outline-none focus:border-violet-500 ${disabled && 'disabled:bg-white'}`}
        type={type}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
      />
      {error && (
        <span className="block text-sm font-bold text-red-300 ml-2">
          {error}
        </span>
      )}
    </>
  );
}

Input.defaultProps = {
  text: '',
  description: '',
  error: '',
  width: 'w-72',
  height: 'h-12',
};

export default Input;
