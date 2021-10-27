import { Box } from '@chakra-ui/react';
import Head from 'next/head';

import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Home } from '../components/Home';
import { Skills } from '../components/Skills';

export default function App() {
  return (
    <>
      <Head>
        <title>Paulo Davi - Portfolio</title>
      </Head>
      <Box as="main">
        <Header />

        <Home />

        <About />

        <Skills />

        <Contact />

        <Footer />
      </Box>
    </>
  );
}
