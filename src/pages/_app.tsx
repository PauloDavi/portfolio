import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app'

import { customTheme } from '../theme/customTheme';
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp