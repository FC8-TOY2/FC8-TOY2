import React from 'react';

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
      <div className="flex justify-start items-center w-fit">
        {text && <span className="block text-sm font-bold ml-2">{text}</span>}
        {description && (
          <span className="block text-xs text-gray-400 font-bold ml-2">
            {description}
          </span>
        )}
      </div>
      <textarea
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

export default Textarea;
