import type { Task } from '@shared/types';
import type { ReactNode } from 'react';

export interface BoardTabsProps {
  tasks: Task[];
}

export interface BoardColumnProps {
  label: string;
  tasks: Task[];
  droppableId: string;
  children?: ReactNode;
}
