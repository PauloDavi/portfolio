import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
  Image,
  Flex,
  Text,
} from '@chakra-ui/react';
import { i18n, useTranslation } from 'next-i18next';
import { useRouter } from 'next/dist/client/router';
import { MdKeyboardArrowDown } from 'react-icons/md';

import { MotionBox } from '../motion-chakra';

const languages = {
  pt: {
    title: 'PT_LABEL',
    flag: '/flags/pt.svg',
  },
  en: {
    title: 'EN_LABEL',
    flag: '/flags/en.svg',
  },
  es: {
    title: 'ES_LABEL',
    flag: '/flags/es.svg',
  },
};

export function LanguageToggleButton() {
  const { locale, pathname, push } = useRouter();
  const { t } = useTranslation('common');

  return (
    <MotionBox
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        type: 'spring',
        bounce: 0.35,
        delay: 0.1,
        duration: 0.5,
      }}
    >
      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton
              as={Button}
              rightIcon={
                <MotionBox
                  animate={{
                    rotate: isOpen ? 180 : 0,
                  }}
                >
                  <MdKeyboardArrowDown size="24" />
                </MotionBox>
              }
            >
              <Flex justify="center" align="center">
                <Image
                  w="1.5rem"
                  h="1.5rem"
                  borderRadius="full"
                  src={languages[locale as keyof typeof languages].flag}
                  alt={languages[locale as keyof typeof languages].title}
                />

                <Text ml="4" display={['none', 'block']}>
                  {t(languages[locale as keyof typeof languages].title)}
                </Text>
              </Flex>
            </MenuButton>

            <MenuList>
              {Object.entries(languages).map(([language, { title, flag }]) => (
                <MenuItem
                  key={title}
                  onClick={() => {
                    push(pathname, pathname, { locale: language });
                    i18n?.changeLanguage(language);
                  }}
                >
                  <Image
                    w="1.5rem"
                    h="1.5rem"
                    mr="4"
                    borderRadius="full"
                    src={flag}
                    alt={title}
                  />
                  <Text>{t(title)}</Text>
                </MenuItem>
              ))}
            </MenuList>
          </>
        )}
      </Menu>
    </MotionBox>
  );
}
