import { cva } from 'class-variance-authority';

const buttonVariants = cva(
  'flex justify-center items-center font-bold rounded-xl py-2.5 px-12 border',
  {
    variants: {
      intent: {
        default:
          'bg-violet-500 text-white hover:bg-white hover:text-violet-500 hover:border hover:border-violet-500',
        reverse:
          'bg-white text-violet-500 border border-violet-500 hover:bg-violet-500 hover:text-white hover:border-transparent',
      },
    },
    defaultVariants: {
      intent: 'default',
    },
  },
);

export default buttonVariants;
