import {
  CalendarIcon,
  DashboardIcon,
  ExclamationTriangleIcon,
  ListBulletIcon,
  PersonIcon,
  StopwatchIcon,
} from '@radix-ui/react-icons';
import type { BadgeProps } from '@radix-ui/themes';

export const NAV_ITEMS = [
  { label: 'Доска', icon: <DashboardIcon />, to: '/' },
  {
    label: 'Календарь',
    icon: <CalendarIcon />,
    to: '/calendar',
  },
  { label: 'Команда', icon: <PersonIcon />, to: '/team' },
];

export const FILTERS = [
  { label: 'Все задачи', icon: <ListBulletIcon /> },
  {
    label: 'Высокий приоритет',
    icon: <ExclamationTriangleIcon />,
  },
  { label: 'Просроченные', icon: <StopwatchIcon /> },
  { label: 'Мои задачи', icon: <PersonIcon /> },
];

export const STATS: {
  label: string;
  value: number;
  color: BadgeProps['color'];
}[] = [
  { label: 'К выполнению', value: 1, color: 'gray' },
  { label: 'В работе', value: 1, color: 'blue' },
  { label: 'Выполнено', value: 1, color: 'gray' },
  { label: 'Высокий приоритет', value: 1, color: 'red' },
  { label: 'Просрочено', value: 1, color: 'red' },
];
