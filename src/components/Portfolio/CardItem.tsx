import { Flex, Text, Box, Icon, useBoolean } from '@chakra-ui/react';
import { IconType } from 'react-icons';

import { MotionFlex } from '../motion-chakra';

const iconVariants = {
  isHover: {
    top: '5rem',
    width: '8rem',
    borderRadius: '4rem',
    height: '8rem',
  },
  notIsHover: {
    top: '0',
    borderRadius: '0.75rem',
    width: '100%',
    height: '100%',
  },
};

const contentVariants = {
  isHover: {
    opacity: 1,
    y: 0,
  },
  notIsHover: {
    opacity: 0,
    y: 50,
  },
};

export interface CardItemProps {
  title: string;
  text: string;
  color: 'white' | 'darkcyan';
  icon: IconType;
}

export function CardItem({ title, text, color, icon }: CardItemProps) {
  const [isHover, setIsHover] = useBoolean(false);

  return (
    <Flex
      shadow="2xl"
      direction="column"
      backgroundColor={color === 'darkcyan' ? 'white' : 'cyan.900'}
      color={color === 'darkcyan' ? 'gray.800' : 'white'}
      maxW="sm"
      onMouseEnter={setIsHover.on}
      onMouseLeave={setIsHover.off}
      position="relative"
      align="center"
      textAlign="center"
      p="8"
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
            {title}
          </Text>

          <Text mt="2" fontSize="lg">
            {text}
          </Text>
        </MotionFlex>
      </Box>
    </Flex>
  );
}
