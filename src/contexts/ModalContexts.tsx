import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';

import { useDisclosure } from '@chakra-ui/react';

interface ModalContextProps {
  isOpen: boolean;
  onOpen(newContent?: string): void;
  onClose(): void;
  content: string;
}

const ModalContext = createContext({} as ModalContextProps);

type ModalContextProviderProps = {
  children: ReactNode;
};

export function ModalContextProvider({ children }: ModalContextProviderProps) {
  const { isOpen, onOpen: disclosureOnOpen, onClose } = useDisclosure();
  const [content, setContent] = useState('');

  const onOpen = useCallback(
    (newContent?: string) => {
      if (newContent) {
        setContent(newContent);
      }
      disclosureOnOpen();
    },
    [disclosureOnOpen],
  );

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        onClose,
        content,
        onOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
