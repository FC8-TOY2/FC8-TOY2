import { cva } from 'class-variance-authority';

const textareaVariants = cva(
  'text-base font-medium min-w-[57rem] min-h-40 px-3 py-2 border rounded-xl outline-none block',
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

export default textareaVariants;
