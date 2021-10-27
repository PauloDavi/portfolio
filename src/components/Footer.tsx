import { Box, Flex, Text } from '@chakra-ui/react';

export function Footer() {
  return (
    <Box as="footer" backgroundColor="gray.700" boxShadow="dark-lg">
      <Flex
        mx="auto"
        py="8"
        fontSize={{base: "md", sm: "xl"}}
        px="12"
        maxW="container.xl"
        justify="space-between"
        align="center"
      >
        <Text as="span">
          Copyright © {new Date().getFullYear()}{' '}
          <Text as="span" color="darkcyan" textDecor="underline">
            Paulo Davi
          </Text>
          . Todos os direitos reservados.
        </Text>

        <Text as="span">
          Designed by{' '}
          <Text as="span" color="darkcyan" textDecor="underline">
            Paulo Davi
          </Text>
        </Text>
      </Flex>
    </Box>
  );
}
