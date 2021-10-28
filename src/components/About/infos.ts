import { FaBirthdayCake, FaCity } from 'react-icons/fa';
import { IoMailSharp } from 'react-icons/io5';

export const infos = [
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
];

export const infosVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const infosContainerVariants = {
  visible: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};
