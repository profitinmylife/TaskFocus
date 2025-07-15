import {
  type ReactNode,
  createContext,
  useEffect,
} from 'react';
import { useAuthStore } from '@entities/user/model/useAuthStore.ts';
import type { Auth } from '@shared/types/auth.ts';

const AuthContext = createContext<Auth | undefined>(
  undefined,
);

export const AuthProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { isAuth, isLoading, login, logout } =
    useAuthStore();

  useEffect(() => {
    useAuthStore.getState().refresh();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        isLoading,
        login,
        logout,
        refresh: useAuthStore.getState().refresh,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
