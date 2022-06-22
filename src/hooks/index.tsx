import React, { ReactNode } from 'react';

import { AuthProvider } from './auth';
import { ModalProvider } from './modal';

interface IAppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<IAppProviderProps> = ({ children }) => {
  return (
    <AuthProvider>
      <ModalProvider>
        {children}
      </ModalProvider>
    </AuthProvider>
  );
};

export default AppProvider;
