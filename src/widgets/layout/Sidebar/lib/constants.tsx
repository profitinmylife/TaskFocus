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
  { label: 'sidebar.nav.board', icon: <DashboardIcon />, to: '/' },
  {
    label: 'sidebar.nav.calendar',
    icon: <CalendarIcon />,
    to: '/calendar',
  },
  { label: 'sidebar.nav.team', icon: <PersonIcon />, to: '/team' },
];

export const FILTERS = [
  { label: 'sidebar.filters.all', icon: <ListBulletIcon /> },
  { label: 'sidebar.filters.high', icon: <ExclamationTriangleIcon /> },
  { label: 'sidebar.filters.overdue', icon: <StopwatchIcon /> },
  { label: 'sidebar.filters.mine', icon: <PersonIcon /> },
];

export const STATS: {
  label: string;
  value: number;
  color: BadgeProps['color'];
}[] = [
  { label: 'sidebar.stats.todo', value: 1, color: 'gray' },
  { label: 'sidebar.stats.inProgress', value: 1, color: 'blue' },
  { label: 'sidebar.stats.done', value: 1, color: 'gray' },
  { label: 'sidebar.stats.high', value: 1, color: 'red' },
  { label: 'sidebar.stats.overdue', value: 1, color: 'red' },
];
