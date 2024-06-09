import { cva } from 'class-variance-authority';

const inputVariants = cva(
  'text-base font-medium min-w-72 min-h-12 px-3 border rounded-xl outline-none',
  {
    variants: {
      state: {
        default: 'border-violet-200 focus:border-violet-500 mb-5',
        error: 'border-red-300 focus:border-red-300 mb-0',
      },
    },
    defaultVariants: {
      state: 'default',
    },
  },
);

export default inputVariants;
