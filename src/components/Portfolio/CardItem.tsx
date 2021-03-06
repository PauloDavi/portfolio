import { useEffect, useMemo } from 'react';

import { Flex, Text, Box, Icon, useBoolean } from '@chakra-ui/react';
import { useAnimation, Variants } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { IconType } from 'react-icons';
import { useInView } from 'react-intersection-observer';

import { useModal } from '../../contexts/ModalContexts';
import { MotionBox, MotionFlex } from '../motion-chakra';

const iconVariants: Variants = {
  isHover: {
    top: '5rem',
    width: '8rem',
    borderRadius: '4rem',
    height: '8rem',
    transition: {
      ease: 'easeOut',
      type: 'tween',
      duration: 0.2,
      delay: 0.1,
    },
  },
  notIsHover: {
    top: '0',
    borderRadius: '0.75rem',
    width: '100%',
    height: '100%',
    transition: {
      ease: 'easeIn',
      type: 'tween',
      duration: 0.2,
    },
  },
};

const contentVariants: Variants = {
  isHover: {
    opacity: 1,
    y: 0,
  },
  notIsHover: {
    opacity: 0,
    y: 50,
    transition: {
      type: 'spring',
      bounce: 0.25,
      duration: 0.4,
    },
  },
};

export interface CardItemProps {
  title: string;
  text: string;
  color: 'white' | 'darkcyan';
  modalContent: string;
  isOpen: boolean;
  index: number;
  icon: IconType;
}

export function CardItem({
  title,
  text,
  color,
  modalContent,
  isOpen,
  index,
  icon,
}: CardItemProps) {
  const [isHover, setIsHover] = useBoolean(isOpen);
  const { onOpen } = useModal();
  const { t } = useTranslation('common');

  const controls = useAnimation();
  const { ref, inView } = useInView();

  const cardsVariants = useMemo<Variants>(
    () => ({
      hidden: { x: 20, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: 0.1 + 0.3 * index,
        },
      },
    }),
    [index],
  );

  useEffect(() => {
    controls.start('hidden');
  }, [controls]);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <MotionBox animate={controls} ref={ref} variants={cardsVariants}>
      <Flex
        shadow="2xl"
        direction="column"
        backgroundColor={color === 'darkcyan' ? 'white' : 'cyan.900'}
        color={color === 'darkcyan' ? 'gray.800' : 'white'}
        maxW="sm"
        onMouseEnter={() => !isOpen && setIsHover.on()}
        onMouseLeave={() => !isOpen && setIsHover.off()}
        position="relative"
        align="center"
        textAlign="center"
        p="8"
        as="button"
        onClick={() => onOpen(modalContent)}
        borderRadius="xl"
      >
        <MotionFlex
          borderRadius="xl"
          position="absolute"
          bg={color}
          boxShadow="2xl"
          justify="center"
          align="center"
          animate={isHover ? 'isHover' : 'notIsHover'}
          variants={iconVariants}
          color={color === 'darkcyan' ? 'white' : 'cyan.900'}
        >
          <Icon as={icon} w="5rem" h="auto" />
        </MotionFlex>

        <Box w="full" h="full" mt="12rem">
          <MotionFlex
            borderRadius="xl"
            justify="center"
            animate={isHover ? 'isHover' : 'notIsHover'}
            variants={contentVariants}
            align="center"
            direction="column"
          >
            <Text mt="8" fontSize="2xl" fontWeight="bold">
              {t(title)}
            </Text>

            <Text mt="2" fontSize="lg">
              {t(text)}
            </Text>
          </MotionFlex>
        </Box>
      </Flex>
    </MotionBox>
  );
}
