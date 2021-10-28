import { Flex, Box } from '@chakra-ui/react';
import { useAnimation } from 'framer-motion';
import { Parallax } from 'react-parallax';

import { ChartSkill } from './ChartSkill';
import { TechnologiesList } from './TechnologiesList';
import { TitleSkill } from './TitleSkill';

export function Skills() {
  const controls = useAnimation();

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
            <TitleSkill />

            <Flex gridGap="12">
              <ChartSkill controls={controls} />

              <TechnologiesList controls={controls} />
            </Flex>
          </Flex>
        </Box>
      </Parallax>
    </Box>
  );
}
