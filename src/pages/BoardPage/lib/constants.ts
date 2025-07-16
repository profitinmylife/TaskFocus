import type { Task } from '@shared/types';

export const initialTasks: Task[] = [
  {
    id: '1',
    title: 'Настроить проект',
    description: 'Инициализировать новый проект и настроить окружение',
    status: 'todo',
    priority: 'high',
    assignee: 'Иван',
    dueDate: '2024-01-20',
    order: 0,
  },
  {
    id: '2',
    title: 'Создать дизайн макеты',
    description: 'Разработать UI/UX дизайн для основных страниц',
    status: 'progress',
    priority: 'medium',
    assignee: 'Мария',
    order: 0,
  },
  {
    id: '3',
    title: 'Написать документацию',
    status: 'done',
    priority: 'low',
    assignee: 'Петр',
    order: 0,
  },
  {
    id: '4',
    title: 'Сделать адаптив',
    description:
      'Обеспечить корректное отображение на мобильных устройствах',
    status: 'progress',
    priority: 'high',
    assignee: 'Ольга',
    order: 1,
  },
];
