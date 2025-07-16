export type Task = {
  id: string;
  title: string;
  description?: string;
  status: 'todo' | 'progress' | 'done';
  priority?: 'low' | 'medium' | 'high';
  assignee?: string;
  dueDate?: string;
  order: number;
};
