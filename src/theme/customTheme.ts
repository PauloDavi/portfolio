import { extendTheme, Theme } from '@chakra-ui/react';

const theme: Partial<Theme> = {
  styles: {
    global: {
      'html, body': {
        color: 'gray.200',
        height: '100vh',
        backgroundColor: 'gray.800',
      },
    },
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
};

export const customTheme = extendTheme(theme);
