import React, { ReactNode } from 'react';

import { AuthProvider } from './auth';

interface IAppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<IAppProviderProps> = ({ children }) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
};

export default AppProvider;
