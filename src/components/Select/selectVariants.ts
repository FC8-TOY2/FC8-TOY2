import { cva } from 'class-variance-authority';

const selectVariants = cva(
  'text-base font-medium min-w-72 min-h-12 px-3 border rounded-xl outline-none',
  {
    variants: {
      font: {
        value: 'text-black focus:text-black',
        placeholder: 'text-gray-400 focus:text-gray-400',
      },
      border: {
        default: 'border-violet-200 focus:border-violet-500',
        error: 'border-red-300 focus:border-red-300',
      },
    },
    defaultVariants: {
      font: 'value',
      border: 'default',
    },
  },
);

export default selectVariants;
