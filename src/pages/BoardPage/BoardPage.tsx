import { DndContext, closestCenter, DragOverlay } from '@dnd-kit/core';
import { BoardTabs, BoardColumn } from '@widgets/board';
import { TaskCard } from '@entities/task';
import { getTaskStatuses } from '@shared/constants/task';
import { useTranslation } from 'react-i18next';
import { useBoardPage } from './lib';
import { breakpoint } from '@shared/utils';

const BoardPage = () => {
  const { activeId, setActiveId, tasks, handleDragEnd } =
    useBoardPage();
  const { t } = useTranslation();
  const TASK_STATUSES = getTaskStatuses(t);

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      onDragStart={(e) => setActiveId(e.active.id as string)}
      onDragCancel={() => setActiveId(null)}
    >
      {breakpoint.isMobile ? (
        <BoardTabs tasks={tasks} />
      ) : (
        <div
          style={{
            display: 'flex',
            gap: 16,
            minHeight: 'calc(100vh - 80px)',
            height: '100%',
          }}
        >
          {TASK_STATUSES.map((status) => {
            const columnTasks = tasks
              .filter((t) => t.status === status.key)
              .sort((a, b) => a.order - b.order);
            return (
              <BoardColumn
                key={status.key}
                label={status.label}
                tasks={columnTasks}
                droppableId={status.key}
              />
            );
          })}
        </div>
      )}
      <DragOverlay>
        {activeId ? (
          <TaskCard
            task={tasks.find((t) => t.id === activeId)!}
            dragOverlay
          />
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

export default BoardPage;
