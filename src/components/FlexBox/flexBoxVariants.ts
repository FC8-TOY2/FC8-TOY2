import { cva } from 'class-variance-authority';

const flexBoxVariants = cva('flex', {
  variants: {
    xAlign: { center: 'justify-center', start: 'justify-start' },
    yAlign: { center: 'items-center' },
    direction: { row: 'flex-row', column: 'flex-col' },
  },
  defaultVariants: { xAlign: 'center', yAlign: 'center', direction: 'row' },
});

export default flexBoxVariants;
