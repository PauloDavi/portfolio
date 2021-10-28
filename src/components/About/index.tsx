import { Flex, Text, Image, useMediaQuery, Box } from '@chakra-ui/react';

import { MyDescription } from './MyDescription';

export function About() {
  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)');

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
          justifyContent={!isLargerThan1000 ? 'space-between' : 'center'}
          w="full"
        >
          {isLargerThan1000 && (
            <Image src="/images/freelancer.svg" w="25rem" alt="Programador" />
          )}

          <MyDescription />
        </Flex>
      </Flex>
    </Box>
  );
}
