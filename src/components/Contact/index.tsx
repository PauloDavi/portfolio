import {
  Flex,
  Image,
  HStack,
  Text,
  Link,
  useMediaQuery,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { LinkButton } from '../LinkButton';
import { MotionLink } from '../motion-chakra';
import { linkIcons } from './linkIcons';

export function Contact() {
  const { t } = useTranslation('common');

  const [isLargerThan800] = useMediaQuery('(min-width: 800px)');

  return (
    <Flex
      id="contact"
      justifyContent="center"
      align="center"
      as="section"
      minH="calc(100vh - 5.375rem)"
      backgroundColor="darkcyan"
    >
      <Flex
        mx="auto"
        maxW="container.xl"
        gridGap="8"
        h="full"
        align="center"
        justifyContent="center"
        p="8"
      >
        {isLargerThan800 && (
          <div>
            <Image
              src="/images/profileDetails.svg"
              alt="profile details"
              w="full"
            />
          </div>
        )}

        <Flex flexDirection="column">
          <Text fontSize="4xl" fontWeight="bold">
            {t('CONTACT_HAS_SOME_IDIA_TITLE_LABEL')}
          </Text>

          <Text fontSize="xl">
            {t('CONTACT_HAS_SOME_IDIA_PARAGRAPH_LABEL')}
          </Text>

          <Text mt="8" fontSize="4xl" fontWeight="bold">
            {t('CONTACT_EMAIL_TITLE_LABEL')}
          </Text>

          <Link
            fontSize="xl"
            isExternal
            href="mailto:araujo.paulo.davi@gmail.com"
          >
            araujo.paulo.davi@gmail.com
          </Link>

          <HStack mt="8" spacing="4">
            {linkIcons.map((linkIcon, index) => (
              <MotionLink
                key={linkIcon.href}
                whileHover={{
                  scale: 1.1,
                  color: 'var(--chakra-colors-gray-400)',
                  transition: {
                    duration: 0.1,
                  },
                }}
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  type: 'spring',
                  bounce: 0.35,
                  delay: 0.1,
                  duration: 0.6 + index * 0.1,
                }}
                href={linkIcon.href}
                isExternal
              >
                {linkIcon.icon}
              </MotionLink>
            ))}
          </HStack>

          <LinkButton
            href="/curriculo_pauloDavi.pdf"
            backgroundColor="darkcyan"
            isExternal
            mt="8"
            mx="auto"
          >
            {t('CONTACT_CURRICULUM_LABEL')}
          </LinkButton>
        </Flex>
      </Flex>
    </Flex>
  );
}
