import { privateLoader } from '@features/auth';
import { ResponsiveLayout } from '@widgets/layout';
import { createBrowserRouter } from 'react-router-dom';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <ResponsiveLayout />,
    children: [
      {
        index: true,
        lazy: async () => ({
          Component: (await import('@pages/BoardPage')).default,
        }),
        loader: () =>
          privateLoader({
            meta: {
              title: 'pages.board.title',
              description: 'pages.board.description',
            },
          }),
      },
      {
        path: 'team',
        lazy: async () => ({
          Component: (await import('@pages/TeamPage')).default,
        }),
        loader: () =>
          privateLoader({
            meta: {
              title: 'pages.team.title',
              description: 'pages.team.description',
            },
          }),
      },
      {
        path: 'calendar',
        lazy: async () => ({
          Component: (await import('@pages/CalendarPage')).default,
        }),
        loader: () =>
          privateLoader({
            meta: {
              title: 'pages.calendar.title',
              description: 'pages.calendar.description',
            },
          }),
      },
      {
        path: 'task/:id',
        lazy: async () => ({
          Component: (await import('@pages/TaskPage')).default,
        }),
        loader: () =>
          privateLoader({
            meta: {
              title: 'pages.task.title',
              description: 'pages.task.description',
            },
          }),
      },
      {
        path: 'profile',
        lazy: async () => ({
          Component: (await import('@pages/ProfilePage')).default,
        }),
        loader: () =>
          privateLoader({
            meta: {
              title: 'pages.profile.title',
              description: 'pages.profile.description',
            },
          }),
      },
      {
        path: 'settings',
        lazy: async () => ({
          Component: (await import('@pages/SettingsPage')).default,
        }),
        loader: () =>
          privateLoader({
            meta: {
              title: 'pages.settings.title',
              description: 'pages.settings.description',
            },
          }),
      },
      {
        path: 'auth',
        lazy: async () => ({
          Component: (await import('@pages/AuthPage')).default,
        }),
        loader: () =>
          privateLoader({
            meta: {
              title: 'pages.auth.title',
              description: 'pages.auth.description',
            },
          }),
      },
      {
        path: '*',
        lazy: async () => ({
          Component: () => 'pages.notFound.title',
        }),
        loader: () =>
          privateLoader({
            meta: {
              title: 'pages.notFound.title',
              description: 'pages.notFound.description',
            },
          }),
      },
    ],
  },
]);
