import { useEffect } from 'react';

import {
  Flex,
  Text,
  Image,
  Link,
  useMediaQuery,
  Icon,
  Box,
} from '@chakra-ui/react';
import { useAnimation } from 'framer-motion';
import { FaBirthdayCake, FaCity } from 'react-icons/fa';
import { IoMailSharp } from 'react-icons/io5';
import { useInView } from 'react-intersection-observer';

import { MotionFlex } from './motion-chakra';

const infos = [
  {
    title: 'E-mail:',
    info: 'araujo.paulo.davi@gmail.com',
    icon: IoMailSharp,
    href: 'mailto:araujo.paulo.davi@gmail.com',
  },
  {
    title: 'Nascimento:',
    icon: FaBirthdayCake,
    info: 'Agosto, 1998',
  },
  {
    title: 'De:',
    icon: FaCity,
    info: 'João Pessoa, PB',
  },
];

const infosVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const infosContainer = {
  visible: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

export function About() {
  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)');

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
    <Box
      id="about"
      as="section"
      minH="calc(100vh - 5.375rem)"
      backgroundColor="darkcyan"
    >
      <Flex
        mx="auto"
        maxW="container.xl"
        align="center"
        direction="column"
        p="8"
      >
        <Text as="h2" fontSize="5xl" fontWeight="bold">
          Me Conheça Mais
        </Text>
        <Flex
          mt="8"
          fontSize="large"
          justify={isLargerThan1000 ? 'space-between' : 'center'}
          w="full"
        >
          {isLargerThan1000 && (
            <Image src="/images/freelancer.svg" w="25rem" alt="Programador" />
          )}

          <Flex
            fontWeight="500"
            lineHeight="shorter"
            direction="column"
            w="full"
            maxW="lg"
            textAlign="justify"
          >
            <Text as="span">
              Olá, sou{' '}
              <Text as="span" fontWeight="bold" textDecoration="underline">
                Paulo Davi Alencar de Freias Araújo!
              </Text>
            </Text>
            <Text mt="4" as="p">
              Eu sou um desenvolvedor e bla bla bla bla bla bla bla bla bla bla
              bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
              bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
              bla bla.
            </Text>
            <Text mt="4" as="p">
              bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
              bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
              bla bla bla bla bla bla bla bla bla bla bla bla.
            </Text>
            <Text mt="4" as="p">
              bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
              bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
              bla bla bla bla bla bla bla bla bla bla bla bla.
            </Text>
          </Flex>
        </Flex>

        <MotionFlex
          w="full"
          color="gray.600"
          justify="space-around"
          mt="12"
          gridGap="4"
          flexDirection={{ base: "column", md: "row" }}
          initial="hidden"
          variants={infosContainer}
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
      </Flex>
    </Box>
  );
}
