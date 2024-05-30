import cn from '@/utils/cn';
import React from 'react';
import { VariantProps } from 'class-variance-authority';
import buttonVariants from './buttonVariants';

interface ButtonProps
  extends React.ComponentPropsWithoutRef<'button'>,
    VariantProps<typeof buttonVariants> {}

function Button({ intent, type = 'button', children, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ intent }))} type={type} {...props}>
      {children}
    </button>
  );
}

export default Button;
