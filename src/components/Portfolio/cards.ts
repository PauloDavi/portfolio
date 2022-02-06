import { AiFillFilePdf } from 'react-icons/ai';
import { BsFillFilePostFill, BsSunFill } from 'react-icons/bs';
import { Md3DRotation, MdAttachMoney, MdPassword } from 'react-icons/md';

import { CardItemProps } from './CardItem';

export const cards: CardItemProps[] = [
  {
    title: 'COBEP 2021',
    text: 'Site oficial do Congresso Brasileiro de Eletrônica de Potência',
    color: 'darkcyan',
    modalContent: 'cobep',
    icon: BsSunFill,
  },
  {
    title: 'Gerador de senhas',
    text: 'Projeto de gerador de senhas aleatórias paramétricas',
    color: 'white',
    modalContent: 'password-generator',
    icon: MdPassword,
  },
  {
    title: 'Blog',
    text: 'Blog pessoal, feito utilizando NextJS com geração de paginas estáticas',
    color: 'darkcyan',
    modalContent: 'blog',
    icon: BsFillFilePostFill,
  },
  {
    title: 'MyMoney',
    text: 'Site de fluxo de finanças que guarda as informações no LocalStorage',
    color: 'white',
    modalContent: 'money',
    icon: MdAttachMoney,
  },
  {
    title: 'STL View',
    text: 'Visualizador 3D de arquivos STL diretamente no browser com informações espaciais da peça',
    color: 'darkcyan',
    modalContent: 'stl',
    icon: Md3DRotation,
  },
  {
    title: 'PDF OS Generator',
    text: 'Gerador de PDF para ordem de serviço inteiramente no browser',
    color: 'white',
    modalContent: 'pdf',
    icon: AiFillFilePdf,
  },
];
