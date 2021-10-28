import { Box } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';

import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Home } from '../components/Home';
import { Skills } from '../components/Skills';

export default function App() {
  return (
    <>
      <NextSeo
        title="Paulo Davi - Portfolio"
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
