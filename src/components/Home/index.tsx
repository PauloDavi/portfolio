import {
  Image,
  Text,
  HStack,
  Flex,
  useMediaQuery,
  Stack,
  Box,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { MdPhoneInTalk } from 'react-icons/md';

import { LinkButton } from '../LinkButton';
import { TypingText } from './TypingText';

export function Home() {
  const [isLargerThan950] = useMediaQuery('(min-width: 950px)');
  const { t } = useTranslation('common');

  return (
    <Box id="home" as="section">
      <HStack
        pt="5.375rem"
        h="100vh"
        mx="auto"
        maxW="container.xl"
        align="center"
        px="8"
      >
        <Flex
          direction="column"
          mx={isLargerThan950 ? 'none' : 'auto'}
          align={isLargerThan950 ? 'start' : 'center'}
        >
          <TypingText />

          <Text mt="12" fontSize="sm">
            João Pessoa, Paraíba - {t('BRAZIL_LABEL')}
          </Text>

          <Stack
            direction={{ base: 'column', sm: 'row' }}
            mt="6"
            spacing="4"
            fontSize="large"
          >
            <LinkButton href="#portfolio" backgroundColor="darkcyan">
              {t('HOME_MY_WORKS_LABEL')}
            </LinkButton>

            <LinkButton href="#contact" icon={MdPhoneInTalk}>
              {t('HOME_CONTACT_LABEL')}
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
