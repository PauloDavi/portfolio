import { Variants } from 'framer-motion';

export const menuVariants: Variants = {
  open: {
    height: '18rem',
    transition: {
      type: 'spring',
    },
  },
  closed: {
    height: '5.375rem',
    transition: {
      type: 'tween',
    },
  },
};
