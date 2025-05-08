import React from 'react';
import { ModalRefContext } from '../contexts/ModalRefContext';

function ModalRefProvider({ children }: { children: React.ReactNode }) {
  const modalRef = React.useRef<HTMLDialogElement>(null!);

  return (
    <ModalRefContext.Provider value={{ modalRef }}>
      {children}
    </ModalRefContext.Provider>
  );
}

export default ModalRefProvider;
