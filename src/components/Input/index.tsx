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
  width = 'min-w-72',
  height = 'min-h-12',
  ...props
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
        className={`text-base font-medium ${width} ${height} px-3 border ${error ? 'border-red-300' : 'border-violet-200'} rounded-xl outline-none focus:border-violet-500`}
        {...props}
      />
      {error && (
        <span className="block text-sm font-bold text-red-300 ml-2">
          {error}
        </span>
      )}
    </>
  );
}

export default Input;
