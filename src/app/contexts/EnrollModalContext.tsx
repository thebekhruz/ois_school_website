import { createContext, useContext, useState, ReactNode } from 'react';

interface EnrollModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const EnrollModalContext = createContext<EnrollModalContextType | undefined>(undefined);

export function EnrollModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <EnrollModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </EnrollModalContext.Provider>
  );
}

export function useEnrollModal() {
  const context = useContext(EnrollModalContext);
  if (context === undefined) {
    throw new Error('useEnrollModal must be used within an EnrollModalProvider');
  }
  return context;
}
