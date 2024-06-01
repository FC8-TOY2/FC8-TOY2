import { cva } from 'class-variance-authority';

const flexBoxVariants = cva('flex w-fit', {
  variants: {
    xAlign: { center: 'justify-center', start: 'justify-start' },
    yAlign: { center: 'items-center' },
    direction: { row: 'flex-row', column: 'flex-col' },
    gap: { none: '', oneHalf: 'gap-6' },
  },
  defaultVariants: {
    xAlign: 'center',
    yAlign: 'center',
    direction: 'row',
    gap: 'none',
  },
});

export default flexBoxVariants;
