import { AiFillFilePdf } from 'react-icons/ai';
import { BsFillFilePostFill, BsSunFill } from 'react-icons/bs';
import { Md3DRotation, MdAttachMoney, MdPassword } from 'react-icons/md';

import { CardItemProps } from './CardItem';

export const cards: CardItemProps[] = [
  {
    title: 'CARD_TITLE_1',
    text: 'CARD_TEXT_1',
    color: 'darkcyan',
    modalContent: 'cobep',
    icon: BsSunFill,
  },
  {
    title: 'CARD_TITLE_2',
    text: 'CARD_TEXT_2',
    color: 'white',
    modalContent: 'password-generator',
    icon: MdPassword,
  },
  {
    title: 'CARD_TITLE_3',
    text: 'CARD_TEXT_3',
    color: 'darkcyan',
    modalContent: 'blog',
    icon: BsFillFilePostFill,
  },
  {
    title: 'CARD_TITLE_4',
    text: 'CARD_TEXT_4',
    color: 'white',
    modalContent: 'money',
    icon: MdAttachMoney,
  },
  {
    title: 'CARD_TITLE_5',
    text: 'CARD_TEXT_5',
    color: 'darkcyan',
    modalContent: 'stl',
    icon: Md3DRotation,
  },
  {
    title: 'CARD_TITLE_6',
    text: 'CARD_TEXT_6',
    color: 'white',
    modalContent: 'pdf',
    icon: AiFillFilePdf,
  },
];
