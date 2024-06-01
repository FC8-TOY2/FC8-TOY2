import React, { forwardRef } from 'react';
import FlexBox from '../FlexBox';

interface TextareaProps extends React.ComponentPropsWithoutRef<'textarea'> {
  text?: string;
  description?: string;
  error?: string;
  width?: string;
  height?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function RefTextarea(
    {
      text,
      description,
      error,
      width = 'min-w-[57rem]',
      height = 'min-h-40',
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
        <textarea
          className={`text-base font-medium ${width} ${height} px-3 py-2 border ${error ? 'border-red-300' : 'border-violet-200'} rounded-xl outline-none focus:border-violet-500 block`}
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
  },
);

export default Textarea;
