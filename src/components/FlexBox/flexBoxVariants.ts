import { cva } from 'class-variance-authority';

const flexBoxVariants = cva('flex', {
  variants: {
    width: { fit: 'w-fit', full: 'w-full' },
    xAlign: { center: 'justify-center', start: 'justify-start' },
    yAlign: { center: 'items-center' },
    direction: { row: 'flex-row', column: 'flex-col' },
    gap: { none: '', oneHalf: 'gap-6' },
  },
  defaultVariants: {
    width: 'fit',
    xAlign: 'center',
    yAlign: 'center',
    direction: 'row',
    gap: 'none',
  },
});

export default flexBoxVariants;
