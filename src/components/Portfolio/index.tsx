import { Flex, SimpleGrid } from '@chakra-ui/react';

import { CardItem } from './CardItem';
import { cards } from './cards';
import { TitlePortfolio } from './TitlePortfolio';

export function Portfolio() {
  return (
    <Flex
      id="portfolio"
      justifyContent="center"
      align="center"
      as="section"
      minH="calc(100vh - 5.375rem)"
    >
      <Flex
        mx="auto"
        maxW="container.xl"
        gridGap="8"
        direction="column"
        h="full"
        align="center"
        justifyContent="center"
        px="8"
        py="10"
      >
        <TitlePortfolio />

        <SimpleGrid spacing="8" columns={[1, 1, 2, 2, 3]}>
          {cards.map(card => (
            <CardItem key={card.title} {...card} />
          ))}
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
