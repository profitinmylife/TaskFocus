import { TaskCard } from '@entities/task';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { Text, Box, ScrollArea } from '@radix-ui/themes';
import type { BoardColumnProps } from './lib';
import { breakpoint } from '@shared/utils';

export const BoardColumn = ({
  label,
  tasks,
  droppableId,
  children,
}: BoardColumnProps) => {
  const sortedTasks = tasks.slice().sort((a, b) => a.order - b.order);
  const itemIds = sortedTasks.map((t) => t.id);

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
          <SortableContext
            id={droppableId}
            items={itemIds}
            strategy={verticalListSortingStrategy}
          >
            {sortedTasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </SortableContext>
        </ScrollArea>
      </Box>
      {children}
    </Box>
  );
};
