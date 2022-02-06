import { useEffect, useMemo } from 'react';

import { Flex, Text, Link, Icon } from '@chakra-ui/react';
import { useAnimation } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaBirthdayCake, FaCity } from 'react-icons/fa';
import { IoMailSharp } from 'react-icons/io5';
import { useInView } from 'react-intersection-observer';

import { calcAge } from '../../utils/calcAge';
import { MotionFlex } from '../motion-chakra';
import { infosContainerVariants, infosVariants } from './infos';

export function MyInfos() {
  const { t } = useTranslation('common');

  const controls = useAnimation();
  const { ref, inView } = useInView();

  const infos = useMemo(
    () => [
      {
        title: 'E-mail:',
        translateTitle: false,
        info: 'araujo.paulo.davi@gmail.com',
        translateInfo: false,
        href: 'mailto:araujo.paulo.davi@gmail.com',
        icon: IoMailSharp,
      },
      {
        title: 'ABOUT_BIRTH_TITLE_LABEL',
        translateTitle: true,
        info: 'ABOUT_BIRTH_DATA_LABEL',
        translateInfo: true,
        icon: FaBirthdayCake,
      },
      {
        title: 'ABOUT_FROM_TITLE_LABEL',
        translateTitle: true,
        info: 'João Pessoa, PB',
        translateInfo: false,
        icon: FaCity,
      },
    ],
    [],
  );

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <MotionFlex
      w="full"
      color="gray.600"
      justify="space-around"
      mt="12"
      gridGap="4"
      flexDirection={{ base: 'column', md: 'row' }}
      initial="hidden"
      variants={infosContainerVariants}
      animate={controls}
      ref={ref}
    >
      {infos.map(info => (
        <MotionFlex
          key={info.title}
          boxShadow="xl"
          variants={infosVariants}
          whileHover={{
            scale: 1.1,
          }}
          initial={{
            scale: 1,
          }}
          backgroundColor="whiteAlpha.900"
          borderRadius="md"
          px="6"
          py="4"
          fontSize="large"
          direction="column"
          align="start"
        >
          <Flex align="center">
            <Icon as={info.icon} mr="2" />
            <Text color="gray.600">
              {info.translateTitle ? t(info.title) : info.title}
            </Text>
          </Flex>

          {info.href ? (
            <Link href={info.href} fontWeight="bold">
              {info.translateInfo ? t(info.info) : info.info}
            </Link>
          ) : (
            <Text fontWeight="bold">
              {info.translateInfo
                ? info.info === 'ABOUT_BIRTH_DATA_LABEL'
                  ? `${t(info.info)} (${calcAge(new Date('1998-08-14'))} ${t(
                      'YEARS_LABEL',
                    )})`
                  : t(info.info)
                : info.info}
            </Text>
          )}
        </MotionFlex>
      ))}
    </MotionFlex>
  );
}
