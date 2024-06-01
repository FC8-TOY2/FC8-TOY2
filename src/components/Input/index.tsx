import React, { forwardRef } from 'react';
import FlexBox from '../FlexBox';

interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  text?: string;
  description?: string;
  error?: string;
  width?: string;
  height?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function RefInput(
  {
    text,
    description,
    error,
    width = 'min-w-72',
    height = 'min-h-12',
    ...props
  },
  ref,
) {
  return (
    <div>
      <FlexBox xAlign="start">
        {text && <span className="block text-sm font-bold ml-2">{text}</span>}
        {description && (
          <span className="block text-xs text-gray-400 font-bold ml-2">
            {description}
          </span>
        )}
      </FlexBox>
      <input
        className={`text-base font-medium ${width} ${height} px-3 border ${error ? 'border-red-300' : 'border-violet-200'} rounded-xl outline-none focus:border-violet-500`}
        ref={ref}
        {...props}
      />
      {error && (
        <span className="block text-sm font-bold text-red-300 ml-2">
          {error}
        </span>
      )}
    </div>
  );
});

export default Input;
