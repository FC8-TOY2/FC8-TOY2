import React from 'react';
import FlexBox from '../FlexBox';

interface TextareaProps extends React.ComponentPropsWithoutRef<'textarea'> {
  text?: string;
  description?: string;
  error?: string;
  width?: string;
  height?: string;
}

function Textarea({
  text,
  description,
  error,
  width = 'min-w-[54rem]',
  height = 'min-h-40',
  ...props
}: TextareaProps) {
  return (
    <>
      <FlexBox className="w-fit" xAlign="start">
        {text && <span className="block text-sm font-bold ml-2">{text}</span>}
        {description && (
          <span className="block text-xs text-gray-400 font-bold ml-2">
            {description}
          </span>
        )}
      </FlexBox>
      <textarea
        className={`text-base font-medium ${width} ${height} px-3 py-2 border ${error ? 'border-red-300' : 'border-violet-200'} rounded-xl outline-none focus:border-violet-500`}
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

export default Textarea;
