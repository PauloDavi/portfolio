import {
  Image,
  Icon,
  useBoolean,
  Box,
  Flex,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import ReactCardFlip from 'react-card-flip';
import { IconType } from 'react-icons';

import { MotionBox } from '../motion-chakra';

interface TecnoCardProps {
  tecno:
    | {
        icon: IconType;
        name: string;
        image?: undefined;
      }
    | {
        image: string;
        name: string;
        icon?: undefined;
      };
}

const tecnoVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export function TecnoCard({ tecno }: TecnoCardProps) {
  const [isHover, setIsHover] = useBoolean();
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)');

  return (
    <Box onMouseEnter={setIsHover.on} onMouseLeave={setIsHover.off}>
      <MotionBox variants={tecnoVariants}>
        <ReactCardFlip
          isFlipped={isHover}
          flipDirection="horizontal"
          containerStyle={{ height: 'full' }}
        >
          <Box
            bg="white"
            borderRadius="2xl"
            w="9rem"
            h={isLargerThan600 ? '9rem' : '12rem'}
            boxShadow="dark-lg"
            p="8"
          >
            <Flex direction="column" align="center" justify="center" h="full">
              {tecno.image ? (
                <Image src={tecno.image} alt={tecno.name} width="full" />
              ) : (
                <Icon as={tecno.icon} w="5rem" h="auto" />
              )}

              {!isLargerThan600 && (
                <Text mt="4" textAlign="center" fontSize="xl" fontWeight="bold">
                  {tecno.name}
                </Text>
              )}
            </Flex>
          </Box>

          <Box
            bg="white"
            borderRadius="2xl"
            w="9rem"
            h="9rem"
            boxShadow="dark-lg"
            p="8"
          >
            <Flex align="center" justify="center" h="full">
              <Text textAlign="center" fontSize="2xl" fontWeight="bold">
                {tecno.name}
              </Text>
            </Flex>
          </Box>
        </ReactCardFlip>
      </MotionBox>
    </Box>
  );
}
