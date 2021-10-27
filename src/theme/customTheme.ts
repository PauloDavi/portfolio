import { extendTheme } from '@chakra-ui/react';

export const customTheme = extendTheme({
  styles: {
    global: {
      'html, body': {
        color: 'gray.200',
        height: '100vh',
        backgroundColor: 'gray.800',
      },
    },
  },
});
