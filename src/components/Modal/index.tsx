import { Modal, ModalOverlay } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

import { useModal } from '../../contexts/ModalContexts';
import { CustomModal } from './CustomModal';

export function PortfolioModal() {
  const { isOpen, onClose, content } = useModal();
  const { t } = useTranslation('common');

  function selectContent() {
    switch (content) {
      case 'cobep':
        return {
          title: t('CARD_MODAL_TITLE_1'),
          images: [
            { source: '/images/cobep/cobep.png', alt: 'COBEP 1' },
            { source: '/images/cobep/cobep1.png', alt: 'COBEP 2' },
            { source: '/images/cobep/cobep2.png', alt: 'COBEP 3' },
          ],
          description: t('CARD_MODAL_DESCRIPTION_1'),
          technologies: [
            'Tailwind',
            'Next',
            'Next-i18next',
            'Typescript',
            'Framer-Motion',
            'Material-UI',
          ],
          demoLink: 'https://cobep.vercel.app/',
          githubLink: 'https://github.com/PauloDavi/next-cobep',
        };
      case 'blog':
        return {
          title: t('CARD_MODAL_TITLE_2'),
          images: [
            { source: '/images/blog/blog.png', alt: 'blog 1' },
            { source: '/images/blog/blog1.png', alt: 'blog 2' },
          ],
          description: t('CARD_MODAL_DESCRIPTION_2'),
          technologies: ['Next', 'Typescript', 'Next-Seo', 'Remark'],
          demoLink: 'https://my-blog-flax.vercel.app/',
          githubLink: 'https://github.com/PauloDavi/my-blog',
        };
      case 'money':
        return {
          title: t('CARD_MODAL_TITLE_3'),
          images: [
            { source: '/images/money/money.png', alt: 'money 1' },
            { source: '/images/money/money1.png', alt: 'money 2' },
          ],
          description: t('CARD_MODAL_DESCRIPTION_3'),
          technologies: [
            'Next',
            'Typescript',
            'Framer-Motion',
            'Chakra-UI',
            'React-Hook-Form',
          ],
          demoLink: 'https://my-money-dusky.vercel.app/',
          githubLink: 'https://github.com/PauloDavi/my-money',
        };
      case 'stl':
        return {
          title: t('CARD_MODAL_TITLE_4'),
          images: [
            { source: '/images/stl/stl.png', alt: 'stl 1' },
            { source: '/images/stl/stl1.png', alt: 'stl 2' },
          ],
          description: t('CARD_MODAL_DESCRIPTION_4'),
          technologies: ['Typescript', 'React-Three-Fiber', 'Chakra-UI'],
          demoLink: 'http://paulodavi.me/stl-view/',
          githubLink: 'https://github.com/PauloDavi/stl-view',
        };
      case 'pdf':
        return {
          title: t('CARD_MODAL_TITLE_5'),
          images: [
            { source: '/images/pdf/pdf.png', alt: 'pdf 1' },
            { source: '/images/pdf/pdf1.png', alt: 'pdf 2' },
          ],
          description: t('CARD_MODAL_DESCRIPTION_5'),
          technologies: ['Typescript', 'Formsy', 'React-Pdf', 'Material-UI'],
          demoLink: 'http://paulodavi.me/pdf-os-generator/',
          githubLink: 'https://github.com/PauloDavi/pdf-os-generator',
        };
      default:
        return {
          title: t('CARD_MODAL_TITLE_6'),
          images: [
            {
              source: '/images/password-generator/password-generator.png',
              alt: 'password generator 1',
            },
            {
              source: '/images/password-generator/password-generator1.png',
              alt: 'password generator 2',
            },
          ],
          description: t('CARD_MODAL_DESCRIPTION_6'),
          technologies: ['Next', 'Typescript', 'Chakra-UI'],
          demoLink: 'https://password-generator-six-psi.vercel.app/',
          githubLink: 'https://github.com/PauloDavi/password-generator',
        };
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <CustomModal {...selectContent()} />
    </Modal>
  );
}
