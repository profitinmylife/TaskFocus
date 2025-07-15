import { createContext, useEffect } from 'react';
import type { ReactNode } from 'react';
import { useAuthStore } from '@entities/user/model/useAuthStore';
import type { Auth } from '@shared/types/auth.ts';
import { ResponsiveLayout } from '@widgets/layout/ResponsiveLayout';
import { createBrowserRouter, redirect } from 'react-router-dom';

const AuthContext = createContext<Auth | undefined>(undefined);

const privateLoader = () => {
  const { isAuth, isLoading } = useAuthStore.getState();

  if (isLoading) {
    throw new Response('Проверка сессии...', { status: 418 });
  }

  if (!isAuth) {
    throw redirect('/auth');
  }
  return null;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { isAuth, isLoading, login, logout, refresh } = useAuthStore();

  useEffect(() => {
    refresh();
  }, [refresh]);

  return (
    <AuthContext.Provider value={{ isAuth, isLoading, login, logout, refresh }}>
      {children}
    </AuthContext.Provider>
  );
};

export const RouterConfig = createBrowserRouter([
  {
    path: '/',
    element: <ResponsiveLayout />, // layout
    children: [
      {
        index: true,
        lazy: async () => ({
          Component: (await import('@pages/BoardPage')).default,
        }),
        loader: privateLoader,
      },
      {
        path: 'team',
        lazy: async () => ({
          Component: (await import('@pages/TeamPage')).default,
        }),
        loader: privateLoader,
      },
      {
        path: 'calendar',
        lazy: async () => ({
          Component: (await import('@pages/CalendarPage')).default,
        }),
        loader: privateLoader,
      },
      {
        path: 'task/:id',
        lazy: async () => ({
          Component: (await import('@pages/TaskPage')).default,
        }),
        loader: privateLoader,
      },
      {
        path: 'profile',
        lazy: async () => ({
          Component: (await import('@pages/ProfilePage')).default,
        }),
        loader: privateLoader,
      },
      {
        path: 'settings',
        lazy: async () => ({
          Component: (await import('@pages/SettingsPage')).default,
        }),
        loader: privateLoader,
      },
      {
        path: 'auth',
        lazy: async () => ({
          Component: (await import('@pages/AuthPage')).default,
        }),
      },
      {
        path: '*',
        lazy: async () => ({
          Component: (await import('@pages/BoardPage')).default,
        }),
        loader: privateLoader,
      },
    ],
  },
]);
