import { Modal, ModalOverlay } from '@chakra-ui/react';

import { useModal } from '../../contexts/ModalContexts';
import { CustomModal } from './CustomModal';

export function PortfolioModal() {
  const { isOpen, onClose, content } = useModal();

  function selectContent() {
    switch (content) {
      case 'cobep':
        return {
          title: 'COBEP 2021',
          images: [
            { source: '/images/cobep/cobep.png', alt: 'COBEP 1' },
            { source: '/images/cobep/cobep1.png', alt: 'COBEP 2' },
            { source: '/images/cobep/cobep2.png', alt: 'COBEP 3' },
          ],
          description:
            'Projeto para divulgação, e notificações sobre o evento do COBEP 2021 (Congresso Brasileiro de Eletrônica de Potência), desenvolvido a pedido da organização do evento.',
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
          title: 'Blog',
          images: [
            { source: '/images/blog/blog.png', alt: 'blog 1' },
            { source: '/images/blog/blog1.png', alt: 'blog 2' },
          ],
          description:
            'Blog pessoal, feito utilizando NextJS com geração de paginas estáticas. Sendo as paginas dos postes geradas a partir de um template MarkDown.',
          technologies: ['Next', 'Typescript', 'Next-Seo', 'Remark'],
          demoLink: 'https://my-blog-flax.vercel.app/',
          githubLink: 'https://github.com/PauloDavi/my-blog',
        };
      case 'money':
        return {
          title: 'MyMoney',
          images: [
            { source: '/images/money/money.png', alt: 'money 1' },
            { source: '/images/money/money1.png', alt: 'money 2' },
          ],
          description:
            'Site de fluxo de finanças que guarda as informações no LocalStorage, ele utiliza o tema claro ou escuro ao depender da configuração do navegador do usuário. Aceitando entradas e saídas também é possível classificar as transações por tags.',
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
          title: 'STL View',
          images: [
            { source: '/images/stl/stl.png', alt: 'stl 1' },
            { source: '/images/stl/stl1.png', alt: 'stl 2' },
          ],
          description:
            'Visualizador 3D de arquivos STL diretamente no browser com informações espaciais da peça.',
          technologies: ['Typescript', 'React-Three-Fiber', 'Chakra-UI'],
          demoLink: 'http://paulodavi.me/stl-view/',
          githubLink: 'https://github.com/PauloDavi/stl-view',
        };
      case 'pdf':
        return {
          title: 'PDF OS Generator',
          images: [
            { source: '/images/pdf/pdf.png', alt: 'pdf 1' },
            { source: '/images/pdf/pdf1.png', alt: 'pdf 2' },
          ],
          description:
            'Gerador de PDF para ordem de serviço inteiramente no browser, permitindo preencher diversos campos, solução feita para geração de boletos do FABLAB (laboratório de fabricação digital) institucional da UFPB.',
          technologies: ['Typescript', 'Formsy', 'React-Pdf', 'Material-UI'],
          demoLink: 'http://paulodavi.me/pdf-os-generator/',
          githubLink: 'https://github.com/PauloDavi/pdf-os-generator',
        };
      default:
        return {
          title: 'Gerador de senha',
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
          description:
            'Projeto de um gerador de senhas aleatórias com base em parâmetros customizáveis, a página tem tema claro e escuro e destaca os diferentes tipos de caracteres.',
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
