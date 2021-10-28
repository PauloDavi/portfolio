import { HTMLMotionProps, motion, SVGMotionProps } from 'framer-motion';

interface MenuToggleButtonProps extends HTMLMotionProps<'button'> {
  onClick: () => void;
}

const Path = (props: SVGMotionProps<SVGPathElement>) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="var(--chakra-colors-gray-200)"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggleButton = (props: MenuToggleButtonProps) => (
  <motion.button
    whileHover={{
      scale: 1.1,
      color: 'var(--chakra-colors-gray-400)',
    }}
    initial={{ x: 200, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{
      type: 'spring',
      bounce: 0.35,
      delay: 0.1,
      duration: 0.6,
    }}
    {...props}
  >
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
      />
    </svg>
  </motion.button>
);
