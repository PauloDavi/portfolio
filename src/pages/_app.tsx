import { ChakraProvider } from '@chakra-ui/react';
import { appWithTranslation } from 'next-i18next';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import NextNprogress from 'nextjs-progressbar';

import { customTheme } from '../theme/customTheme';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <NextNprogress
        color="#008B8B"
        startPosition={0.3}
        stopDelayMs={200}
        options={{
          showSpinner: false,
        }}
        height={3}
        showOnShallow={true}
      />

      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://www.url.ie/',
          site_name: 'SiteName',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default appWithTranslation(MyApp);
