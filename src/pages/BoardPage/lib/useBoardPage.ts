import type { DragEndEvent } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import { useState } from 'react';
import type { Task } from '@shared/types';
import { initialTasks } from './constants.ts';
import type { Status } from './types.ts';

export const useBoardPage = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    setActiveId(null);

    if (!over || active.id === over.id) return;

    const activeTask = tasks.find((t) => t.id === active.id);

    if (!activeTask) return;

    const overTask = tasks.find((t) => t.id === over.id);
    const overStatus = overTask ? overTask.status : (over.id as Status);

    if (activeTask.status === overStatus) {
      const columnTasks = tasks
        .filter((t) => t.status === activeTask.status)
        .sort((a, b) => a.order - b.order);

      const oldIndex = columnTasks.findIndex((t) => t.id === active.id);
      const newIndex = columnTasks.findIndex((t) => t.id === over.id);

      if (oldIndex !== -1 && newIndex !== -1) {
        const newColumnTasks = arrayMove(
          columnTasks,
          oldIndex,
          newIndex,
        ).map((task, idx) => ({ ...task, order: idx }));

        const newTasks = [
          ...tasks.filter((t) => t.status !== activeTask.status),
          ...newColumnTasks,
        ];

        setTasks(newTasks);

        return;
      }
    } else {
      setTasks((prev) => {
        const updated = prev.map((task) =>
          task.id === active.id
            ? { ...task, status: overStatus }
            : task,
        );

        const columnTasks = updated
          .filter((t) => t.status === overStatus)
          .sort((a, b) => a.order - b.order)
          .map((task, idx) => ({ ...task, order: idx }));

        const otherTasks = updated.filter(
          (t) => t.status !== overStatus,
        );

        return [...otherTasks, ...columnTasks];
      });
    }
  };

  return {
    tasks,
    activeId,
    setActiveId,
    handleDragEnd,
  };
};
