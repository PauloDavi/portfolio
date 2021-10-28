import { Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import Typewriter from 'typewriter-effect';

export function TypingText() {
  const { t } = useTranslation('common');

  return (
    <>
      <Text as="h2" fontSize="7xl" lineHeight="none">
        {t('HOME_TITLE_LABEL')}
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
    </>
  );
}
