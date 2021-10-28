import {
  Flex,
  Image,
  HStack,
  Text,
  Link,
  useMediaQuery,
} from '@chakra-ui/react';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';

import { LinkButton } from './LinkButton';
import { MotionLink } from './motion-chakra';

const linkIcons = [
  {
    icon: <AiFillGithub size="32" />,
    href: 'https://github.com/PauloDavi',
  },
  {
    icon: <AiFillLinkedin size="32" />,
    href: 'https://www.linkedin.com/in/paulo-davi-araujo',
  },
  {
    icon: <AiOutlineMail size="32" />,
    href: 'mailto:araujo.paulo.davi@gmail.com',
  },
];

export function Contact() {
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
            Tem uma ideia?
          </Text>
          <Text fontSize="xl">
            Se gostou do meu trabalho e tem ideias para por em pratica. Entre em
            contato!
          </Text>
          <Text mt="8" fontSize="4xl" fontWeight="bold">
            E-mail:
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
            href="/curiculo.pdf"
            backgroundColor="darkcyan"
            isExternal
            mt="8"
            mx="auto"
          >
            Curriculo
          </LinkButton>
        </Flex>
      </Flex>
    </Flex>
  );
}
