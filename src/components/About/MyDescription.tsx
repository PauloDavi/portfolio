import { Flex, Text } from '@chakra-ui/layout';
import { useTranslation } from 'react-i18next';

export function MyDescription() {
  const { t } = useTranslation('common');

  return (
    <Flex
      fontWeight="500"
      lineHeight="shorter"
      direction="column"
      w="full"
      maxW="lg"
      textAlign="justify"
    >
      <Text as="span">
        {`${t('ABOUT_PARAGRAPH_1_LABEL')} `}
        <Text as="span" fontWeight="bold" textDecoration="underline">
          Paulo Davi Alencar de Freias Araújo!
        </Text>
      </Text>

      <Text mt="4" as="p">
        {t('ABOUT_PARAGRAPH_2_LABEL')}
      </Text>

      <Text mt="4" as="p">
        {t('ABOUT_PARAGRAPH_3_LABEL')}
      </Text>

      <Text mt="4" as="p">
        {t('ABOUT_PARAGRAPH_4_LABEL')}
      </Text>
    </Flex>
  );
}
