import { useEffect } from 'react';

import { Flex, Box, useMediaQuery, Text } from '@chakra-ui/react';
import { useAnimation } from 'framer-motion';
import { PolarArea } from 'react-chartjs-2';
import { AiOutlineGithub } from 'react-icons/ai';
import { DiReact } from 'react-icons/di';
import { FaNodeJs, FaDocker } from 'react-icons/fa';
import { SiNestjs, SiMongodb, SiTypescript, SiChakraui } from 'react-icons/si';
import { useInView } from 'react-intersection-observer';
import { Parallax } from 'react-parallax';

import { MotionFlex, MotionSimpleGrid } from './motion-chakra';
import { TecnoCard } from './TecnoCard';

const data = {
  labels: ['React.js', 'Next.js', 'Node.js', 'Nest.js', 'Git e Github'],
  datasets: [
    {
      label: 'Skills',
      data: [10, 7, 9, 7, 9],
      backgroundColor: [
        'rgba(54, 162, 235, 0.5)',
        'rgba(0, 0, 0, 0.2)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(255, 99, 132, 0.5)',
        'rgba(0, 0, 0, 0.4)',
      ],
      borderWidth: 1,
    },
  ],
};

const chartVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const tecnoContainer = {
  visible: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

const technologies = [
  {
    icon: DiReact,
    name: 'React.js',
  },
  {
    icon: FaNodeJs,
    name: 'Node.js',
  },
  {
    icon: SiTypescript,
    name: 'Typescript',
  },
  {
    icon: SiNestjs,
    name: 'Nest',
  },
  {
    image: '/images/next.png',
    name: 'Next',
  },
  {
    icon: SiMongodb,
    name: 'MongoDB',
  },
  {
    icon: AiOutlineGithub,
    name: 'Git e GitHub',
  },
  {
    icon: FaDocker,
    name: 'Docker',
  },
  {
    icon: SiChakraui,
    name: 'Chakra Ui',
  },
];

export function Skills() {
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
    <Box id="skills" as="section">
      <Parallax
        bgImage="/images/code.jpg"
        strength={500}
        bgImageAlt="code with coffee"
        bgImageStyle={{ objectFit: 'cover' }}
      >
        <Box minH="calc(100vh - 5.375rem)">
          <Flex
            p="8"
            justify="center"
            gridGap="8"
            mx="auto"
            maxW="container.xl"
            align="center"
            flexDir="column"
          >
            <Text
              backgroundColor="gray.800"
              border="4px"
              fontSize="4xl"
              fontWeight="bold"
              px="6"
              py="2"
              boxShadow="lg"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              Skills
            </Text>
            <Flex gridGap="12">
              <MotionFlex
                ref={ref}
                backgroundColor="white"
                boxShadow="dark-lg"
                justifyContent="center"
                initial="hidden"
                alignItems="center"
                flexDirection="column"
                animate={controls}
                variants={chartVariants}
                w={['sm', 'md', 'lg']}
                p="8"
                borderRadius="2xl"
              >
                <Text mb="2" fontSize="2xl" color="gray.700">
                  Principais Habilidades
                </Text>
                <PolarArea
                  data={data}
                  options={{
                    plugins: {
                      legend: {
                        position: 'bottom',
                      },
                    },
                  }}
                />
              </MotionFlex>

              {isLargerThan1000 && (
                <MotionSimpleGrid
                  initial="hidden"
                  color="gray.800"
                  animate={controls}
                  variants={tecnoContainer}
                  columns={3}
                  spacing={14}
                >
                  {technologies.map(tecno => (
                    <TecnoCard key={tecno.name} tecno={tecno} />
                  ))}
                </MotionSimpleGrid>
              )}
            </Flex>
          </Flex>
        </Box>
      </Parallax>
    </Box>
  );
}
