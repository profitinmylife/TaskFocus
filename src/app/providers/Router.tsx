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
              title: 'Доска',
              description:
                'Главная страница с задачами и досками для управления проектами.',
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
              title: 'Команда',
              description:
                'Страница с информацией о вашей команде и участниках проекта.',
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
              title: 'Календарь',
              description:
                'Календарь для отслеживания сроков и планирования задач.',
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
              title: 'Задача',
              description: 'Детальная информация о выбранной задаче.',
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
              title: 'Профиль',
              description:
                'Персональная страница пользователя с настройками и информацией.',
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
              title: 'Настройки',
              description:
                'Настройки приложения и персональные предпочтения пользователя.',
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
              title: 'Авторизация',
              description:
                'Страница входа в систему для доступа к вашему аккаунту.',
            },
          }),
      },
      {
        path: '*',
        lazy: async () => ({
          Component: () => 'Страница не найдена',
        }),
        loader: () =>
          privateLoader({
            meta: {
              title: 'Страница не найдена',
              description:
                'Ошибка 404: страница не существует или была удалена.',
            },
          }),
      },
    ],
  },
]);
