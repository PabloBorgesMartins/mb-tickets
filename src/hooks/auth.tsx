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
      const user = await localStorage.getItem('@mbtickets:user');
      const token = await localStorage.getItem('@mbtickets:token');

      if (token && user) {
        setData({ token, user: JSON.parse(user) });
      }

      setLoading(false);
    }

    loadStoragedData();
  }, []);

  const signIn = useCallback(async (data: ISignInCredentials) => {
    setLoading(true);
    try {
      // let response = await handleSignIn(data);
      let response = {
        user: {
          id: 1,
          fullName: "Jhon Doe",
          email: data.email
        },
        token: "dsnuajdbnsajdnjsa"
      }

      await localStorage.setItem('@mbtickets:user', JSON.stringify(response.user));
      await localStorage.setItem('@mbtickets:token', response.token);

      setData({ token: response.token, user: response.user });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw error;
    }
  }, []);

  const signUp = useCallback(async (data: ISignUpCredentials) => {
    try {
      // let response = await handleSignUp(data);
      let response = {
        user: {
          id: 1,
          fullName: data.fullName,
          email: data.email
        },
        token: "dsnuajdbnsajdnjsa"
      }

      await localStorage.setItem('@mbtickets:user', JSON.stringify(response.user));
      await localStorage.setItem('@mbtickets:token', response.token);

      setData({ token: response.token, user: response.user });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw error;
    }
  }, []);

  const signOut = useCallback(async () => {
    setLoading(true);
    await localStorage.removeItem('@mbtickets:user');
    await localStorage.removeItem('@mbtickets:token');

    window.location.replace("/");
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
