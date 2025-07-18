import type { Task } from '@shared/types';

export const initialTasks: Task[] = [
  {
    id: '1',
    title: 'tasks.initProject',
    description: 'tasks.initProjectDesc',
    status: 'todo',
    priority: 'high',
    assignee: 'profile.ivan',
    dueDate: '2024-01-20',
    order: 0,
  },
  {
    id: '2',
    title: 'tasks.createDesign',
    description: 'tasks.createDesignDesc',
    status: 'progress',
    priority: 'medium',
    assignee: 'profile.maria',
    order: 0,
  },
  {
    id: '3',
    title: 'tasks.writeDocs',
    status: 'done',
    priority: 'low',
    assignee: 'profile.peter',
    order: 0,
  },
  {
    id: '4',
    title: 'tasks.makeResponsive',
    description: 'tasks.makeResponsiveDesc',
    status: 'progress',
    priority: 'high',
    assignee: 'profile.olga',
    order: 1,
  },
];
