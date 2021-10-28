import { useEffect } from 'react';

import { Flex, Text, Link, Icon } from '@chakra-ui/react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { MotionFlex } from '../motion-chakra';
import { infos, infosContainerVariants, infosVariants } from './infos';

export function MyInfos() {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <MotionFlex
      w="full"
      color="gray.600"
      justify="space-around"
      mt="12"
      gridGap="4"
      flexDirection={{ base: 'column', md: 'row' }}
      initial="hidden"
      variants={infosContainerVariants}
      animate={controls}
      ref={ref}
    >
      {infos.map(info => (
        <MotionFlex
          key={info.title}
          boxShadow="xl"
          variants={infosVariants}
          whileHover={{
            scale: 1.1,
          }}
          initial={{
            scale: 1,
          }}
          backgroundColor="whiteAlpha.900"
          borderRadius="md"
          px="6"
          py="4"
          fontSize="large"
          direction="column"
          align="start"
        >
          <Flex align="center">
            <Icon as={info.icon} mr="2" />
            <Text color="gray.600">{info.title}</Text>
          </Flex>

          {info.href ? (
            <Link href={info.href} fontWeight="bold">
              {info.info}
            </Link>
          ) : (
            <Text fontWeight="bold">{info.info}</Text>
          )}
        </MotionFlex>
      ))}
    </MotionFlex>
  );
}
