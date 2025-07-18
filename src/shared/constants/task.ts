// Используй getTaskStatuses(t) для получения статусов с переводами
export const getTaskStatuses = (t: (key: string) => string) => [
  { key: 'todo', label: t('tasks.status.todo') },
  { key: 'progress', label: t('tasks.status.inProgress') },
  { key: 'done', label: t('tasks.status.done') },
];
