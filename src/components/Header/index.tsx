import { useEffect, useState } from 'react';

import { HStack, useBoolean, useMediaQuery, Box } from '@chakra-ui/react';

import { MotionFlex, MotionText } from '../motion-chakra';
import { LanguageToggleButton } from './LanguageToggleButton';
import { ListIcons } from './ListIcons';
import { MenuToggleButton } from './MenuToggleButton';
import { menuVariants } from './menuVariants';
import { Sections } from './Sections';
import { VSections } from './VSections';

export function Header() {
  const [isOpen, setIsOpen] = useBoolean();
  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)');
  const [isLargerThan1080] = useMediaQuery('(min-width: 1080px)');
  const [isLargerThan720] = useMediaQuery('(min-width: 720px)');
  const [isLargerThan400] = useMediaQuery('(min-width: 400px)');
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const px = 5.375;
    if (isLargerThan1080) {
      setOffset(16 * px);
    } else if (isLargerThan720) {
      setOffset(15 * px);
    } else if (isLargerThan400) {
      setOffset(14 * px);
    } else {
      setOffset(13 * px);
    }
  }, [isLargerThan1080, isLargerThan720, isLargerThan400]);

  return (
    <Box
      backgroundColor="gray.700"
      as="nav"
      zIndex="999"
      w="full"
      boxShadow="dark-lg"
      position="fixed"
    >
      <MotionFlex
        w="full"
        py="4"
        px="8"
        mx="auto"
        maxW="container.xl"
        flexDirection="column"
        animate={isOpen && !isLargerThan1000 ? 'open' : 'closed'}
        variants={menuVariants}
      >
        <MotionFlex justify="space-between">
          <MotionText
            initial={{ x: -400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              bounce: 0.35,
              delay: 0.1,
              duration: 0.6,
            }}
            fontWeight="bold"
            fontSize="4xl"
            as="h1"
          >
            Paulo Davi
          </MotionText>

          <Sections offset={offset} />

          <HStack spacing="4">
            <LanguageToggleButton />

            {isLargerThan1000 ? (
              <ListIcons />
            ) : (
              <MenuToggleButton onClick={setIsOpen.toggle} />
            )}
          </HStack>
        </MotionFlex>

        <MotionFlex
          variants={{
            open: {
              height: 'full',
            },
            closed: {
              height: '0',
            },
          }}
        >
          {isOpen && !isLargerThan1000 && (
            <VSections offset={offset} onClick={setIsOpen.toggle} />
          )}
        </MotionFlex>
      </MotionFlex>
    </Box>
  );
}
