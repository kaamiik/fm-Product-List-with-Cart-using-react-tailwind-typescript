import React from 'react';

type ModalRefContextType = {
  modalRef: React.RefObject<HTMLDialogElement>;
};

export const ModalRefContext = React.createContext<ModalRefContextType | null>(
  null
);
