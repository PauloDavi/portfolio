import { Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export function TitlePortfolio() {
  const { t } = useTranslation('common');

  return (
    <Text
      backgroundColor="cyan.900"
      border="4px"
      fontSize="4xl"
      fontWeight="bold"
      px="6"
      py="2"
      boxShadow="lg"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {t('PORTFOLIO_TITLE_LABEL')}
    </Text>
  );
}
