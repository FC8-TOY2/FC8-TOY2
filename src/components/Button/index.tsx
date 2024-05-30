import React from 'react';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  buttonStyle?: 'default' | 'invert' | 'cancel';
}

function Button({
  buttonStyle = 'default',
  type = 'button',
  children,
}: ButtonProps) {
  let tailwind;
  switch (buttonStyle) {
    case 'invert':
      tailwind =
        'flex justify-center items-center bg-white font-bold text-violet-500 rounded-xl py-2.5 px-12 border border-violet-500';
      break;
    default:
      tailwind =
        'flex justify-center items-center bg-violet-500 font-bold text-white rounded-xl py-2.5 px-12';
  }

  return (
    <button className={tailwind} type={type || 'button'}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  buttonStyle: 'default',
};

export default Button;
