import React, { forwardRef } from 'react';
import cn from '@/utils/cn';
import { VariantProps } from 'class-variance-authority';
import FlexBox from '../FlexBox';
import selectVariants from './selectVariants';

type Options = { key: string; option: string }[];

interface SelectProps
  extends React.ComponentPropsWithoutRef<'select'>,
    VariantProps<typeof selectVariants> {
  text?: string;
  description?: string;
  placeholder?: string;
  error?: string;
  options: Options;
  selectedOption?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  {
    text,
    description,
    placeholder,
    error,
    options,
    selectedOption,
    font,
    border,
    className,
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
      <select
        className={cn(selectVariants({ font, border, className }))}
        ref={ref}
        defaultValue={selectedOption || ''}
        {...props}
      >
        {placeholder && (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        )}
        {options.map(({ key, option }) => {
          return (
            <option key={key} value={key} className="text-black">
              {option}
            </option>
          );
        })}
      </select>
      {error && (
        <span className="block text-sm font-bold text-red-300 ml-2">
          {error}
        </span>
      )}
    </div>
  );
});

export default Select;
