import {
  Button,
  Icon,
  Image,
  ListItem,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { AiFillGithub } from 'react-icons/ai';
import { BiLinkExternal } from 'react-icons/bi';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface ModalProps {
  title: string;
  images: {
    source: string;
    alt: string;
  }[];
  description: string;
  technologies: string[];
  demoLink: string;
  githubLink: string;
}

export function CustomModal({
  title,
  images,
  description,
  technologies,
  demoLink,
  githubLink,
}: ModalProps) {
  const { t } = useTranslation('common');

  return (
    <ModalContent>
      <ModalHeader>{title}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Carousel autoPlay infiniteLoop showStatus={false}>
          {images.map(({ source, alt }) => (
            <div key={source}>
              <Image src={source} alt={alt} borderRadius="4" />
            </div>
          ))}
        </Carousel>

        <Text mt="-8" mb="4">
          {description}
        </Text>

        <Text fontWeight="bold" fontSize="xl">
          {t('CARD_MODAL_TECHNOLOGIES')}:
        </Text>
        <UnorderedList>
          {technologies.map(technology => (
            <ListItem key={technology}>{technology}</ListItem>
          ))}
        </UnorderedList>
      </ModalBody>

      <ModalFooter display="flex" gridGap="4" justifyContent="center">
        <Button
          isFullWidth
          target="_blank"
          colorScheme="teal"
          as="a"
          href={demoLink}
        >
          Demo <Icon as={BiLinkExternal} mx="2px" />
        </Button>
        <Button
          isFullWidth
          target="_blank"
          colorScheme="purple"
          as="a"
          href={githubLink}
        >
          Github <Icon as={AiFillGithub} mx="2px" />
        </Button>
      </ModalFooter>
    </ModalContent>
  );
}
