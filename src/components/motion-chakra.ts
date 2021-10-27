import {
  Flex,
  FlexProps,
  HStack,
  Link,
  LinkProps,
  StackProps,
  Text,
  TextProps,
  BoxProps,
  SimpleGridProps,
  SimpleGrid,
  Box,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

export const MotionText = motion<Omit<TextProps, 'transition'>>(Text);
export const MotionLink = motion<Omit<LinkProps, 'transition'>>(Link);
export const MotionSimpleGrid =
  motion<Omit<SimpleGridProps, 'transition'>>(SimpleGrid);
export const MotionBox = motion<Omit<BoxProps, 'transition'>>(Box);
export const MotionFlex = motion<Omit<FlexProps, 'transition'>>(Flex);
export const MotionHStack = motion<Omit<StackProps, 'transition'>>(HStack);
