import { TaskCard } from '@entities/task';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { Text, Box, ScrollArea } from '@radix-ui/themes';
import type { BoardColumnProps } from './lib';
import { breakpoint } from '@shared/utils';
import { useDroppable } from '@dnd-kit/core';

export const BoardColumn = ({
  label,
  tasks,
  droppableId,
  children,
}: BoardColumnProps) => {
  const sortedTasks = tasks.slice().sort((a, b) => a.order - b.order);
  const itemIds = sortedTasks.map((t) => t.id);

  // Добавляем droppable-зону для столбца
  const { setNodeRef, isOver } = useDroppable({
    id: droppableId,
  });

  return (
    <Box
      className=""
      style={{
        minWidth: 260,
        flex: 1,
        margin: 4,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid',
        borderColor: 'var(--accent-4)',
        borderRadius: '16px',
        padding: '12px',
      }}
    >
      {!breakpoint.isMobile && (
        <Text weight="bold" mb="2" size="4" color="gray">
          {label}
        </Text>
      )}
      <Box style={{ flex: 1, minHeight: 0, height: '100%' }}>
        <ScrollArea type="auto" style={{ height: '100vh' }}>
          <div ref={setNodeRef} style={{ height: '100%' }}>
            <SortableContext
              id={droppableId}
              items={itemIds}
              strategy={verticalListSortingStrategy}
            >
              {sortedTasks.length === 0 ? (
                <div
                  style={{
                    minHeight: 60,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0.5,
                    border: '2px dashed var(--accent-6)',
                    borderRadius: 8,
                    margin: 8,
                    background: isOver ? 'var(--accent-3)' : undefined,
                  }}
                >
                  Drop here
                </div>
              ) : (
                sortedTasks.map((task) => (
                  <TaskCard key={task.id} task={task} />
                ))
              )}
            </SortableContext>
          </div>
        </ScrollArea>
      </Box>
      {children}
    </Box>
  );
};
