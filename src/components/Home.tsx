import {
  Image,
  Text,
  HStack,
  Flex,
  useMediaQuery,
  Stack,
  Box,
} from '@chakra-ui/react';
import { MdPhoneInTalk } from 'react-icons/md';
import Typewriter from 'typewriter-effect';

import { LinkButton } from './LinkButton';

export function Home() {
  const [isLargerThan950] = useMediaQuery('(min-width: 950px)');

  return (
    <Box id="home" as="section">
      <HStack
        pt="5.375rem"
        h="100vh"
        mx="auto"
        maxW="container.xl"
        align="center"
        justifyContent={!isLargerThan950 ? 'space-between' : 'center'}
        px="8"
      >
        <Flex direction="column" align={isLargerThan950 ? 'start' : 'center'}>
          <Text as="h2" fontSize="7xl" lineHeight="none">
            Oi eu sou,
          </Text>
          <Text as="div" fontSize="7xl" lineHeight="none" fontWeight="bold">
            <Typewriter
              options={{
                loop: true,
              }}
              onInit={typewriter => {
                typewriter
                  .typeString('Developer')
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString('FullStack')
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString('Paulo Davi')
                  .pauseFor(2500)
                  .deleteAll()
                  .start();
              }}
            />
          </Text>
          <Text mt="12" fontSize="sm">
            em João Pessoa, Paraíba - Brasil
          </Text>
          <Stack
            direction={{ base: 'column', sm: 'row' }}
            mt="6"
            spacing="4"
            fontSize="large"
          >
            <LinkButton href="#portfolio" backgroundColor="darkcyan">
              Meus Trabalhos
            </LinkButton>
            <LinkButton href="#contact" icon={MdPhoneInTalk}>
              Contate-me
            </LinkButton>
          </Stack>
        </Flex>

        {isLargerThan950 && (
          <Image src="/images/dev.svg" w="30rem" alt="Programador" />
        )}
      </HStack>
    </Box>
  );
}
