import { Flex, Text } from '@chakra-ui/layout';

export function MyDescription() {
  return (
    <Flex
      fontWeight="500"
      lineHeight="shorter"
      direction="column"
      w="full"
      maxW="lg"
      textAlign="justify"
    >
      <Text as="span">
        Olá, sou{' '}
        <Text as="span" fontWeight="bold" textDecoration="underline">
          Paulo Davi Alencar de Freias Araújo!
        </Text>
      </Text>

      <Text mt="4" as="p">
        Sou apaixonado por programação desde a adolescência, mas acabei cursado
        engenharia elétrica na UFPB, onde me envolvi ainda mais com programação
        em projetos extra curriculares
      </Text>

      <Text mt="4" as="p">
        Movido por essa paixão aprendi a stack React.js Node.js e Typescript
        principalmente com os conteúdos da RocketSeat e acabei conseguindo um
        trabalho freelancer como fullstack durante a pandemia onde desenvolvi
        soft e hard skills.
      </Text>

      <Text mt="4" as="p">
        Trabalhei principalmente com React,js no desenvolvimento de dashboards e
        Node.js na criação de api rest com mongoDB e microsserviços para gcloud,
        ambas as tecnologias utilizadas em conjunto com typescript.
      </Text>
    </Flex>
  );
}
