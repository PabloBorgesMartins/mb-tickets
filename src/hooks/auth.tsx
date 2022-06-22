import React, {
  createContext, useCallback, useState, useContext, useEffect, ReactNode,
} from 'react';

/*Bibliotecas*/

/*Components*/

/*Interfaces*/
import {
  IAuthState,
  ISignInCredentials,
  ISignUpCredentials,
  IUserProps,
  handleSignIn,
  handleSignUp
} from '../interfaces/auth'

interface AuthContextData {
  user: IUserProps;
  token: string;
  loading: boolean;
  signIn(credentials: ISignInCredentials): Promise<void>;
  signUp(credentials: ISignUpCredentials): Promise<void>;
  signOut(): void;
}

interface AuthProviderProps {
  children: ReactNode;
}


const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [data, setData] = useState<IAuthState>({} as IAuthState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoragedData(): Promise<void> {
      setLoading(true);
      const [token, user] = await localStorage.multiGet([
        '@AppARecreativa:token',
        '@AppARecreativa:user',
      ]);

      if (token[1] && user[1]) {
        setData({ token: token[1], user: JSON.parse(user[1]) });
      }

      setLoading(false);
    }

    loadStoragedData();
  }, []);

  const signIn = useCallback(async (data: ISignInCredentials) => {
    setLoading(true);
    try {
      let response = await handleSignIn(data);

      await localStorage.multiSet([
        ['@mbtickets:token', response.token],
        ['@mbtickets:user', JSON.stringify(response.user)],
      ]);

      setData({ token: response.token, user: response.user });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw error;
    }
  }, []);

  const signUp = useCallback(async (data: ISignUpCredentials) => {
    try {
      let response = await handleSignUp(data);

      await localStorage.multiSet([
        ['@mbtickets:token', response.token],
        ['@mbtickets:user', JSON.stringify(response.user)],
      ]);

      setData({ token: response.token, user: response.user });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw error;
    }
  }, []);

  const signOut = useCallback(async () => {
    setLoading(true);
    await localStorage.multiRemove([
      '@mbtickets:token',
      '@mbtickets:user',
    ]);

    setData({} as IAuthState);
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{
      user: data.user,
      token: data.token,
      loading,
      signIn,
      signUp,
      signOut,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuth };
