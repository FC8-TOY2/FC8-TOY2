import cn from '@/utils/cn';
import { VariantProps } from 'class-variance-authority';
import React from 'react';
import flexBoxVariants from './flexBoxVariants';

interface FlexBoxProps
  extends React.ComponentPropsWithoutRef<'div'>,
    VariantProps<typeof flexBoxVariants> {}

function FlexBox({
  xAlign,
  yAlign,
  direction,
  gap,
  className,
  children,
}: FlexBoxProps) {
  return (
    <div
      className={cn(
        flexBoxVariants({ xAlign, yAlign, direction, gap, className }),
      )}
    >
      {children}
    </div>
  );
}

export default FlexBox;
