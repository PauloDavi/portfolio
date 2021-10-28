import { FaBirthdayCake, FaCity } from 'react-icons/fa';
import { IoMailSharp } from 'react-icons/io5';

export const infos = [
  {
    title: 'E-mail:',
    info: 'araujo.paulo.davi@gmail.com',
    icon: IoMailSharp,
    href: 'mailto:araujo.paulo.davi@gmail.com',
  },
  {
    title: 'Nascimento:',
    icon: FaBirthdayCake,
    info: 'Agosto, 1998',
  },
  {
    title: 'De:',
    icon: FaCity,
    info: 'João Pessoa, PB',
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
