import { HStack, useMediaQuery, Box } from '@chakra-ui/react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useTranslation } from 'react-i18next';

import { MotionLink } from '../motion-chakra';
import { sections } from './sectionsData';

interface SectionsProps {
  offset: number;
}

export function Sections({ offset }: SectionsProps) {
  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)');
  const { t } = useTranslation('common');

  return (
    <>
      {isLargerThan1000 && (
        <HStack
          as="ul"
          spacing="6"
          fontSize="xl"
          listStyleType="none"
          fontWeight="light"
        >
          {sections.map((section, index) => (
            <Box as="li" key={section.title}>
              <AnchorLink href={section.href} offset={offset}>
                <MotionLink
                  as="div"
                  textTransform="uppercase"
                  initial={{ y: -200, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
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
                  <Box listStyleType="none">{t(section.title)}</Box>
                </MotionLink>
              </AnchorLink>
            </Box>
          ))}
        </HStack>
      )}
    </>
  );
}
