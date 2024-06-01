import React, { forwardRef } from 'react';
import FlexBox from '../FlexBox';

type Options = { key: string; option: string }[];

interface SelectProps extends React.ComponentPropsWithoutRef<'select'> {
  text?: string;
  description?: string;
  placeholder?: string;
  error?: string;
  width?: string;
  height?: string;
  options: Options;
  selectedOption?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  {
    text,
    description,
    placeholder,
    error,
    width = 'min-w-72',
    height = 'min-h-12',
    options,
    selectedOption,
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
        className={`text-base font-medium ${width} ${height} px-3 border ${error ? 'border-red-300 focus:border-red-300' : 'border-violet-200 focus:border-violet-500'} rounded-xl outline-none`}
        ref={ref}
        {...props}
      >
        {placeholder && (
          <option
            className="text-gray-400"
            selected={!selectedOption}
            disabled
            hidden
          >
            {placeholder}
          </option>
        )}
        {options.map(({ key, option }) => {
          return (
            <option key={key} value={key} selected={option === selectedOption}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
});

export default Select;
