import React from 'react';

type Options = { key: string; option: string }[];

interface SelectProps<T extends Options>
  extends React.ComponentPropsWithoutRef<'select'> {
  text?: string;
  description?: string;
  placeholder?: string;
  error?: string;
  width?: string;
  height?: string;
  options: T;
  selectedOption?: string;
}

function Select<T extends Options>({
  text,
  description,
  placeholder,
  error,
  width = 'min-w-72',
  height = 'min-h-12',
  options,
  selectedOption,
  ...props
}: SelectProps<T>) {
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
      <select
        className={`text-base font-medium ${width} ${height} px-3 border ${error ? 'border-red-300' : 'border-violet-200'} rounded-xl outline-none focus:border-violet-500`}
        {...props}
      >
        {placeholder && (
          <option
            className="text-gray-400"
            selected={!!selectedOption}
            disabled
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
    </>
  );
}

export default Select;
