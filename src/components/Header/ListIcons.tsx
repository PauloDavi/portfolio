import { MotionLink } from '../motion-chakra';
import { linkIcons } from './linkIconsData';

export function ListIcons() {
  return (
    <>
      {linkIcons.map((linkIcon, index) => (
        <MotionLink
          key={linkIcon.href}
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
            duration: 0.6 + index * 0.1,
          }}
          href={linkIcon.href}
          isExternal
        >
          {linkIcon.icon}
        </MotionLink>
      ))}
    </>
  );
}
