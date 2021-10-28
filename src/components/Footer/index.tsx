import { Box, Flex, Text, Link } from '@chakra-ui/react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation('common');

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
          . {t('FOOTER_DIRECTS_LABEL')}
        </Text>

        <Text as="span">
          {`${t('FOOTER_DESIGNED_BY_LABEL')} `}
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
