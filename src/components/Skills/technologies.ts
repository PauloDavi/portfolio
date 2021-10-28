import { AiOutlineGithub } from 'react-icons/ai';
import { DiReact } from 'react-icons/di';
import { FaNodeJs, FaDocker } from 'react-icons/fa';
import { SiNestjs, SiMongodb, SiTypescript, SiChakraui } from 'react-icons/si';

export const tecnoContainer = {
  visible: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

export const technologies = [
  {
    icon: DiReact,
    name: 'React.js',
  },
  {
    icon: FaNodeJs,
    name: 'Node.js',
  },
  {
    icon: SiTypescript,
    name: 'Typescript',
  },
  {
    icon: SiNestjs,
    name: 'Nest',
  },
  {
    image: '/images/next.png',
    name: 'Next',
  },
  {
    icon: SiMongodb,
    name: 'MongoDB',
  },
  {
    icon: AiOutlineGithub,
    name: 'Git/GitHub',
  },
  {
    icon: FaDocker,
    name: 'Docker',
  },
  {
    icon: SiChakraui,
    name: 'Chakra Ui',
  },
];
