import { Box } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';
import { useTranslation } from 'react-i18next';

import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Home } from '../components/Home';
// import { Portfolio } from '../components/Portfolio';
import { Skills } from '../components/Skills';

export default function App() {
  const { t } = useTranslation('common');

  return (
    <>
      <NextSeo
        title={t('TITLE_LABEL')}
        description="Portfolio de Paulo Davi Alencar de Freitas Araújo feito em react.js e Next.js"
      />

      <Header />

      <Box as="main">
        <Home />
        <About />
        <Skills />
        <Contact />
      </Box>

      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common', 'footer'])),
    },
  };
};
