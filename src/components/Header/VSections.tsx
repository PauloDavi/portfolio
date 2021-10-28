import { VStack, Box } from '@chakra-ui/react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useTranslation } from 'react-i18next';

import { MotionLink } from '../motion-chakra';
import { sections } from './sectionsData';

interface VSectionsProps {
  offset: number;
  onClick: () => void;
}

export function VSections({ offset, onClick }: VSectionsProps) {
  const { t } = useTranslation('common');

  return (
    <VStack spacing="4" mt="2" align="start">
      {sections.map((section, index) => (
        <AnchorLink
          key={section.title}
          href={section.href}
          offset={offset}
          onClick={onClick}
        >
          <MotionLink
            as="div"
            key={section.title}
            href={section.href}
            textTransform="uppercase"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              bounce: 0.35,
              delay: 0.1,
              duration: 0.6 + index * 0.1,
            }}
            whileHover={{
              scale: 1.1,
              color: 'var(--chakra-colors-gray-400)',
            }}
          >
            <Box as="li" listStyleType="none">
              {t(section.title)}
            </Box>
          </MotionLink>
        </AnchorLink>
      ))}
    </VStack>
  );
}
