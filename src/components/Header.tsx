import { useEffect, useState } from 'react';

import {
  HStack,
  useBoolean,
  useMediaQuery,
  Box,
  VStack,
} from '@chakra-ui/react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';

import { MenuToggleButton } from './MenuToggleButton';
import { MotionFlex, MotionLink, MotionText } from './motion-chakra';

const sections = [
  {
    title: 'home',
    href: '#home',
  },
  {
    title: 'sobre',
    href: '#about',
  },
  {
    title: 'skills',
    href: '#skills',
  },
  {
    title: 'contato',
    href: '#contact',
  },
];

const linkIcons = [
  {
    icon: <AiFillGithub size="32" />,
    href: 'https://github.com/PauloDavi',
  },
  {
    icon: <AiFillLinkedin size="32" />,
    href: 'https://www.linkedin.com/in/paulo-davi-araujo',
  },
  {
    icon: <AiOutlineMail size="32" />,
    href: 'mailto:araujo.paulo.davi@gmail.com',
  },
];

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
        variants={{
          open: {
            height: '20.625rem',
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
        }}
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
                      <Box listStyleType="none">{section.title}</Box>
                    </MotionLink>
                  </AnchorLink>
                </Box>
              ))}
            </HStack>
          )}

          <HStack spacing="4">
            {isLargerThan1000 ? (
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
            ) : (
              <MenuToggleButton
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
                onClick={setIsOpen.toggle}
              />
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
            <VStack spacing="4" mt="2" align="start">
              {sections.map((section, index) => (
                <AnchorLink
                  key={section.title}
                  href={section.href}
                  offset={offset}
                  onClick={setIsOpen.toggle}
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
                      {section.title}
                    </Box>
                  </MotionLink>
                </AnchorLink>
              ))}
            </VStack>
          )}
        </MotionFlex>
      </MotionFlex>
    </Box>
  );
}
