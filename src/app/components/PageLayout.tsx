import { ReactNode } from 'react';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { EnrollModalProvider } from '@/app/contexts/EnrollModalContext';
import { EnrollModal } from '@/app/components/EnrollModal';
import { useEnrollModal } from '@/app/contexts/EnrollModalContext';

interface PageLayoutProps {
  children: ReactNode;
}

function PageLayoutContent({ children }: PageLayoutProps) {
  const { isOpen, closeModal } = useEnrollModal();
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {children}
      </main>
      <Footer />
      <EnrollModal isOpen={isOpen} onClose={closeModal} />
    </div>
  );
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <EnrollModalProvider>
      <PageLayoutContent>{children}</PageLayoutContent>
    </EnrollModalProvider>
  );
}