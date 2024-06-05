import React, { forwardRef } from 'react';
import { VariantProps } from 'class-variance-authority';
import cn from '@/utils/cn';
import FlexBox from '../FlexBox';
import inputVariants from './inputVariants';

interface InputProps
  extends React.ComponentPropsWithoutRef<'input'>,
    VariantProps<typeof inputVariants> {
  text?: string;
  description?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function RefInput(
  { text, description, error, state, className, ...props },
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
        className={cn(inputVariants({ state, className }))}
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
