import { Box, Flex, Text, Link } from '@chakra-ui/react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export function Footer() {
  return (
    <Box as="footer" backgroundColor="gray.700" boxShadow="dark-lg">
      <Flex
        mx="auto"
        py="8"
        fontSize={{ base: 'md', sm: 'xl' }}
        px="12"
        maxW="container.xl"
        justifyContent="space-between"
        align="center"
      >
        <Text as="span">
          Copyright © {new Date().getFullYear()}{' '}
          <AnchorLink href="#home">
            <Link as="span" color="darkcyan">
              Paulo Davi
            </Link>
          </AnchorLink>
          . Todos os direitos reservados.
        </Text>

        <Text as="span">
          Designed by{' '}
          <AnchorLink href="#home">
            <Link as="span" color="darkcyan">
              Paulo Davi
            </Link>
          </AnchorLink>
        </Text>
      </Flex>
    </Box>
  );
}
