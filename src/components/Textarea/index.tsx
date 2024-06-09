import React, { forwardRef } from 'react';
import { VariantProps } from 'class-variance-authority';
import cn from '@/utils/cn';
import FlexBox from '../FlexBox';
import textareaVariants from './textareaVariants';

interface TextareaProps
  extends React.ComponentPropsWithoutRef<'textarea'>,
    VariantProps<typeof textareaVariants> {
  text?: string;
  description?: string;
  error?: string;
  width?: string;
  height?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function RefTextarea(
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
        <textarea
          className={cn(textareaVariants({ state, className }))}
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
